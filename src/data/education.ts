import type { SectionContent, TimelineEntry } from "@/types/portfolio";

export const educationContent: SectionContent = {
  label: "Educacion",
  title: "Educación",
  subtitle:
    "Formación académica y certificaciones que respaldan mi crecimiento en el sector STEM",
};

export const education: TimelineEntry[] = [
  {
    lugar: "Universidad Mayor",
    fecha: "En curso · 6/10",
    titulo: "Ingeniería Civil en Computación e Informática",
    texto: "Diurno presencial.",
  },
  {
    lugar: "Oracle Next Education",
    fecha: "2024",
    titulo: "Bootcamp de desarrollo web",
    texto:
      "Especialización en backend e integraciones con IA.",
  },
  {
    lugar: "Programa Aspire Leaders (EE.UU.)",
    fecha: "2024",
    titulo: "Liderazgo y emprendimiento STEM",
    texto:
      "Programa de liderazgo y emprendimiento en temas STEM.",
  },
];
