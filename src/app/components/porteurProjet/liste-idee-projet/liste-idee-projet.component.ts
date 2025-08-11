import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { HeaderComponent } from '../../UI/header/header.component';
import { RecherchebarreComponent } from '../../UI/recherchebarre/recherchebarre.component';
import { ResponseIdeeProjet2 } from '../../../models/ideeprojet/response-idee-projet2';
import { IdeeprojetService } from '../../../services/ideeprojet/ideeprojet.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-liste-idee-projet',
  imports: [
    SideBarComponent,
    RecherchebarreComponent,
    DatePipe,
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

/* export class ListeIdeeProjetComponent implements OnInit {
    // Utilisez le modèle de données correspondant à votre API
  ideesProjet: ResponseIdeeProjet2[] = [];

  constructor(private ideeProjetService: IdeeprojetService) { }

  ngOnInit(): void {
    // Appel de la méthode getAll() qui correspond à la route /v2 de votre API
    this.ideeProjetService.getAll().subscribe({
      next: (data) => {
        this.ideesProjet = data;
        console.log('Liste des idées de projet:', this.ideesProjet);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des idées de projet:', error);
      }
    });
  } */
}

