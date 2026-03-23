import { motion } from "framer-motion";

const items = [
  { emoji: "🎯", label: "Clareza de Marca", desc: "o cliente sabe por que te escolher?" },
  { emoji: "📢", label: "Conteúdo Inteligente", desc: "o que você posta atrai quem deveria?" },
  { emoji: "💰", label: "Receita Estruturada", desc: "você sabe converter e crescer?" },
];

const WhatIsSection = () => {
  return (
    <section className="relative py-20 md:py-28 noise-bg">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">O que é a Jornada</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Uma imersão de diagnóstico. Não mais um curso de marketing.
        </h2>
        <p className="text-muted-foreground font-body mb-10 leading-relaxed">
          A Jornada de Ascensão não vai te encher de informação. Vai te ajudar a enxergar onde você está travado.
        </p>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
            >
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <span className="font-display font-bold text-foreground">{item.label}</span>
                <span className="text-muted-foreground font-body"> — {item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground font-body mt-8 leading-relaxed">
          Você sai sabendo qual eixo precisa de atenção primeiro — e o que fazer a partir do dia seguinte.
        </p>

        <div className="mt-8">
          <a href="#preco" className="btn-cta">Quero participar · R$47</a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
