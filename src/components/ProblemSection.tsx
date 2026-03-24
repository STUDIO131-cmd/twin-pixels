import { motion } from "framer-motion";

const cards = [
  {
    icon: "/icons/Cérebro.png",
    title: "Pode ser marca",
    text: "O cliente não entende por que escolher você. Você parece igual a todo mundo.",
  },
  {
    icon: "/icons/Dinheiro.png",
    title: "Pode ser vendas",
    text: "A demanda existe, mas não converte. Você perde cliente por falta de processo.",
  },
  {
    icon: "/icons/Alto_Falante.png",
    title: "Pode ser conteúdo",
    text: "Você posta, mas não atrai quem deveria. O esforço não vira resultado.",
  },
];

const arrowRotations = [
  "rotate(-30deg) translateX(-20px)",
  "rotate(5deg)",
  "rotate(30deg) scaleX(-1) translateX(20px)",
];

const ProblemSection = () => {
  return (
    <section
      className="relative py-24 overflow-visible"
      style={{
        backgroundColor: "#EFE7DA",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
      }}
    >
      <div className="container max-w-5xl mx-auto px-4">
        {/* Label */}
        <p
          className="text-center uppercase mb-4"
          style={{ fontWeight: 300, fontSize: "13px", color: "#888", letterSpacing: "0.1em" }}
        >
          O que ninguém fala
        </p>

        {/* Título */}
        <h2
          className="text-center mx-auto mb-12"
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
            maxWidth: "720px",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          <span style={{ color: "#1a1a1a" }}>O problema </span>
          <span style={{ color: "#D97706", fontWeight: 700 }}>não é falta de esforço.</span>
          <br />
          <span style={{ color: "#1a1a1a" }}>É não saber onde está o gargalo.</span>
        </h2>

        {/* 3 negações */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-2"
          style={{ maxWidth: "700px", textAlign: "center" }}
        >
          {[
            { pre: "Não precisa de", bold: "mais", post: "conteúdo." },
            { pre: "Não precisa de", bold: "mais", post: "informação." },
            { pre: "Você não precisa de", bold: "mais", post: "curso." },
          ].map((item, i) => (
            <p key={i} style={{ fontSize: "16px", lineHeight: 1.5, color: "#555", fontWeight: 300 }}>
              {item.pre}{" "}
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>{item.bold}</span>{" "}
              {item.post}
            </p>
          ))}
        </div>

        {/* Elipse SVG + texto */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{ width: "640px", maxWidth: "90vw", minHeight: "100px", marginTop: "32px" }}
        >
          <svg viewBox="0 0 640 100" width="640" height="100" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: 0 }}>
            <ellipse cx="320" cy="50" rx="310" ry="44"
              stroke="white" strokeWidth="2.5" fill="none"
              strokeLinecap="round"
              strokeDasharray="2000"
              strokeDashoffset="2000"
              className="draw-ellipse"
            />
          </svg>
          <p
            style={{
              position: "relative",
              zIndex: 1,
              fontWeight: 700,
              fontSize: "17px",
              color: "white",
              textAlign: "center",
              padding: "0 48px",
              lineHeight: 1.4,
            }}
          >
            Você precisa saber qual parte do seu negócio está travando o resto:
          </p>
        </div>

        {/* Setas SVG */}
        <div
          className="mx-auto flex justify-between items-start"
          style={{ width: "640px", maxWidth: "90vw" }}
        >
          {/* Seta esquerda */}
          <motion.svg
            width="160" height="160" viewBox="0 0 160 160" fill="none"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <path d="M100 8 Q40 60 36 130"
              stroke="white" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="160" strokeDashoffset="160"
              className="draw-arrow-s1"/>
            <path d="M20 120 L36 130 L48 118"
              stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="30" strokeDashoffset="30"
              className="draw-arrowhead-s1"/>
          </motion.svg>

          {/* Seta central */}
          <motion.svg
            width="80" height="160" viewBox="0 0 80 160" fill="none"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <path d="M40 8 Q48 72 40 136"
              stroke="white" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="150" strokeDashoffset="150"
              className="draw-arrow-s2"/>
            <path d="M26 124 L40 136 L54 124"
              stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="30" strokeDashoffset="30"
              className="draw-arrowhead-s2"/>
          </motion.svg>

          {/* Seta direita */}
          <motion.svg
            width="160" height="160" viewBox="0 0 160 160" fill="none"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <path d="M60 8 Q120 60 124 130"
              stroke="white" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray="160" strokeDashoffset="160"
              className="draw-arrow-s3"/>
            <path d="M112 118 L124 130 L140 120"
              stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="30" strokeDashoffset="30"
              className="draw-arrowhead-s3"/>
          </motion.svg>
        </div>

        {/* Ícones + Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto"
          style={{ maxWidth: "860px", alignItems: "start" }}
        >
          {cards.map((card, i) => (
            <div key={i}>
              {/* Ícone flutuante acima do card */}
              <div
                className="flex justify-center w-full"
                style={{ marginBottom: "-20px", position: "relative", zIndex: 2 }}
              >
                <img
                  src={card.icon}
                  alt=""
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                    display: "block",
                  }}
                />
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(50,42,35,0.88)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "28px 24px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  position: "relative",
                  zIndex: 1,
                }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(217,119,6,0.25)",
                }}
              >
                <h3 style={{ fontWeight: 700, color: "white", fontSize: "16px", marginBottom: "12px" }}>
                  {card.title}
                </h3>
                <p style={{ fontWeight: 400, color: "#bbb", fontSize: "14px", lineHeight: 1.7 }}>
                  {card.text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <p
          className="text-center mx-auto"
          style={{
            marginTop: "52px",
            maxWidth: "560px",
            fontSize: "18px",
            lineHeight: 1.7,
            fontWeight: 400,
            color: "#555",
          }}
        >
          Enquanto não souber qual é o seu gargalo,
          <br />
          vai continuar tentando resolver tudo
          <br />
          <span style={{ fontWeight: 700, color: "#1a1a1a" }}>— e não resolver nada.</span>
        </p>

        {/* CTA */}
        <div className="mt-11 text-center">
          <a
            href="#preco"
            className="inline-block cursor-pointer transition-all duration-200"
            style={{
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              background: "#D97706",
              borderRadius: "999px",
              padding: "18px 48px",
              border: "none",
              boxShadow:
                "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28)",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow =
                "0 0 30px rgba(217,119,6,0.9), 0 0 60px rgba(217,119,6,0.5)";
              t.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow =
                "0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28)";
              t.style.transform = "none";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
            }}
          >
            QUERO DESCOBRIR O MEU GARGALO · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
