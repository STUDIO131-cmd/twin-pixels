const participants = [
  { name: "Guilherme", role: "CONSULTOR FINANCEIRO", img: "https://www.studio131.com.br/wp-content/uploads/2026/01/17.png" },
  { name: "Fernanda", role: "MÓVEIS PLANEJADOS", img: "https://www.studio131.com.br/wp-content/uploads/2026/01/18.png" },
  { name: "Thiago", role: "ADVOGADO", img: "https://www.studio131.com.br/wp-content/uploads/2026/01/19.png" },
  { name: "Rúbia", role: "DENTISTA", img: "https://www.studio131.com.br/wp-content/uploads/2026/01/20.png" },
  { name: "Tatiana", role: "PILATES", img: "https://www.studio131.com.br/wp-content/uploads/2026/01/21.png" },
  { name: "Participante", role: "BIOMEDICINA", img: "https://www.studio131.com.br/wp-content/uploads/2026/01/3.png" },
];

const ParticipantsSection = () => {
  return (
    <section className="py-16 section-dark">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
          Quem já participou{" "}
          <span className="text-gold-gradient font-bold">d'A Jornada Imersão?</span>
        </h2>
        <div className="mt-10 overflow-hidden">
          <div className="flex gap-6 carousel-auto-scroll" style={{ width: "max-content" }}>
            {[...participants, ...participants].map((p, i) => (
              <div key={i} className="flex-shrink-0 w-40 md:w-48 text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full glass-ring grayscale hover:grayscale-0 transition-all duration-500 p-[2px]">
                  <div className="rounded-full overflow-hidden w-full h-full">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
