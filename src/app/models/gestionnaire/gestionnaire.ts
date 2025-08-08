import { Users } from '../users';

export class Gestionnaire {
  public user: Users;
  public uriCv: string;

  constructor(user: Users, uriCv: string) {
    this.user = user;
    this.uriCv = uriCv;
  }

  // //user
  public get getUser(): Users { 
  return this.user;
  }

  // public set setUser(user: Users) {
  //   this.user = user;
  // }

   //uricv
   public get getUriCv(): string {
     return this.uriCv;
   }

  // public set setUriCv(uriCv: string) {
  //   this.uriCv = uriCv;
  // }
}
