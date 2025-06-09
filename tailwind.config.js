/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryAccent: "#5c96fe",
        primaryAccentHover: "#60a5fa",
        hoverTextAccent: "#60a5fa",
        backgroundPrimary: "#0d0d0f",
        borderPrimary: "#2a2a2d",
        cardBackground: "#111827",
        surfaceBackground: "#1f1f23",
        textPrimary: "#e5e7eb",
        textSecondary: "#9ca3af",
        textTertiary: "#6b7280",
      },
    },
  },
  plugins: [typography],
};
