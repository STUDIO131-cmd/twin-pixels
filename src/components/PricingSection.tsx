import { motion } from "framer-motion";

const barcode = () => {
  const bars = [];
  const widths = [2,1,3,1,2,1,1,3,2,1,2,3,1,1,2,1,3,1,2,1,1,2,3,1,2,1,3,1,1,2,1,3,2,1,2,1,1,3,1,2];
  let x = 4;
  for (let i = 0; i < widths.length; i++) {
    bars.push(
      <rect key={i} x={x} y="0" width={widths[i]} height="48" fill={i % 2 === 0 ? "#fff" : "#222"} />
    );
    x += widths[i] + 1;
  }
  return bars;
};

const PricingSection = () => {
  return (
    <section id="preco" style={{ position: "relative", overflow: "hidden", padding: "96px 0" }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "url('/backgrounds/Background_Pricing.png')",
        backgroundSize: "cover", backgroundPosition: "center",
        backgroundColor: "#1a1a1a"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
        {/* Label */}
        <p style={{
          textAlign: "center", fontWeight: 300, fontSize: "13px", color: "#aaa",
          letterSpacing: "0.1em", marginBottom: "10px"
        }}>Investimento</p>

        {/* Título */}
        <h2 style={{
          textAlign: "center", fontWeight: 700, color: "white",
          fontSize: "clamp(24px, 3.5vw, 40px)", lineHeight: 1.2,
          maxWidth: "720px", margin: "0 auto 20px"
        }}>Menos do que vale uma hora da sua agenda.</h2>

        {/* Subtítulo */}
        <p style={{
          textAlign: "center", fontWeight: 400, fontSize: "16px", color: "#bbb",
          lineHeight: 1.6, maxWidth: "580px", margin: "0 auto 48px"
        }}>
          A clareza que você vai ter em 1 dia custa menos do que o tempo que você perde toda semana tentando resolver sozinho.
        </p>

        {/* Ingresso 1 — Lote 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ position: "relative", maxWidth: "760px", margin: "0 auto 24px" }}
        >
          <img
            src="/images/Ingresso_1.png"
            alt="Ingresso Lote 1"
            style={{
              width: "100%", height: "auto", display: "block",
              borderRadius: "20px",
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.4))"
            }}
          />
        </motion.div>

        {/* Ingresso 2 — Lote 2 (bloqueado) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ position: "relative", maxWidth: "760px", margin: "0 auto 40px" }}
        >
          <img
            src="/images/Ingresso_2.png"
            alt="Ingresso Lote 2"
            style={{
              width: "100%", height: "auto", display: "block",
              borderRadius: "20px",
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.4))"
              }}
            }}
          />
        </motion.div>

        {/* Urgência */}
        <p style={{
          textAlign: "center", fontWeight: 700, fontSize: "20px",
          color: "white", marginBottom: "32px"
        }}>
          Lote 1 encerra em 06/04 · <span style={{ color: "#D15E4A" }}>Vagas limitadas</span>
        </p>

        {/* Botão CTA */}
        <a
          href="#"
          style={{
            display: "block", width: "fit-content",
            margin: "0 auto 16px",
            fontWeight: 700, fontSize: "16px",
            letterSpacing: "0.06em", textTransform: "uppercase" as const,
            color: "#1a1a1a", background: "#D97706",
            borderRadius: "999px", padding: "20px 56px",
            border: "none", cursor: "pointer", textDecoration: "none",
            boxShadow: "0 0 20px rgba(217,119,6,0.6), 0 0 40px rgba(217,119,6,0.3), 0 0 80px rgba(217,119,6,0.15)",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(217,119,6,0.95), 0 0 60px rgba(217,119,6,0.55), 0 0 120px rgba(217,119,6,0.3)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(calc(-130px - 2px)) scale(1.02)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(217,119,6,0.6), 0 0 40px rgba(217,119,6,0.3), 0 0 80px rgba(217,119,6,0.15)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-130px)";
          }}
        >
          GARANTIR MINHA VAGA · R$47
        </a>

        {/* Barra de vagas */}
        <div style={{ width: "320px", margin: "0 auto", textAlign: "center", transform: "translateY(-130px)" }}>
          <div style={{ background: "#333", borderRadius: "999px", height: "6px", overflow: "hidden" }}>
            <div style={{ width: "81%", background: "#D97706", borderRadius: "999px", height: "100%" }} />
          </div>
          <p style={{ fontWeight: 300, fontSize: "12px", color: "#aaa", marginTop: "8px" }}>
            81% das vagas preenchidas a R$47,00
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
