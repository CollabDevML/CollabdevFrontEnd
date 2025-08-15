import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ContributeurDataService } from '../../../services/contributeur/contributeur-data.service';
import { ToastrService } from 'ngx-toastr';
import { projet } from '../../../models/projet/projet';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-accueil-contributeur',
  imports: [CommonModule,FormsModule,DatePipe,SlicePipe],
  templateUrl: './accueil-contributeur.component.html',
  styleUrl: './accueil-contributeur.component.css',
})
export class AccueilContributeurComponent implements OnInit {
  projets!:projet[];
  show: boolean =false;
  projet: any={};
  message: any;
  idCotri:number=0;
  profileContributeur: any;
  constructor(private data:ContributeurDataService,private toastr:ToastrService){}
  ngOnInit(): void {
      this.data.listeProjet().subscribe({
        next:(res)=>{
          this.projets = res
          console.log(res);
        },
        error:(err)=>{
          console.log(err);

        }
      })
    this.idCotri = Number(localStorage.getItem("user_id"));
  }
  ouvert(projet:projet) {
    this.show = true;
    this.projet = projet;
  }
  fermer() {
    this.show = false;
  }

  valider(idPro: number) {

    const demande = {
      idContributeur:this.idCotri,
      idProjet:idPro,
      profileContributeur:this.profileContributeur
    }
    this.data.demandeContribution(demande).subscribe({
        next:(res)=>{
          this.toastr.success("Demande Envoyée avec succès.","succès");
          // this.projets = res
          console.log(res);
        },
        error:(err)=>{
          // console.log(err);
          this.toastr.error("Erreur lors de l'envoie de demande.","erreur");

        }
      })
    this.fermer();
  }
}
