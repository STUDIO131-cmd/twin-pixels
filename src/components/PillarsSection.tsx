import { motion } from "framer-motion";

const Pillar = ({ num, title, subtitle, desc, items, img, reverse = false, textOffset }: any) => (
  <div className="relative w-full max-w-[860px] mx-auto mb-[60px]">
    <div className="relative overflow-hidden rounded-[20px]">
      <picture>
        <source srcSet={img.replace('.png', '.webp')} type="image/webp" />
        <img src={img} alt="" width={860} height={484} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
      </picture>

      <div className={`absolute inset-0 flex flex-col justify-center p-8 md:p-12 ${reverse ? 'items-start text-left' : 'items-end text-right'}`}>
        <div
          className="max-w-[50%] space-y-2"
          style={{ transform: textOffset || (!reverse ? 'translateX(-60%) translateY(10%)' : 'translateX(15%)') }}
        >
          <div className="mb-4">
            <span className="block text-white text-[32px] md:text-[56px] font-bold leading-none">Pilar {num}</span>
            <span className="block text-studio-red-300 text-sm md:text-lg font-semibold uppercase">{title}</span>
          </div>

          <div className="hidden md:block space-y-3">
            <p className="text-white font-medium text-[15px]">{subtitle}</p>
            <p className="text-neutral-300 text-[13px] leading-relaxed">{desc}</p>
            <div className="pt-2 text-neutral-400 text-xs space-y-1">
              {items.map((item: string, idx: number) => <p key={idx}>{item}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PillarsSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-studio-gray-300" />
      <div className="glass-card-strong max-w-[860px] mx-auto relative z-10 py-9 px-0">
        <div className="text-center mb-14">
          <p className="text-[13px] tracking-widest text-studio-gray-500 mb-3">A estrutura</p>
          <h2 className="text-[32px] md:text-[48px] font-bold text-studio-gray-900 leading-tight">Três perguntas.<br />Um diagnóstico.</h2>
        </div>

        <Pillar
          num="01" title="Clareza de Marca"
          subtitle="Por que o cliente me escolheria?"
          desc="O cliente entende o que você faz ou você parece mais um no mercado?"
          items={["- Diferencial claro", "- Promessa que faz sentido", "- Facilidade de explicar"]}
          img="/images/Pasta_Pilar_1.png" reverse={false}
        />
        <Pillar
          num="02" title="Conteúdo Inteligente"
          subtitle="O que eu falo para atrair e reter?"
          desc="O que você posta está atraindo o cliente certo ou é só esforço sem direção?"
          items={["- Falando o que o cliente quer ouvir", "- Aparecendo o suficiente para ser lembrado", "- Esforço que cabe na sua rotina"]}
          img="/images/Pasta_Pilar_2.png" reverse={true}
          textOffset="translateX(15%) translateY(-5%)"
        />
        <Pillar
          num="03" title="Receita e Estrutura"
          subtitle="Como vender e lucrar mais?"
          desc="Onde está perdendo dinheiro? Na hora de apresentar preço? No follow-up? Na falta de processo?"
          items={["- Saber quanto cobrar e como apresentar", "- Não perder cliente por falta de acompanhamento", "- Vender mais ou vender melhor"]}
          img="/images/Pasta_Pilar_3.png" reverse={false}
          textOffset="translateX(-60%) translateY(0%)"
        />

        <div className="text-center mt-8">
          <a href="#preco" className="btn-coral text-[15px] tracking-wider px-12 py-5">
            QUERO FAZER ESSE DIAGNÓSTICO · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
