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
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/backgrounds/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(15,12,8,0.75) 0%, rgba(15,12,8,0.70) 50%, rgba(15,12,8,0.80) 100%)",
        }}
      />

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-4" style={{ position: "relative", zIndex: 2 }}>
        {/* Label */}
        <p
          className="text-center uppercase"
          style={{ fontWeight: 300, fontSize: "13px", color: "#aaa", letterSpacing: "0.1em", marginBottom: "16px" }}
        >
          O que é a Jornada?
        </p>

        {/* Título */}
        <h2
          className="text-center mx-auto"
          style={{
            fontWeight: 700,
            fontSize: "clamp(26px, 4vw, 44px)",
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

        {/* Seta 1 */}
        <img
          src="/icons/Seta-3.png"
          alt=""
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            mixBlendMode: "screen",
            display: "block",
            margin: "0 auto 20px",
          }}
        />

        {/* Texto central */}
        <div className="text-center mx-auto" style={{ maxWidth: "480px", margin: "0 auto 16px" }}>
          <p style={{ fontWeight: 700, fontSize: "17px", color: "white", lineHeight: 1.5 }}>
            Em 1 dia, você passa pelos 3 pilares
            <br />
            que sustentam qualquer negócio:
          </p>
        </div>

        {/* Seta 2 */}
        <img
          src="/icons/Seta.png"
          alt=""
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            mixBlendMode: "screen",
            display: "block",
            margin: "16px auto 32px",
          }}
        />

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-auto"
          style={{ maxWidth: "860px", marginBottom: "48px", alignItems: "stretch" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "28px 24px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
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
              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "white", marginBottom: "10px", width: "100%" }}>
                {card.title}
              </h3>
              <p style={{ fontWeight: 400, fontSize: "14px", color: "#ccc", lineHeight: 1.6, width: "100%" }}>
                {card.text}
              </p>
            </motion.div>
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
            style={{
              display: "inline-block",
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#1a1a1a",
              backgroundColor: "#D97706",
              borderRadius: "999px",
              padding: "18px 52px",
              border: "none",
              cursor: "pointer",
              boxShadow:
                "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28), 0 0 80px rgba(217,119,6,0.12)",
              transition: "all 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow =
                "0 0 30px rgba(217,119,6,0.9), 0 0 60px rgba(217,119,6,0.5), 0 0 120px rgba(217,119,6,0.25)";
              t.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow =
                "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28), 0 0 80px rgba(217,119,6,0.12)";
              t.style.transform = "none";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(0px) scale(0.98)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
            }}
          >
            QUERO PARTICIPAR · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
