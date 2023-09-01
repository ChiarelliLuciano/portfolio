import {
  frontend,
  backend,
  database,
  design,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  mui,
  mysql,
  postgresql,
  next,
  portfolio,
  performance,
  groupchat,
  unaj,
  educacionit,
  p5,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca De",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollo Front-End",
    icon: frontend,
  },
  {
    title: "Desarrollo Back-End",
    icon: backend,
  },
  {
    title: "Bases de Datos",
    icon: database,
  },
  {
    title: "Diseño Web",
    icon: design,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MaterialUI",
    icon: mui,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Git",
    icon: git,
  },
];

const formation = [
  {
    title: "Fullstack Developer",
    company_name: "Plataforma 5",
    icon: p5,
    iconBg: "#ffff",
    points: [
      " JavaScript Coding Bootcamp (+800 horas).",
      "Pair programming, proyectos individuales y grupales, círculos de trabajo de habilidades blandas.",
      "Práctica profesional con una empresa real aplicando SCRUM y cumpliendo Sprints semanales.",
    ],
  },
  {
    title: "JavaScript + ReactJs",
    company_name: "EducaciónIT",
    icon: educacionit,
    iconBg: "#ffff",
    points: [
      "Curso de ReactJs.",
      "Curso de JavaScript Avanzado.",
      "Curso de Introducción a JavaScript.",
    ],
  },
  {
    title: "Estudios de Grado",
    company_name: "Universidad Nacional Arturo Jauretche",
    icon: unaj,
    iconBg: "#ffff",
    points: ["Actualmente cursando la carrera de Ingeniería en Informática."],
  },
];

const projects = [
  {
    name: "Open Chat App",
    description:
      "Aplicación de mensajería en tiempo real creada con NextJS, TypeScript, Tailwind y MongoDB.",
    tags: [
      {
        name: "NextJS, TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB, Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind, HeadlessUI",
        color: "pink-text-gradient",
      },
    ],
    image: groupchat,
    source_code_link: "https://github.com/ChiarelliLuciano/chat-app",
  },
  {
    name: "Performance Review",
    description:
      "Aplicación fullstack desarrollada durante la práctica profesional del Bootcamp de Plataforma 5. Provee un ABM de varias entidades y también las herramientas para realizar devoluciones en base al rendimiento laboral.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: performance,
    source_code_link: "https://github.com/GlobalNewsRRHH/client/tree/public",
  },
  {
    name: "Portfolio",
    description:
      "Para mi primer portfolio como desarrollador, el objetivo era lograr un diseño atractivo, interactivo y mobile responsive. Espero que te guste!",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ChiarelliLuciano/portfolio",
  },
];

export { services, technologies, formation, projects };
