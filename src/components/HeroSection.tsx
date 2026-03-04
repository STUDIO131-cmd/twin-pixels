import { Check } from "lucide-react";
import heroDecoration from "@/assets/hero-decoration.webp";
import videoPoster from "@/assets/video-poster.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 section-darker overflow-hidden">
      {/* Floating decoration */}
      <img
        src={heroDecoration}
        alt=""
        className="absolute -right-20 top-10 w-60 md:w-80 opacity-30 pointer-events-none"
      />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Pare de carregar seu negócio na cabeça:
          </h1>
          <p className="text-gold font-display text-lg md:text-2xl font-semibold max-w-3xl mx-auto">
            saia da Imersão com um mapa de crescimento que sua rotina consegue sustentar.
          </p>
          <p className="text-muted-foreground font-body mt-6 text-base md:text-lg max-w-2xl mx-auto">
            Para pequenos e médios empresários da região que querem fazer da marca pessoal o{" "}
            <strong className="text-foreground">motor do crescimento.</strong>
          </p>

          <div className="flex items-center justify-center gap-6 mt-6">
            {["Posicionamento", "Conteúdo", "Vendas"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-foreground font-body">
                <Check className="w-5 h-5 text-gold" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Video */}
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border shadow-2xl">
          <video
            controls
            preload="metadata"
            poster={videoPoster}
            controlsList="nodownload"
            className="w-full aspect-video"
          >
            <source
              src="https://www.studio131.com.br/wp-content/uploads/2026/01/Carta-de-Vendas-JDA-21-e-22-de-Janeiro-Horizontal-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="text-center mt-8">
          <a href="#lista" className="btn-cta">
            QUERO GARANTIR A MINHA VAGA
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
