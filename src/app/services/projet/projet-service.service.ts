import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {
  private projetSelectionne: any = null;

  setProjet(projet: any) {
    this.projetSelectionne = projet;
  }

  getProjet() {
    return this.projetSelectionne;
  }
  
}
