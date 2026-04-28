import { type Statut } from "./common.types.ts";

export interface FormationDetail {
  id: string;
  niveau: string;
  institution: string;
  dateDebut: string;
  dateFin?: string;
  location: string;
}

export interface Formation {
  id: string;
  diplome: string;
  niveau?: string;
  statut: Statut;
  dateDebut: string;
  dateFin?: string;
  institution: string;
  location: string;
  description?: string;
  specialite?: string;
  serie?: string;
  competences?: string[];
  details?: FormationDetail[];
}