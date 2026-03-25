const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background image — LCP element with fetchpriority */}
      <picture>
        <source srcSet="/backgrounds/Background-4.webp" type="image/webp" />
        <img
          src="/backgrounds/Background-4.png"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
      </picture>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,8,5,0.55) 0%, rgba(10,8,5,0.45) 40%, rgba(10,8,5,0.60) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center text-center max-w-[780px] mx-auto px-6 pt-[60px] pb-20">
        {/* Mockup */}
        <picture>
          <source srcSet="/images/Produto.webp" type="image/webp" />
          <img
            src="/images/Produto.png"
            alt="Produto"
            width={384}
            height={384}
            className="hero-float block mx-auto w-96 h-auto"
            style={{
              mixBlendMode: 'screen',
              filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.7))',
            }}
          />
        </picture>

        {/* Progress bar */}
        <div className="w-80 mx-auto relative">
          <div
            className="hero-progress-neon rounded-full h-1.5 overflow-hidden relative"
            style={{ background: 'hsl(var(--studio-gray-700))' }}
          >
            <div
              className="rounded-full h-full relative overflow-hidden"
              style={{
                width: '81%',
                background: 'linear-gradient(90deg, hsl(var(--amber)), hsl(var(--amber) / 0.85))',
                boxShadow: '0 0 12px hsl(var(--amber) / 0.8), 0 0 24px hsl(var(--amber) / 0.4)',
              }}
            />
            <div className="hero-light-sweep absolute inset-0 rounded-full pointer-events-none" />
          </div>
          <p className="font-light text-xs text-muted-foreground text-center mt-1.5">
            81% das vagas preenchidas a R$47,00
          </p>
        </div>

        {/* Title */}
        <h1 className="font-bold text-white text-center mt-10 leading-[1.15]" style={{ fontSize: 'clamp(29px, 4.4vw, 51px)' }}>
          Você trabalha demais
          <br />
          para depender de{' '}
          <span className="text-amber font-bold">sorte</span>
        </h1>

        {/* Subtitle */}
        <p className="text-studio-gray-300 text-center mt-6 max-w-[580px] text-lg leading-relaxed">
          Em 1 dia, descubra o que está travando seu crescimento
          <br />
          —<span className="font-bold text-white">se é um problema de marca, de conteúdo ou de vendas</span>—
          <br />
          e saia sabendo exatamente o que resolver primeiro.
        </p>

        {/* CTA */}
        <a
          href="#preco"
          className="hero-cta-neon btn-amber mt-10 text-base px-14 py-5 rounded-lg tracking-widest"
        >
          PARTICIPAR DA IMERSÃO · R$47
        </a>

        {/* Lote note */}
        <p className="mt-4 text-[13px] text-studio-gray-500 text-center">
          <span className="font-bold text-studio-gray-300">Lote 1</span> · R$47 até 06/04 |{' '}
          <span className="font-bold text-studio-gray-300">Lote 2</span> · R$99 a partir de 07/04
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
