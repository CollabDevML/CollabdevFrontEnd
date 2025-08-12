import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
import { DashboardgestionnaireServiceService, Projet } from '../../services/dashboardgestionnaire.service.service';
import { Gestionnaire } from '../../models/gestionnaire/gestionnaire';
import { Observable } from 'rxjs/internal/Observable';
import { IdToIntService } from '../../services/utiliteur/id-to-int.service';
import { projet } from '../../models/projet/projet';
import { Demandecontributions } from '../../models/demandecontributions/demandecontributions';
import { Contribution } from '../../models/contribution/contribution';
import { DemandescontributionsService } from '../../services/demandescontributions/demandescontributions.service';

@Component({
  selector: 'app-dashboard-gestionnaire',
  imports: [
    NgStyle,
    NgStyle,
    CardprojetComponent,
    CardcontributionComponent,
    FullCalendarModule,
    PopUpsComponent,
    CommonModule,
  ],
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrl: './dashboard-gestionnaire.component.css',
})
export class DashboardGestionnaireComponent implements OnInit {
  user!:ResponseGestionnaire;

  constructor(
    private data:DataService,
    private dataG:GestionnaireDataService,
    private route:Router
  ){

  }

  ngOnInit(){
    if (this.data.user_role == null || this.data.user_role == ""){
      this.route.navigate(["login"]);
    }
    this.data.getDataUserById().subscribe({
      next:(res)=> {
        this.user = res;
        console.log(res);
         console.log("user existe")
      this.getProject(this.user.idGestionnaire)
      },
      error:(err)=> {
          console.warn(err);
      },
    });
  
     
    
  }
  sidebarOpen: boolean = true;
  ispopupVisible: boolean = false;
  gestionnaire!: ResponseGestionnaire;
  userId!: number | null;
  userRole!: string | null;
  projetsRecents!: Projet[];
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

   //get projets
   getProject(id: number){
      this.dashboardgestionnaireservices.getGestionnaireProjet(id).subscribe({
        next:(res) =>{
         this.projetsRecents = [...res]
         .sort( (a, b) =>
              new Date(b.dateDebut).getTime() - new Date(a.dateDebut).getTime()
          )
          .slice(0, 5);
          console.log(this.projetsRecents)
        },
        error(err) {
            console.warn(err)
        },
  })
   }
  /*
  //get the gestionnaire
  getGestionnaire() {
    this.dashboardgestionnaireservices.getGestionnaire(this.userId!).subscribe({
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
  }*/

 
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
