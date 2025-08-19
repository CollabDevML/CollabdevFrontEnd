import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ContributeurDataService } from '../../../services/contributeur/contributeur-data.service';
import { ToastrService } from 'ngx-toastr';
import { projet } from '../../../models/projet/projet';
import { FormsModule, NgModel } from '@angular/forms';
import { Contributeur } from '../../../models/contributeur/contributeur';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-accueil-contributeur',
  imports: [CommonModule, FormsModule, DatePipe, SlicePipe],
  templateUrl: './accueil-contributeur.component.html',
  styleUrl: './accueil-contributeur.component.css',
})
export class AccueilContributeurComponent implements OnInit {
  projets!: projet[];
  show: boolean = false;
  projet: any = {};
  message: any;
  utilsateur!: number;
  idProjet!:number;
  contributeurConnecter!: Contributeur;
  profileContributeur: any;
  constructor(
    private data: ContributeurDataService,
    private dataG:DataService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.dataG.getDataUserById().subscribe({
      next:(res)=>{
        this.contributeurConnecter = res;
        console.log(res)
      },
      error:(err)=>{
        console.log(err);
      }
    });
    this.data.listeProjet().subscribe({
      next: (res) => {
        this.projets = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.utilsateur = Number(localStorage.getItem('user_id'));

    // this.data
    //   .GetContributeurByIdUtilidateur(this.utilsateur)
    //   .subscribe((data) => {
    //     this.idCotri = data;
    //   });
  }
  ouvert(projet: projet) {
    this.show = true;
    this.projet = projet;
    this.idProjet = projet.id;
    console.log(projet);
  }
  fermer() {
    this.show = false;
  }

  valider() {
    const demande = {
      idContributeur: this.contributeurConnecter.idContributeur,
      idProjet: this.idProjet,
      profileContributeur: this.profileContributeur,
    };
    console.log(demande);
    this.data.demandeContribution(demande).subscribe({
      next: (res) => {
        this.toastr.success('Demande Envoyée avec succès.', 'succès');
        this.projets = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.toastr.error("Erreur lors de l'envoie de demande.", 'erreur');
      },
    });
    this.fermer();
  }

  showDetail = false;

  openDetail(p: any) {
    this.showDetail = true;
    this.projet = p;
  }
  fermerDetail() {
    this.showDetail = false;
  }

  fermerOuvert(p: any) {
    this.showDetail = false;
    this.ouvert(p);
  }
}
