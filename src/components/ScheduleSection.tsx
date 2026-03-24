import { motion } from "framer-motion";

const schedule = [
  { time: "9:00h", color: "#D15E4A", title: "Clareza de Marca", desc: "Por que o cliente te escolheria? Você analisa diferencial, promessa e posicionamento." },
  { time: "11:00h", color: "#C86840", title: "Conteúdo Inteligente", desc: "O que você posta está atraindo? Você analisa pilares, formatos e rotina." },
  { time: "12:00h", color: "#BF7235", title: "Pausa", desc: "Intervalo para processar." },
  { time: "13:00h", color: "#B67C2B", title: "Receita Estruturada", desc: "Onde está perdendo dinheiro? Você analisa preço, conversão e relacionamento." },
  { time: "15:00h", color: "#D97706", title: "Diagnóstico", desc: "Você identifica o gargalo e define o próximo passo." },
];

const ScheduleSection = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/backgrounds/Background-10.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Content */}
      <div className="relative px-4" style={{ zIndex: 2 }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: "680px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(40px) saturate(1.4)",
            WebkitBackdropFilter: "blur(40px) saturate(1.4)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
            borderRadius: "28px",
            padding: "48px 52px 52px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Label */}
          <p className="text-center text-xs" style={{ fontWeight: 300, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
            Como funciona
          </p>

          {/* Title */}
          <h2 className="text-center text-3xl" style={{ fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: "28px" }}>
            Um dia. Online.
            <br />
            Direto ao que importa.
            <br />
            <br />
          </h2>

          {/* Date */}
          <p className="text-center" style={{ fontWeight: 600, fontSize: "15px", color: "#ccc", marginBottom: "24px", transform: "translateY(-60%)" }}>
            11 de abril · Online
          </p>

          {/* Timeline */}
          <div>
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
                <div
                  className="flex items-center"
                  style={{ padding: "18px 0", gap: "28px", cursor: "default" }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(28px, 4.5vw, 46px)",
                      color: item.color,
                      minWidth: "140px",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      flexShrink: 0,
                      textShadow: `0 0 6px ${item.color}90, 0 0 12px ${item.color}60, 0 0 24px ${item.color}35, 0 0 48px ${item.color}18`,
                    }}
                  >
                    {item.time}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                    <p style={{ fontWeight: 600, fontSize: "15px", color: "white" }}>
                      {item.title}
                    </p>
                    <p style={{ fontWeight: 400, fontSize: "13px", color: "#aaa", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Final divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
          </div>

          {/* CTA */}
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <a
              href="#preco"
              className="schedule-cta inline-block"
              style={{
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                color: "#1a1a1a",
                background: "#D97706",
                borderRadius: "999px",
                padding: "18px 52px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28), 0 0 80px rgba(217,119,6,0.12)",
                textDecoration: "none",
              }}
            >
              RESERVAR MEU LUGAR · R$47
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .schedule-cta:hover {
          box-shadow: 0 0 30px rgba(217,119,6,0.9), 0 0 60px rgba(217,119,6,0.5), 0 0 120px rgba(217,119,6,0.25) !important;
          transform: translateY(-2px) scale(1.02);
        }
        .schedule-cta:active {
          transform: translateY(0px) scale(0.98) !important;
        }
        @media (max-width: 640px) {
          .schedule-card-inner {
            padding: 32px 24px 40px !important;
            border-radius: 16px !important;
            margin: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ScheduleSection;
