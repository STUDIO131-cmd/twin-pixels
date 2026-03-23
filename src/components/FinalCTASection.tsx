const FinalCTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden light-leak-tr light-leak-bl noise-bg">
      <div className="container max-w-3xl mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Clareza custa R$47. Continuar no escuro custa mais.
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-8">11 de abril · Online</p>
        <a href="#preco" className="btn-cta text-lg">
          Quero participar
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
