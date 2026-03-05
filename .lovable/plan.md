

## Círculo Neon Glass Apple — Fotos de Participantes

### Conceito

Um anel branco translúcido ao redor de cada foto circular, com brilho suave pulsante — inspirado no estilo glassmorphism da Apple. Minimalista, sem exageros.

### Abordagem Técnica

**1. Borda glass translúcida** — Substituir o `border-2 border-border` por um anel com `box-shadow` branco difuso e borda semi-transparente:

```css
border: 1.5px solid rgba(255, 255, 255, 0.15);
box-shadow: 0 0 15px rgba(255, 255, 255, 0.08), 
            inset 0 0 10px rgba(255, 255, 255, 0.03);
```

**2. Animação de pulso suave** — Keyframe CSS que oscila a opacidade do glow entre ~0.05 e ~0.15, ciclo de ~4s:

```css
@keyframes neon-pulse {
  0%, 100% { box-shadow: 0 0 12px rgba(255,255,255,0.06); }
  50% { box-shadow: 0 0 20px rgba(255,255,255,0.15); }
}
```

**3. Hover boost** — No hover (que já remove o grayscale), intensificar levemente o glow para ~0.25.

### Arquivos a editar

- **`src/index.css`** — Adicionar keyframe `neon-pulse` e classe `.glass-ring`
- **`src/components/ParticipantsSection.tsx`** — Aplicar a classe `glass-ring` no `div` que envolve a imagem (linha 22), removendo `border-2 border-border`

### Resultado visual

Círculos com brilho branco quase imperceptível, pulsando suavemente — elegante e minimalista, sem parecer "neon de festa".

