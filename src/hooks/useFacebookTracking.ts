import { useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Extend Window for fbq
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

interface EventData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  custom_data?: Record<string, unknown>;
  test_event_code?: string;
}

export function useFacebookTracking() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('✅ Facebook Pixel carregado');
    }
  }, []);

  const trackEvent = useCallback(async (eventName: string, eventData: EventData = {}) => {
    try {
      // 1. CLIENT-SIDE (Pixel)
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, eventData.custom_data || {});
        console.log(`🔵 Pixel tracked: ${eventName}`);
      }

      // 2. SERVER-SIDE (Conversions API via Edge Function)
      const { data, error } = await supabase.functions.invoke('facebook-conversion', {
        body: {
          eventName,
          eventData: {
            event_source_url: window.location.href,
            email: eventData.email,
            phone: eventData.phone,
            firstName: eventData.firstName,
            lastName: eventData.lastName,
            city: eventData.city,
            state: eventData.state,
            zipCode: eventData.zipCode,
            country: eventData.country || 'br',
            fbc: getCookie('_fbc'),
            fbp: getCookie('_fbp'),
            userAgent: navigator.userAgent,
            custom_data: eventData.custom_data || {},
          },
        },
      });

      if (error) {
        console.error('❌ Erro na API:', error);
        return { success: false, error };
      }

      console.log(`🟢 API tracked: ${eventName}`, data);
      return data;
    } catch (error) {
      console.error('❌ Erro no tracking:', error);
      return { success: false, error };
    }
  }, []);

  const trackPageView = useCallback(() => {
    trackEvent('PageView');
  }, [trackEvent]);

  const trackViewContent = useCallback((contentData: {
    contentName: string;
    contentCategory?: string;
    contentIds?: string[];
    contentType?: string;
    value?: number;
    currency?: string;
  }) => {
    trackEvent('ViewContent', {
      custom_data: {
        content_name: contentData.contentName,
        content_category: contentData.contentCategory,
        content_ids: contentData.contentIds || [],
        content_type: contentData.contentType || 'product',
        value: contentData.value,
        currency: contentData.currency || 'BRL',
      },
    });
  }, [trackEvent]);

  const trackInitiateCheckout = useCallback((cartData: {
    productIds?: string[];
    numItems?: number;
    value: number;
    currency?: string;
  }) => {
    trackEvent('InitiateCheckout', {
      custom_data: {
        content_ids: cartData.productIds || [],
        num_items: cartData.numItems,
        value: cartData.value,
        currency: cartData.currency || 'BRL',
      },
    });
  }, [trackEvent]);

  const trackPurchase = useCallback((purchaseData: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    productIds?: string[];
    numItems?: number;
    value: number;
    currency?: string;
    orderId?: string;
  }) => {
    trackEvent('Purchase', {
      email: purchaseData.email,
      phone: purchaseData.phone,
      firstName: purchaseData.firstName,
      lastName: purchaseData.lastName,
      city: purchaseData.city,
      state: purchaseData.state,
      zipCode: purchaseData.zipCode,
      custom_data: {
        content_ids: purchaseData.productIds || [],
        num_items: purchaseData.numItems,
        value: purchaseData.value,
        currency: purchaseData.currency || 'BRL',
        order_id: purchaseData.orderId,
      },
    });
  }, [trackEvent]);

  const trackLead = useCallback((leadData: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    formName?: string;
    value?: number;
    currency?: string;
  }) => {
    trackEvent('Lead', {
      email: leadData.email,
      phone: leadData.phone,
      firstName: leadData.firstName,
      lastName: leadData.lastName,
      custom_data: {
        content_name: leadData.formName || 'Lead Form',
        value: leadData.value || 0,
        currency: leadData.currency || 'BRL',
      },
    });
  }, [trackEvent]);

  const trackCompleteRegistration = useCallback((userData: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    registrationType?: string;
  }) => {
    trackEvent('CompleteRegistration', {
      email: userData.email,
      phone: userData.phone,
      firstName: userData.firstName,
      lastName: userData.lastName,
      custom_data: {
        content_name: userData.registrationType || 'User Registration',
        status: 'completed',
      },
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackViewContent,
    trackInitiateCheckout,
    trackPurchase,
    trackLead,
    trackCompleteRegistration,
  };
}
