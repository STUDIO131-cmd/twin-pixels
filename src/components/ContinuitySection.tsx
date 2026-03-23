const ContinuitySection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-card noise-bg">
      <div className="container max-w-3xl mx-auto px-4 relative z-10">
        <span className="text-coral font-display text-sm font-medium tracking-wide">E depois?</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3 mb-6">
          A imersão é o diagnóstico. Se quiser ir além, o caminho existe.
        </h2>

        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>
            Se você sair da imersão querendo implementar o que descobriu, existe a Metodologia Gravada: 90 dias de conteúdo prático com exercícios, templates e scripts.
          </p>
          <p>
            A imersão funciona sozinha. Mas se quiser continuar com estrutura, o próximo passo será apresentado no final da imersão — com uma condição exclusiva para quem estiver ao vivo.
          </p>
        </div>

        <div className="mt-8 inline-block bg-coral/10 border border-coral/30 rounded-lg px-5 py-3">
          <p className="text-coral font-display font-bold text-sm">
            🎁 Os 5 primeiros a garantir a metodologia no dia da imersão levam um bônus especial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContinuitySection;
