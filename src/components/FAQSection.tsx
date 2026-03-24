import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vou sair da imersão com um plano completo?",
    a: "Não. A imersão entrega clareza de diagnóstico — você vai saber qual é o seu gargalo e o que precisa resolver primeiro.",
  },
  {
    q: "Funciona para qualquer tipo de negócio?",
    a: "Foi desenhada para 4 perfis: Profissional-Marca, Dono Operacional, Marca Artesanal e Artesão-Especialista. Se você já fatura e quer crescer com mais estrutura, é para você.",
  },
  {
    q: "Vai ficar gravada?",
    a: "Somente para quem comprar. A gravação está disponível como order bump por +R$100, junto com um prompt de diagnóstico guiado no Claude.",
  },
  {
    q: "Posso tirar dúvidas durante a imersão?",
    a: "Sim. A imersão acontece ao vivo via Zoom e você pode interagir durante momentos específicos.",
  },
  {
    q: "Posso pedir reembolso?",
    a: "Sim. Você tem até 2 dias após a transmissão para solicitar reembolso. Sem burocracia.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-20 md:py-28 noise-bg bg-[#efe0c8]">
      <div className="container max-w-3xl mx-auto px-4 relative z-10">
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-10 text-center text-[#3d3b3f]">
          Dúvidas comuns
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-5">
              <AccordionTrigger className="font-display font-bold text-foreground text-left text-sm md:text-base py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
