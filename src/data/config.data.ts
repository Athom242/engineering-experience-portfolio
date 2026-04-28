import { type SiteConfig } from "./../types/config.types";

const siteConfig: SiteConfig = {
  siteName: "Engineering Experience",
  author: "Mous Anth",

  tagline:
    "Building systems across software, data, robotics and industrial engineering.",

  theme: {
    primaryColor: "#c8f055",
    secondaryColor: "#0a0a09",
    accentColor: "#deff66",
    backgroundColor: "#0a0a09"
  },

  seo: {
    title: "Engineering Experience Portfolio",
    description:
      "Full-Stack Developer, Electromechanical Engineer, Data & Systems Designer",
    keywords: [
      "engineering",
      "full-stack developer",
      "robotics",
      "automation",
      "data analysis"
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
      { label: "Engineering", href: "#engineering" },
      { label: "Data", href: "#data" },
      { label: "Contact", href: "#contact" }
    ],

    cta: {
      label: "Hire me",
      email: "hello@engineering.dev.com"
    },

    defaultLanguage: "EN",
    availableLanguages: ["EN", "FR"],
    defaultTheme: "dark"
  },

  footer: {
    marquee: [
      "Full-Stack Development",
      "Electromechanical Systems",
      "Industrial Automation",
      "Data Analysis",
      "Robotics Engineering"
    ],

    navigation: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Engineering", href: "#engineering" },
      { label: "Data", href: "#data" },
      { label: "Contact", href: "#contact" }
    ],

    expertise: [
      "Full-Stack Dev",
      "Electromechanics",
      "Automation",
      "Data Systems",
      "3D Simulation"
    ],

    socials: [
      { name: "GitHub", url: "https://github.com/" },
      { name: "LinkedIn", url: "https://linkedin.com/" },
      { name: "Email", url: "mailto:hello@engineering.dev" }
    ],

    partners: [
      "Orange Digital Center",
      "Sonatel",
      "UCAD",
      "ESEBAT",
      "CNQP",
      "FabLab Dakar"
    ],

    cta: {
      title: "Let’s build intelligent systems together.",
      subtitle: "Available for engineering & software projects — 2026",
      buttonLabel: "Get in touch",
      email: "hello@engineering.dev"
    },

    about: {
      tagline:
        "Building systems across software, data and engineering. One scalable solution at a time."
    },

    status: {
      label: "Open to work",
      text: "Available for opportunities"
    }
  },

  socialLinks: [
    { name: "GitHub", url: "https://github.com/" },
    { name: "LinkedIn", url: "https://linkedin.com/" }
  ]
};

export default siteConfig;