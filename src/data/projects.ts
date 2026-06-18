import type { Project } from "@/types/portfolio";

export const projectsTitle = "Proyectos que he hecho";

export const projects: Project[] = [
  {
    id: "1",
    title: "Plataforma de certificados App Script + Odoo",
    description:
      "Automatización para generar y gestionar certificados desde Google Sheets, integrada con Odoo para sincronizar datos y flujos del negocio. Modelo Event-Driven en Python.",
    tags: ["Google Apps Script", "Odoo", "Google Sheets"],
  },
  {
    id: "3",
    title: "Permiso de circulación",
    description:
      "Plataforma en Google Cloud con API hexagonal con Google SQL Server, frontend renovado y despliegue en Cloud Run. Análisis y procesamiento de datos con BigQuery. ",
    tags: ["Google Cloud", "Cloud Run", "BigQuery", "Node.js", "Express.js", "React"],
    url: "https://permisodecirculacion.cl",
  },
  {
    id: "6",
    title: "We-Transport React Widget Viajes Online",
    description:
      "Widget embebido en Next.js para cotización y gestión de viajes en transfer. Desarrollo e implementacion de funciones del frontend del widget.",
    tags: ["Next.js", "Node.js", "Express.js", "JavaScript"],
    url: "http://wetransport.cl",
  },
  {
    id: "11",
    title: "PrimeXM Maker Pricing USDCLP",
    description:
      "Feed de precios USDCLP hacia PrimeXM como Maker vía FIX 4.4. FIX Engine en C++ con QuickFIX y Pricing App en Java con Gradle en AWS EC2, publicando bid/ask top of book a 10 qps por IPC local.",
    tags: ["FIX 4.4", "QuickFIX", "C++", "Java", "Gradle", "AWS"],
    url: "https://google.cl",
  },
  {
    id: "7",
    title: "mania.cl",
    description:
      "Administración y desarrollo del sitio web: mantenimiento WordPress, plugins personalizados y servicios con Express.js.",
    tags: ["WordPress", "Express.js", "PHP", "JavaScript"],
    url: "https://mania.cl",
  },
  {
    id: "8",
    title: "scolari.cl",
    description:
      "Administración del sitio web, configuración de plugins y desarrollo de widgets para mejorar la experiencia y funcionalidades del portal.",
    tags: ["WordPress", "Plugins", "Widgets", "CSS"],
    url: "https://scolari.cl",
  },
  {
    id: "2",
    title: "Odoo Manufacturing for Gearlabs Spa",
    description:
      "Desarrollo de funciones y personalizaciones en el módulo de manufactura de Odoo para optimizar procesos productivos de la empresa. MVC en Python bajo la infraestructura de Odoo",
    tags: ["Odoo", "Python", "ERP"],
  },
  {
    id: "10",
    title: "Administración AWS Gearlabs Spa",
    description:
      "Gestión y optimización de la infraestructura en AWS: reducción de costos en S3 con lifecycle, migraciones y actualizaciones de bases de datos, right-sizing de EC2 y RDS, limpieza de snapshots EBS y volúmenes sin uso, apagado programado de entornos de desarrollo, migración de datos fríos a Glacier y revisión de recursos ociosos con Cost Explorer.",
    tags: ["AWS", "S3", "RDS", "EC2", "CloudWatch"],
  },
  {
    id: "9",
    title: "Portafolio personal",
    description:
      "Sitio web con Next.js, diseño responsive, layout modular y despliegue en Vercel.",
    tags: ["Next.js", "React", "TypeScript"],
  },
];
