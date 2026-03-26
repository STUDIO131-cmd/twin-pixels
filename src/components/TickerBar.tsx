import { memo } from "react";

const CalendarIcon = memo(() => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
    <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="white" strokeWidth="1.2" />
    <line x1="1.5" y1="6" x2="14.5" y2="6" stroke="white" strokeWidth="1.2" />
    <line x1="5" y1="1" x2="5" y2="4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="11" y1="1" x2="11" y2="4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
));
CalendarIcon.displayName = "CalendarIcon";

const TickerContent = memo(() => (
  <span className="flex items-center gap-[60px] px-[30px]">
    <span className="flex items-center whitespace-nowrap">
      <span className="w-2 h-2 rounded-full bg-coral inline-block mr-2 shrink-0" />
      <span className="text-white text-sm font-medium">Imersão online</span>
    </span>
    <span className="flex items-center whitespace-nowrap">
      <CalendarIcon />
      <span className="text-white text-sm font-medium">11 de abril</span>
    </span>
    <span className="flex items-center whitespace-nowrap">
      <span className="w-2 h-2 rounded-full bg-coral inline-block mr-2 shrink-0" />
      <span className="text-white text-sm font-medium">Imersão online</span>
    </span>
    <span className="flex items-center whitespace-nowrap">
      <CalendarIcon />
      <span className="text-white text-sm font-medium">11 de abril</span>
    </span>
  </span>
));
TickerContent.displayName = "TickerContent";

const TICKER_ITEMS = Array.from({ length: 8 }, (_, i) => i);

const TickerBar = memo(() => {
  return (
    <div className="w-full overflow-hidden h-10 flex items-center" style={{ backgroundColor: 'hsl(var(--ticker-bg))' }}>
      <div className="ticker-scroll flex whitespace-nowrap will-change-transform">
        {TICKER_ITEMS.map((i) => (
          <div key={i} className="flex">
            <TickerContent />
          </div>
        ))}
      </div>
    </div>
  );
});
TickerBar.displayName = "TickerBar";

export default TickerBar;
