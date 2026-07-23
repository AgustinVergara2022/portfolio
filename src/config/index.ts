import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Agustín Vergara — Java & Full Stack Developer",
  author: "Agustín Vergara",
  description:
    "Estudiante avanzado de Ingeniería de Sistemas de Información, enfocado en el desarrollo de aplicaciones web con Java, Spring Boot, Angular y MySQL.",
  lang: "es",
  siteLogo: "/agustin-small.png",

  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mí", href: "#about" },
    { text: "Tecnologías", href: "#skills" },
  ],

  socialLinks: [
    {
      text: "GitHub",
      href: "https://github.com/AgustinVergara2022",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/vergaraagustin/",
    },
    {
      text: "Email",
      href: "mailto:agustinvergara215@gmail.com",
    },
  ],

  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
hero: {
name: "Agustín Vergara",
specialty: "Java & Full Stack Developer",
summary:
"Estudiante avanzado de Ingeniería de Sistemas de Información, enfocado en el desarrollo de aplicaciones web con Java, Spring Boot, Angular y MySQL.",
email: "[agustinvergara215@gmail.com](mailto:agustinvergara215@gmail.com)",
},

experience: [
{
company:
"Universidad Tecnológica Nacional — Facultad Regional Concepción del Uruguay",
position: "Becario — Laboratorio de Informática Básica",
startDate: "Abril 2024",
endDate: "Diciembre 2025",
summary: [
"Asistencia y soporte a estudiantes y docentes en el uso de herramientas y recursos informáticos.",
"Resolución de problemas técnicos y colaboración en tareas relacionadas con el funcionamiento del laboratorio.",
"Asimismo, desarrollé proyectos personales y académicos aplicando conceptos de desarrollo Full Stack, APIs REST, bases de datos y seguridad web.",
],
},
],

projects: [
  {
    name: "MovieTracker",
    summary:
      "Aplicación web full-stack para la gestión y consulta de un catálogo de películas. El proyecto cuenta con un frontend desarrollado en Angular y un backend desarrollado con Java y Spring Boot, conectado a una base de datos MySQL.",
    technologies: ["Java", "Spring Boot", "Angular", "MySQL"],
    linkPreview: "https://peliculas-fullstack.vercel.app/",
    linkSource:
      "https://github.com/AgustinVergara2022/peliculas-fullstack",
    image: "/MovieTracker.png",
  },
  {
    name: "Secure Campus IA",
    summary:
      "Aplicación web desarrollada como parte de mi formación en Ingeniería de Sistemas de Información, orientada a la gestión y seguridad de un entorno universitario.",
    technologies: [ "Next.js",
    "JavaScript",
    "PostgreSQL",
    "Supabase",
    "HTML",
    "CSS",],
    linkPreview: "https://secure-campus-ia.vercel.app/",
    linkSource:
      "https://github.com/AgustinVergara2022/secure-campus-ia",
    image: "/SecureCampus.png",
  },
],

about: {
description: `
Soy Agustín Vergara, estudiante avanzado de Ingeniería de Sistemas de Información en la Universidad Tecnológica Nacional. Me interesa el desarrollo de software y la creación de aplicaciones web, especialmente utilizando Java, Spring Boot, Angular y MySQL.

A lo largo de mi formación académica desarrollé diferentes proyectos full-stack que me permitieron trabajar con APIs REST, bases de datos relacionales, operaciones CRUD y arquitecturas frontend-backend.

Actualmente continúo fortaleciendo mis conocimientos en desarrollo de software y buscando oportunidades que me permitan incorporarme al mundo profesional, seguir aprendiendo y aportar mis conocimientos a nuevos proyectos.
`,
image: "/agustin-big.png",
},
};
