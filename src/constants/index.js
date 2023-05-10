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
  carrent,
  jobit,
  tripguide,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, formation, projects };
