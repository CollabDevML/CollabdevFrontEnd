import { Enumerations } from '../enums/enums';
import { projet } from '../projet/projet';
import { projet } from 'src/app/models/projet/projet';

export class ResponseGestionnaire {
  prenom!: string;
  nom!: string;
  email!: string;
  genre!: Enumerations.Genre;
  preferences: []=[];
  uriCV!: string;
  estValide!: boolean;
  idGestionnaire!: number;
  idUtilisateur!: number;
  projets: projet[] = []
  // constructor(
  //   prenom: string,
  //   nom: string,
  //   email: string,
  //   genre: Enumerations.Genre,
  //   preferences: [],
  //   uriCV: string,
  //   estValide: boolean,
  //   idGestionnaire: number,
  //   idUtilisateur: number
  // ) {
  //   this.prenom = prenom;
  //   this.nom = nom;
  //   this.email = email;
  //   this.genre = genre;
  //   this.preferences = preferences;
  //   this.uriCV = uriCV;
  //   this.estValide = estValide;
  //   this.idGestionnaire = idGestionnaire;
  //   this.idUtilisateur = idUtilisateur;
  // }

  // get getPrenom(): string {
  //   return this.prenom;
  // }
  // set setPrenom(prenom: string) {
  //   this.prenom = prenom;
  // }
  // get getNom(): string {
  //   return this.nom;
  // }
  // set setNom(nom: string) {
  //   this.nom = nom;
  // }
  // get getEmail(): string {
  //   return this.email;
  // }
  // set setEmail(email: string) {
  //   this.email = email;
  // }
  // get getGenre(): Enumerations.Genre {
  //   return this.genre;
  // }
  // set setGenre(genre: Enumerations.Genre) {
  //   this.genre = genre;
  // }
  // get getPreferences(): [] {
  //   return this.preferences;
  // }
  // set setPreferences(preferences: []) {
  //   this.preferences = preferences;
  // }
  // get getUriCV(): string {
  //   return this.uriCV;
  // }
  // set setUriCV(uriCV: string) {
  //   this.uriCV = uriCV;
  // }
  // get getEstValide(): boolean {
  //   return this.estValide;
  // }
  // set setEstValide(estValide: boolean) {
  //   this.estValide = estValide;
  // }
  // get getIdGestionnaire(): number {
  //   return this.idGestionnaire;
  // }
  // set setIdGestionnaire(idGestionnaire: number) {
  //   this.idGestionnaire = idGestionnaire;
  // }
  // get getIdUtilisateur(): number {
  //   return this.idUtilisateur;
  // }
  // set setIdUtilisateur(idUtilisateur: number) {
  //   this.idUtilisateur = idUtilisateur;
  // }
}
