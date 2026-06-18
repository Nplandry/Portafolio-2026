import type { SectionContent, Service } from "@/types/portfolio";

export const servicesContent: SectionContent = {
  label: "Servicios",
  title: "Mis Servicios",
  subtitle:
    "Desde la asesoría informática, identificación de problemas, entrega de soluciones para aplicar en el negocio, hasta desarrollar e implementar un producto de software. Además de clases de cátedra o de laboratorio para carreras relacionadas a la informática o la tecnología.",
};

export const services: Service[] = [
  {
    num: "01",
    title: "Web Development",
    text: "Desarrollo de aplicaciones y sitios web a medida con tecnologías modernas, arquitectura escalable y despliegue en la nube.",
  },
  {
    num: "02",
    title: "Manager Web",
    text: "Liderazgo técnico de proyectos web: planificación, metodologías ágiles, coordinación de equipos y entrega de productos de punta a punta.",
  },
  {
    num: "03",
    title: "Odoo & Sistemas ERP/CRM",
    text: "Implementación, personalización e integración de Odoo para automatizar ventas, inventario, facturación y la gestión integral de tu negocio.",
  },
  {
    num: "04",
    title: "UX / UI Design",
    text: "Diseño de interfaces claras y experiencias de usuario centradas en la persona, alineadas con los objetivos del producto y la marca.",
  },
];
