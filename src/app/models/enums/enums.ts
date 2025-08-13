export namespace Enumerations {
  export enum Genre {
    M,
    F,
  };
  export enum Niveau{
    DEBUTANT,
    INTERMEDIAIRE,
    AVANCER
  };
  export enum NiveauTache{
    SIMPLE,
    NOVICE,
    INTERMEDIAIRE,
    DIFFICILE,
    COMPLEXE
  };
  export enum Role {
    ADMIN,
    SUPER_ADMIN,
    CONTRIBUTEUR,
    GESTIONNAIRE,
    PORTEUR_PROJET
  }
  export enum Type {
    DEV_FULLSTACK,
    DEV_MOBILE,
    DEV_FRONT_END,
    DEV_BACK_END,
    DESIGNER,
    TESTER,
    DEV_OPS
  }

  export enum TypeFichier {
    BADGE,
    CDC,
    CV
  }

  export enum TypeGestionProjet {
    ACTIVER,
    DESACTIVER,
    SUPPRIMER
  }

  export enum TypeGestionUtilisateurs {
    BLOQUER,
    DEBLOQUER,
    SUPPRIMER
  }

  export enum DomaineIdeeProjet {
    FINTECH,
    EDTECH,
    HEALTHTECH,
    AGRITECH,
    LEGALTECH,
    GOVTECH,
    GREENTECH,
    PROPTECH,
    INSURTECH,
    HRTECH,
    RETAILTECH,
    TRAVELTECH,
    SPORTTECH,
    ADTECH,
    MARTECH,
    MUSICTECH,
    FASHIONTECH,
    FOODTECH,
    CYBERSECURITY,
    AI_ML,
    IOT,
    BIG_DATA,
    CLOUD_COMPUTING,
    BLOCKCHAIN
  }

}
