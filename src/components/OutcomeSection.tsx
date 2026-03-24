import { motion } from "framer-motion";
import vintageTv from "@/assets/vintage-tv.png";

const items = [
  { label: ". Qual eixo está travando -", bold: "marca, conteúdo ou vendas" },
  { label: ". O que resolver primeiro -", bold: "não uma lista infinita, uma prioridade" },
  { label: ". Como continuar -", bold: "se fizer sentido, o próximo passo existe" },
];

const OutcomeSection = () => {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{
        backgroundColor: "#EFE7DA",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="container max-w-[900px] mx-auto px-4">
        {/* Label */}
        <p
          className="text-center uppercase mb-3"
          style={{ fontWeight: 300, fontSize: "13px", color: "#888", letterSpacing: "0.1em" }}
        >
          O que muda
        </p>

        {/* Título */}
        <h2
          className="text-center mx-auto mb-[52px]"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#1a1a1a",
            lineHeight: 1.2,
            maxWidth: "700px",
          }}
        >
          <span style={{ fontWeight: 400 }}>Você sai sabendo o problema.</span>
          <br />
          <span style={{ fontWeight: 700 }}>E o próximo passo.</span>
        </h2>

        {/* Grid 2 colunas */}
        <div
          className="grid items-center gap-12"
          style={{ gridTemplateColumns: "55% 45%" }}
        >
          {/* Coluna esquerda — texto */}
          <div>
            {/* Parágrafo intro */}
            <p style={{ fontWeight: 400, fontSize: "17px", color: "#333", lineHeight: 1.7, marginBottom: "32px" }}>
              A imersão não promete que você{"\n"}vai sair com tudo resolvido.
              <br />
              Promete que você vai sair com{" "}
              <span style={{ fontWeight: 700, fontSize: "20px", color: "#1a1a1a", letterSpacing: "0.04em" }}>
                CLAREZA
              </span>
            </p>

            {/* Lista */}
            <div>
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  style={{ marginBottom: "24px" }}
                >
                  <p style={{ fontWeight: 300, fontSize: "15px", color: "#666" }}>{item.label}</p>
                  <p style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}>{item.bold}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coluna direita — TV */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative cursor-pointer group">
              <img
                src={vintageTv}
                alt="TV vintage"
                style={{
                  mixBlendMode: "multiply",
                  maxWidth: "100%",
                  width: "1260px",
                  height: "auto",
                }}
              />
              {/* Screen glow overlay */}
              <div
                className="absolute screen-glow pointer-events-none"
                style={{
                  top: "38%",
                  left: "12%",
                  width: "58%",
                  height: "46%",
                  background: "radial-gradient(ellipse at 40% 35%, rgba(255,255,255,0.08) 0%, transparent 70%)",
                  borderRadius: "12px",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Texto final */}
        <div className="text-center mx-auto mt-14" style={{ maxWidth: "600px" }}>
          <p style={{ fontWeight: 400, color: "#555", fontSize: "18px" }}>
            Isso é o que a imersão entrega.
          </p>
          <p style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "20px", marginTop: "6px" }}>
            Diagnóstico real.  Não promessa vazia.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-11 text-center">
          <a
            href="#preco"
            className="clarity-cta inline-block cursor-pointer"
            style={{
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#1a1a1a",
              backgroundColor: "#D97706",
              borderRadius: "999px",
              padding: "18px 52px",
              border: "none",
              transition: "all 0.2s ease",
              boxShadow:
                "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28), 0 0 80px rgba(217,119,6,0.12)",
            }}
          >
            QUERO ESSA CLAREZA · R$47
          </a>
        </div>
      </div>

      <style>{`
        .tv-float-container {
          animation: tvFloat 5s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        .tv-float-container:hover {
          transform: scale(1.04) rotate(1deg);
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
          transition: all 0.4s ease;
        }
        @keyframes tvFloat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-12px) rotate(1deg); }
        }
        .screen-glow {
          animation: screenGlow 3s ease-in-out infinite;
        }
        @keyframes screenGlow {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.7; }
        }
        .clarity-cta:hover {
          box-shadow: 0 0 30px rgba(217,119,6,0.9), 0 0 60px rgba(217,119,6,0.5), 0 0 120px rgba(217,119,6,0.25) !important;
          transform: translateY(-2px) scale(1.02);
        }
        .clarity-cta:active {
          transform: translateY(0px) scale(0.98) !important;
        }
        @media (max-width: 768px) {
          .grid[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OutcomeSection;
