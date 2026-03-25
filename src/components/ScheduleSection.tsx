import { motion } from "framer-motion";

const schedule = [
  { time: "9:00h", color: "hsl(var(--studio-red-500))", title: "Clareza de Marca", desc: "Por que o cliente te escolheria? Você analisa diferencial, promessa e posicionamento." },
  { time: "11:00h", color: "hsl(15, 55%, 52%)", title: "Conteúdo Inteligente", desc: "O que você posta está atraindo? Você analisa pilares, formatos e rotina." },
  { time: "12:00h", color: "hsl(25, 55%, 48%)", title: "Pausa", desc: "Intervalo para processar." },
  { time: "13:00h", color: "hsl(30, 70%, 44%)", title: "Receita Estruturada", desc: "Onde está perdendo dinheiro? Você analisa preço, conversão e relacionamento." },
  { time: "15:00h", color: "hsl(var(--amber))", title: "Diagnóstico", desc: "Você identifica o gargalo e define o próximo passo." },
];

const ScheduleSection = () => {
  return (
    <section
      className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounds/Background-10.webp')" }}
    >
      <div className="relative px-4 z-[2]">
        <div className="glass-card mx-auto max-w-[680px] p-12 pb-[52px]" style={{ borderRadius: 28 }}>
          <p className="text-center text-xs font-light text-muted-foreground tracking-widest uppercase mb-2.5">
            Como funciona
          </p>

          <h2 className="text-center text-3xl font-bold text-white leading-tight mb-7">
            Um dia. Online.<br />Direto ao que importa.<br /><br />
          </h2>

          <p className="text-center text-[15px] font-semibold text-studio-gray-300 mb-6" style={{ transform: 'translateY(-70%)' }}>
            11 de abril · Online
          </p>

          <div>
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="border-t border-white/[0.07]" />
                <div className="flex items-center py-[18px] gap-7 cursor-default">
                  <span
                    className="font-bold min-w-[140px] leading-none tracking-tight flex-shrink-0"
                    style={{
                      fontSize: 'clamp(28px, 4.5vw, 46px)',
                      color: item.color,
                      textShadow: `0 0 6px ${item.color}90, 0 0 12px ${item.color}60, 0 0 24px ${item.color}35`,
                    }}
                  >
                    {item.time}
                  </span>
                  <div className="flex flex-col items-start gap-1">
                    <p className="font-semibold text-[15px] text-white">{item.title}</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/[0.07]" />
          </div>

          <div className="mt-10 text-center">
            <a href="#preco" className="btn-amber text-[15px] tracking-widest px-[52px] py-[18px]">
              RESERVAR MEU LUGAR · R$47
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
