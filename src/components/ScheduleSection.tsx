import { motion } from "framer-motion";

const schedule = [
  { time: "9h00", title: "Clareza de Marca", desc: "Por que o cliente te escolheria? Você analisa diferencial, promessa e posicionamento." },
  { time: "11h00", title: "Conteúdo Inteligente", desc: "O que você posta está atraindo? Você analisa pilares, formatos e rotina." },
  { time: "12h00", title: "Pausa", desc: "Intervalo para processar." },
  { time: "13h00", title: "Receita Estruturada", desc: "Onde está perdendo dinheiro? Você analisa preço, conversão e relacionamento." },
  { time: "15h00", title: "Diagnóstico", desc: "Você identifica o gargalo e define o próximo passo." },
];

const ScheduleSection = () => {
  return (
    <section className="relative py-20 md:py-28 noise-bg">
      <div className="container max-w-3xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">Como funciona</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-2">
          Um dia. Online. Direto ao que importa.
        </h2>
        <p className="text-muted-foreground font-body mb-10">11 de abril · Online</p>

        <div className="relative border-l-2 border-border ml-4 space-y-8">
          {schedule.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-coral border-2 border-background" />
              <span className="font-display text-2xl md:text-3xl font-bold text-coral">{s.time}</span>
              <h3 className="font-display font-bold text-foreground mt-1">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#preco" className="btn-cta">Reservar meu lugar · R$47</a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
