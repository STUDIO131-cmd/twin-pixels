import { motion } from "framer-motion";

const cards = [
  {
    title: "Se você é dono de clínica ou escritório",
    text: "Você tem método, tecnologia, diferencial técnico. Mas o cliente não sabe disso antes de entrar. Entre a primeira conversa e o fechamento, ele some. Você não sabe o que aconteceu.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="14" r="6" />
        <path d="M22 20v10" />
        <path d="M16 26h12" />
        <path d="M22 30c0 4-6 8-6 12" />
        <path d="M22 30c0 4 6 8 6 12" />
        <path d="M30 16c4 2 8 6 8 12s-4 10-4 14" />
      </svg>
    ),
  },
  {
    title: "Se você tem negócio físico",
    text: "Restaurante, loja, ateliê — o cliente veio uma vez, gostou, mas nunca mais apareceu. Você não tem como chamar ele de volta. Abre o Instagram e fica 20 minutos olhando pro nada. Fecha sem postar.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="24" width="36" height="22" rx="2" />
        <path d="M10 24l4-10h28l4 10" />
        <path d="M28 24v-10" />
        <path d="M18 24v-10" />
        <path d="M38 24v-10" />
        <rect x="22" y="34" width="12" height="12" rx="1" />
        <path d="M24 14h8" />
        <path d="M14 10l2-4h24l2 4" />
      </svg>
    ),
  },
  {
    title: "Se você é profissional liberal",
    text: "Nutricionista, psicólogo, arquiteto, advogado — você sabe que entrega resultado. Mas na hora de explicar isso pro cliente, não sai. Manda proposta e torce. Não sabe fazer follow-up sem parecer insistente.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 12c-2-4-6-2-6 2s6 6 6 6 6-2 6-6-4-6-6-2z" />
        <path d="M32 20v8" />
        <path d="M32 28l-8 16" />
        <path d="M32 28l8 16" />
        <path d="M20 36h24" />
        <path d="M16 44h32" />
      </svg>
    ),
  },
];

const card4 = {
  title: "Se você faz trabalho personalizado",
  text: "O produto é 100% você. Mas você compete como se fosse igual a todo mundo. Explica quanto tempo leva, quanto material usa. Mas o cliente só ouve o preço.",
  icon: (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 28c-4-2-8-6-8-10s2-6 6-6c2 0 4 1 5 3" />
      <path d="M38 28c4-2 8-6 8-10s-2-6-6-6c-2 0-4 1-5 3" />
      <path d="M21 15c2-2 4-3 7-3s5 1 7 3" />
      <path d="M18 28c0 6 4 12 10 16" />
      <path d="M38 28c0 6-4 12-10 16" />
      <path d="M24 34h8" />
    </svg>
  ),
};

const ArrowRight = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="hidden md:block flex-shrink-0">
    <path d="M4 20 Q20 8 36 20" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 14 L36 20 L28 22" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDown = () => (
  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="mx-auto">
    <path d="M20 4 Q28 30 20 56" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 50 L20 56 L26 50" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const cardStyle = "relative rounded-2xl p-7 border border-white/[0.08] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)]";
const cardBg = { background: "rgba(40, 35, 30, 0.55)", boxShadow: "0 8px 32px rgba(0,0,0,0.18)" };

const IdentificationSection = () => {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundColor: "#EFE7DA",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="container max-w-5xl mx-auto px-4">
        {/* Label */}
        <p className="text-center text-[13px] font-normal tracking-[0.08em] uppercase text-[#888] mb-4">
          Isso é sobre você?
        </p>

        {/* Título */}
        <h2
          className="text-center font-display font-extrabold text-[#1a1a1a] mx-auto mb-14 leading-[1.2]"
          style={{ fontSize: "clamp(26px, 4vw, 42px)", maxWidth: "700px" }}
        >
          Você sabe que é bom no que faz.
          <br />
          Mas na hora de mostrar isso pro mundo, trava.
        </h2>

        {/* Linha 1: 3 cards + setas */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-0">
          {cards.map((card, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`${cardStyle} w-full md:w-[280px] flex flex-col items-center`}
                style={cardBg}
              >
                {/* Ícone flutuando acima */}
                <div className="-mt-12 mb-4">{card.icon}</div>
                <h3 className="font-display font-bold text-white text-center text-[15px] mb-3">{card.title}</h3>
                <p className="text-[#ccc] text-[14px] leading-[1.6]">{card.text}</p>
              </motion.div>
              {i < 2 && (
                <div className="mx-2">
                  <ArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Seta para baixo */}
        <div className="my-6 flex justify-center">
          <ArrowDown />
        </div>

        {/* Card 4 — centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`${cardStyle} max-w-[680px] mx-auto text-center flex flex-col items-center`}
          style={cardBg}
        >
          <div className="-mt-12 mb-4">{card4.icon}</div>
          <h3 className="font-display font-bold text-white text-[15px] mb-3">{card4.title}</h3>
          <p className="text-[#ccc] text-[14px] leading-[1.6] max-w-[560px] mx-auto">{card4.text}</p>
        </motion.div>

        {/* Rodapé */}
        <p className="text-center text-[18px] text-[#333] leading-[1.6] max-w-[640px] mx-auto mt-12">
          O problema não é falta de competência.{" "}
          <strong className="text-[#1a1a1a]">
            É falta de estrutura para transformar competência em posicionamento, comunicação e venda.
          </strong>
        </p>

        <div className="mt-10 text-center">
          <a href="#preco" className="hero-cta-btn inline-block px-12 py-[18px] rounded-lg font-extrabold text-[16px] tracking-[0.05em] uppercase text-[#1a1a1a] bg-[#D97706] transition-all duration-200">
            QUERO CLAREZA · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
