import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IdeeProjetServiceService } from '../../../services/proposition/idee-projet-service.service';
import { HttpClient } from '@angular/common/http';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { DomaineIdeeProjetService } from '../../../services/domaine-idee-projet.service.service';
import { RequestIdeeProjet } from '../../../models/ideeprojet/request-idee-projet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposition-idee-projet',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    SideBarComponent
  ],
  templateUrl: './proposition-idee-projet.component.html',
  styleUrls: ['./proposition-idee-projet.component.css'],
})
export class PropositionIdeeProjetComponent implements OnInit {

  titre: string = '';
  description: string = '';
  domaine: string = ''; // valeur enum
  nomFichier: string = '';
  selectedFile: File | null = null;
  domaines: { key: string, label: string }[] = [];
  idPorteur: number = 1;
  erreurs: string[] = [];

  constructor(
    private ideeProjetService: IdeeProjetServiceService,
    private domaineService: DomaineIdeeProjetService,
    private router: Router,
    private http: HttpClient
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

    if (!this.titre || !this.description || !this.domaine) {
      this.erreurs.push('Veuillez remplir tous les champs.');
      return;
    }

    if (!this.selectedFile) {
      this.envoyerIdeeProjet('');
      return;
    }

    // Téléversement du fichier
    this.ideeProjetService.uploadFile(this.selectedFile).subscribe({
      next: (response) => {
        const uriCDC = response.chemin;
        this.envoyerIdeeProjet(uriCDC);
      },
      error: (uploadError) => {
        console.error('Erreur upload :', uploadError);
        this.erreurs.push('Erreur lors de l’envoi du fichier.');
      }
    });
  }

  private envoyerIdeeProjet(uriCDC: string): void {
    const nouvelleIdee: RequestIdeeProjet = {
      titre: this.titre,
      description: this.description,
      domaine: [this.domaine], // tableau de chaînes
      uriCDC: uriCDC
    };

    this.ideeProjetService.ajouterIdeeProjet(this.idPorteur, nouvelleIdee).subscribe({
      next: (projectResponse) => {
        console.log('Projet ajouté avec succès', projectResponse);
        alert('Votre idée de projet a été soumise avec succès.');
        this.resetForm();
        this.router.navigate(['/']);
      },
      error: (projectError) => {
        console.error('Erreur soumission :', projectError);
        this.erreurs.push('Erreur lors de l’envoi du projet.');
      }
    });
  }

  private resetForm(): void {
    this.titre = '';
    this.description = '';
    this.domaine = '';
    this.nomFichier = '';
    this.selectedFile = null;
  }
}
