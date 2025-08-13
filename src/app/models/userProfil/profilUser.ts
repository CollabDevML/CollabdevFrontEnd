export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  identifiant: string;
  organisation: string;
  intitulePoste: string;
  domaines: string[];
  lieuResidence: string;
  contributions: Contribution[];
  accomplishments: Accomplishment[];
}

export interface Contribution {
  type: 'CodeGov' | 'Greenathon' | 'Aruka Disanka';
  name: string;
  icon: string;
}

export interface Accomplishment {
  level: 'Novice' | 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  color: string;
  achieved: boolean;
}

export interface MenuItem {
  icon: string;
  label: string;
  route: string;
  active?: boolean;
}
