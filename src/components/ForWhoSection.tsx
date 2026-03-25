import { motion } from "framer-motion";

const cards = [
  {
    icon: "/icons/Liberal-2.svg",
    title: "Profissional-Marca",
    subtitle: "Você é o produto.",
    body: 'Nutricionista, psicólogo, arquiteto, advogado, contador, consultor. Seu nome é a marca. Sabe que precisa aparecer mais, mas na hora de se posicionar, trava. Não sabe como traduzir sua expertise em comunicação que o mercado entende — e que converte em cliente.',
    quote: '"Sou bom no que faço, mas não sei mostrar isso."',
  },
  {
    icon: "/icons/Layer_13.png",
    title: "Dono Operacional",
    subtitle: "Você é a face de um negócio com equipe.",
    body: 'Clínica, escritório, estúdio. Tem diferencial técnico, método próprio, resultado comprovado — mas ninguém sabe. O cliente chega por indicação e não entende o valor antes de experimentar. Você quer atrair o cliente certo antes dele precisar perguntar pra alguém.',
    quote: '"Tenho diferencial, mas o mercado não enxerga."',
  },
  {
    icon: "/icons/Loja.png",
    title: "Marca Artesanal",
    subtitle: "Você é o dono e único operador estratégico.",
    body: 'Restaurante, loja, ateliê, confeitaria. Você depende de fluxo. Sabe que precisa gerar demanda além do boca a boca — mas não tem equipe de marketing, e não pode parar a operação pra aprender. Precisa de um sistema simples que traga cliente qualificado.',
    quote: '"Preciso de cliente entrando, mas não sei como atrair sem depender de sorte."',
  },
  {
    icon: "/icons/personalizado.png",
    title: "Artesão-Especialista",
    subtitle: "Você é o diferencial.",
    body: 'Produto 100% personalizado. Capacidade limitada. Você faz o que pouca gente faz. Mas compete como se fosse igual a todo mundo. Precisa posicionar seu trabalho como premium, justificar seu preço e criar desejo em quem pode pagar — sem precisar convencer.',
    quote: '"Faço trabalho único, mas cobro como se fosse comum."',
  },
];

const ForWhoSection = () => {
  return (
    <section className="relative py-24 bg-[hsl(var(--dark-bg-deep))]">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.28]"
        style={{ backgroundImage: "url('/backgrounds/black-graph-paper.jpg')" }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-4" style={{ isolation: 'isolate' }}>
        {/* Label */}
        <p className="text-center text-[13px] font-light text-muted-foreground tracking-widest mb-2">
          Para quem é
        </p>

        {/* Title */}
        <h2
          className="text-center mx-auto text-white font-bold mb-12 max-w-[800px] leading-tight"
          style={{ fontSize: 'clamp(26px, 4vw, 46px)' }}
        >
          Se você se reconhece aqui,{" "}
          <span className="font-bold">é para você.</span>
        </h2>

        {/* Cards Grid 2x2 */}
        <div className="forwho-grid grid gap-5 max-w-[900px] mx-auto items-stretch" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              {/* Icon above card */}
              <div className="h-[94px] flex items-end">
                {i === 0 && (
                  <img src="/icons/personalizado-7.png" alt="" className="w-[104px] h-[104px] object-contain mb-2"
                    style={{ filter: 'invert(1) brightness(2) drop-shadow(0 0 6px hsl(var(--studio-gray-100) / 0.6)) drop-shadow(0 0 12px hsl(var(--studio-gray-100) / 0.3))' }}
                  />
                )}
                {i === 1 && (
                  <img src="/icons/Layer_13-3.png" alt="" className="w-[94px] h-[94px] object-contain mb-2"
                    style={{ filter: 'drop-shadow(0 0 6px hsl(var(--studio-gray-100) / 0.6)) drop-shadow(0 0 12px hsl(var(--studio-gray-100) / 0.3))' }}
                  />
                )}
                {i === 2 && (
                  <img src="/icons/loja-3.png" alt="" className="w-[94px] h-[94px] object-contain mb-2"
                    style={{ filter: 'drop-shadow(0 0 6px hsl(var(--studio-gray-100) / 0.6)) drop-shadow(0 0 12px hsl(var(--studio-gray-100) / 0.3))' }}
                  />
                )}
                {i === 3 && (
                  <img src="/icons/Liberal-3.svg" alt="" className="w-[116px] h-[116px] object-contain -mb-0.5"
                    style={{ filter: 'invert(1) brightness(2) drop-shadow(0 0 6px hsl(var(--studio-gray-100) / 0.6)) drop-shadow(0 0 12px hsl(var(--studio-gray-100) / 0.3))' }}
                  />
                )}
              </div>

              <motion.div
                className="text-studio-sand-100 glass-card-forwho w-full cursor-pointer p-8 pb-9 flex flex-col items-start text-left relative overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.3)' }}
                style={{ transition: 'border-color 0.3s ease' }}
              >
                <div className="flex flex-row justify-between items-start w-full mb-5">
                  <div>
                    <h3 className="font-bold text-[15px] text-studio-gray-100 mb-1">{card.title}</h3>
                    <p className="text-[13px] text-studio-gray-100">{card.subtitle}</p>
                  </div>
                </div>

                <div className="border-t border-black/[0.08] w-full mb-5" />

                <p className="text-sm leading-loose text-studio-gray-100 mb-5">{card.body}</p>
                <p className="font-bold text-sm text-studio-gray-100">{card.quote}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Cut text */}
        <div className="text-center mx-auto max-w-[640px] mt-[52px]">
          <p className="text-lg leading-relaxed text-studio-gray-300">
            Se você já fatura, já atende clientes e quer crescer com mais clareza e estrutura —{" "}
            <span className="font-bold text-white">é para você.</span>
          </p>
          <p className="text-lg leading-relaxed text-studio-gray-300 mt-3">
            Se ainda está validando ideia, não tem clientes ou está começando do zero —{" "}
            <span className="font-bold text-white">pode ser cedo.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#preco" className="btn-amber text-[15px] tracking-widest px-[52px] py-[18px]">
            ISSO SOU EU · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
