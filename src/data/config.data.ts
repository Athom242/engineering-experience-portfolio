import { type SiteConfig } from "./../types/config.types";

const siteConfig: SiteConfig = {
  siteName: "Engineering Experience",
  author: "Moussavou Anthony ",

  tagline:
    "Designing, simulating and building systems across 3D, software, robotics and industrial engineering.",

  theme: {
    primaryColor: "#c8f055",
    secondaryColor: "#0a0a09",
    accentColor: "#deff66",
    backgroundColor: "#0a0a09"
  },

  seo: {
    title: "Engineering Experience | Interactive Engineering Portfolio",
    description:
      "Interactive portfolio of a multidisciplinary engineer working across 3D creation, robotics, software and electromechanical systems.",
    keywords: [
      "engineering portfolio",
      "robotics",
      "3D animation",
      "electromechanical systems",
      "automation",
      "data science",
      "simulation",
      "software development"
    ],
    url: "https://engineering-experience.dev"
  },

  header: {
    logo: {
      text: "EE",
      label: "Engineering Experience"
    },

    navLinks: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Creative", href: "#creative" },
      { label: "Engineering", href: "#engineering" },
      { label: "Data", href: "#data" },
      { label: "Contact", href: "#contact" }
    ],

    cta: {
      label: "Contact Me",
      email: "hello@engineering.dev"
    },

    defaultLanguage: "EN",
    availableLanguages: ["EN", "FR"],
    defaultTheme: "dark"
  },

  footer: {
    marquee: [
      "3D Cinematic Creation",
      "Robotics & Intelligent Systems",
      "Electromechanical Engineering",
      "Industrial Automation",
      "Software & Data Systems",
      "Simulation & Modeling"
    ],

    navigation: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Creative", href: "#creative" },
      { label: "Engineering", href: "#engineering" },
      { label: "Data", href: "#data" },
      { label: "Contact", href: "#contact" }
    ],

    expertise: [
      "3D & Animation",
      "Robotics",
      "Electromechanics",
      "Automation",
      "Software & Data"
    ],

    socials: [
      { name: "GitHub", url: "https://github.com/" },
      { name: "LinkedIn", url: "https://linkedin.com/" },
      { name: "ArtStation", url: "https://artstation.com/" },
      { name: "Email", url: "mailto:hello@engineering.dev" }
    ],

    partners: [
      "Orange Digital Center",
      "Sonatel",
      "UCAD",
      "FabLab Dakar"
    ],

    cta: {
      title: "Let’s build together",
      subtitle:
        "Available for engineering, software and creative projects.",
      buttonLabel: "Get in touch",
      email: "hello@engineering.dev"
    },

    about: {
      tagline:
        "Multidisciplinary engineer building systems across digital, physical and simulated environments."
    },

    status: {
      label: "Open to work",
      text: "Available for opportunities and collaborations"
    }
  },

  socialLinks: [
    { name: "GitHub", url: "https://github.com/" },
    { name: "LinkedIn", url: "https://linkedin.com/" },
    { name: "ArtStation", url: "https://artstation.com/" }
  ]
};

export default siteConfig;