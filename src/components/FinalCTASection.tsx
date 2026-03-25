const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1C1917', paddingTop: 80, paddingBottom: 80 }}>
      {/* Light leak bottom-left */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 100%, rgba(120,30,40,0.55) 0%, transparent 50%)',
        }}
      />
      {/* Light leak top-right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 0%, rgba(80,40,20,0.2) 0%, transparent 40%)',
        }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.05,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-4">
        <h2 className="font-display" style={{ lineHeight: 1.15, marginBottom: 24 }}>
          <span style={{ fontWeight: 700, color: '#D97706', fontSize: 'clamp(28px, 4.5vw, 52px)', display: 'block' }}>
            Clareza custa R$47.
          </span>
          <span style={{ fontWeight: 700, color: 'white', fontSize: 'clamp(28px, 4.5vw, 52px)', display: 'block' }}>
            Continuar no escuro custa mais.
          </span>
        </h2>

        <p className="font-display" style={{ fontWeight: 300, fontSize: 16, color: '#aaa', marginBottom: 36 }}>
          11 de abril · Online
        </p>

        <a
          href="#preco"
          className="font-display inline-block"
          style={{
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
            color: '#1a1a1a',
            background: '#D97706',
            borderRadius: 999,
            padding: '20px 60px',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            animation: 'btnGlow 2.5s ease-in-out infinite',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(0px) scale(0.98)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'; }}
        >
          QUERO PARTICIPAR · R$47
        </a>
      </div>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 right-0" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />

      <style>{`
        @keyframes btnGlow {
          0%, 100% {
            box-shadow: 0 0 24px rgba(217,119,6,0.7), 0 0 60px rgba(217,119,6,0.4), 0 0 100px rgba(217,119,6,0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(217,119,6,0.95), 0 0 80px rgba(217,119,6,0.6), 0 0 140px rgba(217,119,6,0.3);
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;
