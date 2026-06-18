export type Skill = {
  name: string;
  percent: number;
};

export type Technology = {
  name: string;
  src: string;
};

export type Service = {
  num: string;
  title: string;
  text: string;
};

export type TimelineEntry = {
  lugar: string;
  fecha: string;
  titulo: string;
  texto: string;
};

export type SectionContent = {
  label: string;
  title: string;
  subtitle: string;
};

export type Profile = {
  name: string;
  role: string;
  country: string;
  city: string;
  age: number;
  cvUrl: string;
  photoUrl: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
};
