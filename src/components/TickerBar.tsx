import { Calendar, Clock, MapPin } from "lucide-react";

const TickerItem = () => (
  <div className="flex items-center gap-8 px-4">
    <span className="flex items-center gap-2 text-foreground">
      <Calendar className="w-4 h-4 text-gold" />
      Próxima turma: 21 e 22/02
    </span>
    <span className="flex items-center gap-2 text-foreground">
      <Clock className="w-4 h-4 text-gold" />
      13h às 18h
    </span>
    <span className="flex items-center gap-2 text-foreground">
      <MapPin className="w-4 h-4 text-gold" />
      Catanduva (SP) - Hotel Ibis
    </span>
  </div>
);

const TickerBar = () => {
  return (
    <div className="w-full overflow-hidden bg-background border-b border-border py-3">
      <div className="ticker-scroll flex whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <TickerItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
