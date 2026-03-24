import { motion } from "framer-motion";

const cards = [
  { title: "Clareza de Marca", text: "O cliente sabe por que te escolher?" },
  { title: "Conteúdo Inteligente", text: "O que você posta atrai quem deveria?" },
  { title: "Receita Estruturada", text: "Você sabe converter e crescer?" },
];

const WhatIsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/backgrounds/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(15,12,8,0.75) 0%, rgba(15,12,8,0.70) 50%, rgba(15,12,8,0.80) 100%)",
        }}
      />

      {/* Setas como elementos decorativos absolutos à section */}
      <img
        src="/icons/Seta-3.png"
        alt=""
        className="absolute pointer-events-none"
        style={{
          top: "80px",
          right: "40px",
          width: "48px",
          height: "48px",
          objectFit: "contain",
          mixBlendMode: "screen",
          zIndex: 3,
          filter: "brightness(0) saturate(100%) invert(58%) sepia(30%) saturate(600%) hue-rotate(340deg) brightness(95%) contrast(90%) drop-shadow(0 0 8px rgba(216,126,95,0.7)) drop-shadow(0 0 20px rgba(216,126,95,0.4)) drop-shadow(0 0 40px rgba(216,126,95,0.2))",
        }}
      />
      <img
        src="/icons/Seta-3.png"
        alt=""
        className="absolute pointer-events-none"
        style={{
          bottom: "80px",
          left: "40px",
          width: "48px",
          height: "48px",
          objectFit: "contain",
          mixBlendMode: "screen",
          zIndex: 3,
          transform: "rotate(180deg)",
          filter: "brightness(0) saturate(100%) invert(58%) sepia(30%) saturate(600%) hue-rotate(340deg) brightness(95%) contrast(90%) drop-shadow(0 0 8px rgba(216,126,95,0.7)) drop-shadow(0 0 20px rgba(216,126,95,0.4)) drop-shadow(0 0 40px rgba(216,126,95,0.2))",
        }}
      />

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Label */}
        <p
          className="text-center"
          style={{ fontWeight: 300, fontSize: "13px", color: "#aaa", letterSpacing: "0.1em", marginBottom: "13px" }}
        >
          O que é a Jornada?
        </p>

        {/* Título */}
        <h2
          className="text-center mx-auto"
          style={{
            fontWeight: 700,
            fontSize: "clamp(21px, 3.2vw, 35px)",
            color: "white",
            lineHeight: 1.2,
            maxWidth: "720px",
            margin: "0 auto 28px",
          }}
        >
          Uma imersão de diagnóstico.
          <br />
          Não mais um curso de marketing.
        </h2>

        {/* Subtítulo */}
        <div className="text-center mx-auto" style={{ maxWidth: "560px", margin: "0 auto 48px" }}>
          <p style={{ fontWeight: 400, fontSize: "17px", color: "#ccc" }}>
            A Jornada de Ascensão não vai te encher de informação.
          </p>
          <p style={{ fontWeight: 600, fontSize: "17px", color: "white", marginTop: "6px" }}>
            Vai te ajudar a enxergar onde você está travado.
          </p>
        </div>

        {/* Texto central */}
        <div className="text-center mx-auto" style={{ maxWidth: "480px", margin: "0 auto 32px" }}>
          <p style={{ fontWeight: 700, fontSize: "17px", color: "white", lineHeight: 1.5 }}>
            Em 1 dia, você passa pelos 3 pilares
            <br />
            que sustentam qualquer negócio:
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-auto"
          style={{ maxWidth: "860px", marginBottom: "48px", alignItems: "stretch" }}
        >
          {cards.map((card, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {/* Ícone cérebro acima do primeiro card */}
              {i === 0 && (
                <div className="flex items-center justify-center mb-3" style={{ width: '64px', height: '64px', filter: 'drop-shadow(0 0 8px #d87e5f) drop-shadow(0 0 20px #d87e5f) drop-shadow(0 0 40px #d87e5f) drop-shadow(0 0 80px rgba(216,126,95,0.5))' }}>
                  <img src="/icons/cerebro_copy2-2.png" alt="Ícone" className="w-full h-full object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(30%) saturate(600%) hue-rotate(340deg) brightness(95%) contrast(90%) drop-shadow(0 0 6px #d87e5f)' }} />
                </div>
              )}
              {/* Ícone dólar acima do terceiro card */}
              {i === 2 && (
                <div className="flex items-center justify-center mb-3" style={{ width: '64px', height: '64px', filter: 'drop-shadow(0 0 8px #d87e5f) drop-shadow(0 0 20px #d87e5f) drop-shadow(0 0 40px #d87e5f) drop-shadow(0 0 80px rgba(216,126,95,0.5))' }}>
                  <img src="/icons/Layer_12_copy.png" alt="Ícone" className="w-full h-full object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(30%) saturate(600%) hue-rotate(340deg) brightness(95%) contrast(90%) drop-shadow(0 0 6px #d87e5f)' }} />
                </div>
              )}
              {/* Ícone megaphone acima do segundo card */}
              {i === 1 && (
                <div className="flex items-center justify-center mb-3" style={{ width: '64px', height: '64px', filter: 'drop-shadow(0 0 8px #d87e5f) drop-shadow(0 0 20px #d87e5f) drop-shadow(0 0 40px #d87e5f) drop-shadow(0 0 80px rgba(216,126,95,0.5))' }}>
                  <img src="/icons/megaphone.png" alt="Ícone" className="w-full h-full object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(30%) saturate(600%) hue-rotate(340deg) brightness(95%) contrast(90%) drop-shadow(0 0 6px #d87e5f)' }} />
                </div>
              )}
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(40px) saturate(1.4)",
                WebkitBackdropFilter: "blur(40px) saturate(1.4)",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "24px",
                padding: "28px 24px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                textAlign: "center" as const,
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(217,119,6,0.07) 0%, transparent 65%)",
                  borderRadius: "16px",
                  transition: "opacity 0.3s ease",
                }}
              />
              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "white", marginBottom: "10px", width: "100%", textShadow: "0 0 8px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1)" }}>
                {card.title}
              </h3>
              <p style={{ fontWeight: 400, fontSize: "14px", color: "#ccc", lineHeight: 1.6, width: "100%" }}>
                {card.text}
              </p>
            </motion.div>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <div className="text-center mx-auto" style={{ maxWidth: "600px", marginTop: "48px" }}>
          <p style={{ fontWeight: 400, fontSize: "18px", color: "#ccc" }}>
            Você sai sabendo qual eixo precisa de atenção primeiro —
          </p>
          <p style={{ fontWeight: 700, fontSize: "18px", color: "white", marginTop: "6px" }}>
            e o que fazer a partir do dia seguinte.
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "44px", textAlign: "center" }}>
          <a
            href="#preco"
            className="whatis-cta inline-block uppercase cursor-pointer"
            style={{
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              color: "#1a1a1a",
              backgroundColor: "#D97706",
              borderRadius: "999px",
              padding: "18px 52px",
              border: "none",
              boxShadow:
                "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28), 0 0 80px rgba(217,119,6,0.12)",
              transition: "all 0.2s ease",
              textDecoration: "none",
            }}
          >
            QUERO PARTICIPAR · R$47
          </a>
        </div>
      </div>

      <style>{`
        .whatis-cta:hover {
          box-shadow: 0 0 30px rgba(217,119,6,0.9), 0 0 60px rgba(217,119,6,0.5), 0 0 120px rgba(217,119,6,0.25) !important;
          transform: translateY(-2px) scale(1.02);
        }
        .whatis-cta:active {
          transform: translateY(0px) scale(0.98) !important;
        }
      `}</style>
    </section>
  );
};

export default WhatIsSection;
