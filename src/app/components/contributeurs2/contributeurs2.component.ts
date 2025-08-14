import { afterNextRender, Component, Injectable, OnInit } from "@angular/core"
import { ProjetService } from "../../services/projet.service"
import { projet } from "../../models/projet/projet"
import { ɵafterNextNavigation } from "@angular/router";
import { ValueChangeEvent } from "@angular/forms";
import { RecherchebarreComponent } from "../UI/recherchebarre/recherchebarre.component";

@Component({
  selector:'app-contb-2',
  imports: [RecherchebarreComponent],
  templateUrl:'./contributeurs2.component.html',
  styleUrl:'./contributeurs2.component.css'
})
export class Contributeurs2Component implements OnInit {

  listeProjets: projet[] = [];

  constructor(private data: ProjetService) {}

  ngOnInit(): void {
    this.data.getprojets().subscribe({
      next: (value) => {
        this.listeProjets = value; // récupère tous les projets
      },
      error: (err) => {
        console.error("Erreur lors du chargement des projets", err);
      }
    });
  }

  quitterProjet(projetId: number) {
    this.data.supprimerprojet(projetId).subscribe({
      next: () => {
        // On retire le projet côté frontend
        this.listeProjets = this.listeProjets.filter(p => p.id !== projetId);
      },
      error: (err) => {
        console.error("Erreur lors de la suppression", err);
      }
    });
  }
}
