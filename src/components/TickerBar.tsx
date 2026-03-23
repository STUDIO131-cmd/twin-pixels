const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
    <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="white" strokeWidth="1.2" />
    <line x1="1.5" y1="6" x2="14.5" y2="6" stroke="white" strokeWidth="1.2" />
    <line x1="5" y1="1" x2="5" y2="4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="11" y1="1" x2="11" y2="4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const TickerBar = () => {
  const items = (
    <>
      <span className="flex items-center gap-[60px] px-[30px]">
        <span className="flex items-center whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-coral inline-block mr-2 shrink-0" />
          <span className="text-white text-sm font-medium font-display">Imersão online</span>
        </span>
        <span className="flex items-center whitespace-nowrap">
          <CalendarIcon />
          <span className="text-white text-sm font-medium font-display">11 de abril</span>
        </span>
        <span className="flex items-center whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-coral inline-block mr-2 shrink-0" />
          <span className="text-white text-sm font-medium font-display">Imersão online</span>
        </span>
        <span className="flex items-center whitespace-nowrap">
          <CalendarIcon />
          <span className="text-white text-sm font-medium font-display">11 de abril</span>
        </span>
      </span>
    </>
  );

  return (
    <div className="w-full overflow-hidden h-10 flex items-center" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="ticker-scroll flex whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex">
            {items}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
