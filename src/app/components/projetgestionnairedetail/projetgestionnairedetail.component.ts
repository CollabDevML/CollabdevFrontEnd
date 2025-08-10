import { Component, inject } from '@angular/core';
import { SideBarComponent } from '../UI/side-bar/side-bar.component';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';
import { ProjetServiceService } from '../../services/projet/projet-service.service';
import { projet } from '../../models/projet/projet';
import { ContributeurDataService } from '../../services/contributeur/contributeur-data.service';
import { PopupOptionsComponent } from '../popup-options/popup-options.component';

@Component({
  selector: 'app-projetgestionnairedetail',
  imports: [
  SidebargestionnaireComponent,
  PopupOptionsComponent
  ],
  templateUrl: './projetgestionnairedetail.component.html',
  styleUrl: './projetgestionnairedetail.component.css'
})
export class ProjetgestionnairedetailComponent {
  projet!: projet;
  //injection de dépendances
  projetService:ProjetServiceService = inject(ProjetServiceService)
  sidebarOpen:boolean = true;
  showPopup = false;
  contributeurService: ContributeurDataService = inject(ContributeurDataService)
  changerEtatSidebar(value: boolean){
    this.sidebarOpen = value
  }

  ngOnInit() {
    this.projet = this.projetService.getProjet();
  }
  toProfil(contributeur:any){
    this.contributeurService.setProjet(contributeur)
  }
  

togglePopup() {
  this.showPopup = !this.showPopup;
}


}
