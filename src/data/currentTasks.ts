export type CurrentTask = {
  id: string;
  text: string;
  date: string;
  enCurso: boolean;
};

export const currentTasks: CurrentTask[] = [
  { id: "1", text: "Plataforma de certificados App Script + odoo", date: "16 jun 2026", enCurso: true },
  { id: "2", text: "Lectura libro: Patrones de diseño", date: "9 jun 2026", enCurso: false },
  {
    id: "3",
    text: "Odoo Manufacturing Module Functions for Gearlabs Spa",
    date: "2 jun 2026",
    enCurso: false,
  },
  { id: "4", text: "Asistencia a AWS Community Day", date: "30 may 2026", enCurso: false },
  {
    id: "5",
    text: "Permiso de circulación API REST update nodejs express js",
    date: "18 may 2026",
    enCurso: false,
  },
  { id: "6", text: "Asistencia Evento Odoo en Chile", date: "8 may 2026", enCurso: false },
  {
    id: "7",
    text: "Permiso de circulación frontend update",
    date: "3 may 2026",
    enCurso: false,
  },
  { id: "8", text: "Official Anthropic AI talk", date: "28 abr 2026", enCurso: false },
  { id: "9", text: "Asistencia a Nerdeala", date: "16-18 abr 2026", enCurso: false },
  {
    id: "10",
    text: "Permiso de circulación Cloud Infrastructure update",
    date: "18 abr 2026",
    enCurso: false,
  },
  {
    id: "11",
    text: "We Transport React Widget Project react nodejs expressjs",
    date: "18 mar 2026",
    enCurso: false,
  },
  {
    id: "12",
    text: "Administration and development of mania.cl website wordpress expressjs",
    date: "18 feb 2026",
    enCurso: false,
  },
  {
    id: "13",
    text: "Administration of scolari.cl website, plugins and widgets",
    date: "jun 2025",
    enCurso: false,
  },
];
