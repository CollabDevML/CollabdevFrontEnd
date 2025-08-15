import { Component, OnInit } from "@angular/core";
import { ProjetService } from "../../services/projet.service";
import { projet } from "../../models/projet/projet";
import { RecherchebarreComponent } from "../UI/recherchebarre/recherchebarre.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-contb-2',
  standalone: true,
  imports: [ CommonModule,
    RecherchebarreComponent],
  templateUrl: './contributeurs2.component.html',
  styleUrls: ['./contributeurs2.component.css']
})
export class Contributeurs2Component implements OnInit {

  projetsActifs: projet[] = [];
  projetsArchives: projet[] = [];
  loading = true;

  constructor(private data: ProjetService) {}

  ngOnInit(): void {
    this.data.getprojets().subscribe({
      next: (value) => {
        // Séparer selon la propriété "actif"
        this.projetsActifs = value.filter(p => p.actif);
        this.projetsArchives = value.filter(p => !p.actif);
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur lors du chargement des projets", err);
        this.loading = false;
      }
    });
  }

  quitterProjet(projetId: number) {
    this.data.supprimerprojet(projetId).subscribe({
      next: () => {
        // Supprimer des deux listes au cas où
        this.projetsActifs = this.projetsActifs.filter(p => p.id !== projetId);
        this.projetsArchives = this.projetsArchives.filter(p => p.id !== projetId);
      },
      error: (err) => {
        console.error("Erreur lors de la suppression", err);
      }
    });
  }
}
