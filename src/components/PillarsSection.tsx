import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Clareza de Marca",
    color: "border-azul/40",
    question: "Por que o cliente me escolheria?",
    text: "Você vai olhar para o seu negócio e responder com honestidade: o cliente entende o que você faz? Sabe por que você é diferente?",
    bullets: [
      "Se seu diferencial está claro ou só na sua cabeça",
      "Se sua promessa faz sentido para quem compra",
      "Se o cliente consegue explicar o que você faz",
    ],
  },
  {
    num: "02",
    title: "Conteúdo Inteligente",
    color: "border-verde/40",
    question: "O que eu falo para atrair e reter?",
    text: "Você vai olhar para sua presença digital e responder: o que você posta está atraindo o cliente certo?",
    bullets: [
      "Se está falando sobre o que o cliente quer ouvir",
      "Se está aparecendo o suficiente para ser lembrado",
      "Se o esforço que faz cabe na sua rotina",
    ],
  },
  {
    num: "03",
    title: "Receita Estruturada",
    color: "border-coral/40",
    question: "Como vender e lucrar mais?",
    text: "Você vai olhar para suas vendas e responder: onde está perdendo dinheiro?",
    bullets: [
      "Se sabe quanto cobrar e como apresentar",
      "Se está perdendo cliente por falta de acompanhamento",
      "Se faz mais sentido vender mais ou vender melhor",
    ],
  },
];

const PillarsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-card noise-bg">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">A estrutura</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-12">
          Três perguntas. Um diagnóstico.
        </h2>

        <div className="space-y-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bg-background border-l-4 ${p.color} border border-border rounded-xl p-6 md:p-8`}
            >
              <p className="text-muted-foreground font-display text-xs tracking-widest uppercase mb-2">
                Pilar {p.num}
              </p>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-coral font-body italic mb-3">"{p.question}"</p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{p.text}</p>
              <ul className="space-y-2">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                    <span className="text-coral mt-0.5">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#preco" className="btn-cta">Quero fazer esse diagnóstico · R$47</a>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
