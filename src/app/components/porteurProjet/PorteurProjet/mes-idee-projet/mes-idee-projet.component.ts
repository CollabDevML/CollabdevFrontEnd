import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../../UI/side-bar/side-bar.component';
import { RecherchebarreComponent } from '../../../UI/recherchebarre/recherchebarre.component';
import { PorteurProjet } from '../../../../models/porteurProjet/porteur-projet';
import { PorteurProjetDataService } from '../../../../services/porteurProjet/porteur-projet-data.service';
import { GestionnaireDataService } from '../../../../services/gestionnaire/gestionnaire-data.service';
import { Router } from '@angular/router';
import { ListeIdeeProjetComponent } from '../../liste-idee-projet/liste-idee-projet.component';

@Component({
  selector: 'app-mes-idee-projet',
  imports: [
    ListeIdeeProjetComponent
  ],
  templateUrl: './mes-idee-projet.component.html',
  styleUrl: './mes-idee-projet.component.css'
})
export class MesIdeeProjetComponent implements OnInit {
  mesProjets:any
  gestionnaire:boolean =false;
  constructor(private data:PorteurProjetDataService,private dataGest:GestionnaireDataService,private route:Router){}
  ngOnInit(): void {

    this.data.listerMesProjet().subscribe({
      next: (res) => {
        console.log(res);
        this.mesProjets = res;
      },
      error(err) {
        console.log(
          'Erreur lors de la recuperation des idees de projet !!!',
          err
        );
      },
    });

    if (localStorage.getItem("user_role") ==="GESTIONNAIRE") {
      this.gestionnaire = true;
    }
  }

  cliqueMoi(idee:any){
    console.log(idee);
    this.dataGest.ideeData = idee;
    this.route.navigate(["gestionnaire/nouveau_projet"]);
  }
}
