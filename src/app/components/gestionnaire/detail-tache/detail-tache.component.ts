import { Component, OnInit } from '@angular/core';
import { GestionnaireDataService } from '../../../services/gestionnaire/gestionnaire-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-tache',
  imports: [],
  templateUrl: './detail-tache.component.html',
  styleUrl: './detail-tache.component.css'
})
export class DetailTacheComponent implements OnInit{

  tache:any;
  afficheVoirPlus : boolean = false;
  contenus: any;
  constructor(private data:GestionnaireDataService,private route:Router){}

  ngOnInit(): void {
    this.tache = this.data.tacheData;
    if (this.tache == undefined || this.tache == null) {
      this.route.navigate(["gestionnaire/mon_espace"])
    }
  }

  voirPlus(element: any) {
    this.afficheVoirPlus = true;
    this.contenus = element;
  }
  fermerModal() {
    this.afficheVoirPlus = false;
  }

  verifier() {
    if (this.afficheVoirPlus) {
      this.afficheVoirPlus = false;
    }
  }

}
