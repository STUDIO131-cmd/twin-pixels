import { motion } from "framer-motion";

const cards = [
  "Se você é profissional liberal — nutricionista, psicólogo, arquiteto, advogado — você sabe que entrega resultado. Mas na hora de explicar isso pro cliente, não sai. Manda proposta e torce. Não sabe fazer follow-up sem parecer insistente.",
  "Se você é dono de clínica ou escritório — você tem método, tecnologia, diferencial técnico. Mas o cliente não sabe disso antes de entrar. Entre a primeira conversa e o fechamento, ele some.",
  "Se você tem negócio físico — restaurante, loja, ateliê — o cliente veio uma vez, gostou, mas nunca mais apareceu. Abre o Instagram e fica 20 minutos olhando pro nada.",
  "Se você faz trabalho personalizado — o produto é 100% você. Mas você compete como se fosse igual a todo mundo. O cliente só ouve o preço.",
];

const IdentificationSection = () => {
  return (
    <section className="relative py-20 md:py-28 noise-bg">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">Isso é sobre você?</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-10">
          Você sabe que é bom no que faz. Mas na hora de mostrar isso pro mundo, trava.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground font-body mt-8 max-w-3xl leading-relaxed">
          O problema não é falta de competência. É falta de estrutura pra transformar competência em posicionamento, comunicação e venda.
        </p>

        <div className="mt-8">
          <a href="#preco" className="btn-cta">Quero clareza · R$47</a>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
