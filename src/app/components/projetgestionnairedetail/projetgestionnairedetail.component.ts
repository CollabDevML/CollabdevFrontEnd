import { Component, inject } from '@angular/core';
import { SideBarComponent } from '../UI/side-bar/side-bar.component';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';
import { ProjetServiceService } from '../../services/projet/projet-service.service';
import { projet } from '../../models/projet/projet';
import { ContributeurDataService } from '../../services/contributeur/contributeur-data.service';
import { PopupOptionsComponent } from '../popup-options/popup-options.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TaskListComponent } from "../task-list/task-list.component";
import { GestionnaireDataService } from '../../services/gestionnaire/gestionnaire-data.service';

@Component({
  selector: 'app-projetgestionnairedetail',
  imports: [
    PopupOptionsComponent,
    CommonModule,
    RouterLink,
    TaskListComponent
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

  gestionnaireService: GestionnaireDataService = inject(GestionnaireDataService);

  route: Router = inject(Router);

  changerEtatSidebar(value: boolean){
    this.sidebarOpen = value
  }

  ngOnInit() {
    this.projet = this.projetService.getProjet();
    if (this.projet == undefined || this.projet == null) {
      this.route.navigate(["gestionnaire/mon_espace"])
    }
    this.gestionnaireService.dataProjet = this.projet;
  }
  toProfil(contributeur:any){
    this.contributeurService.setProjet(contributeur)
  }


  togglePopup() {
    this.showPopup = !this.showPopup;
  }


  date(dat: string) {
    return new Date(dat);
  }
}
