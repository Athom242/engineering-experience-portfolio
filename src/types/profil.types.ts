export interface Profil {
  id: string;
  nom: string;
  titre: string;
  description: string;
  email: string;
  telephone?: string;
  localisation: string;
  photo?: string;
  cv?: string;
  disponible?: boolean;
}