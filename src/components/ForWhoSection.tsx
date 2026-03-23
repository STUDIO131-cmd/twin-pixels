import { motion } from "framer-motion";

const PersonIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#4a3f35" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="40" cy="22" rx="12" ry="14" />
    <path d="M24 72c0-10 6-22 16-26M56 72c0-10-6-22-16-26" />
    <path d="M32 46c-4 2-8 8-8 16M48 46c4 2 8 8 8 16" />
    <path d="M36 36c2 2 6 2 8 0" />
    <circle cx="35" cy="20" r="1.5" fill="#4a3f35" stroke="none" />
    <circle cx="45" cy="20" r="1.5" fill="#4a3f35" stroke="none" />
    <path d="M28 14c2-6 10-10 18-6M52 18c-2-8-8-10-12-8" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#4a3f35" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 16c0 20 0 28 16 36M56 16c0 20 0 28-16 36" />
    <circle cx="40" cy="58" r="6" />
    <circle cx="40" cy="58" r="2" fill="#4a3f35" stroke="none" />
    <path d="M20 12h8M52 12h8" />
    <circle cx="24" cy="12" r="3" />
    <circle cx="56" cy="12" r="3" />
    <path d="M46 58c8-2 14-8 14-18" />
    <circle cx="60" cy="36" r="4" />
    <circle cx="60" cy="36" r="1.5" fill="#4a3f35" stroke="none" />
  </svg>
);

const StorefrontIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#4a3f35" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="30" width="52" height="40" rx="2" />
    <path d="M14 30L20 12h40l6 18" />
    <path d="M14 30c0 6 4 10 9 10s9-4 9-10" />
    <path d="M32 30c0 6 4 10 8 10s8-4 8-10" />
    <path d="M48 30c0 6 4 10 9 10s9-4 9-10" />
    <rect x="30" y="50" width="12" height="20" rx="1" />
    <path d="M36 60v2" />
    <rect x="50" y="42" width="10" height="8" rx="1" />
    <path d="M50 46h10" />
    <text x="28" y="24" fontSize="6" fill="#4a3f35" stroke="none" fontWeight="600" fontFamily="serif">BOOKSTORE</text>
  </svg>
);

const PenIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#4a3f35" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M56 12L24 68" />
    <path d="M54 10l6 4-32 56-6-4z" />
    <path d="M22 70l-4 2 2-6" />
    <path d="M56 12l4-2c2-1 4 0 4 2l-2 4" />
    <path d="M50 22l6 4" />
    <path d="M30 58l6 4" />
  </svg>
);

const cards = [
  {
    icon: <PersonIcon />,
    title: "Profissional-Marca",
    subtitle: "Você é o produto.",
    body: (
      <>
        Nutricionista, psicólogo, arquiteto, advogado, contador, consultor.{" "}
        <strong>
          Seu nome é a marca. Sabe que precisa aparecer mais, mas na hora de se posicionar, trava.
        </strong>{" "}
        Não sabe como traduzir sua expertise em comunicação que o mercado entende — e que converte em cliente.
      </>
    ),
    quote: '"Sou bom no que faço, mas não sei mostrar isso."',
  },
  {
    icon: <StethoscopeIcon />,
    title: "Dono Operacional",
    subtitle: "Você é a face de um negócio com equipe.",
    body: (
      <>
        Clínica, escritório, estúdio.{" "}
        <strong>
          Tem diferencial técnico, método próprio, resultado comprovado — mas ninguém sabe.
        </strong>{" "}
        O cliente chega por indicação e não entende o valor antes de experimentar. Você quer atrair o cliente certo antes dele precisar perguntar pra alguém.
      </>
    ),
    quote: '"Tenho diferencial, mas o mercado não enxerga."',
  },
  {
    icon: <StorefrontIcon />,
    title: "Marca Artesanal",
    subtitle: "Você é o dono e único operador estratégico.",
    body: (
      <>
        Restaurante, loja, ateliê, confeitaria.{" "}
        <strong>
          Você depende de fluxo. Sabe que precisa gerar demanda além do boca a boca
        </strong>{" "}
        — mas não tem equipe de marketing, e não pode parar a operação pra aprender. Precisa de um sistema simples que traga cliente qualificado.
      </>
    ),
    quote: '"Preciso de cliente entrando, mas não sei como atrair sem depender de sorte."',
  },
  {
    icon: <PenIcon />,
    title: "Artesão-Especialista",
    subtitle: "Você é o diferencial.",
    body: (
      <>
        Produto 100% personalizado. Capacidade limitada. Você faz o que pouca gente faz.{" "}
        <strong>Mas compete como se fosse igual a todo mundo.</strong>{" "}
        Precisa posicionar seu trabalho como premium, justificar seu preço e criar desejo em quem pode pagar — sem precisar convencer.
      </>
    ),
    quote: '"Faço trabalho único, mas cobro como se fosse comum."',
  },
];

const ForWhoSection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #2a1f18 0%, #1a100a 60%, #0f0806 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-4 relative z-10">
        {/* Label */}
        <p
          className="text-center uppercase mb-3"
          style={{ fontWeight: 300, fontSize: "13px", color: "#aaa", letterSpacing: "0.1em" }}
        >
          Para quem é
        </p>

        {/* Title */}
        <h2
          className="text-center mx-auto mb-[52px]"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            maxWidth: "700px",
            lineHeight: 1.2,
            color: "white",
            fontWeight: 400,
          }}
        >
          Se você se reconhece aqui,{" "}
          <span style={{ fontWeight: 700 }}>é para você.</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
              style={{
                background: "#EFE7DA",
                borderRadius: "20px",
                padding: "28px 28px 32px",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                color: "#1a1a1a",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a1a" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontWeight: 400, fontSize: "13px", color: "#666", marginTop: "2px" }}>
                    {card.subtitle}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-3">{card.icon}</div>
              </div>

              {/* Separator */}
              <div style={{ height: "1px", background: "#ddd", margin: "16px 0" }} />

              {/* Body */}
              <p style={{ fontWeight: 400, fontSize: "14px", lineHeight: 1.7, color: "#333" }}>
                {card.body}
              </p>

              {/* Quote */}
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#1a1a1a",
                  marginTop: "16px",
                }}
              >
                {card.quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cut text */}
        <div
          className="text-center mx-auto"
          style={{ maxWidth: "620px", marginTop: "56px" }}
        >
          <p style={{ fontWeight: 400, color: "#ddd", fontSize: "18px", lineHeight: 1.7 }}>
            Se você já fatura, já atende clientes e quer crescer com mais clareza e estrutura —{" "}
            <strong style={{ fontWeight: 700, color: "white" }}>é para você.</strong>
          </p>
          <p style={{ fontWeight: 400, color: "#ddd", fontSize: "18px", lineHeight: 1.7, marginTop: "16px" }}>
            Se ainda está validando ideia, não tem clientes ou está começando do zero —{" "}
            <strong style={{ fontWeight: 700, color: "white" }}>pode ser cedo.</strong>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: "48px" }}>
          <a
            href="#preco"
            className="hero-cta-btn inline-block"
            style={{
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#1a1a1a",
              background: "#D97706",
              borderRadius: "8px",
              padding: "18px 52px",
              border: "none",
              cursor: "pointer",
            }}
          >
            ISSO SOU EU · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
