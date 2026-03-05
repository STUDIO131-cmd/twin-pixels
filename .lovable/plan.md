

## Glow expandido além do container + pulsar mais lento

### Problema
O `overflow-hidden` no div circular (linha 22) corta o `box-shadow`, impedindo que o glow se expanda para fora. O brilho fica "preso" dentro do círculo.

### Solução

**1. Separar o glow do container da imagem**
- Remover `overflow-hidden` e `glass-ring` do div da imagem
- Criar um wrapper externo para o glow que não tenha `overflow-hidden`
- Manter `overflow-hidden` apenas no div interno (para recortar a imagem em círculo)

**2. Estrutura no `ParticipantsSection.tsx`:**
```
<div className="glass-ring rounded-full p-[2px]">        ← glow visível, sem overflow-hidden
  <div className="rounded-full overflow-hidden w-32 h-32"> ← recorte da imagem
    <img ... />
  </div>
</div>
```

**3. Pulsar mais lento no `index.css`:**
- Animação de `4s` → `6s` para um pulsar mais calmo e sofisticado
- Remover o `inset` box-shadow (não faz sentido no wrapper externo)

### Arquivos
- **`src/components/ParticipantsSection.tsx`** — Reestruturar o HTML: wrapper externo com `glass-ring`, div interno com `overflow-hidden`
- **`src/index.css`** — Alterar duração da animação para `6s`, remover `inset` shadows

