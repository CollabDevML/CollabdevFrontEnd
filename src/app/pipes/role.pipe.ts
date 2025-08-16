import { Pipe, PipeTransform } from '@angular/core';
import { Enumerations } from '../models/enums/enums';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(role: string): string {
    switch(role){
      case 'ADMIN' : 
        return 'Administrateur' 
      case 'SUPER_ADMIN': 
        return 'Super Administrateur' 
      case 'CONTRIBUTEUR' : 
        return 'Contributeur'
      case 'GESTIONNAIRE' : 
        return 'Gestionnaire'
      case 'PORTEUR_PROJET' : 
        return 'Porteur de projet'
      default: 
        return 'Rôle'
    }
  }

}
