import { motion } from "framer-motion";

const profiles = [
  {
    icon: (
      <svg className="w-8 h-8 text-coral" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="10" r="6" /><path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" strokeLinecap="round" />
      </svg>
    ),
    title: "Profissional-Marca",
    desc: "Você é o produto. Nutricionista, psicólogo, arquiteto, advogado. Seu nome é a marca.",
    quote: "Sou bom no que faço, mas não sei mostrar isso.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-coral" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="12" width="20" height="14" rx="2" /><path d="M10 12V8a6 6 0 0112 0v4" strokeLinecap="round" />
      </svg>
    ),
    title: "Dono Operacional",
    desc: "Você é a face de um negócio com equipe. Clínica, escritório, estúdio.",
    quote: "Tenho diferencial, mas o mercado não enxerga.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-coral" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="6" width="16" height="20" rx="2" /><path d="M12 22h8M12 18h8M12 14h4" strokeLinecap="round" />
      </svg>
    ),
    title: "Marca Artesanal",
    desc: "Restaurante, loja, ateliê. Depende de fluxo e movimento.",
    quote: "Preciso de cliente entrando, mas não sei como atrair sem depender de sorte.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-coral" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4l4 8h-8l4-8zM8 16h16v10H8z" strokeLinejoin="round" /><path d="M14 22v4M18 22v4" strokeLinecap="round" />
      </svg>
    ),
    title: "Artesão-Especialista",
    desc: "Produto 100% personalizado. Você faz o que pouca gente faz.",
    quote: "Faço trabalho único, mas cobro como se fosse comum.",
  },
];

const ForWhoSection = () => {
  return (
    <section className="relative py-20 md:py-28 noise-bg">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">Para quem é</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-10">
          Se você se reconhece aqui, é para você.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="mb-3">{p.icon}</div>
              <h3 className="font-display font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">{p.desc}</p>
              <p className="text-coral font-display font-bold text-sm italic">"{p.quote}"</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-card border border-coral/30 rounded-xl p-6 mt-8">
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Se você já fatura, já atende clientes e quer crescer com mais clareza — é para você.
            Se ainda está validando ideia ou começando do zero — pode ser cedo.
          </p>
        </div>

        <div className="mt-8">
          <a href="#preco" className="btn-cta">Isso sou eu · R$47</a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
