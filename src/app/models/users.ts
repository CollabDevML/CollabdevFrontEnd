export class Users {
  public prenom: string;
  public nom: string;
  public email: string;
  public motDePasse: string;
  public genre: string;

  constructor(
    prenom: string,
    nom: string,
    email: string,
    motDePasse: string,
    genre: string
  ) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.motDePasse = motDePasse;
    this.genre = genre;
  }

  //Getter et setter
  //prenom
  public get getPrenom(): string {
    return this.prenom;
  }

  public set setPrenom(prenom: string) {
    this.prenom = prenom;
  }

  //nom
  public get getNom(): string {
    return this.nom;
  }

  public set setNom(nom: string) {
    this.nom = nom;
  }

  //Email
  public get getEmail(): string {
    return this.email;
  }

  public set setEmail(email: string) {
    this.email = email;
  }

  //Mot de passe
  public get getMotDePasse(): string {
    return this.motDePasse;
  }

  public set setMotDePase(motDePasse: string) {
    this.motDePasse = motDePasse;
  }

  //Genre
  public get getGenre(): string {
    return this.genre;
  }

  public set setGenre(genre: string) {
    this.genre = genre;
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
