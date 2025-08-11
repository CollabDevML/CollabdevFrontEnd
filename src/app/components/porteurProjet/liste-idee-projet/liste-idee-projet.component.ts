import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { HeaderComponent } from '../../UI/header/header.component';
import { RecherchebarreComponent } from '../../UI/recherchebarre/recherchebarre.component';
import { CommonModule } from '@angular/common';
import { PorteurProjet } from '../../../models/porteurProjet/porteur-projet';
import { PorteurProjetDataService } from '../../../services/porteurProjet/porteur-projet-data.service';

@Component({
  selector: 'app-liste-idee-projet',
  imports: [
    CommonModule
  ],
  templateUrl: './liste-idee-projet.component.html',
  styleUrl: './liste-idee-projet.component.css'
})
export class ListeIdeeProjetComponent implements OnInit{
  mesIdeeProjet:any;
  afficheVoirPlus : boolean = false;
  contenus: any;
  constructor(
    private data:PorteurProjetDataService
  ){}

  voirPlus(element:any) {
    this.afficheVoirPlus = true;
    this.contenus = element;
  }

  ngOnInit(): void {
    this.data.listeIdeeProjet().subscribe({
      next:(res)=>{
        console.log(res)
        this.mesIdeeProjet = res
      }
      ,
      error(err) {
          console.log("Erreur lors de la recuperation des idees de projet !!!",err);
      },
    })
  }

  fermerModal() {
    this.afficheVoirPlus = false;
  }

  verifier(){
    if (this.afficheVoirPlus) {
      this.afficheVoirPlus = false
    }
  }

  soutenir(id:number){
    this.data.soutenirIdeeProjet(id).subscribe({
      next:(res)=>{
        console.log(res)
        alert("Idee soutenue avec succès !!!");
      }
      ,
      error(err) {
          console.log("Erreur lors de la recuperation des idees de projet !!!",err);
      },
    })
  }

}
