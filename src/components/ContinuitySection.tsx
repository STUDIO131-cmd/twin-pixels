import continuityTv from "@/assets/continuity-tv.png";
import { useIsMobile } from "@/hooks/use-mobile";

const ContinuitySection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-studio-sand-100 bg-graph-paper rounded-3xl">
      <div className="max-w-[780px] mx-auto px-6">
        {/* Label */}
        <p className="text-center text-[13px] font-light text-studio-gray-500 tracking-widest mb-2.5">
          E depois?
        </p>

        {/* Título */}
        <h2
          className="font-bold text-studio-gray-900 text-center max-w-[720px] mx-auto mb-6 sm:mb-9 leading-tight"
          style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
        >
          A imersão é o diagnóstico.
          <br />
          Se quiser ir além, o caminho existe.
        </h2>

        {/* Parágrafo principal */}
        <p className="text-[15px] sm:text-[17px] text-studio-gray-700 leading-relaxed text-center max-w-[560px] mx-auto mb-8 sm:mb-12">
          Se você sair da imersão querendo implementar o que descobriu, existe a{' '}
          <span className="font-bold text-studio-gray-900">Metodologia Gravada</span>
          : 90 dias de conteúdo prático com exercícios, templates e scripts para colocar cada eixo para funcionar.
        </p>

        {/* Mobile: stack vertical */}
        {isMobile && (
          <div className="flex flex-col items-center gap-6">
            <img
              src={continuityTv}
              alt="TV vintage"
              className="continuity-tv-float block w-[220px] h-auto"
              style={{
                mixBlendMode: 'multiply',
                filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.15))',
              }}
            />
            <p className="text-sm text-studio-gray-700 leading-relaxed text-center px-4">
              A imersão <span className="font-bold">funciona sozinha.</span>
              <br />
              Você pode parar no diagnóstico e seguir por conta própria.
            </p>
            <img src="/icons/Seta_2.png" alt="" className="block w-[100px] h-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        )}

        {/* Desktop: grid 2 cols */}
        {!isMobile && (
          <div
            className="relative max-w-[780px] mx-auto"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto auto', gap: 0, alignItems: 'center' }}
          >
            <div className="flex items-center justify-center" style={{ gridRow: '1 / 4' }}>
              <img
                src={continuityTv}
                alt="TV vintage"
                className="continuity-tv-float block"
                style={{
                  width: 285, height: 'auto', objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.15))',
                  transform: 'translateY(calc(-20% - 80px))',
                }}
              />
            </div>
            <div className="flex items-center justify-center pl-8 pb-2">
              <img src="/icons/Seta.png" alt="" className="block"
                style={{ width: 273, height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', transform: 'scaleX(-1) translateX(90%) translateY(calc(-20% - 80px))' }}
              />
            </div>
            <div className="flex flex-col items-start pl-8 py-2">
              <p className="text-base text-studio-gray-700 leading-relaxed" style={{ transform: 'translateY(calc(-180% - 80px))' }}>
                A imersão <span className="font-bold">funciona sozinha.</span>
                <br />
                Você pode parar no diagnóstico e seguir por conta própria.
              </p>
            </div>
            <div className="flex items-start pl-8 pt-4">
              <img src="/icons/Seta_2.png" alt="" className="block"
                style={{ width: 140, height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', transform: 'translateY(calc(-20% - 80px))' }}
              />
            </div>
          </div>
        )}

        {/* Texto final */}
        <p
          className="text-[15px] sm:text-[17px] text-studio-gray-700 leading-relaxed text-center max-w-[680px] mx-auto mt-8 sm:mt-12"
          style={!isMobile ? { transform: 'translateY(calc(-20% - 80px))' } : undefined}
        >
          Mas se quiser continuar com estrutura, o próximo passo será apresentado no final da imersão —{' '}
          <span className="font-bold text-studio-gray-900">
            com uma condição exclusiva para quem estiver ao vivo.
          </span>
        </p>

        {/* Badge bônus */}
        <p
          className="text-[14px] sm:text-[15px] text-studio-gray-900 text-center m-0 mt-6 sm:mt-0"
          style={!isMobile ? { transform: 'translateY(calc(-20% - 40px))' } : undefined}
        >
          Os 5 primeiros a garantir a metodologia
          <br />
          no dia da imersão levam um <span className="font-bold">BÔNUS ESPECIAL.</span>
        </p>

        {/* Botão */}
        <div
          className="text-center mt-10 sm:mt-0"
          style={!isMobile ? { transform: 'translateY(calc(-20% - 40px))' } : undefined}
        >
          <a href="#" className="btn-amber text-base sm:text-[21px] tracking-widest px-8 sm:px-[67px] py-4 sm:py-[22px] block w-fit mx-auto">
            ACESSAR IMERSÃO
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContinuitySection;
