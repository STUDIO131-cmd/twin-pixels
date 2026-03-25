import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"TikTok Sans"', '"Inter"', 'sans-serif'],
        body: ['"Source Sans 3"', '"Moneta"', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* Studio palette */
        "studio-red": {
          700: "hsl(var(--studio-red-700))",
          500: "hsl(var(--studio-red-500))",
          300: "hsl(var(--studio-red-300))",
        },
        "studio-sand": {
          100: "hsl(var(--studio-sand-100))",
        },
        "studio-gray": {
          100: "hsl(var(--studio-gray-100))",
          300: "hsl(var(--studio-gray-300))",
          500: "hsl(var(--studio-gray-500))",
          700: "hsl(var(--studio-gray-700))",
          900: "hsl(var(--studio-gray-900))",
        },
        "studio-wine": {
          900: "hsl(var(--studio-wine-900))",
          700: "hsl(var(--studio-wine-700))",
          500: "hsl(var(--studio-wine-500))",
          300: "hsl(var(--studio-wine-300))",
        },
        "studio-navy": {
          900: "hsl(var(--studio-navy-900))",
          700: "hsl(var(--studio-navy-700))",
          500: "hsl(var(--studio-navy-500))",
          300: "hsl(var(--studio-navy-300))",
        },
        "studio-ocean": {
          900: "hsl(var(--studio-ocean-900))",
          700: "hsl(var(--studio-ocean-700))",
          500: "hsl(var(--studio-ocean-500))",
          300: "hsl(var(--studio-ocean-300))",
        },
        "studio-forest": {
          900: "hsl(var(--studio-forest-900))",
          700: "hsl(var(--studio-forest-700))",
          500: "hsl(var(--studio-forest-500))",
          300: "hsl(var(--studio-forest-300))",
        },
        amber: {
          DEFAULT: "hsl(var(--amber))",
          dark: "hsl(var(--amber-dark))",
        },
        /* Legacy aliases */
        coral: {
          DEFAULT: "hsl(var(--coral))",
          dark: "hsl(var(--coral-dark))",
          light: "hsl(var(--coral-light))",
        },
        vinho: "hsl(var(--vinho))",
        "azul-escuro": "hsl(var(--azul-escuro))",
        azul: "hsl(var(--azul))",
        verde: "hsl(var(--verde))",
        creme: "hsl(var(--creme))",
        "azul-claro": "hsl(var(--azul-claro))",
        "verde-claro": "hsl(var(--verde-claro))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
