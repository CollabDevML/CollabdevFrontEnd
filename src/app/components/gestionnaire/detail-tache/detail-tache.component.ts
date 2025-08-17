import { Component, OnInit } from '@angular/core';
import { GestionnaireDataService } from '../../../services/gestionnaire/gestionnaire-data.service';
import { Router, RouterLink } from '@angular/router';
import { DatePipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-detail-tache',
  imports: [DatePipe,RouterLink,SlicePipe],
  templateUrl: './detail-tache.component.html',
  styleUrl: './detail-tache.component.css'
})
export class DetailTacheComponent implements OnInit{
rejeter(arg0: any) {
throw new Error('Method not implemented.');
}
assigner(arg0: any) {
throw new Error('Method not implemented.');
}

  taches:any;
  afficheVoirPlus : boolean = false;
  contributeurAccepter: any[]=[];
  contributeurEnAttente: any[]=[];
  ensembleContributeur: any[]=[];
  constructor(private data:GestionnaireDataService,private route:Router){}

  ngOnInit(): void {
    const idProjet = Number(localStorage.getItem("id_projet")) || null;
    const idTache = Number(localStorage.getItem("id_tache")) || null;
    if (idProjet != null && idTache != null) {
      this.data.tacheById(idTache).subscribe({
        next:(res)=>{
          this.taches = res;
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
    // if (this.taches == undefined || this.taches == null) {
    //   this.route.navigate(["gestionnaire/mon_espace"])
    // }
    console.log(this.taches);
  }

  voirPlus(element: any) {
    this.afficheVoirPlus = true;
    const idProjet = Number(localStorage.getItem("id_projet"));
    this.data.demandeContributeurParProjet(idProjet).subscribe({
      next:(res)=>{
        console.log(res);
        this.ensembleContributeur = Array.isArray(res) ? [...res].reverse() : [];
        // this.contributeurAccepter = res
      },
      error:(err)=>{
        console.log(err);
      }
    });
    this.contributeurAccepter = element;
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
