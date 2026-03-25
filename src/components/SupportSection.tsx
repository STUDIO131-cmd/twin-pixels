import { useEffect, useRef, useState } from 'react';

const SupportSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: 400 }}>
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/backgrounds/Background_12.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-[1] py-20 text-center">
        <h2
          className="font-display text-white mb-8"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 56px)',
          }}
        >
          Dúvida?
        </h2>

        <div
          ref={cardRef}
          className="mx-auto text-center"
          style={{
            maxWidth: 680,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
            backdropFilter: 'blur(40px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(40px) saturate(1.4)',
            border: '1px solid rgba(255,255,255,0.35)',
            borderRadius: 24,
            padding: '36px 40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(255,255,255,0.05)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: '0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p
            className="font-display text-center"
            style={{
              fontWeight: 300,
              fontSize: 13,
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.08em',
              marginBottom: 12,
            }}
          >
            Suporte
          </p>
          <p
            className="font-display text-white text-center mx-auto"
            style={{
              fontWeight: 600,
              fontSize: 20,
              lineHeight: 1.4,
              marginBottom: 28,
              maxWidth: 480,
            }}
          >
            Se ainda estiver com dúvidas nossa equipe está a disposição:
          </p>

          <a
            href="https://wa.me/SEU_NUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-flex items-center relative overflow-hidden"
            style={{
              gap: 10,
              padding: '16px 36px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.25)',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 50%, #075E54 100%)',
              boxShadow: '0 0 20px rgba(37,211,102,0.45), 0 0 40px rgba(37,211,102,0.2), 0 4px 16px rgba(0,0,0,0.3)',
              animation: 'whatsappGlow 2.5s ease-in-out infinite',
              fontWeight: 600,
              fontSize: 15,
              color: 'white',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(37,211,102,0.8), 0 0 80px rgba(37,211,102,0.4), 0 8px 24px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(0.98)';
              e.currentTarget.style.transition = 'all 0.1s ease';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
              e.currentTarget.style.transition = 'all 0.25s ease';
            }}
          >
            {/* Glass overlay */}
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: 999,
              }}
            />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="relative z-[1]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.584 3.842 1.59 5.393L2 22l4.745-1.566A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.073-1.117l-.292-.173-3.028.998.998-2.958-.19-.304A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
            </svg>
            <span className="relative z-[1]">Chamar no WhatsApp</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes whatsappGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(37,211,102,0.45), 0 0 40px rgba(37,211,102,0.2), 0 4px 16px rgba(0,0,0,0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(37,211,102,0.75), 0 0 60px rgba(37,211,102,0.4), 0 4px 20px rgba(0,0,0,0.35);
          }
        }
      `}</style>
    </section>
  );
};

export default SupportSection;
