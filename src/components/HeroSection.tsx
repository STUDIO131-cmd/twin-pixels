const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background image */}
      <img
        src="/backgrounds/Background-4.png"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(10,8,5,0.55) 0%, rgba(10,8,5,0.45) 40%, rgba(10,8,5,0.60) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center text-center"
        style={{ zIndex: 2, maxWidth: 780, margin: '0 auto', padding: '60px 24px 80px' }}
      >
        {/* Logo */}
        <img
          src="/images/Logo.png"
          alt="The Journey"
          className="hero-logo-pulse"
          style={{
            width: 180,
            height: 'auto',
            display: 'block',
            margin: '0 auto 32px',
            mixBlendMode: 'screen',
          }}
        />

        {/* Mockup */}
        <img
          src="/images/Produto.png"
          alt="Produto"
          className="hero-float"
          style={{
            width: 320,
            height: 'auto',
            display: 'block',
            margin: '0 auto 0',
            mixBlendMode: 'screen',
            filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.7))',
          }}
        />

        {/* Progress bar */}
        <div style={{ width: 320, margin: '0 auto 0', position: 'relative' }}>
          <div
            className="hero-progress-neon"
            style={{
              background: '#333',
              borderRadius: 999,
              height: 6,
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 0 8px rgba(217,119,6,0.4), 0 0 20px rgba(217,119,6,0.2), 0 0 40px rgba(217,119,6,0.1)',
            }}
          >
            <div
              style={{
                width: '81%',
                background: 'linear-gradient(90deg, #D97706, #f59e0b)',
                borderRadius: 999,
                height: '100%',
                position: 'relative',
                boxShadow: '0 0 12px rgba(217,119,6,0.8), 0 0 24px rgba(217,119,6,0.4)',
              }}
            />
            {/* Light sweep overlay */}
            <div
              className="hero-light-sweep"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: 999,
                pointerEvents: 'none',
              }}
            />
          </div>
          <p className="font-display" style={{ fontWeight: 300, fontSize: 12, color: '#aaa', textAlign: 'center', marginTop: 6 }}>
            81% das vagas preenchidas a R$47,00
          </p>
        </div>

        {/* Title */}
        <h1
          className="font-display"
          style={{
            fontWeight: 700,
            color: 'white',
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            lineHeight: 1.15,
            textAlign: 'center',
            marginTop: 40,
          }}
        >
          Você trabalha demais
          <br />
          para depender de{' '}
          <span style={{ color: '#D97706', fontWeight: 700 }}>sorte</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-display"
          style={{
            fontWeight: 400,
            fontSize: 18,
            color: '#ccc',
            lineHeight: 1.65,
            textAlign: 'center',
            marginTop: 24,
            maxWidth: 580,
          }}
        >
          Em 1 dia, descubra o que está travando seu crescimento
          <br />
          —<span style={{ fontWeight: 700, color: 'white' }}>se é um problema de marca, de conteúdo ou de vendas</span>—
          <br />
          e saia sabendo exatamente o que resolver primeiro.
        </p>

        {/* CTA */}
        <a
          href="#preco"
          className="font-display hero-cta-neon"
          style={{
            marginTop: 40,
            display: 'block',
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#1a1a1a',
            backgroundColor: '#D97706',
            borderRadius: 8,
            padding: '20px 56px',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 0 20px rgba(217,119,6,0.6), 0 0 40px rgba(217,119,6,0.3), 0 0 80px rgba(217,119,6,0.15)',
            transition: 'all 0.2s ease',
          }}
        >
          PARTICIPAR DA IMERSÃO · R$47
        </a>

        {/* Lote note */}
        <p className="font-display" style={{ marginTop: 16, fontSize: 13, color: '#999', textAlign: 'center' }}>
          <span style={{ fontWeight: 700, color: '#ddd' }}>Lote 1</span> · R$47 até 06/04 |{' '}
          <span style={{ fontWeight: 700, color: '#ddd' }}>Lote 2</span> · R$99 a partir de 07/04
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
