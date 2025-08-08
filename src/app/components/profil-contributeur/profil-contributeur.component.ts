import { Component, OnInit } from '@angular/core';
import { HeaderProfilComponent } from '../header-profil/header-profil.component';
import { SideBarComponent } from '../UI/side-bar/side-bar.component';
import { FooterComponent } from '../UI/footer/footer.component';
import { CommonModule } from '@angular/common';
import {
  UtilisateurService,
  Utilisateur,
  ReponseProfil,
} from '../../services/profil/profil.service';

@Component({
  selector: 'app-profil-contributeur',
  imports: [
    HeaderProfilComponent,
    SideBarComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './profil-contributeur.component.html',
  styleUrl: './profil-contributeur.component.css',
})
export class ProfilContributeurComponent implements OnInit {
  utilisateur!: Utilisateur;
  idUtilisateur = 1; // à remplacer par l'ID réel (ex: récupéré depuis login ou route)
  nouvellesPreferences: string[] = [];
  projets: any[] = []; // <-- initialisation du tableau projets

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurById(this.idUtilisateur).subscribe({
      next: (data: ReponseProfil) => {
        this.utilisateur = data.utilisateur;
        this.nouvellesPreferences = Array.isArray(this.utilisateur.preferences)
          ? [...this.utilisateur.preferences]
          : [];
        this.projets = Array.isArray(data.projets) ? data.projets : []; // <-- récupération des projets
      },
      error: (err) => console.error(err),
    });
  }

  sauvegarderPreferences(): void {
    this.utilisateurService
      .updatePreferences(this.idUtilisateur, this.nouvellesPreferences)
      .subscribe({
        next: (prefs) => {
          this.utilisateur.preferences = prefs;
          alert('Préférences mises à jour avec succès !');
        },
        error: (err) => console.error(err),
      });
  }
}
