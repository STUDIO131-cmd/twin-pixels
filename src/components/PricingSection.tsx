import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <section id="preco" className="relative overflow-hidden py-24">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-[hsl(var(--dark-bg-alt))]"
        style={{ backgroundImage: "url('/backgrounds/Background_Pricing.png')" }}
      />

      <div className="relative z-[1] max-w-[900px] mx-auto px-4">
        {/* Label */}
        <p className="text-center text-[13px] font-light text-muted-foreground tracking-widest mb-2.5">
          Investimento
        </p>

        {/* Título */}
        <h2
          className="text-center font-bold text-white max-w-[720px] mx-auto mb-5 leading-tight text-[clamp(24px,3.5vw,40px)]"
        >
          Menos do que vale uma hora da sua agenda.
        </h2>

        {/* Subtítulo */}
        <p className="text-center text-base text-studio-gray-300 leading-relaxed max-w-[580px] mx-auto mb-12">
          A clareza que você vai ter em 1 dia custa menos do que o tempo que você perde toda semana tentando resolver sozinho.
        </p>

        {/* Ingresso 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-[760px] mx-auto mb-6"
        >
          <img
            src="/images/Ingresso_1.png"
            alt="Ingresso Lote 1"
            className="w-full h-auto block rounded-[20px] drop-shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            width={760}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Ingresso 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative max-w-[760px] mx-auto mb-10"
        >
          <img
            src="/images/Ingresso_2.png"
            alt="Ingresso Lote 2"
            className="w-full h-auto block rounded-[20px] drop-shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            width={760}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Urgência */}
        <p className="text-center font-bold text-xl text-white mb-8">
          Lote 1 encerra em 06/04 · <span className="text-studio-red-500">Vagas limitadas</span>
        </p>

        {/* Botão CTA */}
        <div className="text-center mb-4">
          <a href="#" className="btn-amber text-base tracking-widest px-14 py-5">
            GARANTIR MINHA VAGA · R$47
          </a>
        </div>

        {/* Barra de vagas */}
        <div className="w-80 mx-auto text-center">
          <div className="rounded-full h-1.5 overflow-hidden bg-studio-gray-700">
            <div className="w-[81%] bg-amber rounded-full h-full" />
          </div>
          <p className="font-light text-xs text-muted-foreground mt-2">
            81% das vagas preenchidas a R$47,00
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
