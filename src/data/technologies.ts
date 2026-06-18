import type { Technology } from "@/types/portfolio";

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const technologies: Technology[] = [
  { name: "HTML", src: devicon("html5/html5-original.svg") },
  { name: "CSS", src: devicon("css3/css3-original.svg") },
  { name: "JS", src: devicon("javascript/javascript-original.svg") },
  { name: "Python", src: devicon("python/python-original.svg") },
  { name: "React", src: devicon("react/react-original.svg") },
  { name: "Next.js", src: devicon("nextjs/nextjs-original.svg") },
  { name: "Node.js", src: devicon("nodejs/nodejs-original.svg") },
  { name: "Git", src: devicon("git/git-original.svg") },
];
