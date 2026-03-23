import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2025-04-06T23:59:59");

function calculateTimeLeft() {
  const difference = TARGET_DATE.getTime() - new Date().getTime();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden light-leak-tr light-leak-bl noise-bg">
      <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="text-coral font-display text-sm font-medium tracking-wide">
            Imersão online · 11 de abril
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Você trabalha demais para depender de sorte.
        </h1>

        <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Em 1 dia, descubra o que está travando seu crescimento — se é um problema de marca, de conteúdo ou de vendas — e saia sabendo exatamente o que resolver primeiro.
        </p>

        <a href="#preco" className="btn-cta text-base md:text-lg">
          Participar da imersão · R$47
        </a>

        <p className="text-muted-foreground text-sm font-body mt-4">
          Lote 1 · R$47 até 06/04 | Lote 2 · R$99 a partir de 07/04
        </p>

        {/* Countdown */}
        <div className="flex gap-4 justify-center mt-8">
          {[
            { value: timeLeft.days, label: "dias" },
            { value: timeLeft.hours, label: "horas" },
            { value: timeLeft.minutes, label: "min" },
            { value: timeLeft.seconds, label: "seg" },
          ].map((item, i) => (
            <div key={i} className="text-center bg-white/10 rounded-lg px-4 py-3 border border-white/10">
              <span className="text-3xl md:text-4xl font-bold text-coral font-display">
                {String(item.value).padStart(2, "0")}
              </span>
              <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
