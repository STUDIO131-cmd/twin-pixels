import { Check } from "lucide-react";
import { motion } from "framer-motion";

const outcomes = [
  "Qual eixo está travando — marca, conteúdo ou vendas",
  "O que resolver primeiro — não uma lista infinita, uma prioridade",
  "Como continuar — se fizer sentido, o próximo passo existe",
];

const OutcomeSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-card noise-bg">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">O que muda</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Você sai sabendo o problema. E o próximo passo.
        </h2>
        <p className="text-muted-foreground font-body mb-8 leading-relaxed">
          A imersão não promete que você vai sair com tudo resolvido. Promete que você vai sair com{" "}
          <span className="text-coral font-display font-bold text-xl">CLAREZA</span>:
        </p>

        <div className="space-y-4">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
              <span className="text-foreground font-body leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground font-body italic mt-8">
          Diagnóstico real. Não promessa vazia.
        </p>

        <div className="mt-8">
          <a href="#preco" className="btn-cta">Quero essa clareza · R$47</a>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
