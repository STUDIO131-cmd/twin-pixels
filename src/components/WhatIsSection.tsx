import { motion } from "framer-motion";
import speakersImg from "@/assets/speakers.jpg";

const WhatIsSection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#14100C" }}
    >
      {/* Background photo + overlay */}
      <div className="absolute inset-0">
        <img
          src={speakersImg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,16,12,0.82) 0%, rgba(20,16,12,0.75) 100%)",
          }}
        />
      </div>

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Label */}
        <p
          className="text-center uppercase mb-4"
          style={{
            fontWeight: 300,
            fontSize: "13px",
            color: "#aaa",
            letterSpacing: "0.1em",
          }}
        >
          O que é a Jornada?
        </p>

        {/* Título */}
        <h2
          className="text-center mx-auto mb-7"
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 46px)",
            color: "white",
            lineHeight: 1.2,
            maxWidth: "680px",
          }}
        >
          Uma imersão de diagnóstico.
          <br />
          Não mais um curso de marketing.
        </h2>

        {/* Subtítulo */}
        <div
          className="text-center mx-auto mb-12"
          style={{ maxWidth: "560px", fontSize: "17px", lineHeight: 1.6 }}
        >
          <p style={{ fontWeight: 400, color: "#ccc" }}>
            A Jornada de Ascensão não vai te encher de informação.
          </p>
          <p style={{ fontWeight: 600, color: "white" }}>
            Vai te ajudar a enxergar onde você está travado.
          </p>
        </div>

        {/* Elipse animada */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: "520px", height: "90px" }}
        >
          <svg
            viewBox="0 0 520 90"
            width="520"
            height="90"
            className="w-full h-auto"
            style={{ position: "relative", zIndex: 2 }}
          >
            <ellipse
              cx="260"
              cy="45"
              rx="250"
              ry="36"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1650"
              strokeDashoffset="1650"
              className="draw-ellipse"
            />
          </svg>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 3 }}
          >
            <p
              className="text-center px-10"
              style={{
                fontWeight: 700,
                fontSize: "16px",
                color: "white",
                lineHeight: 1.4,
              }}
            >
              Em 1 dia, você passa pelos 3 pilares
              <br />
              que sustentam qualquer negócio:
            </p>
          </div>
        </div>

        {/* Setas animadas */}
        <div className="grid grid-cols-3 gap-5 max-w-[600px] mx-auto mt-2">
          {/* Seta esquerda */}
          <div className="flex justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M50 8 Q20 30 18 65"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="80"
                strokeDashoffset="80"
                className="draw-arrow-1"
              />
              <path
                d="M10 58 L18 65 L26 60"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="25"
                strokeDashoffset="25"
                className="draw-arrowhead-1"
              />
            </svg>
          </div>
          {/* Seta central */}
          <div className="flex justify-center">
            <svg
              width="40"
              height="80"
              viewBox="0 0 40 80"
              fill="none"
            >
              <path
                d="M20 4 Q24 36 20 68"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="75"
                strokeDashoffset="75"
                className="draw-arrow-2"
              />
              <path
                d="M13 62 L20 68 L27 62"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="20"
                strokeDashoffset="20"
                className="draw-arrowhead-2"
              />
            </svg>
          </div>
          {/* Seta direita */}
          <div className="flex justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M30 8 Q60 30 62 65"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="80"
                strokeDashoffset="80"
                className="draw-arrow-3"
              />
              <path
                d="M54 60 L62 65 L68 58"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="25"
                strokeDashoffset="25"
                className="draw-arrowhead-3"
              />
            </svg>
          </div>
        </div>

        {/* Ícones vintage */}
        <div className="grid grid-cols-3 gap-5 max-w-[600px] mx-auto mt-2">
          {[
            // Cérebro
            <svg key="brain" width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M36 56V38" />
              <path d="M36 38c-4-2-10-4-14-2s-6 8-4 14c2 4 6 6 10 6" />
              <path d="M36 38c4-2 10-4 14-2s6 8 4 14c-2 4-6 6-10 6" />
              <path d="M22 36c-4-4-6-10-2-16s10-8 16-6" />
              <path d="M50 36c4-4 6-10 2-16s-10-8-16-6" />
              <path d="M28 24c0-6 4-10 8-10s8 4 8 10" />
              <circle cx="28" cy="32" r="2" />
              <circle cx="44" cy="32" r="2" />
            </svg>,
            // Megafone
            <svg key="mega" width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 30h6v14h-6z" />
              <path d="M24 30l20-10v34L24 44" />
              <path d="M44 28c4 2 6 6 6 10s-2 8-6 10" />
              <path d="M48 24c6 3 10 9 10 14s-4 11-10 14" />
              <path d="M20 44v8c0 2 2 4 4 4h2c2 0 4-2 4-4v-6" />
            </svg>,
            // Cifrão
            <svg key="money" width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="36" cy="36" r="20" />
              <path d="M36 18v36" />
              <path d="M28 28c0-4 4-6 8-6s8 2 8 6-4 6-8 7-8 3-8 7 4 6 8 6 8-2 8-6" />
            </svg>,
          ].map((icon, i) => (
            <motion.div
              key={i}
              className="flex justify-center"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.3 + i * 0.2 }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[600px] mx-auto mt-4">
          {[
            {
              title: "Clareza de Marca",
              text: "O cliente sabe por que te escolher?",
            },
            {
              title: "Conteúdo Inteligente",
              text: "O que você posta atrai quem deveria?",
            },
            {
              title: "Receita Estruturada",
              text: "Você sabe converter e crescer?",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 2.4 + i * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center rounded-[14px] p-5"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "white",
                  marginBottom: "6px",
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontWeight: 400, fontSize: "14px", color: "#ccc" }}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Texto final */}
        <div
          className="text-center mx-auto mt-[52px]"
          style={{ maxWidth: "580px", fontSize: "18px", lineHeight: 1.6 }}
        >
          <p style={{ fontWeight: 400, color: "#ccc" }}>
            Você sai sabendo qual eixo precisa de atenção primeiro —
          </p>
          <p style={{ fontWeight: 700, color: "white" }}>
            e o que fazer a partir do dia seguinte.
          </p>
        </div>

        {/* Botão CTA */}
        <div className="mt-10 text-center">
          <a
            href="#preco"
            className="hero-cta-btn inline-block cursor-pointer"
            style={{
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#1a1a1a",
              backgroundColor: "#D97706",
              borderRadius: "8px",
              padding: "18px 52px",
              border: "none",
              transition: "all 0.2s ease",
            }}
          >
            QUERO PARTICIPAR · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
