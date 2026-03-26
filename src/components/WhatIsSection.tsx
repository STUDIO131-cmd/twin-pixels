import { motion } from "framer-motion";

const cards = [
  { title: "Clareza de Marca", text: "O cliente sabe por que te escolher?" },
  { title: "Conteúdo Inteligente", text: "O que você posta atrai quem deveria?" },
  { title: "Receita Estruturada", text: "Você sabe converter e crescer?" },
];

const WhatIsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/backgrounds/Background.png')" }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,12,8,0.75) 0%, rgba(15,12,8,0.70) 50%, rgba(15,12,8,0.80) 100%)',
        }}
      />

      {/* Decorative arrows */}
      <img
        src="/icons/Seta-3.png"
        alt=""
        className="absolute pointer-events-none z-[3] w-12 h-12 object-contain icon-neon-coral"
        style={{ top: 80, right: 40, mixBlendMode: 'screen' }}
      />
      <img
        src="/icons/Seta-3.png"
        alt=""
        className="absolute pointer-events-none z-[3] w-12 h-12 object-contain rotate-180 icon-neon-coral"
        style={{ bottom: 80, left: 40, mixBlendMode: 'screen' }}
      />

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Label */}
        <p className="text-center text-[13px] font-light text-muted-foreground tracking-widest mb-3">
          O que é a Jornada?
        </p>

        {/* Título */}
        <h2
          className="text-center mx-auto font-bold text-white leading-tight max-w-[720px] mb-7"
          style={{ fontSize: 'clamp(21px, 3.2vw, 35px)' }}
        >
          Uma imersão de diagnóstico.
          <br />
          Não mais um curso de marketing.
        </h2>

        {/* Subtítulo */}
        <div className="text-center mx-auto max-w-[560px] mb-12">
          <p className="text-[17px] text-studio-gray-300">
            A Jornada de Ascensão não vai te encher de informação.
          </p>
          <p className="text-[17px] font-semibold text-white mt-1.5">
            Vai te ajudar a enxergar onde você está travado.
          </p>
        </div>

        {/* Texto central */}
        <div className="text-center mx-auto max-w-[480px] mb-8">
          <p className="font-bold text-[17px] text-white leading-normal">
            Em 1 dia, você passa pelos 3 pilares
            <br />
            que sustentam qualquer negócio:
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-auto max-w-[860px] mb-12 items-stretch">
          {cards.map((card, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {/* Icons */}
              {i === 0 && (
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 flex-shrink-0 flex items-center justify-center icon-glow-coral">
                  <img src="/icons/cerebro_copy2-2.png" alt="Ícone" className="w-full h-full object-contain icon-neon-coral" loading="lazy" />
                </div>
              )}
              {i === 1 && (
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 flex-shrink-0 flex items-center justify-center icon-glow-coral">
                  <img src="/icons/megaphone.png" alt="Ícone" className="w-full h-full object-contain icon-neon-coral" loading="lazy" />
                </div>
              )}
              {i === 2 && (
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 flex-shrink-0 flex items-center justify-center icon-glow-coral">
                  <img src="/icons/Layer_12_copy.png" alt="Ícone" className="w-full h-full object-contain icon-neon-coral" loading="lazy" />
                </div>
              )}

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card relative group cursor-pointer p-7 flex flex-col items-center text-center transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity duration-300"
                  style={{ background: 'radial-gradient(circle at 50% 0%, hsl(var(--amber) / 0.07) 0%, transparent 65%)' }}
                />
                <h3 className="font-bold text-base text-white mb-2.5 w-full" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2)' }}>
                  {card.title}
                </h3>
                <p className="text-sm text-studio-gray-300 leading-relaxed w-full">
                  {card.text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Texto final */}
        <div className="text-center mx-auto max-w-[600px] mt-12">
          <p className="text-lg text-studio-gray-300">
            Você sai sabendo qual eixo precisa de atenção primeiro —
          </p>
          <p className="text-lg font-bold text-white mt-1.5">
            e o que fazer a partir do dia seguinte.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-11 text-center">
          <a href="#preco" className="btn-amber text-[15px] tracking-widest px-[52px] py-[18px]">
            QUERO PARTICIPAR · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
