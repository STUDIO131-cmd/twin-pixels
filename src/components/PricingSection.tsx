import { motion } from "framer-motion";
import { CreditCard, BookOpen, Wine, Camera } from "lucide-react";

const includes = [
  { icon: CreditCard, text: "Acesso aos dois dias de evento" },
  { icon: BookOpen, text: "Apostila com exercícios guiados" },
  { icon: Wine, text: "Happy Hour incluso" },
  { icon: Camera, text: "Retrato com Igor Gagliard" },
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 section-darker">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Includes */}
          <div className="space-y-6">
            {includes.map((item) => (
              <div key={item.text} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-display text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Sua vaga na Jornada Imersão
            </h2>
            <p className="font-display text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Investimento
            </p>
            <p className="text-muted-foreground font-body">
              De{" "}
              <span className="line-through text-destructive">R$1.500,00</span>{" "}
              por
            </p>
            <p className="font-display text-4xl md:text-5xl font-bold text-gold mt-2">
              12x de R$90,06
            </p>
            <p className="text-muted-foreground font-body mt-2">
              ou R$897,00 à vista
            </p>
            <div className="mt-8">
              <a href="#lista" className="btn-cta w-full block text-center">
                GARANTIR ACESSO
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
