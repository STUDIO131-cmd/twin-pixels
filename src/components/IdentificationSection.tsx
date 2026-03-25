import { motion } from "framer-motion";

const cards = [
  {
    icon: "/icons/Liberal.png",
    title: "Se você é profissional liberal",
    text: "Nutricionista, psicólogo, arquiteto, advogado — você sabe que entrega resultado. Mas na hora de explicar isso para o cliente, não sai. Manda proposta e torce. Não sabe fazer follow-up sem parecer insistente.",
  },
  {
    icon: "/icons/Clinica.png",
    title: "Se você é dono de clínica ou escritório",
    text: "Você tem método, tecnologia, diferencial técnico. Mas o cliente não sabe disso antes de entrar. Entre a primeira conversa e o fechamento, ele some. Você não sabe o que aconteceu.",
  },
  {
    icon: "/icons/Loja_Fisica.png",
    title: "Se você tem negócio físico",
    text: "Restaurante, loja, ateliê — o cliente veio uma vez, gostou, mas nunca mais apareceu. Você não tem como chamar ele de volta. Abre o Instagram e fica 20 minutos olhando para o nada. Fecha sem postar.",
  },
  {
    icon: "/icons/Personalizado.png",
    title: "Se você faz trabalho personalizado",
    text: "O produto é 100% você. Mas você compete como se fosse igual a todo mundo. Explica quanto tempo leva, quanto material usa. Mas o cliente só ouve o preço.",
  },
];

const IdentificationSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[hsl(var(--dark-bg-alt))]">
      <div className="container max-w-[1100px] mx-auto px-4">
        {/* Label */}
        <p className="text-center mb-3 text-[13px] font-light text-muted-foreground tracking-widest">
          Isso é sobre você?
        </p>

        {/* Título */}
        <h2
          className="text-center text-white mx-auto mb-14 font-bold leading-tight max-w-[800px]"
          style={{ fontSize: 'clamp(18px, 2.8vw, 31px)' }}
        >
          Você sabe que é bom no que faz.
          <br />
          Mas na hora de mostrar isso pro mundo, trava.
        </h2>

        {/* Grid 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="identification-card glass-card relative cursor-pointer h-full flex flex-col items-center p-8 text-center"
            >
              {/* Ícones */}
              {i === 0 && (
                <div className="w-[100px] h-[100px] mb-4 flex items-center justify-center icon-glow-white">
                  <img src="/icons/personalizado-5.png" alt="Ícone" className="w-full h-full object-contain icon-neon-white" />
                </div>
              )}
              {i === 1 && (
                <div className="w-16 h-[100px] mb-4 flex items-center justify-center icon-glow-white">
                  <img src="/icons/Layer_13-2.png" alt="Ícone" className="w-full h-full object-contain icon-neon-white" />
                </div>
              )}
              {i === 2 && (
                <div className="w-16 h-[100px] mb-4 flex items-center justify-center icon-glow-white">
                  <img src="/icons/loja-2.png" alt="Ícone" className="w-full h-full object-contain icon-neon-white" />
                </div>
              )}
              {i === 3 && (
                <div className="w-[100px] h-[100px] mb-4 flex items-center justify-center icon-glow-white">
                  <img src="/icons/Liberal-2.svg" alt="Ícone" className="w-full h-full object-contain icon-neon-white" />
                </div>
              )}

              <h3 className="font-bold text-[15px] text-white text-center w-full mb-3 leading-snug">
                {card.title}
              </h3>

              <p className="text-[13px] leading-relaxed text-studio-gray-300 text-center w-full m-0">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Texto final */}
        <p className="text-center mx-auto mt-14 max-w-[680px] text-lg leading-relaxed">
          <span className="text-studio-gray-300">
            O problema não é falta de competência.{" "}
          </span>
          <strong className="text-white font-bold">
            É falta de estrutura para transformar competência em posicionamento,
            comunicação e venda.
          </strong>
        </p>

        {/* Botão CTA */}
        <div className="mt-11 text-center">
          <a href="#preco" className="btn-amber text-[15px] tracking-widest px-[52px] py-[18px]">
            QUERO CLAREZA · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
