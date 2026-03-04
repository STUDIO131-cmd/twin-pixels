import { motion } from "framer-motion";
import { Brain, Instagram, DollarSign } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Posicionamento de Marca",
    description:
      "Você vai construir a base do seu posicionamento: entender o seu público (autoimagem e percepção externa), definir a identidade da marca (personalidade, universo e narrativa), cristalizar a promessa e transformar isso em uma oferta coerente para sair com uma marca clara, reconhecível e com direção.",
  },
  {
    icon: Instagram,
    title: "Conteúdo",
    description:
      "Traduzir seu posicionamento em comunicação intencional e consistente: escolher formatos que reforçam percepção e autoridade, e construir uma narrativa que organiza o que você diz (e repete com intenção) até virar referência — gerando conteúdo que não só atrai, mas sustenta presença, cria reconhecimento e prepara o caminho para a venda.",
  },
  {
    icon: DollarSign,
    title: "Vendas",
    description:
      "Estruturar vendas para gerar lucro com previsibilidade: definir o que medir e como decidir com dados, desenhar uma arquitetura de receita (funil, fontes de lucro e fluxo de conversão), escolher poucos canais que façam sentido para o seu contexto e operar um ciclo contínuo de análise e ajustes para crescer de forma mensurável, sustentável e sob seu comando.",
  },
];

const MethodologySection = () => {
  return (
    <section className="py-16 md:py-24 section-dark">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-2">
            O que você vai levar
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Estrutura da Metodologia
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Entregáveis práticos para sair da Imersão com direção —{" "}
            <strong className="text-foreground">e não com mais anotações.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-gold/30 transition-colors duration-300"
            >
              <card.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
