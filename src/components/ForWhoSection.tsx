import { motion } from "framer-motion";

const cards = [
  {
    icon: "/icons/Homem.png",
    title: "Profissional-Marca",
    subtitle: "Você é o produto.",
    body: 'Nutricionista, psicólogo, arquiteto, advogado, contador, consultor. Seu nome é a marca. Sabe que precisa aparecer mais, mas na hora de se posicionar, trava. Não sabe como traduzir sua expertise em comunicação que o mercado entende — e que converte em cliente.',
    quote: '"Sou bom no que faço, mas não sei mostrar isso."',
  },
  {
    icon: "/icons/Clínica-2.png",
    title: "Dono Operacional",
    subtitle: "Você é a face de um negócio com equipe.",
    body: 'Clínica, escritório, estúdio. Tem diferencial técnico, método próprio, resultado comprovado — mas ninguém sabe. O cliente chega por indicação e não entende o valor antes de experimentar. Você quer atrair o cliente certo antes dele precisar perguntar pra alguém.',
    quote: '"Tenho diferencial, mas o mercado não enxerga."',
  },
  {
    icon: "/icons/Loja.png",
    title: "Marca Artesanal",
    subtitle: "Você é o dono e único operador estratégico.",
    body: 'Restaurante, loja, ateliê, confeitaria. Você depende de fluxo. Sabe que precisa gerar demanda além do boca a boca — mas não tem equipe de marketing, e não pode parar a operação pra aprender. Precisa de um sistema simples que traga cliente qualificado.',
    quote: '"Preciso de cliente entrando, mas não sei como atrair sem depender de sorte."',
  },
  {
    icon: "/icons/Artesão.png",
    title: "Artesão-Especialista",
    subtitle: "Você é o diferencial.",
    body: 'Produto 100% personalizado. Capacidade limitada. Você faz o que pouca gente faz. Mas compete como se fosse igual a todo mundo. Precisa posicionar seu trabalho como premium, justificar seu preço e criar desejo em quem pode pagar — sem precisar convencer.',
    quote: '"Faço trabalho único, mas cobro como se fosse comum."',
  },
];

const ForWhoSection = () => {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: "url('/backgrounds/Background_ForWho.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
      }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4" style={{ isolation: "isolate" }}>
        {/* Label */}
        <p
          className="text-center uppercase"
          style={{ fontWeight: 300, fontSize: "13px", color: "#aaa", letterSpacing: "0.1em", marginBottom: "10px" }}
        >
          Para quem é
        </p>

        {/* Title */}
        <h2
          className="text-center mx-auto"
          style={{
            fontSize: "clamp(26px, 4vw, 46px)",
            maxWidth: "800px",
            lineHeight: 1.2,
            color: "white",
            fontWeight: 700,
            marginBottom: "48px",
          }}
        >
          Se você se reconhece aqui,{" "}
          <span style={{ fontWeight: 700 }}>é para você.</span>
        </h2>

        {/* Cards Grid 2x2 */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(2, 1fr)", maxWidth: "900px", margin: "0 auto", alignItems: "stretch" }}
        >
          {cards.map((card, i) => (
            <motion.div
              className="text-[#efe0c8]"
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
              }}
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(40px) saturate(1.4)",
                WebkitBackdropFilter: "blur(40px) saturate(1.4)",
                borderRadius: "28px",
                padding: "32px 32px 36px",
                border: "1px solid rgba(255,255,255,0.45)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -1px 1px rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s ease",
              }}
            >
              {/* Header: title left, icon right */}
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%", marginBottom: "20px" }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#eaeaea", marginBottom: "4px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontWeight: 400, fontSize: "13px", color: "#eaeaea" }}>
                    {card.subtitle}
                  </p>
                </div>
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{
                    width: "216px",
                    height: "216px",
                    objectFit: "contain",
                    flexShrink: 0,
                    marginLeft: "12px",
                    marginTop: "-4px",
                    filter: "brightness(0) invert(0.95) drop-shadow(0 0 8px rgba(234,234,234,0.6)) drop-shadow(0 0 20px rgba(234,234,234,0.3))",
                  }}
                />
              </div>

              {/* Separator */}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", margin: "0 0 20px 0", width: "100%" }} />

              {/* Body */}
              <p style={{ fontWeight: 400, fontSize: "14px", lineHeight: 1.8, color: "#eaeaea", marginBottom: "20px" }}>
                {card.body}
              </p>

              {/* Quote */}
              <p style={{ fontWeight: 700, fontSize: "14px", color: "#eaeaea" }}>
                {card.quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cut text */}
        <div className="text-center mx-auto" style={{ maxWidth: "640px", marginTop: "52px" }}>
          <p style={{ fontWeight: 400, color: "#ccc", fontSize: "18px", lineHeight: 1.7 }}>
            Se você já fatura, já atende clientes e quer crescer com mais clareza e estrutura —{" "}
            <span style={{ fontWeight: 700, color: "white" }}>é para você.</span>
          </p>
          <p style={{ fontWeight: 400, color: "#ccc", fontSize: "18px", lineHeight: 1.7, marginTop: "12px" }}>
            Se ainda está validando ideia, não tem clientes ou está começando do zero —{" "}
            <span style={{ fontWeight: 700, color: "white" }}>pode ser cedo.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: "48px" }}>
          <a
            href="#preco"
            style={{
              display: "inline-block",
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              background: "#D97706",
              borderRadius: "999px",
              padding: "18px 52px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28), 0 0 80px rgba(217,119,6,0.12)",
              transition: "all 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow = "0 0 30px rgba(217,119,6,0.9), 0 0 60px rgba(217,119,6,0.5), 0 0 120px rgba(217,119,6,0.25)";
              t.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow = "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28), 0 0 80px rgba(217,119,6,0.12)";
              t.style.transform = "translateY(0) scale(1)";
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(0px) scale(0.98)"; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"; }}
          >
            ISSO SOU EU · R$47
          </a>
        </div>
      </div>

      {/* Responsive mobile override */}
      <style>{`
        @media (max-width: 640px) {
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ForWhoSection;
