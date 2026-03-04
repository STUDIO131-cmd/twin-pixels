import speakersImg from "@/assets/speakers.jpg";

const SpeakersSection = () => {
  return (
    <section className="py-16 md:py-24 section-dark">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Quem te acompanha n'A Jornada Imersão?
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-gold mb-3">Igor Gagliardi</h3>
                <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
                  <p>
                    Igor Gagliardi é referência por unir pensamento estratégico, criatividade e precisão na construção de marcas, posicionamento e negócios.
                  </p>
                  <p>
                    Sua trajetória começou na fotografia e no projeto "Como Você se Vê", onde aprofundou o olhar sobre identidade, valor e percepção — fundamentos que mais tarde se tornariam a base do seu trabalho com branding e marca pessoal.
                  </p>
                  <p>
                    Depois, fundou o Studio 131, agência que cresceu{" "}
                    <strong className="text-foreground">5x em faturamento nos últimos 4 anos</strong>, consolidando um modelo de posicionamento e comunicação aplicado no mundo real.
                  </p>
                  <p>
                    Passou a desenvolver programas educacionais e consultorias que já impactaram{" "}
                    <strong className="text-foreground">160+ profissionais</strong>, com foco em transformar conhecimento solto em critério, e esforço em direção prática.
                  </p>
                  <p>
                    Dessa jornada nasceu sua metodologia autoral, a{" "}
                    <strong className="text-foreground">Jornada de Ascensão</strong> — um sistema que organiza posicionamento, conteúdo e vendas para transformar confusão em direção.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-gold mb-3">Pedro Sales</h3>
                <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
                  <p>
                    Fundador da Ministrare, Pedro Sales é especialista em tráfego pago e um dos nomes mais consistentes regionalmente em crescimento acelerado para negócios locais.
                  </p>
                  <p>
                    Seus resultados vêm de campanhas que impactam diretamente o faturamento dos empresários que atende.
                  </p>
                  <p>
                    Pedro une raciocínio estruturado, leitura precisa de canais e visão comercial, trazendo à Imersão o olhar pragmático que sustenta crescimento contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={speakersImg}
              alt="Igor Gagliardi e Pedro Sales"
              className="w-full rounded-2xl border border-border object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
