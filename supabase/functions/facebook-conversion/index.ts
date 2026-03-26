import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const PIXEL_ID = '4429390400717681';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function hashSHA256(text: string): string | null {
  if (!text) return null;
  const encoder = new TextEncoder();
  const data = encoder.encode(text.toLowerCase().trim());
  const hashBuffer = new Uint8Array(
    // Use Web Crypto API (available in Deno)
    // We need sync here, so we'll use a different approach
  );
  // Actually, crypto.subtle is async in Deno, let's use it properly
  return text; // placeholder, will be replaced below
}

// Async hash function
async function hashSHA256Async(text: string): Promise<string | null> {
  if (!text) return null;
  const encoder = new TextEncoder();
  const data = encoder.encode(text.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const ACCESS_TOKEN = Deno.env.get('FACEBOOK_ACCESS_TOKEN');
    if (!ACCESS_TOKEN) {
      throw new Error('FACEBOOK_ACCESS_TOKEN is not configured');
    }

    const { eventName, eventData = {} } = await req.json();

    if (!eventName) {
      return new Response(JSON.stringify({ error: 'eventName é obrigatório' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get client IP from request headers
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || req.headers.get('x-real-ip')
      || '0.0.0.0';

    // Generate external_id from available data (fbp, fbc, or random)
    const externalId = eventData.fbp
      || eventData.fbc
      || `anon_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

    // Build user_data with hashed PII
    const userData: Record<string, string | null | string[]> = {
      em: eventData.email ? [await hashSHA256Async(eventData.email)] : null,
      ph: eventData.phone ? [await hashSHA256Async(eventData.phone)] : null,
      fn: eventData.firstName ? [await hashSHA256Async(eventData.firstName)] : null,
      ln: eventData.lastName ? [await hashSHA256Async(eventData.lastName)] : null,
      ct: eventData.city ? [await hashSHA256Async(eventData.city)] : null,
      st: eventData.state ? [await hashSHA256Async(eventData.state)] : null,
      zp: eventData.zipCode ? [await hashSHA256Async(eventData.zipCode)] : null,
      country: eventData.country ? [await hashSHA256Async(eventData.country)] : null,
      // Required parameters for matching
      client_ip_address: clientIp,
      client_user_agent: eventData.userAgent || req.headers.get('user-agent') || '',
      fbc: eventData.fbc || null,
      fbp: eventData.fbp || null,
      external_id: [await hashSHA256Async(externalId)],
    };

    // Remove null values
    Object.keys(userData).forEach(key => {
      if (userData[key] === null) delete userData[key];
    });

    const payload = {
      data: [{
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: `${eventName}_${Date.now()}`,
        action_source: 'website',
        event_source_url: eventData.event_source_url || '',
        user_data: userData,
        custom_data: eventData.custom_data || {},
      }],
      access_token: ACCESS_TOKEN,
    };

    const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Facebook API error:', data);
      return new Response(JSON.stringify({ error: 'Erro ao enviar conversão', details: data }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      eventName,
      events_received: data.events_received || 1,
      fbtrace_id: data.fbtrace_id,
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Handler error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: 'Erro interno', message: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
