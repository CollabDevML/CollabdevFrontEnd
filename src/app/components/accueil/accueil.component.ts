import { Component, OnInit, signal } from '@angular/core';
import { AccueilService } from '../../services/accueil/accueil.service';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { projet } from '../../models/projet/projet';
import { ElapsedTimePipe } from '../../pipes/elapsed-time.pipe';
import { FormsModule } from '@angular/forms';
import { RechercheService, ResultatRecherche } from '../../services/recherche.service';
import { Route, Router } from '@angular/router';
import { RecherchebarreService } from '../../services/recherchebarre.service';
import { RecherchebarreComponent } from '../UI/recherchebarre/recherchebarre.component';
import { forkJoin, of } from 'rxjs'; // Ajout de forkJoin et of pour la recherche

@Component({
  selector: 'app-accueil',
  imports: [ElapsedTimePipe, FormsModule, RecherchebarreComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent implements OnInit {
  soutiensState = signal<{ [key: number]: boolean }>({});
  searchTerm = '';
  searchResults: ResultatRecherche[] = [];
  searchExecuted = false; 

  // Propriétés pour stocker les données originales
  originalIdeeProjets: Ideeprojet[] = [];
  originalProjets: projet[] = [];

  // Propriétés pour l'affichage (filtré ou non)
  ideeProjets: Ideeprojet[] = [];
  projets: projet[] = [];

  users_id = Number(localStorage.getItem('user_id'));
  
  constructor(
    private accueilService: AccueilService,
    private rechercheService: RechercheService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Appel de la méthode pour charger les données initiales
    this.refreshData();
  }

  /**
   * Méthode publique pour charger et rafraîchir les données des projets et des idées.
   * Cette méthode est appelée au démarrage du composant (via ngOnInit) et peut être appelée
   * à nouveau pour rafraîchir les données après une action (ex: ajout d'un nouveau projet).
   */
  public refreshData(): void {
    // Chargement des idées de projets
    this.accueilService
      .getRecommandationByideeProjet(this.users_id)
      .subscribe((data) => {
        this.originalIdeeProjets = data.map((idee: any) => ({
          ...idee,
          datePublication: new Date(idee.datePublication)
        }));
        // Initialisation de la liste affichée
        this.ideeProjets = this.originalIdeeProjets; 
      });

    // Chargement des projets
    this.accueilService
      .getRecommandationByProjet(this.users_id)
      .subscribe((data) => {
        this.originalProjets = data;
        // Initialisation de la liste affichée
        this.projets = this.originalProjets;
      });
  }

  // Méthode de recherche mise à jour
  search(): void {
    this.searchExecuted = true;
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      // Si la barre de recherche est vide, on affiche toutes les données originales
      this.ideeProjets = this.originalIdeeProjets;
      this.projets = this.originalProjets;
      this.searchExecuted = false;
      this.searchResults = [];
      return;
    }

    // Filtrer les idées de projets
    this.ideeProjets = this.originalIdeeProjets.filter(idee => 
        idee.titre.toLowerCase().includes(term) ||
        idee.description.toLowerCase().includes(term)
    );

    // Filtrer les projets
    this.projets = this.originalProjets.filter(projet =>
        projet.titre.toLowerCase().includes(term) ||
        projet.description.toLowerCase().includes(term)
    );
    
    // Correction du mappage pour correspondre à l'interface ResultatRecherche
    forkJoin({
      projets: this.rechercheService.searchProjets(term),
      utilisateurs: this.rechercheService.searchUtilisateurs(term),
      idees: this.rechercheService.searchIdees(term),
    }).subscribe(response => {
      this.searchResults = [
        ...response.projets.map(p => ({ id: p.id, title: p.titre, description: p.description, type: 'projet' as const, url: '' })),
        ...response.utilisateurs.map(u => ({ id: u.id, title: u.prenom + ' ' + u.nom, description: u.email, type: 'utilisateur' as const, url: '' })),
        ...response.idees.map(i => ({ id: i.id, title: i.titre, description: i.description, type: 'idee' as const, url: '' })),
      ];
    });
  }
  
  // Navigation selon type de résultat
  goToResult(result: ResultatRecherche): void {
    switch (result.type) {
      case 'projet':
        this.router.navigate(['/projets', result.id]);
        break;
      case 'idee':
        this.router.navigate(['/idees', result.id]);
        break;
      case 'utilisateur':
        this.router.navigate(['/utilisateurs', result.id]);
        break;
      default:
        console.warn('Type inconnu:', result);
    }
  }

  // Vérifie si un projet est soutenu
  isSoutienState(id: number): boolean {
    return this.soutiensState()[id] || false;
  }

  // Change l'état de soutien pour un projet spécifique
  handelClick(id: number): void {
    if (this.isSoutienState(id)) {
      // Retirer soutien
      this.accueilService.retirerSoutien(id, this.users_id).subscribe({
        next: () => {
          this.soutiensState.update((state) => ({
            ...state,
            [id]: false,
          }));
        },
        error: (err) => console.error('Erreur retrait soutien', err),
      });
    } else {
      // Ajouter soutien
      this.accueilService.soutenirUneIdeeProjet(id, this.users_id).subscribe({
        next: () => {
          this.soutiensState.update((state) => ({
            ...state,
            [id]: true,
          }));
        },
        error: (err) => console.error('Erreur ajout soutien', err),
      });
    }
  }
}