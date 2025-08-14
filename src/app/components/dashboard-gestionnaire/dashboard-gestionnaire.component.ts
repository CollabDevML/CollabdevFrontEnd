import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';
import { CardprojetComponent } from '../UI/cardprojet/cardprojet.component';
import { CardcontributionComponent } from '../UI/cardcontribution/cardcontribution.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PopUpsComponent } from '../UI/pop-ups/pop-ups.component';
import { DataService } from '../../services/data.service';
import { GestionnaireDataService } from '../../services/gestionnaire/gestionnaire-data.service';
import { ResponseGestionnaire } from '../../models/gestionnaire/response-gestionnaire';
import { DashboardgestionnaireServiceService } from '../../services/dashboardgestionnaire.service.service';
import { Gestionnaire } from '../../models/gestionnaire/gestionnaire';
import { Observable } from 'rxjs/internal/Observable';
import { IdToIntService } from '../../services/utiliteur/id-to-int.service';
import { projet } from '../../models/projet/projet';
import { Demandecontributions } from '../../models/demandecontributions/demandecontributions';
import { Contribution } from '../../models/contribution/contribution';
import { DemandescontributionsService } from '../../services/demandescontributions/demandescontributions.service';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-gestionnaire',
  imports: [
    NgStyle,
    NgStyle,
    CardprojetComponent,
    CardcontributionComponent,
    FullCalendarModule,
    PopUpsComponent,
    CommonModule
  ],
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrl: './dashboard-gestionnaire.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardGestionnaireComponent implements OnInit {
  //Les variables que j'ai creer :
  user!:ResponseGestionnaire;
  tout:boolean=false;
  userId = Number(localStorage.getItem("user_id"));
  userRole = localStorage.getItem("user_role");

  toutProjet!: projet[];
  projetsRecents!: projet[];

  //Fin de la creation de mes variables.

  sidebarOpen: boolean = true;
  ispopupVisible: boolean = false;
  gestionnaire!: ResponseGestionnaire;



  nbreProjetsTermine: number = 0;
  nbreProjetsEnCours: number = 0;
  demandeContributions: Demandecontributions[] = [];
  contributionsList: Contribution[] = [];
  //injection de dependance du composant
  dashboardgestionnaireservices = inject(DashboardgestionnaireServiceService);
  demandescontributionsServices = inject(DemandescontributionsService);
  idToIntService = inject(IdToIntService);
  selectedAction!: string;
  selectedDemande: any;

  constructor(
    private data:DataService,
    private dataG:GestionnaireDataService,
    private route:Router,
    private spinner:NgxSpinnerService
  ){

  }

  voirMois() {
    this.tout = false;
  }
  voirTous() {
    this.tout = true;
  }

  ngOnInit(){
    this.spinner.show();
    this.data.getDataUserById().subscribe({
      next:(res)=> {
        this.user = res;
        this.spinner.hide(),
        this.dataG.getProjetGestionnaire(res.idGestionnaire).subscribe({
          next:(projets:any)=> {
              console.log(projets)
              this.toutProjet = projets;

              this.projetsRecents = projets.slice(0, 3);
              console.log(this.projetsRecents)
          },
          error:(err)=> {
              console.log(err)
          },
        })
        this.getGestionnaire
        console.log(res);
      },
      error:(err)=> {
          console.warn(err);
      },
    });

  }

  //get the gestionnaire
  getGestionnaire(){
    this.dashboardgestionnaireservices.getGestionnaire(this.userId).subscribe({
      next: (result: any) => {
        this.gestionnaire = result;
        console.log(result);
        //get the recents projets sort by date
        this.projetsRecents = [...this.gestionnaire.projets]
          .sort(
            (a, b) =>
              new Date(b.dateDebut).getTime() - new Date(a.dateDebut).getTime()
          )
          .slice(0, 4);

        // Récupérer toutes les demandes de contributions NON validées de tous ces projets
        this.demandeContributions = this.projetsRecents
          .flatMap((projet) =>
            (projet.demandeContributions ?? [])
              .filter((demande) => !demande.estValide)
              .map((demande) => ({
                id: demande.id,
                projetNom: projet.titre,
                contributeurNom: demande.contributeur.nom,
                dateEnvoi: demande.dateEnvoi,
                ...demande,
              }))
          )
          .sort((a, b) => b.id - a.id);

        //recupérer les contributions non validés
        this.contributionsList = this.projetsRecents
          .flatMap((projet) =>
            (projet.contributions ?? [])
              .filter((contributions) => !contributions.estValide)
              .map((contributions) => ({
                id: contributions.id,
                nomProjet: contributions.projet.titre,
                nomContributeur: contributions.contributeur.nom,
                prenomContributeur: contributions.contributeur.prenom,
                nomTache: contributions.tache.nom,
                estValide: contributions.estValide, // on garde le reste des infos
              }))
          )
          .sort((a, b) => b.id - a.id)
          .slice(0, 2);
      },
      error: (error) =>
        console.error('Erreur lors de la récupération du gestionnaire', error),
    });
    this.dashboardgestionnaireservices.nbEnCours$.subscribe(
      (nb) => (this.nbreProjetsEnCours = nb)
    );
    this.dashboardgestionnaireservices.nbTermines$.subscribe(
      (nb) => (this.nbreProjetsTermine = nb)
    );
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    weekends: true,
    locale: 'fr',
  };

  changerEtatSidebar(value: boolean) {
    this.sidebarOpen = value;
  }

  closePopups(confirmed: boolean) {
    this.ispopupVisible = false;

    if (confirmed && this.selectedAction && this.selectedDemande) {
      if (this.selectedAction === 'accept') {
        this.acceptDemande(this.selectedDemande);
      } else {
        this.declineDemande(this.selectedDemande);
      }
    }
  }
  openPopups(action: 'accept' | 'decline', demande: any) {
    this.selectedAction = action;
    this.selectedDemande = demande;
    this.ispopupVisible = true;
    console.log('je click');
  }
  acceptDemande(demande: any) {
    this.demandescontributionsServices
      .AccepteDemande(demande.id, true)
      .subscribe(() => {
        this.demandeContributions = this.demandeContributions.filter(
          (d) => d.id !== demande.id
        );
      });
  }

  declineDemande(demande: any) {
    this.demandescontributionsServices
      .AccepteDemande(demande.id, false)
      .subscribe(() => {
        this.demandeContributions = this.demandeContributions.filter(
          (d) => d.id !== demande.id
        );
      });
  }
}
