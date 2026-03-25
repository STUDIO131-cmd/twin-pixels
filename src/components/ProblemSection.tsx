import { motion } from "framer-motion";

const cards = [
  {
    icon: "/icons/Cerebro-2.png",
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

const ProblemSection = () => {
  return (
    <section
      className="relative py-24 overflow-visible bg-studio-sand-100 bg-graph-paper"
      style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32 }}
    >
      <div className="container max-w-5xl mx-auto px-4">
        {/* Label */}
        <p className="text-center mb-3 text-[13px] font-light text-studio-gray-500 tracking-widest">
          O que ninguém fala
        </p>

        {/* Título */}
        <h2
          className="text-center mx-auto mb-12 font-bold leading-tight max-w-[720px]"
          style={{ fontSize: 'clamp(19px, 2.8vw, 32px)' }}
        >
          <span className="text-studio-gray-900 font-bold">O problema não é falta de esforço </span>{' '}
          <span className="text-studio-gray-900 font-bold">É não saber onde está o gargalo.</span>
        </h2>

        {/* 3 negações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-2 max-w-[700px] text-center">
          {[
            { pre: "Não precisa de", bold: "mais", post: "conteúdo." },
            { pre: "Não precisa de", bold: "mais", post: "informação." },
            { pre: "Você não precisa de", bold: "mais", post: "curso." },
          ].map((item, i) => (
            <p key={i} className="text-base leading-normal text-studio-gray-700 font-light">
              {item.pre}{" "}
              <span className="font-bold text-studio-gray-900">{item.bold}</span>{" "}
              {item.post}
            </p>
          ))}
        </div>

        {/* Ícones + Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-[860px] items-start mt-12">
          {cards.map((card, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {i === 1 && (
                <div className="absolute hidden md:flex items-center justify-center w-[246px] h-[246px]" style={{ top: '-182px', left: '-95%' }}>
                  <img src="/icons/Cerebro-3.png" alt="Ícone" className="w-full h-full object-contain" />
                </div>
              )}
              {i === 1 && (
                <div className="absolute hidden md:flex items-center justify-center w-[246px] h-[246px] left-1/2 -translate-x-1/2" style={{ top: '-160px' }}>
                  <img src="/icons/Dinheiro-2.png" alt="Ícone Dinheiro" className="w-full h-full object-contain" />
                </div>
              )}
              {i === 2 && (
                <div className="absolute hidden md:flex items-center justify-center w-[246px] h-[246px] left-1/2 -translate-x-1/2" style={{ top: '-191px' }}>
                  <img src="/icons/Alto_Falante-2.png" alt="Ícone Alto-Falante" className="w-full h-full object-contain" />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card-dark w-full transition-all duration-300 cursor-pointer p-7 flex flex-col items-start text-left relative z-0"
                whileHover={{ y: -6, borderColor: 'hsl(var(--amber) / 0.25)' }}
              >
                <h3 className="font-bold text-studio-gray-100 text-base mb-3">{card.title}</h3>
                <p className="text-studio-gray-100 text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <p className="text-center mx-auto mt-[52px] max-w-[560px] text-lg leading-relaxed text-studio-gray-700">
          Enquanto não souber qual é o seu gargalo,<br />vai continuar tentando resolver tudo<br />
          <span className="font-bold text-studio-gray-900">— e não resolver nada.</span>
        </p>

        {/* CTA */}
        <div className="mt-11 text-center">
          <a href="#preco" className="btn-amber text-sm tracking-widest px-12 py-[18px]">
            QUERO DESCOBRIR O MEU GARGALO · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
