export interface SiteTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

/* ───────── SHARED TYPES ───────── */
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

/* ───────── HEADER ───────── */
export type Language = "EN" | "FR";

export interface HeaderLogo {
  text: string;
  label: string;
}

export interface HeaderCTA {
  label: string;
  email: string;
}

export interface HeaderConfig {
  logo: HeaderLogo;
  navLinks: NavigationItem[];
  cta: HeaderCTA;

  defaultLanguage: Language;
  availableLanguages: Language[];
  defaultTheme: "dark" | "light";
}

/* ───────── FOOTER ───────── */
export interface FooterCTA {
  title: string;
  subtitle: string;
  buttonLabel: string;
  email: string;
}

export interface FooterAbout {
  tagline: string;
}

export interface FooterStatus {
  label: string;
  text: string;
}

export interface FooterConfig {
  marquee: string[];
  navigation: NavigationItem[];
  expertise: string[];
  socials: SocialLink[];
  partners: string[];

  cta: FooterCTA;
  about: FooterAbout;
  status: FooterStatus;
}

/* ───────── SITE CONFIG GLOBAL ───────── */
export interface SiteConfig {
  siteName: string;
  author: string;
  tagline?: string;

  theme: SiteTheme;
  seo: SeoConfig;

  header: HeaderConfig;
  footer: FooterConfig;

  socialLinks: SocialLink[];
}