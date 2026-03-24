const ContinuitySection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundColor: '#EFE7DA',
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        borderRadius: 24,
      }}
    >
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px' }}>
        {/* Label */}
        <p
          className="font-display"
          style={{
            fontWeight: 300,
            fontSize: 13,
            color: '#888',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 12,
          }}
        >
          E depois?
        </p>

        {/* Título */}
        <h2
          className="font-display"
          style={{
            fontWeight: 700,
            color: '#1a1a1a',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            lineHeight: 1.2,
            textAlign: 'center',
            maxWidth: 720,
            margin: '0 auto 36px',
          }}
        >
          A imersão é o diagnóstico.
          <br />
          Se quiser ir além, o caminho existe.
        </h2>

        {/* Parágrafo principal */}
        <p
          className="font-display"
          style={{
            fontWeight: 400,
            fontSize: 17,
            color: '#333',
            lineHeight: 1.7,
            textAlign: 'center',
            maxWidth: 560,
            margin: '0 auto 48px',
          }}
        >
          Se você sair da imersão querendo implementar o que descobriu, existe a{' '}
          <span style={{ fontWeight: 700, color: '#1a1a1a' }}>Metodologia Gravada</span>
          : 90 dias de conteúdo prático com exercícios, templates e scripts para colocar cada eixo para funcionar.
        </p>

        {/* Grid: TV + Setas + Textos */}
        <div
          className="continuity-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            alignItems: 'start',
            position: 'relative',
            maxWidth: 780,
            margin: '0 auto',
          }}
        >
          {/* TV — coluna esquerda, container de altura fixa */}
          <div
            style={{
              gridRow: '1 / 4',
              position: 'relative',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/TV.png"
              alt="TV vintage"
              className="continuity-tv-float absolute"
              style={{
                width: 340,
                height: 'auto',
                objectFit: 'contain',
                mixBlendMode: 'multiply',
                filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.15))',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          {/* Coluna direita — Container de seta com altura fixa */}
          <div
            style={{
              height: '80px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 32,
            }}
          >
            <img
              src="/icons/Seta.png"
              alt=""
              className="absolute"
              style={{
                width: 210,
                height: 'auto',
                objectFit: 'contain',
                mixBlendMode: 'multiply',
                transform: 'scaleX(-1)',
                left: '30%',
                top: '50%',
                translate: '0 -50%',
              }}
            />
          </div>

          {/* Coluna direita — Texto independente */}
          <div
            style={{
              paddingLeft: 32,
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <p
              className="font-display"
              style={{ fontWeight: 400, fontSize: 16, color: '#333', lineHeight: 1.6 }}
            >
              A imersão <span style={{ fontWeight: 700 }}>funciona sozinha.</span>
              <br />
              Você pode parar no diagnóstico e seguir por conta própria.
            </p>
          </div>

          {/* Coluna direita — Container de seta 2 com altura fixa */}
          <div
            style={{
              height: '60px',
              position: 'relative',
              paddingLeft: 32,
            }}
          >
            <img
              src="/icons/Seta_2.png"
              alt=""
              className="absolute"
              style={{
                width: 140,
                height: 'auto',
                objectFit: 'contain',
                mixBlendMode: 'multiply',
                left: '32px',
                top: '50%',
                translate: '0 -50%',
              }}
            />
          </div>
        </div>

        {/* Texto final — independente */}
        <p
          className="font-display"
          style={{
            marginTop: 48,
            maxWidth: 680,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: 400,
            fontSize: 17,
            color: '#444',
            lineHeight: 1.7,
            textAlign: 'center',
          }}
        >
          Mas se quiser continuar com estrutura, o próximo passo será apresentado no final da imersão —{' '}
          <span style={{ fontWeight: 700, color: '#1a1a1a' }}>
            com uma condição exclusiva para quem estiver ao vivo.
          </span>
        </p>

        {/* Badge bônus */}
        <div
          style={{
            marginTop: 36,
            display: 'block',
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
            background: '#D97706',
            borderRadius: 999,
            padding: '16px 40px',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(217,119,6,0.4), 0 0 40px rgba(217,119,6,0.2)',
          }}
        >
          <p className="font-display" style={{ fontWeight: 400, fontSize: 15, color: '#1a1a1a', margin: 0 }}>
            Os 5 primeiros a garantir a metodologia
            <br />
            no dia da imersão levam um <span style={{ fontWeight: 700 }}>BÔNUS ESPECIAL.</span>
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @keyframes tvFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        .continuity-tv-float {
          animation: tvFloat 4s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          .continuity-grid {
            grid-template-columns: 1fr !important;
          }
          .continuity-grid > div:first-child {
            grid-row: auto !important;
            height: 280px !important;
            margin-bottom: 32px;
          }
          .continuity-grid > div:first-child img {
            width: 240px !important;
          }
          .continuity-grid > div:nth-child(2),
          .continuity-grid > div:nth-child(3),
          .continuity-grid > div:nth-child(4) {
            padding-left: 0 !important;
            text-align: center;
          }
          .continuity-grid > div:nth-child(2) img {
            width: 100px !important;
          }
          .continuity-grid > div:nth-child(4) img {
            width: 100px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContinuitySection;
