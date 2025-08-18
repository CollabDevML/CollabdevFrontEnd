import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionnaireDataService } from '../../../../services/gestionnaire/gestionnaire-data.service';
import { projet } from '../../../../models/projet/projet';
import { Enumerations } from '../../../../models/enums/enums';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService, NgxSpinnerComponent, NgxSpinnerModule } from 'ngx-spinner';
import { TacheService } from '../../../../services/tache.service';

@Component({
  selector: 'app-formulaire-projet',
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule
],
  templateUrl: './formulaire-projet.component.html',
  styleUrl: './formulaire-projet.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FormulaireProjetComponent implements OnInit {
  projetIdee: projet = new projet;
  niveaux!: Enumerations.Niveau;
dateDebut: any;
dateFin: any;
  idIdeeProjet: any;
  constructor(private route:Router,private data:GestionnaireDataService,private toast:ToastrService,private spinner:NgxSpinnerService, private gestionnaireService: GestionnaireDataService){}
  ngOnInit(): void {
    if (this.data.ideeData == null || this.data.ideeData == "" || this.data.ideeData == undefined) {
      this.route.navigate(["gestionnaire/mes_idees"]);
    }
    this.projetIdee = this.data.ideeData;
    this.idIdeeProjet = this.data.ideeData.id;
    console.log(this.niveaux)
  }
  onSubmit(){
    var idGestionnaire: number = 0
   this.gestionnaireService.trouverUnGestionnaireParsonidutilisateur(Number(localStorage.getItem("user_id"))).subscribe( {
    next: (data) => {
      idGestionnaire = data.id;
    }
   }  )
    const projet = {
      titre:this.projetIdee.titre,
      description: this.projetIdee.description,
      estFini:false,
      etat: true,
      dateDebut:new Date(this.dateDebut).toISOString(),
      dateFin:new Date(this.dateFin).toISOString(),
      niveauDAcces: this.projetIdee.niveauDAcces,
      piecesDAcces: this.projetIdee.piecesDAcces,
      idGestionnaire: idGestionnaire,
      idIdeeProjet:this.idIdeeProjet,
    };

    console.log(projet)
    this.spinner.show();
    this.data.addProjet(projet).subscribe({
      next:(res)=>{
        this.spinner.hide();
        this.toast.success("Projet Crée avec succès !!!","Succès")
        this.route.navigate(["gestionnaire/mon_espace"]);
      },
      error:(err)=>{
        this.spinner.hide();
        this.toast.error("Erreur lors de la creation du projet","Erreur")
        console.log("Erreur est : ",err);
      }
    })
  }
}
