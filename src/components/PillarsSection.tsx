import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PillarsSection = () => {
  const pillar1Ref = useRef<HTMLDivElement>(null);
  const pillar2Ref = useRef<HTMLDivElement>(null);
  const pillar3Ref = useRef<HTMLDivElement>(null);

  const p1InView = useInView(pillar1Ref, { once: true, margin: "-100px" });
  const p2InView = useInView(pillar2Ref, { once: true, margin: "-100px" });
  const p3InView = useInView(pillar3Ref, { once: true, margin: "-100px" });

  return (
    <section
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
        <div ref={pillar1Ref} className="relative mb-0" style={{ marginLeft: "auto", maxWidth: "860px" }}>
          {/* Ícone flutuante */}
          <motion.img
            src="/icons/Ce.png"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={p1InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              position: "absolute",
              top: "-60px",
              left: "20px",
              width: "100px",
              height: "auto",
              objectFit: "contain",
              mixBlendMode: "screen",
              zIndex: 20,
            }}
          />

          {/* Card desliza da esquerda */}
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={p1InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ width: "100%" }}
          >
            <img
              src="/images/Pasta_Pilar_1.png"
              alt=""
              style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
            />

            {/* Pilar number - bottom left */}
            <div style={{ position: "absolute", left: "32px", bottom: "32px", zIndex: 10 }}>
              <p style={{ fontWeight: 700, fontSize: "clamp(40px, 6vw, 64px)", color: "white", lineHeight: 1 }}>
                Pilar&nbsp;&nbsp;01
              </p>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#D87E5F", marginTop: "6px" }}>
                Clareza de Marca
              </p>
            </div>

            {/* Content right */}
            <div style={{ position: "absolute", top: "50%", right: "32px", transform: "translateY(-50%)", zIndex: 10, maxWidth: "45%" }}>
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

        {/* Seta 1→2 */}
        <div className="flex justify-end pr-[8%] py-2">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            <path d="M90 8 Q110 60 100 100 Q90 130 30 148" stroke="#D15E4A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="220" strokeDashoffset={p1InView ? "0" : "220"} style={{ transition: "stroke-dashoffset 0.9s ease-out" }} />
            <path d="M18 142 L30 148 L34 136" stroke="#D15E4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="25" strokeDashoffset={p1InView ? "0" : "25"} style={{ transition: "stroke-dashoffset 0.3s ease-out 0.9s" }} />
          </svg>
        </div>

        {/* ══════ PILAR 02 ══════ */}
        <div ref={pillar2Ref} className="relative mb-0" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Ícone flutuante - direita */}
          <motion.img
            src="/icons/Mega.png"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={p2InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              position: "absolute",
              top: "-60px",
              right: "20px",
              width: "100px",
              height: "auto",
              objectFit: "contain",
              mixBlendMode: "screen",
              zIndex: 20,
            }}
          />

          {/* Card desliza da direita */}
          <motion.div
            initial={{ x: "120%", opacity: 0 }}
            animate={p2InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ width: "100%" }}
          >
            <img
              src="/images/Pasta_Pilar_2.png"
              alt=""
              style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
            />

            {/* Pilar number - bottom right */}
            <div style={{ position: "absolute", right: "32px", bottom: "32px", zIndex: 10, textAlign: "right" }}>
              <p style={{ fontWeight: 700, fontSize: "clamp(40px, 6vw, 64px)", color: "white", lineHeight: 1 }}>
                Pilar&nbsp;&nbsp;02
              </p>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#D87E5F", marginTop: "6px" }}>
                Conteúdo Inteligente
              </p>
            </div>

            {/* Content left */}
            <div style={{ position: "absolute", top: "50%", left: "32px", transform: "translateY(-50%)", zIndex: 10, maxWidth: "45%" }}>
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

        {/* Seta 2→3 */}
        <div className="flex justify-start pl-[8%] py-2">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            <path d="M30 8 Q10 60 20 100 Q30 130 90 148" stroke="#D15E4A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="220" strokeDashoffset={p2InView ? "0" : "220"} style={{ transition: "stroke-dashoffset 0.9s ease-out" }} />
            <path d="M102 142 L90 148 L86 136" stroke="#D15E4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="25" strokeDashoffset={p2InView ? "0" : "25"} style={{ transition: "stroke-dashoffset 0.3s ease-out 0.9s" }} />
          </svg>
        </div>

        {/* ══════ PILAR 03 ══════ */}
        <div ref={pillar3Ref} className="relative mb-0" style={{ marginRight: "auto", maxWidth: "860px" }}>
          {/* Ícone flutuante - esquerda */}
          <motion.img
            src="/icons/Cifrao.png"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={p3InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              position: "absolute",
              top: "-60px",
              left: "20px",
              width: "100px",
              height: "auto",
              objectFit: "contain",
              mixBlendMode: "screen",
              zIndex: 20,
            }}
          />

          {/* Card desliza da esquerda */}
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={p3InView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ width: "100%" }}
          >
            <img
              src="/images/Pasta_Pilar_3.png"
              alt=""
              style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
            />

            {/* Pilar number - bottom left */}
            <div style={{ position: "absolute", left: "32px", bottom: "32px", zIndex: 10 }}>
              <p style={{ fontWeight: 700, fontSize: "clamp(40px, 6vw, 64px)", color: "white", lineHeight: 1 }}>
                Pilar&nbsp;&nbsp;03
              </p>
              <p style={{ fontWeight: 600, fontSize: "16px", color: "#D87E5F", marginTop: "6px" }}>
                Receita e estrutura
              </p>
            </div>

            {/* Content right */}
            <div style={{ position: "absolute", top: "50%", right: "32px", transform: "translateY(-50%)", zIndex: 10, maxWidth: "45%" }}>
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

        {/* Seta final */}
        <div className="flex justify-center py-4">
          <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
            <path d="M30 4 Q36 40 30 88" stroke="#D15E4A" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="90" strokeDashoffset={p3InView ? "0" : "90"} style={{ transition: "stroke-dashoffset 0.7s ease-out 0.8s" }} />
            <path d="M20 80 L30 88 L40 80" stroke="#D15E4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="25" strokeDashoffset={p3InView ? "0" : "25"} style={{ transition: "stroke-dashoffset 0.3s ease-out 1.5s" }} />
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
              boxShadow: "0 0 20px rgba(209,94,74,0.55), 0 0 40px rgba(209,94,74,0.28), 0 0 80px rgba(209,94,74,0.12)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow = "0 0 30px rgba(209,94,74,0.9), 0 0 60px rgba(209,94,74,0.5), 0 0 120px rgba(209,94,74,0.25)";
              t.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.boxShadow = "0 0 20px rgba(209,94,74,0.55), 0 0 40px rgba(209,94,74,0.28), 0 0 80px rgba(209,94,74,0.12)";
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
