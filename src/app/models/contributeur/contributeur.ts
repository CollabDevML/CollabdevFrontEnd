import { Users } from '../users';

export class Contributeur {
  user: Users;
  niveau: string;
  specialite: string;
  type: string;
  pieces: number;
  uriCv: string;

  constructor(
    user: Users,
    niveau: string,
    specialite: string,
    type: string,
    pieces: number,
    uriCv: string
  ) {
    this.user = user;
    this.niveau = niveau;
    this.specialite = specialite;
    this.type = type;
    this.pieces = pieces;
    this.uriCv = uriCv;
  }
}
