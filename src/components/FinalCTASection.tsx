import { memo } from "react";

const FinalCTASection = memo(() => {
  return (
    <section className="relative overflow-hidden py-20 bg-background">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, hsl(var(--studio-wine-700) / 0.55) 0%, transparent 50%)' }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, hsl(var(--amber-dark) / 0.2) 0%, transparent 40%)' }}
      />
      <div className="noise-bg absolute inset-0 pointer-events-none z-[1]" />

      <div className="relative z-[2] text-center px-4">
        <h2 className="leading-[1.15] mb-6">
          <span className="font-bold text-amber block" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}>
            Clareza custa R$47.
          </span>
          <span className="font-bold text-white block" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}>
            Continuar no escuro custa mais.
          </span>
        </h2>

        <p className="font-light text-base text-muted-foreground mb-9">
          11 de abril · Online
        </p>

        <a
          href="#preco"
          className="btn-amber text-base tracking-widest px-[60px] py-5 rounded-full"
          style={{ animation: 'btnGlow 2.5s ease-in-out infinite' }}
        >
          QUERO PARTICIPAR · R$47
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.08]" />
    </section>
  );
});
FinalCTASection.displayName = "FinalCTASection";

export default FinalCTASection;
