import { useState } from "react";
import { toast } from "sonner";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    whatsapp: "",
    age: "",
    profile: "",
    area: "",
    marketTime: "",
    reality: "",
    availability: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inscrição enviada! Entraremos em contato em breve.");
  };

  const selectClass =
    "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 appearance-none";
  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50";
  const labelClass = "block text-sm font-medium text-foreground font-body mb-1.5";

  return (
    <section id="lista" className="py-16 md:py-24 section-dark">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Inscrição na Lista de Espera (21 e 22/02)
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xl mx-auto">
            Ao preencher o formulário, você registra seu interesse em participar da próxima turma presencial, que acontece nos dias{" "}
            <strong className="text-foreground">21 e 22 de fevereiro.</strong> Este é um processo de seleção: entrar na lista de espera não garante a vaga.{" "}
            <strong className="text-foreground">Os selecionados serão contatados pessoalmente.</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Nome *</label>
              <input
                type="text"
                name="firstName"
                required
                className={inputClass}
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClass}>Sobrenome *</label>
              <input
                type="text"
                name="lastName"
                required
                className={inputClass}
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Contato (Whatsapp: DDD+Número) *</label>
            <input
              type="text"
              name="whatsapp"
              required
              className={inputClass}
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className={labelClass}>Faixa etária *</label>
            <select name="age" required className={selectClass} value={formData.age} onChange={handleChange}>
              <option value="">--- Selecione a escolha ---</option>
              <option value="Até 24 anos">Até 24 anos</option>
              <option value="25 a 33 anos">25 a 33 anos</option>
              <option value="34 a 42 anos">34 a 42 anos</option>
              <option value="43 a 51 anos">43 a 51 anos</option>
              <option value="52 anos ou mais">52 anos ou mais</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Hoje, você se define mais como: *</label>
            <select name="profile" required className={selectClass} value={formData.profile} onChange={handleChange}>
              <option value="">--- Selecione a escolha ---</option>
              <option value="Profissional liberal">Profissional liberal</option>
              <option value="Empreendedor(a)">Empreendedor(a)</option>
              <option value="Gestor(a) / Líder">Gestor(a) / Líder</option>
              <option value="Em transição de carreira">Em transição de carreira</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Você atua em qual área? *</label>
            <input
              type="text"
              name="area"
              required
              placeholder="Descreva com o que você trabalha"
              className={inputClass}
              value={formData.area}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className={labelClass}>Há quanto tempo você atua no mercado? *</label>
            <select name="marketTime" required className={selectClass} value={formData.marketTime} onChange={handleChange}>
              <option value="">--- Selecione a escolha ---</option>
              <option value="Menos de 2 anos">Menos de 2 anos</option>
              <option value="2 a 5 anos">2 a 5 anos</option>
              <option value="5 a 10 anos">5 a 10 anos</option>
              <option value="10+ anos">10+ anos</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Qual frase mais se aproxima da sua realidade hoje? *
            </label>
            <select name="reality" required className={selectClass} value={formData.reality} onChange={handleChange}>
              <option value="">--- Selecione a escolha ---</option>
              <option value="esforco">Trabalho muito, mas meu esforço não se converte em resultado proporcional</option>
              <option value="posicionamento">Tenho resultado, mas falta clareza de posicionamento</option>
              <option value="dependencia">Minha marca funciona, mas depende demais de mim</option>
              <option value="direcao">Sinto que estou pronto para crescer, mas sem direção clara</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Se selecionado, você teria disponibilidade real para participar? *
            </label>
            <div className="space-y-2 mt-2">
              {["Sim", "Depende da data", "Quero entender se é pra mim"].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="availability"
                    value={option}
                    required
                    className="w-4 h-4 accent-gold"
                    onChange={handleChange}
                  />
                  <span className="text-foreground font-body text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-cta w-full text-center">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
