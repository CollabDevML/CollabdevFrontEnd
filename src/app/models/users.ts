export class Users {
  private prenom: string;
  private nom: string;
  private email: string;
  private motDePasse: string;
  private genre: string;
  private preferences: [] = [];

  constructor(
    prenom: string,
    nom: string,
    email: string,
    motDePasse: string,
    genre: string,
    preferences: []
  ) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.motDePasse = motDePasse;
    this.genre = genre;
    this.preferences = preferences;
  }

  //Getter et setter
  //prenom
  get getPrenom(): string {
    return this.prenom;
  }

  set setPrenom(prenom: string) {
    this.prenom = prenom;
  }

  //nom
  get getNom(): string {
    return this.nom;
  }

  set setNom(nom: string) {
    this.nom = nom;
  }

  //Email
  get getEmail(): string {
    return this.email;
  }

  set setEmail(email: string) {
    this.email = email;
  }

  //Mot de passe
  get getMotDePasse(): string {
    return this.motDePasse;
  }

  set setMotDePase(motDePasse: string) {
    this.motDePasse = motDePasse;
  }

  //Genre
  get getGenre(): string {
    return this.genre;
  }

  set setGenre(genre: string) {
    this.genre = genre;
  }

  //Preferences :
  get getPreferences():[]{
    return this.preferences;
  }

  set setPreferences(preferences:[]){
    this.preferences = preferences;
  }

  public static readonly ROLE_CONTRIBUTEUR: string = 'CONTRIBUTEUR';
  public static readonly ROLE_GESTIONNAIRE: string = 'GESTIONNAIRE';
  public static readonly ROLE_PORTER_PROJET: string = 'PORTEUR_PROJET';

  public static readonly ROLES: string[] = [
    Users.ROLE_CONTRIBUTEUR,
    Users.ROLE_GESTIONNAIRE,
    Users.ROLE_PORTER_PROJET,
  ];
  public static readonly ROLES_LABELS: { [key: string]: string } = {
    [Users.ROLE_CONTRIBUTEUR]: 'Contributeur',
    [Users.ROLE_GESTIONNAIRE]: 'Gestionnaire',
    [Users.ROLE_PORTER_PROJET]: 'Porteur de Projet',
  };
  public static readonly ROLES_ICONS: { [key: string]: string } = {
    [Users.ROLE_CONTRIBUTEUR]: 'fa-solid fa-user',
    [Users.ROLE_GESTIONNAIRE]: 'fa-solid fa-users-gear',
    [Users.ROLE_PORTER_PROJET]: 'fa-solid fa-briefcase',
  };
  public static readonly ROLES_COLORS: { [key: string]: string } = {
    [Users.ROLE_CONTRIBUTEUR]: '#4CAF50',
    [Users.ROLE_GESTIONNAIRE]: '#2196F3',
    [Users.ROLE_PORTER_PROJET]: '#FF9800',
  };
  public static readonly ROLES_DESCRIPTIONS: { [key: string]: string } = {
    [Users.ROLE_CONTRIBUTEUR]:
      'Un contributeur est un utilisateur qui participe activement à la plateforme en contribuant à des projets.',
    [Users.ROLE_GESTIONNAIRE]:
      'Un gestionnaire est responsable de la supervision et de la gestion des projets sur la plateforme.',
    [Users.ROLE_PORTER_PROJET]:
      'Un porteur de projet est un utilisateur qui initie et gère un projet spécifique sur la plateforme.',
  };
}
