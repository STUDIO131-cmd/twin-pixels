import { motion } from "framer-motion";

const ForWhoSection = () => {
  return (
    <section className="py-16 md:py-24 section-dark">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Para quem?
          </h2>
          <h3 className="font-display text-lg md:text-xl text-gold mb-6 leading-relaxed">
            Para pequenos e médios empresários da região que já têm capacidade — e querem direção para transformar marca pessoal em crescimento.
          </h3>
          <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
            <p>já tem capacidade, mas trava na hora de decidir o que vem primeiro;</p>
            <p>se informa muito, mas executa pouco com rotina;</p>
            <p>trabalha demais e sente que o resultado não acompanha;</p>
            <p>vende, mas sem previsibilidade (todo mês recomeça do zero);</p>
            <p>tem visão de expansão, mas não tem um mapa claro de posicionamento, conteúdo e vendas.</p>
            <p className="text-foreground font-medium mt-6">
              Se você sente essa contradição silenciosa — competência alta, direção baixa — então essa Imersão é o seu lugar.
            </p>
          </div>
          <div className="mt-8">
            <a href="#lista" className="btn-cta">
              QUERO GARANTIR A MINHA VAGA
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;
