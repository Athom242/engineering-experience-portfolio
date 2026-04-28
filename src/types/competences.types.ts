export interface Skill {
  nom: string;
  niveau: number; // 1 à 5 ou %
}

export interface CompetencesGlobales {
  techniques: Skill[];
  outils: string[];
  softSkills: string[];
}