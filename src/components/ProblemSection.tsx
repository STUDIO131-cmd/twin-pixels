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
            fontSize: "clamp(19px, 2.8vw, 32px)",
            maxWidth: "720px",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          <span style={{ color: "#1a1a1a", fontWeight: 700 }}>O problema não é falta de esforço </span>{' '}
          <span style={{ color: "#1a1a1a", fontWeight: 700 }}>É não saber onde está o gargalo.</span>
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

        {/* Ícones + Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto" style={{ maxWidth: '860px', alignItems: 'start', marginTop: '17%' }}>
          {cards.map((card, i) => (
            <div key={i} className="relative flex flex-col items-center">

              {/* Ícone cérebro acima do card */}
              {i === 1 && (
                <div className="absolute flex items-center justify-center" style={{ width: '246px', height: '246px', top: '-182px', left: '-95%' }}>
                  <img src="/icons/Cerebro-3.png" alt="Ícone" className="w-full h-full object-contain" />
                </div>
              )}

              {/* Ícone dinheiro centralizado com o card */}
              {i === 1 && (
                <div className="absolute flex items-center justify-center" style={{ width: '246px', height: '246px', top: '-182px', left: '50%', transform: 'translateX(-50%)' }}>
                  <img src="/icons/Dinheiro-2.png" alt="Ícone Dinheiro" className="w-full h-full object-contain" />
                </div>
              )}

              {/* Ícone alto-falante centralizado com o terceiro card */}
              {i === 2 && (
                <div className="absolute flex items-center justify-center" style={{ width: '205px', height: '205px', top: '-162px', left: '50%', transform: 'translateX(-50%)' }}>
                  <img src="/icons/Alto_Falante-2.png" alt="Ícone Alto-Falante" className="w-full h-full object-contain" />
                </div>
              )}


              {/* Card Independente */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="w-full transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(50,42,35,0.88)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '28px 24px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  position: 'relative',
                  zIndex: 0,
                }}
                whileHover={{ y: -6, borderColor: 'rgba(217,119,6,0.25)' }}
              >
                <h3 style={{ fontWeight: 700, color: '#eaeaea', fontSize: '16px', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ fontWeight: 400, color: '#eaeaea', fontSize: '14px', lineHeight: 1.7 }}>{card.text}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <p className="text-center mx-auto" style={{ marginTop: '52px', maxWidth: '560px', fontSize: '18px', lineHeight: 1.7, fontWeight: 400, color: '#555' }}>
          Enquanto não souber qual é o seu gargalo,<br />vai continuar tentando resolver tudo<br />
          <span style={{ fontWeight: 700, color: '#1a1a1a' }}>— e não resolver nada.</span>
        </p>

        {/* CTA */}
        <div className="mt-11 text-center">
          <a
            href="#preco"
            className="problem-cta inline-block cursor-pointer uppercase"
            style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.06em', color: '#1a1a1a', background: '#D97706', borderRadius: '999px', padding: '18px 48px', border: 'none', boxShadow: '0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28)', transition: 'all 0.2s ease', textDecoration: 'none' }}
          >
            QUERO DESCOBRIR O MEU GARGALO · R$47
          </a>
        </div>
      </div>

      <style>{`
        .problem-cta:hover {
          box-shadow: 0 0 30px rgba(217,119,6,0.9), 0 0 60px rgba(217,119,6,0.5) !important;
          transform: translateY(-2px) scale(1.02);
        }
        .problem-cta:active {
          transform: scale(0.98) !important;
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
