import { motion } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg className="w-10 h-10 text-coral" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="16" r="8" />
        <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
        <path d="M24 8v-4M32 12l3-3M16 12l-3-3" strokeLinecap="round" />
      </svg>
    ),
    title: "Pode ser marca.",
    text: "O cliente não entende por que escolher você. Você parece igual a todo mundo.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-coral" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 28l8-12h6l-4 8h8l-12 16 2-12H8z" strokeLinejoin="round" />
        <circle cx="32" cy="12" r="6" />
        <path d="M32 18v4M32 26v2" strokeLinecap="round" />
      </svg>
    ),
    title: "Pode ser conteúdo.",
    text: "Você posta, mas não atrai quem deveria. O esforço não vira resultado.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-coral" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="14" />
        <path d="M24 16v4l-2 4h4l-2 4v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Pode ser vendas.",
    text: "A demanda existe, mas não converte. Você perde cliente por falta de processo.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-card noise-bg">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">O que ninguém fala</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          O problema não é falta de esforço. É não saber onde está o gargalo.
        </h2>
        <p className="text-muted-foreground font-body mb-10 leading-relaxed">
          Você não precisa de mais conteúdo. Não precisa de mais curso. Você precisa saber qual parte do seu negócio está travando o resto:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="bg-background border border-border rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">{p.icon}</div>
              <h3 className="font-display font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground font-body italic mt-8 max-w-3xl leading-relaxed">
          Enquanto não souber qual é o seu gargalo, vai continuar tentando resolver tudo — e não resolver nada.
        </p>

        <div className="mt-8">
          <a href="#preco" className="btn-cta">Quero descobrir meu gargalo · R$47</a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
