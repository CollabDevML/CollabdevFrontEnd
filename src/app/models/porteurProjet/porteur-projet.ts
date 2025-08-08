import { Users } from '../users';

export class PorteurProjet {
  private user: Users;
  constructor(user: Users) {
    this.user = user;
  }

  //user
  get getUser(): Users {
    return this.user;
  }

  set setUser(user: Users) {
    this.user = user;
  }
}
