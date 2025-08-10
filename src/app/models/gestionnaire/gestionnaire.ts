import { Users } from '../users';

export class Gestionnaire {
  public user: Users;
  public uriCv: string;

  constructor(user: Users, uriCv: string) {
    this.user = user;
    this.uriCv = uriCv;
  }

}
