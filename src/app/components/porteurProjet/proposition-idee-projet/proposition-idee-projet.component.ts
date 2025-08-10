import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../UI/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IdeeProjetServiceService } from '../../../services/proposition/idee-projet-service.service';
import { HttpClient } from '@angular/common/http';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { DomaineIdeeProjetService } from '../../../services/domaine-idee-projet.service.service';
import { RequestIdeeProjet } from '../../../models/ideeprojet/request-idee-projet';
import { IdeeprojetService } from '../../../services/ideeprojet/ideeprojet.service';
import { Router } from '@angular/router';


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
// Variables du formulaire
  titre: string = '';
  description: string = '';
  domaine: string = ''; // Cette variable stocke la valeur de l'enum
  nomFichier: string = '';
  erreurs: string[] = [];
  selectedFile: File | null = null;
  domaines: { key: string, label: string }[] = [];
  idPorteur: number = 1;

  constructor(
    private ideeProjetService: IdeeProjetServiceService,
    private domaineService: DomaineIdeeProjetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.domaines = this.domaineService.getAllOptions();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.nomFichier = file.name;
    }
  }

  changerFichier() {
    this.selectedFile = null;
    this.nomFichier = '';
  }

  onSubmit(): void {
    this.erreurs = [];

    if (!this.titre || !this.description || !this.domaine || !this.selectedFile) {
      this.erreurs.push('Veuillez remplir tous les champs et téléverser un fichier.');
      return;
    }

    // Étape 1 : Envoi du fichier
    this.ideeProjetService.uploadFile(this.selectedFile).subscribe({
      next: (response) => {
        const uriCDC = response.chemin;

        // Étape 2 : Préparation de l'objet pour la soumission
        const nouvelleIdee: RequestIdeeProjet = {
          titre: this.titre,
          description: this.description,
          // MODIFICATION CLÉ : Le domaine est envoyé comme un tableau de chaînes
          domaine: [this.domaine],
          uriCDC: uriCDC
        };

        // Étape 3 : Soumission des données du projet
        this.ideeProjetService.ajouterIdeeProjet(this.idPorteur, nouvelleIdee).subscribe({
          next: (projectResponse) => {
            console.log('Idée de projet ajoutée avec succès !', projectResponse);
            alert('Votre idée de projet a été soumise avec succès.');
            this.router.navigate(['/']);
          },
          error: (projectError) => {
            console.error('Erreur lors de la soumission de l’idée :', projectError);
            this.erreurs.push('Une erreur est survenue lors de l’envoi de votre idée.');
          }
        });
      },
      error: (uploadError) => {
        console.error('Erreur lors de l’upload du fichier :', uploadError);
        this.erreurs.push('Une erreur est survenue lors de l’envoi du fichier.');
      }
    });
  }
}

