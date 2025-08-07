import { Component } from '@angular/core';
import { HeaderComponent } from '../../UI/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IdeeProjetServiceService } from '../../../services/proposition/idee-projet-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-proposition-idee-projet',
  imports: [
    FormsModule,
    CommonModule,
    
   
  ],
  templateUrl: './proposition-idee-projet.component.html',
   styleUrls: ['./proposition-idee-projet.component.css']
})
export class PropositionIdeeProjetComponent {
  titre: string ='';
  description: string = '';
  domaine: string = '';
  fichierCahierDecharge: File | null =null;

  erreurs: string []= [];
    constructor(private ideeProjetService: IdeeProjetServiceService) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fichierCahierDecharge = file;
    }
  }

  onSubmit(): void {
    this.erreurs = [];

    if (!this.titre.trim()) {
      this.erreurs.push('Le titre est requis.');
    }
    if (!this.description.trim()) {
      this.erreurs.push('La description est requise.');
    }
    if (!this.domaine.trim()) {
      this.erreurs.push('Le domaine est requis.');
    }

    if (this.erreurs.length === 0) {
      const formData = new FormData();
      formData.append('titre', this.titre);
      formData.append('description', this.description);
      formData.append('domaine', this.domaine);
      if (this.fichierCahierDecharge) {
        formData.append('fichier', this.fichierCahierDecharge);
      }

      this.ideeProjetService.envoyerIdee(formData).subscribe({
        next: () => {
          alert('Formulaire soumis avec succès !');
          // Réinitialisation des champs
          this.titre = '';
          this.description = '';
          this.domaine = '';
          this.fichierCahierDecharge = null;
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi :', error);
          alert('Échec de l\'envoi du formulaire.');
        }
      });
    }
  }
}
