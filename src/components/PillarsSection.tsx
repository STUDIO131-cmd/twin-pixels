import { motion } from "framer-motion";

const Pillar = ({ num, title, subtitle, desc, items, img, icon, reverse = false, iconPos = "left" }: any) => (
  <div className="relative w-full max-w-[860px] mx-auto mb-12">


    
    <div className="relative overflow-hidden rounded-[20px]">
      <img src={img} alt="" className="w-full h-auto object-cover" />
      
      {/* Text Overlay Container */}
      <div className={`absolute inset-0 flex flex-col justify-center p-8 md:p-12 ${reverse ? 'items-start text-left' : 'items-end text-right'}`}>
        <div
          className="max-w-[50%] space-y-2"
        >
          <div className="mb-4">
            <span className="block text-white text-[32px] md:text-[56px] font-bold leading-none">Pilar {num}</span>
            <span className="block text-[#D87E5F] text-[14px] md:text-[18px] font-semibold uppercase">{title}</span>
          </div>
          
          <div className="hidden md:block space-y-3">
             <p className="text-white font-medium text-[15px]">{subtitle}</p>
             <p className="text-neutral-300 text-[13px] leading-relaxed">{desc}</p>
             <div className="pt-2 text-neutral-400 text-[12px] space-y-1">
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
      {/* Background photos collage */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          <div className="relative overflow-hidden">
            <img src="/images/DSC05896.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative overflow-hidden">
            <img src="/images/DSC07091.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative overflow-hidden">
            <img src="/images/DSC07094.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(239,231,218,0.92) 0%, rgba(239,231,218,0.75) 30%, rgba(239,231,218,0.75) 70%, rgba(239,231,218,0.92) 100%)' }} />
      </div>
      <div className="max-w-[860px] mx-auto relative z-10" style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)',
        backdropFilter: 'blur(40px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(40px) saturate(1.4)',
        border: '1px solid rgba(255,255,255,0.4)',
        borderRadius: '28px',
        padding: '48px 0px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(255,255,255,0.1)',
      }}>
        <div className="text-center mb-20">
          <p className="text-[13px] tracking-widest text-neutral-500 mb-3">A estrutura</p>
          <h2 className="text-[32px] md:text-[48px] font-bold text-neutral-900 leading-tight">Três perguntas.<br />Um diagnóstico.</h2>
        </div>

        <Pillar 
          num="01" 
          title="Clareza de Marca" 
          subtitle="Por que o cliente me escolheria?"
          desc="O cliente entende o que você faz ou você parece mais um no mercado?"
          items={["- Diferencial claro", "- Promessa que faz sentido", "- Facilidade de explicar"]}
          img="/images/Pasta_Pilar_1.png"
          icon="/icons/Ce.png"
          reverse={false}
          iconPos="left"
        />

        <Pillar 
          num="02" 
          title="Conteúdo Inteligente" 
          subtitle="O que eu falo para atrair e reter?"
          desc="O que você posta está atraindo o cliente certo ou é só esforço sem direção?"
          items={["- Falando o que o cliente quer ouvir", "- Aparecendo o suficiente para ser lembrado", "- Esforço que cabe na sua rotina"]}
          img="/images/Pasta_Pilar_2.png"
          icon="/icons/Mega.png"
          reverse={true}
          iconPos="right"
        />

        <Pillar 
          num="03" 
          title="Receita e Estrutura" 
          subtitle="Como vender e lucrar mais?"
          desc="Onde está perdendo dinheiro? Na hora de apresentar preço? No follow-up? Na falta de processo?"
          items={["- Saber quanto cobrar e como apresentar", "- Não perder cliente por falta de acompanhamento", "- Vender mais ou vender melhor"]}
          img="/images/Pasta_Pilar_3.png"
          icon="/icons/Cifrao.png"
          reverse={false}
          iconPos="left"
        />

        {/* Botão CTA */}
        <div className="text-center mt-8">
          <a
            href="#preco"
            className="inline-block cursor-pointer uppercase font-bold text-[15px] tracking-wide text-white bg-[#D15E4A] rounded-lg px-12 py-5 transition-all duration-200 hover:shadow-[0_0_30px_rgba(209,94,74,0.9),0_0_60px_rgba(209,94,74,0.5)] hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              boxShadow: "0 0 20px rgba(209,94,74,0.55), 0 0 40px rgba(209,94,74,0.28)",
            }}
          >
            QUERO FAZER ESSE DIAGNÓSTICO · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
