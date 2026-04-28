export type PartenaireType = "Entreprise" | "Université" | "Organisation";

export interface Partenaire {
  id: string;
  name: string;
  logo: string;
  link: string;
  type: PartenaireType;
  specialite?: string;
}

export interface PartenaireList {
  items: Partenaire[];
  totalItems: number;
}