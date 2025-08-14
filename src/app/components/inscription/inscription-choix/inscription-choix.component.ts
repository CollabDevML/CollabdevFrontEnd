import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Users } from '../../../models/users';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-inscription-choix',
  imports: [RouterLink],
  templateUrl: './inscription-choix.component.html',
  styleUrl: './inscription-choix.component.css',
})
export class InscriptionChoixComponent implements OnInit {
  user!: Users; // Pour stocker les données de l'utilisateur si nécessaire
  constructor(
    private route: Router,
    private rt: ActivatedRoute,
    private data: DataService
  ) {}
  ngOnInit() {
    if (!this.data.userData) {
      console.error('Aucune donnée utilisateur trouvée dans le service.');
      this.route.navigate(['inscription']);
    } else {
      this.user = this.data.userData;

      console.log(
        `les données enregistrements dans le choix : ${this.user.getEmail}`
      ); // Récupérer les données de l'utilisateur depuis le service
    }
  }
  choix(ch: string) {
    switch (ch) {
      case 'PORTEUR_PROJET':
        console.log('CHOIX PP=====================');
        this.route.navigate(['inscription/porteur_projet']);
        break;
      case 'GESTIONNAIRE':
        console.log('CHOIX G=====================');
        this.route.navigate(['inscription/gestionnaire']);
        break;
      case 'CONTRIBUTEUR':
        console.log('Ici le porteur');
        this.route.navigate(['inscription/contributeur']);
        break;
      default:
        console.error('Choix invalide: ' + ch);
        this.route.navigate(['inscription/choix']);
        break;
    }
  }
}
