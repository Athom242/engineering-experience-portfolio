import { TypeExperience } from "./common.types";

export interface Experience {
  id: string;
  titre: string;
  type: TypeExperience;
  entreprise: string;
  location: string;
  dateDebut: string;
  dateFin?: string;
  description: string;
  realisations?: string[];
  technologies?: string[];
}