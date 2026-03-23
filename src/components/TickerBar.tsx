const TickerBar = () => {
  const text = "Jornada de Ascensão · 11 de abril · online · Lote 1 R$47 · Lote 2 a partir de 07/04 por R$99";

  return (
    <div className="w-full overflow-hidden bg-coral py-2.5">
      <div className="ticker-scroll flex whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-white text-sm font-display font-medium px-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
