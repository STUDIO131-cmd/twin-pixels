const videos = [
  "https://www.studio131.com.br/wp-content/uploads/2026/01/Depoimento-1.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/Depoimento-2_1.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/9.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/10.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/13.mp4",
  "https://www.studio131.com.br/wp-content/uploads/2026/01/7.mp4",
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 section-darker">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          O que diz quem viveu a experiência?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-border bg-card">
              <video
                src={src}
                controls
                muted
                playsInline
                preload="metadata"
                controlsList="nodownload"
                className="w-full aspect-[9/16] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
