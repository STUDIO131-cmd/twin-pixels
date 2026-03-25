import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-02-21T13:00:00-03:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="py-16 section-dark text-center">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-foreground mb-2">
          A próxima edição está chegando:
        </h2>
        <p className="text-amber text-xl md:text-2xl font-bold mb-10">
          21 e 22 de Fevereiro de 2026
        </p>
        <div className="flex justify-center gap-4 md:gap-8">
          {blocks.map((b) => (
            <div key={b.label} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-secondary flex items-center justify-center border border-border">
                <span className="text-2xl md:text-4xl font-bold text-amber">
                  {String(b.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground mt-2 font-body">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
