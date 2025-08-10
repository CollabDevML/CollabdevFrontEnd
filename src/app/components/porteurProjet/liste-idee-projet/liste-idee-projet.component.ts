import { Component } from '@angular/core';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { HeaderComponent } from '../../UI/header/header.component';
import { RecherchebarreComponent } from '../../UI/recherchebarre/recherchebarre.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-idee-projet',
  imports: [
    CommonModule
  ],
  templateUrl: './liste-idee-projet.component.html',
  styleUrl: './liste-idee-projet.component.css'
})
export class ListeIdeeProjetComponent {

  afficheVoirPlus : boolean = false;
  voirPlus(id:any) {
    this.afficheVoirPlus = true;
  }

  fermerModal() {
    this.afficheVoirPlus = false;
  }

  verifier(){
    if (this.afficheVoirPlus) {
      this.afficheVoirPlus = false
    }
  }

}
