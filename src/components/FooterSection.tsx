import logoJourney from "@/assets/logo-journey.png";

const FooterSection = () => {
  return (
    <footer className="py-10 border-t border-border" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 6%))" }}>
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <img src={logoJourney} alt="The Journey" className="h-12 mx-auto mb-4" />
        <p className="text-muted-foreground font-body text-sm">
          Copyright © 2026 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
