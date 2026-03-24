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

        {/* Círculo PNG + texto */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '700px', margin: '32px auto 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block', margin: '0 auto' }}>
            <p style={{ position: 'relative', zIndex: 2, fontWeight: 700, fontSize: '17px', color: '#1a1a1a', textAlign: 'center', padding: '12px 48px', lineHeight: 1.4 }}>
              Você precisa saber qual parte do seu<br />negócio está travando o resto:
            </p>
            <img src="/icons/Circulo-2.png" alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '110%', height: '140%', objectFit: 'fill', mixBlendMode: 'multiply', zIndex: 1, pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Setas PNG */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width: '100%', maxWidth: '700px', margin: '8px auto 0', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/icons/Setas.png" alt="" style={{ width: '120px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', transform: 'scaleX(-1)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/icons/Seta_1.png" alt="" style={{ width: '60px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/icons/Seta_2.png" alt="" style={{ width: '120px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />
          </div>
        </div>

        {/* Ícones + Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto" style={{ maxWidth: '860px', alignItems: 'start' }}>
          {cards.map((card, i) => (
            <div key={i}>
              {/* Ícone flutuante acima do card */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '140px', overflow: 'visible', marginBottom: '-20px', position: 'relative', zIndex: 2 }}>
                <img src={card.icon} alt="" style={{ width: '140px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', display: 'block' }} />
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="transition-all duration-300 cursor-pointer"
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
                  zIndex: 1,
                }}
                whileHover={{ y: -6, borderColor: 'rgba(217,119,6,0.25)' }}
              >
                <h3 style={{ fontWeight: 700, color: 'white', fontSize: '16px', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ fontWeight: 400, color: '#bbb', fontSize: '14px', lineHeight: 1.7 }}>{card.text}</p>
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
            className="inline-block cursor-pointer transition-all duration-200"
            style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#1a1a1a', background: '#D97706', borderRadius: '999px', padding: '18px 48px', border: 'none', boxShadow: '0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28)' }}
            onMouseEnter={(e) => { const t = e.currentTarget; t.style.boxShadow = '0 0 30px rgba(217,119,6,0.9), 0 0 60px rgba(217,119,6,0.5)'; t.style.transform = 'translateY(-2px) scale(1.02)'; }}
            onMouseLeave={(e) => { const t = e.currentTarget; t.style.boxShadow = '0 0 20px rgba(217,119,6,0.55), 0 0 40px rgba(217,119,6,0.28)'; t.style.transform = 'none'; }}
            onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; }}
          >
            QUERO DESCOBRIR O MEU GARGALO · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
