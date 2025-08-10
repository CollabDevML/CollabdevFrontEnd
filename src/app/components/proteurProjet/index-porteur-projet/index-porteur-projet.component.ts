import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { PorteurProjetDataService } from '../../../services/porteurProjet/porteur-projet-data.service';
import { DataService } from '../../../services/data.service';
import { HeaderComponent } from '../../UI/header/header.component';
import { FooterComponent } from '../../UI/footer/footer.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ResponseContributeur } from '../../../models/contributeur/response-contributeur';
import { CommonModule } from '@angular/common';
import { ResponsePorteurProjet } from '../../../models/porteurProjet/response-porteur_projet';
import { RecherchebarreComponent } from "../../UI/recherchebarre/recherchebarre.component";
import { SideBarComponent } from "../../UI/side-bar/side-bar.component";
import { Login } from '../../../models/login/login';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-index-porteur-projet',
  imports: [
    // HeaderComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule,
    RecherchebarreComponent,
    // SideBarComponent
    RouterLink,
    RouterLinkActive,
],
  templateUrl: './index-porteur-projet.component.html',
  styleUrl: './index-porteur-projet.component.css'
})
export class IndexPorteurProjetComponent implements OnInit {
  sidebarOpen:boolean = true;
  user!:ResponsePorteurProjet;
  constructor(
    private data:DataService,
    private dataG:PorteurProjetDataService,
    private route:Router
  ){

  }
  // Propriété pour contrôler l'affichage détaillé ou compact de la sidebar
  afficherDetailsSidebar = true;

  // Méthode pour basculer entre l'état détaillé et compact de la sidebar
  changerEtatSidebar() {
    this.afficherDetailsSidebar = !this.afficherDetailsSidebar;
  }

  ngOnInit(): void {
    this.data.getDataUserById().subscribe({
      next:(res)=> {
        this.user = res;
      },
      error:(err)=> {
          console.warn(err);
      },
    });

    if  (this.data.user_role == null || this.data.user_role == undefined || this.data.user_role == "") {
      this.route.navigate(["login"]);
    }
  }

  deconnexion(){
    LoginService.logout();
  }
}
