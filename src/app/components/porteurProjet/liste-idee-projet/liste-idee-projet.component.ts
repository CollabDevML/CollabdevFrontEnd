import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { HeaderComponent } from '../../UI/header/header.component';
import { RecherchebarreComponent } from '../../UI/recherchebarre/recherchebarre.component';
import { PorteurProjet } from '../../../models/porteurProjet/porteur-projet';
import { PorteurProjetDataService } from '../../../services/porteurProjet/porteur-projet-data.service';
import { ResponseIdeeProjet2 } from '../../../models/ideeprojet/response-idee-projet2';
import { IdeeprojetService } from '../../../services/ideeprojet/ideeprojet.service';
import { CommonModule, DatePipe } from '@angular/common';
import { GestionnaireDataService } from '../../../services/gestionnaire/gestionnaire-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-idee-projet',
  imports: [
    CommonModule
  ],
  templateUrl: './liste-idee-projet.component.html',
  styleUrl: './liste-idee-projet.component.css',
})

export class ListeIdeeProjetComponent implements OnInit{
  mesIdeeProjet:any;
  afficheVoirPlus : boolean = false;
  contenus: any;
  constructor(private data: PorteurProjetDataService,private dataGest:GestionnaireDataService,private route:Router) {}
  gestionnaire:boolean=false;
  voirPlus(element: any) {
    this.afficheVoirPlus = true;
    this.contenus = element;
  }

  ngOnInit(): void {
    this.data.listeIdeeProjet().subscribe({
      next: (res) => {
        console.log(res);
        this.mesIdeeProjet = res;
      },
      error(err) {
        console.log(
          'Erreur lors de la recuperation des idees de projet !!!',
          err
        );
      },
    });

    if (localStorage.getItem("user_role") === "GESTIONNAIRE") {
      this.gestionnaire = true;
    }
  }

  fermerModal() {
    this.afficheVoirPlus = false;
  }

  verifier() {
    if (this.afficheVoirPlus) {
      this.afficheVoirPlus = false;
    }
  }

  soutenir(id: number) {
    this.data.soutenirIdeeProjet(id).subscribe({
      next: (res) => {
        console.log(res);
        alert('Idee soutenue avec succès !!!');
      },
      error(err) {
        console.log(
          'Erreur lors de la recuperation des idees de projet !!!',
          err
        );
      },
    });
  }


  cliqueMoi(idee:any){
    console.log(idee);
    this.dataGest.ideeData = idee;
    this.route.navigate(["gestionnaire/nouveau_projet"]);
  }
}
