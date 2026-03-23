import { Check } from "lucide-react";
import { motion } from "framer-motion";

const includes = [
  "Imersão ao vivo (9h às 15h)",
  "Análise dos 3 eixos: marca, conteúdo, vendas",
  "Diagnóstico do seu gargalo principal",
  "Clareza do próximo passo",
];

const PricingSection = () => {
  return (
    <section id="preco" className="relative py-20 md:py-28 noise-bg">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">Investimento</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-2">
          Menos do que vale uma hora da sua agenda.
        </h2>
        <p className="text-muted-foreground font-body mb-10 leading-relaxed">
          A clareza que você vai ter em 1 dia custa menos do que o tempo que você perde toda semana tentando resolver sozinho.
        </p>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border-2 border-coral/40 rounded-2xl p-8 md:p-10 max-w-lg mx-auto"
        >
          <div className="inline-block bg-coral/10 text-coral font-display text-xs font-bold px-3 py-1 rounded-full mb-4">
            Imersão Online · 11 de abril
          </div>

          <div className="mb-2">
            <span className="text-muted-foreground font-body text-sm">LOTE 1</span>
          </div>
          <p className="font-display text-5xl md:text-6xl font-bold text-coral">R$47</p>
          <p className="text-muted-foreground font-body text-sm mt-1">até 06/04</p>

          <div className="mt-4 mb-6">
            <span className="text-muted-foreground font-body text-sm">LOTE 2: </span>
            <span className="text-muted-foreground font-body text-sm line-through">R$99</span>
            <span className="text-muted-foreground font-body text-xs ml-2">a partir de 07/04</span>
          </div>

          <p className="text-muted-foreground font-body text-xs mb-6">Pagamento único</p>

          <div className="space-y-3 mb-8">
            {includes.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-verde mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-body text-sm">{item}</span>
              </div>
            ))}
          </div>

          <a href="#" className="btn-cta w-full block text-center">
            Garantir minha vaga · R$47
          </a>
        </motion.div>

        {/* Order bump */}
        <div className="max-w-lg mx-auto mt-6 border border-dashed border-border rounded-xl p-6 bg-card">
          <p className="font-display font-bold text-foreground text-lg mb-2">+ R$100</p>
          <p className="font-display font-bold text-foreground text-sm mb-1">
            Gravação da imersão + Prompt de diagnóstico guiado no Claude
          </p>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Leve a imersão com você. Reveja quando quiser. Use o prompt para diagnósticos futuros com IA.
          </p>
        </div>

        {/* Urgency bar */}
        <div className="mt-8 bg-coral rounded-lg py-3 px-6 text-center max-w-lg mx-auto">
          <p className="text-white font-display font-bold text-sm">
            Lote 1 encerra em 06/04 · Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
