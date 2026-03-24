import { motion } from "framer-motion";

const cards = [
  {
    icon: "/icons/Liberal.png",
    title: "Se você é profissional liberal",
    text: "Nutricionista, psicólogo, arquiteto, advogado — você sabe que entrega resultado. Mas na hora de explicar isso para o cliente, não sai. Manda proposta e torce. Não sabe fazer follow-up sem parecer insistente.",
  },
  {
    icon: "/icons/Clinica.png",
    title: "Se você é dono de clínica ou escritório",
    text: "Você tem método, tecnologia, diferencial técnico. Mas o cliente não sabe disso antes de entrar. Entre a primeira conversa e o fechamento, ele some. Você não sabe o que aconteceu.",
  },
  {
    icon: "/icons/Loja_Fisica.png",
    title: "Se você tem negócio físico",
    text: "Restaurante, loja, ateliê — o cliente veio uma vez, gostou, mas nunca mais apareceu. Você não tem como chamar ele de volta. Abre o Instagram e fica 20 minutos olhando para o nada. Fecha sem postar.",
  },
  {
    icon: "/icons/Personalizado.png",
    title: "Se você faz trabalho personalizado",
    text: "O produto é 100% você. Mas você compete como se fosse igual a todo mundo. Explica quanto tempo leva, quanto material usa. Mas o cliente só ouve o preço.",
  },
];

const IdentificationSection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="container max-w-[1100px] mx-auto px-4">
        {/* Label */}
        <p
          className="text-center uppercase mb-4"
          style={{ fontSize: "13px", fontWeight: 300, color: "#aaa", letterSpacing: "0.1em" }}
        >
          Isso é sobre você?
        </p>

        {/* Título */}
        <h2
          className="text-center text-white mx-auto mb-14"
          style={{
            fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: "800px",
          }}
        >
          Você sabe que é bom no que faz.
          <br />
          Mas na hora de mostrar isso pro mundo, trava.
        </h2>

        {/* Grid 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="identification-card relative cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "28px 20px 32px",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Ícone com glow */}
              <div className="relative mb-5">
                <img
                  src={card.icon}
                  alt=""
                  style={{
                    width: "100px",
                    height: "auto",
                    mixBlendMode: "screen",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div
                  className="icon-glow-pulse"
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60px",
                    height: "12px",
                    background:
                      "radial-gradient(ellipse, rgba(217,119,6,0.5) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(6px)",
                  }}
                />
              </div>

              {/* Título */}
              <h3
                className="text-white text-center mb-3"
                style={{ fontWeight: 700, fontSize: "16px" }}
              >
                {card.title}
              </h3>

              {/* Texto */}
              <p
                className="text-center"
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#bbb",
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Texto final */}
        <p
          className="text-center mx-auto"
          style={{
            marginTop: "56px",
            maxWidth: "680px",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          <span style={{ fontWeight: 400, color: "#ccc" }}>
            O problema não é falta de competência.{" "}
          </span>
          <strong className="text-white" style={{ fontWeight: 700 }}>
            É falta de estrutura para transformar competência em posicionamento,
            comunicação e venda.
          </strong>
        </p>

        {/* Botão CTA */}
        <div className="mt-11 text-center">
          <a
            href="#preco"
            className="hero-cta-btn inline-block uppercase cursor-pointer"
            style={{
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              color: "#1a1a1a",
              background: "#D97706",
              borderRadius: "999px",
              padding: "18px 52px",
              border: "none",
              transition: "all 0.2s ease",
            }}
          >
            QUERO CLAREZA · R$47
          </a>
        </div>
      </div>

      <style>{`
        .identification-card {
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .identification-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(217,119,6,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
          border-radius: 20px;
        }
        .identification-card:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(217,119,6,0.3) !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(217,119,6,0.15), inset 0 1px 0 rgba(255,255,255,0.1) !important;
          transform: translateY(-8px);
        }
        .identification-card:hover::before {
          opacity: 1;
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50%       { opacity: 0.9; transform: translateX(-50%) scale(1.2); }
        }
        .icon-glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default IdentificationSection;
