import {
  frontend,
  backend,
  database,
  design,
  javascript,
  html,
  css,
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
  comingsoon,
  portfolio,
  performance,
  bermejo,
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
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
  {
    name: "Performance Review",
    description:
      "Aplicación fullstack desarrollada en equipo durante la práctica profesional del JavaScript Bootcamp de Plataforma 5. Provee un ABM de varias entidades y también las herramientas para realizar devoluciones en base al rendimiento laboral.",
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
    name: "Bermejo Especialidades",
    description:
      "Trabajo final del curso de ReactJs de EducaciónIT: recrear una página web existente solucionando sus problemas, mejorando su diseño y agregando funcionalidades.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Swiper",
        color: "green-text-gradient",
      },
      {
        name: "EmailJS",
        color: "pink-text-gradient",
      },
    ],
    image: bermejo,
    source_code_link:
      "https://github.com/ChiarelliLuciano/bermejo-especialidades",
  },
];

export { services, technologies, formation, projects };
