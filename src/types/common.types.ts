export type Statut = "Obtenu" | "En cours";

export type TypeExperience = "Freelance" | "Stage" | "CDI" | "CDD";

export interface Langue {
  id: string;
  langue: string;
  niveau: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Courant";
}

export interface ReseauSocial {
  id: string;
  nom: string;
  url: string;
  icon?: string;
}

export interface Service {
  id: string;
  titre: string;
  description: string;
  icone?: string;
}

export interface Certification {
  id: string;
  titre: string;
  organisme: string;
  date: string;
  lien?: string;
}

export interface Temoignage {
  id: string;
  nom: string;
  message: string;
  poste?: string;
}