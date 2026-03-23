import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import speakersImg from "@/assets/speakers.jpg";

const PillarsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pillar1Ref = useRef<HTMLDivElement>(null);
  const pillar2Ref = useRef<HTMLDivElement>(null);
  const pillar3Ref = useRef<HTMLDivElement>(null);

  const p1InView = useInView(pillar1Ref, { once: true, margin: "-100px" });
  const p2InView = useInView(pillar2Ref, { once: true, margin: "-100px" });
  const p3InView = useInView(pillar3Ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        backgroundColor: "#EFE7DA",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="max-w-[900px] mx-auto px-4 relative z-10">
        {/* Label */}
        <p
          className="text-center uppercase tracking-[0.1em] mb-3"
          style={{ fontWeight: 300, fontSize: "13px", color: "#888" }}
        >
          A estrutura
        </p>

        {/* Título */}
        <h2
          className="text-center mb-16"
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#1a1a1a",
            lineHeight: 1.2,
          }}
        >
          Três perguntas.
          <br />
          Um diagnóstico.
        </h2>

        {/* ══════ PILAR 01 ══════ */}
        <div ref={pillar1Ref} className="relative mb-0">
          {/* Ícone flutuante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={p1InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute -top-10 left-4 z-20"
          >
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              <ellipse cx="45" cy="48" rx="28" ry="22" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
              <path d="M25 48c0-12 8-22 20-22s20 10 20 22" stroke="white" strokeWidth="1.2" fill="none" opacity="0.8"/>
              <path d="M30 42c2-8 7-14 15-14s13 6 15 14" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
              <path d="M45 26v-6M45 70v6M38 28l-3-5M52 28l3-5" stroke="white" strokeWidth="1" opacity="0.5"/>
              <line x1="45" y1="30" x2="45" y2="66" stroke="white" strokeWidth="0.8" opacity="0.4"/>
              <path d="M30 44c5 4 10 2 15 6s10 2 15-2" stroke="white" strokeWidth="0.8" opacity="0.5"/>
              <path d="M32 52c4-3 9-1 13 2s9 1 13-3" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            </svg>
          </motion.div>

          {/* Card desliza da esquerda */}
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={p1InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(35,28,22,0.95) 0%, rgba(45,38,30,0.92) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "36px 40px 36px 200px",
              minHeight: "220px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Foto de fundo esquerda */}
            <div className="absolute left-0 top-0 h-full" style={{ width: "45%" }}>
              <img src={speakersImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, rgba(35,28,22,0) 60%, rgba(35,28,22,0.95) 100%)" }}
              />
            </div>

            {/* Pilar number - bottom left */}
            <div className="absolute left-8 bottom-8 z-10">
              <p style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: "white", lineHeight: 1 }}>
                Pilar&nbsp;&nbsp;01
              </p>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#D87E5F", marginTop: "6px" }}>
                Clareza de Marca
              </p>
            </div>

            {/* Content right */}
            <div className="relative z-10">
              <p style={{ fontWeight: 600, color: "white", fontSize: "16px", marginBottom: "12px" }}>
                Por que o cliente me escolheria?
              </p>
              <p style={{ fontWeight: 400, color: "#ccc", fontSize: "14px", marginBottom: "8px" }}>
                Você vai olhar para o seu negócio e responder com honestidade:
              </p>
              <p style={{ fontWeight: 400, color: "#ccc", fontSize: "14px" }}>
                . O cliente entende o que você faz?
                <br />
                . Sabe por que você é diferente ou você parece mais um no mercado?
              </p>
              <p style={{ fontWeight: 600, color: "#aaa", fontSize: "13px", marginTop: "16px", marginBottom: "6px" }}>
                Aqui você analisa:
              </p>
              <div style={{ fontWeight: 400, color: "#bbb", fontSize: "13px", lineHeight: 1.8 }}>
                - Se seu diferencial está claro ou só na sua cabeça
                <br />
                - Se sua promessa faz sentido para quem compra
                <br />
                - Se o cliente consegue explicar o que você faz
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seta 1→2 (direita, coral) */}
        <div className="flex justify-end pr-[8%] py-2">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            <path
              d="M90 8 Q110 60 100 100 Q90 130 30 148"
              stroke="#D15E4A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="220"
              strokeDashoffset={p1InView ? "0" : "220"}
              style={{ transition: "stroke-dashoffset 0.9s ease-out" }}
            />
            <path
              d="M18 142 L30 148 L34 136"
              stroke="#D15E4A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="25"
              strokeDashoffset={p1InView ? "0" : "25"}
              style={{ transition: "stroke-dashoffset 0.3s ease-out 0.9s" }}
            />
          </svg>
        </div>

        {/* ══════ PILAR 02 ══════ */}
        <div ref={pillar2Ref} className="relative mb-0">
          {/* Ícone flutuante - direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={p2InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-10 right-4 z-20"
          >
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              <path d="M20 55 L20 35 L50 35 L50 55 Z" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
              <path d="M50 38 L72 28 L72 62 L50 52" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
              <circle cx="72" cy="28" r="3" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
              <path d="M15 42 L20 42M15 48 L20 48" stroke="white" strokeWidth="1" opacity="0.5"/>
              <path d="M74 35 Q82 30 80 22" stroke="white" strokeWidth="0.8" opacity="0.4"/>
              <path d="M74 55 Q82 60 80 68" stroke="white" strokeWidth="0.8" opacity="0.4"/>
            </svg>
          </motion.div>

          {/* Card desliza da direita */}
          <motion.div
            initial={{ x: "120%", opacity: 0 }}
            animate={p2InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(35,28,22,0.95) 0%, rgba(45,38,30,0.92) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "36px 200px 36px 40px",
              minHeight: "220px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Foto de fundo direita */}
            <div className="absolute right-0 top-0 h-full" style={{ width: "45%" }}>
              <img src={speakersImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to left, rgba(35,28,22,0) 60%, rgba(35,28,22,0.95) 100%)" }}
              />
            </div>

            {/* Pilar number - bottom right */}
            <div className="absolute right-8 bottom-8 z-10 text-right">
              <p style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: "white", lineHeight: 1 }}>
                Pilar&nbsp;&nbsp;02
              </p>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#D87E5F", marginTop: "6px" }}>
                Conteúdo Inteligente
              </p>
            </div>

            {/* Content left */}
            <div className="relative z-10">
              <p style={{ fontWeight: 600, color: "white", fontSize: "16px", marginBottom: "12px" }}>
                O que eu falo para atrair e reter?
              </p>
              <p style={{ fontWeight: 400, color: "#ccc", fontSize: "14px", marginBottom: "8px" }}>
                Você vai olhar para sua presença digital e responder:
              </p>
              <p style={{ fontWeight: 400, color: "#ccc", fontSize: "14px" }}>
                . O que você posta está atraindo o cliente certo ou é só esforço sem direção?
              </p>
              <p style={{ fontWeight: 600, color: "#aaa", fontSize: "13px", marginTop: "16px", marginBottom: "6px" }}>
                Aqui você analisa:
              </p>
              <div style={{ fontWeight: 400, color: "#bbb", fontSize: "13px", lineHeight: 1.8 }}>
                - Se está falando sobre o que o cliente quer ouvir
                <br />
                - Se está aparecendo o suficiente para ser lembrado
                <br />
                - Se o esforço que faz cabe na sua rotina
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seta 2→3 (esquerda, coral) */}
        <div className="flex justify-start pl-[8%] py-2">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            <path
              d="M30 8 Q10 60 20 100 Q30 130 90 148"
              stroke="#D15E4A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="220"
              strokeDashoffset={p2InView ? "0" : "220"}
              style={{ transition: "stroke-dashoffset 0.9s ease-out" }}
            />
            <path
              d="M102 142 L90 148 L86 136"
              stroke="#D15E4A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="25"
              strokeDashoffset={p2InView ? "0" : "25"}
              style={{ transition: "stroke-dashoffset 0.3s ease-out 0.9s" }}
            />
          </svg>
        </div>

        {/* ══════ PILAR 03 ══════ */}
        <div ref={pillar3Ref} className="relative mb-0">
          {/* Ícone flutuante - esquerda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={p3InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-10 left-4 z-20"
          >
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              <circle cx="45" cy="45" r="24" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
              <circle cx="45" cy="45" r="18" stroke="white" strokeWidth="0.8" fill="none" opacity="0.5"/>
              <path d="M45 30 Q52 30 52 38 Q52 44 45 44 Q38 44 38 50 Q38 58 45 58" stroke="white" strokeWidth="1.8" fill="none" opacity="0.85"/>
              <line x1="42" y1="58" x2="48" y2="58" stroke="white" strokeWidth="1.5" opacity="0.7"/>
              <line x1="42" y1="62" x2="48" y2="62" stroke="white" strokeWidth="1.5" opacity="0.7"/>
            </svg>
          </motion.div>

          {/* Card desliza da esquerda */}
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={p3InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(35,28,22,0.95) 0%, rgba(45,38,30,0.92) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "36px 40px 36px 200px",
              minHeight: "220px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Foto de fundo esquerda */}
            <div className="absolute left-0 top-0 h-full" style={{ width: "45%" }}>
              <img src={speakersImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, rgba(35,28,22,0) 60%, rgba(35,28,22,0.95) 100%)" }}
              />
            </div>

            {/* Pilar number - bottom left */}
            <div className="absolute left-8 bottom-8 z-10">
              <p style={{ fontWeight: 700, fontSize: "clamp(36px, 5vw, 56px)", color: "white", lineHeight: 1 }}>
                Pilar&nbsp;&nbsp;03
              </p>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#D87E5F", marginTop: "6px" }}>
                Receita e estrutura
              </p>
            </div>

            {/* Content right */}
            <div className="relative z-10">
              <p style={{ fontWeight: 600, color: "white", fontSize: "16px", marginBottom: "12px" }}>
                Como vender e lucrar mais?
              </p>
              <p style={{ fontWeight: 400, color: "#ccc", fontSize: "14px", marginBottom: "8px" }}>
                Você vai olhar para suas vendas e responder:
              </p>
              <p style={{ fontWeight: 400, color: "#ccc", fontSize: "14px" }}>
                . Onde está perdendo dinheiro? Na hora de apresentar preço? No follow-up? Na falta de processo?
              </p>
              <p style={{ fontWeight: 600, color: "#aaa", fontSize: "13px", marginTop: "16px", marginBottom: "6px" }}>
                Aqui você analisa:
              </p>
              <div style={{ fontWeight: 400, color: "#bbb", fontSize: "13px", lineHeight: 1.8 }}>
                - Se sabe quanto cobrar e como apresentar
                <br />
                - Se está perdendo cliente por falta de acompanhamento
                <br />
                - Se faz mais sentido vender mais ou vender melhor
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seta final (centro, aponta para baixo) */}
        <div className="flex justify-center py-4">
          <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
            <path
              d="M30 4 Q36 40 30 88"
              stroke="#D15E4A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="90"
              strokeDashoffset={p3InView ? "0" : "90"}
              style={{ transition: "stroke-dashoffset 0.7s ease-out 0.8s" }}
            />
            <path
              d="M20 80 L30 88 L40 80"
              stroke="#D15E4A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="25"
              strokeDashoffset={p3InView ? "0" : "25"}
              style={{ transition: "stroke-dashoffset 0.3s ease-out 1.5s" }}
            />
          </svg>
        </div>

        {/* Botão CTA */}
        <div className="text-center mt-4">
          <a
            href="#preco"
            className="inline-block cursor-pointer uppercase"
            style={{
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              color: "white",
              backgroundColor: "#D15E4A",
              borderRadius: "8px",
              padding: "18px 48px",
              border: "none",
              boxShadow:
                "0 0 20px rgba(209,94,74,0.55), 0 0 40px rgba(209,94,74,0.28), 0 0 80px rgba(209,94,74,0.12)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow =
                "0 0 30px rgba(209,94,74,0.9), 0 0 60px rgba(209,94,74,0.5), 0 0 120px rgba(209,94,74,0.25)";
              t.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow =
                "0 0 20px rgba(209,94,74,0.55), 0 0 40px rgba(209,94,74,0.28), 0 0 80px rgba(209,94,74,0.12)";
              t.style.transform = "translateY(0)";
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
