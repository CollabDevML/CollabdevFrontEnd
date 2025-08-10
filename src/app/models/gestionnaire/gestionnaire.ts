import { Users } from '../users';

export class Gestionnaire {
  user: Users;
  uriCv: string;

  constructor(user: Users, uriCv: string) {
    this.user = user;
    this.uriCv = uriCv;
  }
}
