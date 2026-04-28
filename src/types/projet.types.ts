export interface Projet {
  id: string;
  slug: string;
  titre: string;
  description: string;
  technologies: string[];
  stackPrincipale?: string[];
  image?: string;
  demo?: string;
  github?: string;
  statut: "Terminé" | "En cours";
  categorie?: string;
  featured?: boolean;
  tags?: string[];
}