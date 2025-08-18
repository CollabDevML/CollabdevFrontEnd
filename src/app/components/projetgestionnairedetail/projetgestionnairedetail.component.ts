import { Component, inject } from '@angular/core';
import { SideBarComponent } from '../UI/side-bar/side-bar.component';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';
import { ProjetServiceService } from '../../services/projet/projet-service.service';
import { projet } from '../../models/projet/projet';
import { ContributeurDataService } from '../../services/contributeur/contributeur-data.service';
import { PopupOptionsComponent } from '../popup-options/popup-options.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GestionnaireDataService } from '../../services/gestionnaire/gestionnaire-data.service';
import { Tache } from '../../models/tache/tache';
import { TacheService } from '../../services/tache.service';

interface DisplayTask extends Tache {
  status: string;
}
@Component({
  selector: 'app-projetgestionnairedetail',
  imports: [PopupOptionsComponent, CommonModule],
  templateUrl: './projetgestionnairedetail.component.html',
  styleUrl: './projetgestionnairedetail.component.css',
})
export class ProjetgestionnairedetailComponent {
  projet!: projet;
  public taches: DisplayTask[] = [];
  //injection de dépendances
  projetService: ProjetServiceService = inject(ProjetServiceService);
  sidebarOpen: boolean = true;
  showPopup = false;
  contributeurService: ContributeurDataService = inject(
    ContributeurDataService
  );

  gestionnaireService: GestionnaireDataService = inject(
    GestionnaireDataService
  );

  route: Router = inject(Router);

  constructor(
    private tacheService: TacheService,
    private data: GestionnaireDataService
  ) {}

  changerEtatSidebar(value: boolean) {
    this.sidebarOpen = value;
  }

  ngOnInit() {
    this.projet = this.projetService.getProjet();
    const idProjet = Number(localStorage.getItem('id_projet'));
    if (idProjet == undefined || idProjet == null) {
      this.route.navigate(['gestionnaire/mon_espace']);
    }

    this.gestionnaireService.dataProjet = this.projet;
    this.gestionnaireService.listerProjet().subscribe({
      next: (res) => {
        this.projet = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.loadTaches();
    this.nbreContributeur = new Set(this.projet.demandeContributions
      .filter(demandes => demandes.estAccepte)
      .map(demandes => demandes.contributeur_id)
      ).size
  }

  loadTaches() {
    this.data.verifierIdProjet();
    // const idProjet = Number(localStorage.getItem('id_projet'));
    this.data.listeTache(this.data.dataProjet.id).subscribe({
      next: (taches) => {
        console.log(taches);
        this.taches = taches.map((task: { estFini: any }) => ({
          ...task,
          status: task.estFini ? 'Terminée' : 'À faire',
        }));
        // this.filteredTasks = [...this.tasks];
      },
      error: (error) => {
        console.log('Erreur lors du chargement : ' + error);
      },
    });
  }

  toProfil(contributeur: any) {
    this.contributeurService.setProjet(contributeur);
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  date(dat: string) {
    return new Date(dat);
  }

  detailTache(tache: DisplayTask) {
    this.data.tacheData = tache;
    localStorage.setItem('id_tache', String(tache.id));
    this.route.navigate(['gestionnaire/detail_tache']);
  }

  goToTasks(projetId: number) {
    this.route.navigate(['gestionnaire/nouvelle_tache', projetId, 'tasks']);
  }
}
