import mockupImage from "@/assets/mockup-produto.png";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Dark overlay for event photo bg feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />
      <div className="absolute inset-0 noise-bg z-[2]" />

      {/* Light leaks */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] z-0" style={{ background: 'radial-gradient(ellipse at center, hsla(10, 58%, 55%, 0.25), transparent 70%)' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] z-0" style={{ background: 'radial-gradient(ellipse at center, hsla(30, 80%, 50%, 0.15), transparent 70%)' }} />

      <div className="relative z-10 max-w-[760px] mx-auto px-4 text-center flex flex-col items-center">
        {/* Mockup */}
        <div className="hero-float" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}>
          <img
            src={mockupImage}
            alt="Diagnóstico de próximo passo em um dia"
            width={280}
            className="w-[280px] h-auto"
          />
        </div>

        {/* Progress bar */}
        <div className="w-[280px] mt-4">
          <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: '#333' }}>
            <div className="h-full rounded-full" style={{ width: '81%', backgroundColor: '#D97706' }} />
          </div>
          <p className="text-xs mt-2" style={{ color: '#aaa' }}>
            81% das vagas preenchidas a R$47,00
          </p>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-white leading-tight mt-12" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Você trabalha demais<br />
          para depender de{' '}
          <span className="italic" style={{ color: '#D97706' }}>sorte</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 font-body leading-relaxed max-w-[560px]" style={{ color: '#cccccc', fontSize: '18px', lineHeight: '1.6' }}>
          Em 1 dia, descubra o que está travando seu crescimento
          — <span className="font-bold text-white">se é um problema de marca, de conteúdo ou de vendas</span> —
          e saia sabendo exatamente o que resolver primeiro.
        </p>

        {/* CTA Button */}
        <a
          href="#preco"
          className="hero-cta-btn mt-10 inline-block rounded-lg font-display font-extrabold uppercase tracking-wider"
          style={{
            backgroundColor: '#D97706',
            color: '#1a1a1a',
            fontSize: '16px',
            letterSpacing: '0.05em',
            padding: '18px 48px',
          }}
        >
          PARTICIPAR DA IMERSÃO · R$47
        </a>

        {/* Lote note */}
        <p className="mt-4 text-center font-body" style={{ fontSize: '13px', color: '#888' }}>
          <span className="font-bold" style={{ color: '#ccc' }}>Lote 1</span> · R$47 até 06/04 |{' '}
          <span className="font-bold" style={{ color: '#ccc' }}>Lote 2</span> · R$99 a partir de 07/04
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
