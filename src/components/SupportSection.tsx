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
    <section className="relative overflow-hidden min-h-[400px]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/backgrounds/Background_12.png')" }}
      />

      {/* Content */}
      <div className="relative z-[1] py-20 text-center">
        <h2 className="text-white mb-8 font-bold" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
          Dúvida?
        </h2>

        <div
          ref={cardRef}
          className="glass-card mx-auto text-center max-w-[680px] px-10 py-9"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: '0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="text-center text-[13px] font-light text-white/60 tracking-wider mb-3">
            Suporte
          </p>
          <p className="font-semibold text-xl text-white text-center mx-auto max-w-[480px] leading-snug mb-7">
            Se ainda estiver com dúvidas nossa equipe está a disposição:
          </p>

          <a
            href="https://wa.me/5517992595117"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-[15px]"
          >
            <span className="absolute inset-0 pointer-events-none rounded-full"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)' }}
            />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="relative z-[1]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.584 3.842 1.59 5.393L2 22l4.745-1.566A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.073-1.117l-.292-.173-3.028.998.998-2.958-.19-.304A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
            </svg>
            <span className="relative z-[1]">Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
