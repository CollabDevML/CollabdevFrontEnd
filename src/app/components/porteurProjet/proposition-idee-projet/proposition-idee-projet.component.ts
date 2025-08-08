import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../UI/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IdeeProjetServiceService } from '../../../services/proposition/idee-projet-service.service';
import { HttpClient } from '@angular/common/http';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { DomaineIdeeProjetService } from '../../../services/domaine-idee-projet.service.service';


@Component({
  selector: 'app-proposition-idee-projet',
  imports: [
    FormsModule,
    CommonModule,
    SideBarComponent,
    HeaderComponent
   
  ],
  templateUrl: './proposition-idee-projet.component.html',
   styleUrls: ['./proposition-idee-projet.component.css']
})
export class PropositionIdeeProjetComponent implements OnInit {
 titre: string = '';
  description: string = '';
  domaine: string = '';
  nomFichier: string = '';
  fichier: File | null = null;

  domaines: { key: string, label: string }[] = [];

  erreurs: string[] = [];

  constructor(
    private http: HttpClient,
    private domaineService: DomaineIdeeProjetService
  ) {}

  ngOnInit(): void {
    this.domaines = this.domaineService.getAllOptions();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.nomFichier = file.name;
      this.fichier = file;
    }
  }

  changerFichier(): void {
    this.nomFichier = '';
    this.fichier = null;
  }

  onSubmit(): void {
    this.erreurs = [];

    // Validation sans le fichier obligatoire
    if (!this.titre || !this.description || !this.domaine) {
      this.erreurs.push('Titre, description et domaine sont obligatoires.');
      return;
    }

    // Si aucun fichier → envoyer directement
    if (!this.fichier) {
      this.envoyerIdeeProjet('');
      return;
    }

    // Sinon, téléverser d'abord le fichier puis envoyer
    const formData = new FormData();
    formData.append('fichier', this.fichier);

    this.http.post<string>('http://localhost:8080/upload', formData)
      .subscribe({
        next: (uriCDC: string) => {
          this.envoyerIdeeProjet(uriCDC);
        },
        error: err => {
          this.erreurs.push("Erreur lors du téléversement du fichier : " + (err.error?.message || err.message));
        }
      });
  }

  private envoyerIdeeProjet(uriCDC: string): void {
    const ideeProjet = {
      titre: this.titre,
      description: this.description,
      domaine: [{ nom: this.domaine }], // format attendu par ton backend
      uriCDC: uriCDC // peut être vide si aucun fichier
    };

    const idPorteur = 1; //  Remplace par le vrai ID
    const url = `http://localhost:8180/utilisateurs/${idPorteur}/idees-projet`;

    this.http.post(url, ideeProjet)
      .subscribe({
        next: () => {
          alert("Idée de projet envoyée avec succès !");
          this.resetForm();
        },
        error: err => {
          this.erreurs.push("Erreur lors de l'envoi du projet : " + (err.error?.message || err.message));
        }
      });
  }

  resetForm(): void {
    this.titre = '';
    this.description = '';
    this.domaine = '';
    this.nomFichier = '';
    this.fichier = null;
  }
}

