import { motion } from "framer-motion";

const schedule = [
  { time: "9:00h", color: "#D15E4A", title: "Clareza de Marca", desc: "Por que o cliente te escolheria? Você analisa diferencial, promessa e posicionamento." },
  { time: "11:00h", color: "#C96840", title: "Conteúdo Inteligente", desc: "O que você posta está atraindo? Você analisa pilares, formatos e rotina." },
  { time: "12:00h", color: "#C07235", title: "Pausa", desc: "Intervalo para processar." },
  { time: "13:00h", color: "#B87C2A", title: "Receita Estruturada", desc: "Onde está perdendo dinheiro? Você analisa preço, conversão e relacionamento." },
  { time: "15:00h", color: "#D97706", title: "Diagnóstico", desc: "Você identifica o gargalo e define o próximo passo." },
];

const ScheduleSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#1a1008" }}>
      {/* Light leak */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: [
            "radial-gradient(ellipse at top left, rgba(180,60,30,0.35) 0%, transparent 55%)",
            "radial-gradient(ellipse at bottom right, rgba(120,40,20,0.25) 0%, transparent 50%)",
            "radial-gradient(ellipse at top right, rgba(80,30,10,0.15) 0%, transparent 40%)",
          ].join(", "),
        }}
      />
      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative px-4" style={{ zIndex: 2 }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: "720px",
            background: "rgba(40,30,20,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "48px 52px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Label */}
          <p className="text-center uppercase mb-3" style={{ fontWeight: 300, fontSize: "13px", color: "#aaa", letterSpacing: "0.1em" }}>
            Como funciona
          </p>

          {/* Title */}
          <h2 className="text-center mb-8" style={{ fontWeight: 700, fontSize: "clamp(24px, 3.5vw, 38px)", color: "white" }}>
            Um dia. Online. Direto ao que importa.
          </h2>

          {/* Date */}
          <p className="text-center mb-9" style={{ fontWeight: 600, fontSize: "15px", color: "#ccc" }}>
            11 de abril · Online
          </p>

          {/* Timeline */}
          <div>
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
                <div
                  className="flex items-center gap-8"
                  style={{ padding: "20px 0", cursor: "default" }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(32px, 5vw, 52px)",
                      color: item.color,
                      minWidth: "160px",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.time}
                  </span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "16px", color: "white", marginBottom: "4px" }}>
                      {item.title}
                    </p>
                    <p style={{ fontWeight: 400, fontSize: "14px", color: "#aaa", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Final divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
          </div>

          {/* CTA */}
          <div className="text-center" style={{ marginTop: "44px" }}>
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
      `}</style>
    </section>
  );
};

export default ScheduleSection;
