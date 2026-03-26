import { motion } from "framer-motion";
import vintageTv from "@/assets/vintage-tv.png";
import TrackedCTA from "@/components/TrackedCTA";

const items = [
  { label: ". Qual eixo está travando -", bold: "marca, conteúdo ou vendas" },
  { label: ". O que resolver primeiro -", bold: "não uma lista infinita, uma prioridade" },
  { label: ". Como continuar -", bold: "se fizer sentido, o próximo passo existe" },
];

const OutcomeSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-studio-sand-100 bg-graph-paper">
      <div className="container max-w-[900px] mx-auto px-4">
        {/* Label */}
        <p className="text-center mb-2 text-[13px] font-light text-studio-gray-500 tracking-widest">
          O que muda
        </p>

        {/* Título */}
        <h2
          className="text-center mx-auto mb-[52px] max-w-[700px] leading-tight"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          <span className="font-bold text-studio-gray-900" style={{ fontSize: 'clamp(19.6px, 2.8vw, 33.6px)' }}>Você sai sabendo o problema.</span>
          <br />
          <span className="font-bold text-studio-gray-900" style={{ fontSize: 'clamp(19.6px, 2.8vw, 33.6px)' }}>E o próximo passo.</span>
        </h2>

        {/* Grid 2 colunas */}
        <div className="outcome-grid grid items-center gap-12" style={{ gridTemplateColumns: '55% 45%' }}>
          {/* Coluna esquerda — texto */}
          <div>
            <p className="text-[17px] text-studio-gray-700 leading-relaxed mb-8">
              A imersão não promete que você vai sair com tudo resolvido.
              <br />
              Promete que você vai sair com{" "}
              <span className="font-bold text-xl text-studio-gray-900 tracking-wide">
                CLAREZA
              </span>
            </p>

            <div>
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="mb-6"
                >
                  <p className="font-light text-[15px] text-studio-gray-500">{item.label}</p>
                  <p className="font-bold text-base text-studio-gray-900">{item.bold}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coluna direita — TV */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[425px] aspect-[4/3]">
              <img
                src={vintageTv}
                alt="TV vintage"
                className="absolute inset-0 w-full h-full object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: '38%', left: '12%', width: '58%', height: '46%',
                  background: 'radial-gradient(ellipse at 40% 35%, rgba(255,255,255,0.08) 0%, transparent 70%)',
                  borderRadius: 12,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Texto final */}
        <div className="text-center mx-auto mt-14 max-w-[600px]">
          <p className="text-lg text-studio-gray-700">
            Isso é o que a imersão entrega.
          </p>
          <p className="font-bold text-xl text-studio-gray-900 mt-1.5">
            Diagnóstico real.  Não promessa vazia.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-11 text-center">
          <a href="#preco" className="btn-amber text-[15px] tracking-widest px-[52px] py-[18px]">
            QUERO ESSA CLAREZA · R$47
          </a>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
