import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundColor: "#1C1917",
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
      }}
    >
      <div className="container max-w-5xl mx-auto px-4">
        {/* Label */}
        <p className="text-center text-[13px] font-light tracking-[0.1em] uppercase text-[#888] mb-5">
          O que ninguém fala
        </p>

        {/* Título */}
        <h2
          className="text-center font-bold mx-auto mb-12 leading-[1.2]"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", maxWidth: "720px" }}
        >
          <span>O problema </span>
          <span className="text-[#D97706]">não é falta de esforço.</span>
          <br />
          <span className="text-white">É não saber onde está o gargalo.</span>
        </h2>

        {/* 3 negações */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-2">
          {[
            { pre: "Não precisa de", bold: "mais", post: "conteúdo." },
            { pre: "Não precisa de", bold: "mais", post: "informação." },
            { pre: "Você não precisa de", bold: "mais", post: "curso." },
          ].map((item, i) => (
            <p key={i} className="text-[15px] font-light text-[#aaa]">
              {item.pre} <span className="font-bold text-white">{item.bold}</span> {item.post}
            </p>
          ))}
        </div>

        {/* Elipse com texto */}
        <div className="relative mx-auto my-6" style={{ maxWidth: "500px" }}>
          <svg viewBox="0 0 500 80" className="w-full h-auto">
            <ellipse
              cx="250" cy="40" rx="240" ry="34"
              stroke="white" strokeWidth="2" fill="none"
              strokeDasharray="1600" strokeDashoffset="1600"
              className="animate-[drawEllipse_1.2s_ease_forwards_0.3s]"
            />
          </svg>
          <p className="absolute inset-0 flex items-center justify-center text-center text-white text-[15px] md:text-[16px] font-normal px-10">
            Você precisa saber qual parte do seu negócio está travando o resto:
          </p>
        </div>

        {/* Setas desenhadas */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-2">
          {[1.0, 1.2, 1.4].map((delay, i) => (
            <div key={i} className="flex justify-center">
              <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                <path
                  d="M20 4 Q26 28 18 52"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  strokeDasharray="60" strokeDashoffset="60"
                  style={{ animation: `drawArrow 0.6s ease forwards ${delay}s` }}
                />
                <path
                  d="M12 46 L18 52 L24 46"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="20" strokeDashoffset="20"
                  style={{ animation: `drawArrow 0.3s ease forwards ${delay + 0.6}s` }}
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Ícones ilustrativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-2">
          {[
            /* Cérebro */
            <svg key="brain" width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#ccc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40 60V44" />
              <path d="M28 44c-6-2-10-8-10-14 0-8 6-14 14-14 2 0 4 0.5 6 1.2" />
              <path d="M52 44c6-2 10-8 10-14 0-8-6-14-14-14-2 0-4 0.5-6 1.2" />
              <path d="M32 16c0-4 4-8 8-8s8 4 8 8" />
              <path d="M24 34c-2 0-4-2-4-4s2-4 4-4" />
              <path d="M56 34c2 0 4-2 4-4s-2-4-4-4" />
              <path d="M34 30c0 3 3 6 6 6s6-3 6-6" />
              <path d="M30 44h20" />
              <path d="M32 48h16" />
              <path d="M34 52h12" />
            </svg>,
            /* Dinheiro */
            <svg key="money" width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#ccc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="12" y="22" width="40" height="28" rx="3" />
              <circle cx="32" cy="36" r="8" />
              <path d="M32 30v12M28 34h8" />
              <path d="M20 26v0M44 46v0" />
              <path d="M52 22l12-6v28l-12 6" />
              <path d="M56 18l8-4" />
              <path d="M56 50l8-4" />
              <path d="M48 16l-4 2" />
              <path d="M58 28c2 2 2 6 0 8" />
            </svg>,
            /* Megafone */
            <svg key="megaphone" width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#ccc" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 32h8v16h-8z" />
              <path d="M26 30l24-10v40L26 50V30z" />
              <path d="M50 30c4 2 6 6 6 10s-2 8-6 10" />
              <path d="M54 24c6 4 10 10 10 16s-4 12-10 16" />
              <path d="M22 48v10c0 2 2 4 4 4h4c2 0 4-2 4-4V50" />
            </svg>,
          ].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex justify-center"
            >
              {icon}
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              title: "Pode ser marca",
              text: "O cliente não entende por que escolher você. Você parece igual a todo mundo.",
            },
            {
              title: "Pode ser vendas",
              text: "A demanda existe, mas não converte. Você perde cliente por falta de processo.",
            },
            {
              title: "Pode ser conteúdo",
              text: "Você posta, mas não atrai quem deveria. O esforço não vira resultado.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-5 pb-7 text-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h3 className="font-semibold text-white text-[16px] mb-2.5">{card.title}</h3>
              <p className="font-normal text-[#bbb] text-[14px] leading-[1.6]">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Texto final */}
        <p className="text-center font-light text-[#aaa] text-[17px] leading-[1.7] max-w-[560px] mx-auto mt-14">
          Enquanto não souber qual é o seu gargalo,
          <br />
          vai continuar tentando resolver tudo
          <br />
          <span className="font-bold text-white">— e não resolver nada.</span>
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#preco"
            className="hero-cta-btn inline-block px-12 py-[18px] rounded-lg font-bold text-[15px] tracking-[0.06em] uppercase text-[#1a1a1a] bg-[#D97706] cursor-pointer transition-all duration-200"
          >
            QUERO DESCOBRIR O MEU GARGALO · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
