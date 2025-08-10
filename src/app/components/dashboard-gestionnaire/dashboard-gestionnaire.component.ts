import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';
import { CardprojetComponent } from '../UI/cardprojet/cardprojet.component';
import { CardcontributionComponent } from '../UI/cardcontribution/cardcontribution.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { RouterLink } from '@angular/router';
import { PopUpsComponent } from '../UI/pop-ups/pop-ups.component';
import { DashboardgestionnaireServiceService } from '../../services/dashboardgestionnaire.service.service';
import { Gestionnaire } from '../../models/gestionnaire/gestionnaire';
import { Observable } from 'rxjs/internal/Observable';
import { IdToIntService } from '../../services/utiliteur/id-to-int.service';
import { ResponseGestionnaire } from '../../models/gestionnaire/response-gestionnaire';
import { projet } from '../../models/projet/projet';
import { Demandecontributions } from '../../models/demandecontributions/demandecontributions';


@Component({
  selector: 'app-dashboard-gestionnaire',
  imports: [

  NgStyle,
    SidebargestionnaireComponent,
    CardprojetComponent,
    CardcontributionComponent,
    FullCalendarModule,
    PopUpsComponent,
  ],
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrl: './dashboard-gestionnaire.component.css',
})
export class DashboardGestionnaireComponent implements OnInit{
  
  sidebarOpen:boolean = true;
  ispopupVisible:boolean = false;
  gestionnaire!: ResponseGestionnaire
  userId! : number|null;
  userRole!: string|null; 
  projetsRecents!: projet[];
  nbreProjetsTermine:number = 0;
  nbreProjetsEnCours:number = 0;
  demandeContributions: Demandecontributions[] = [];
  //injection de dependance du composant
  dashboardgestionnaireservices = inject(DashboardgestionnaireServiceService)
  idToIntService = inject(IdToIntService)

  ngOnInit(): void {
    this.userId = this.idToIntService.getId();
    this.userRole = localStorage.getItem('user_role')
    if (this.userId !== null && this.userRole) {
      this.getGestionnaire();
    }
  }
  //get the gestionnaire
  getGestionnaire(){
    this.dashboardgestionnaireservices.getGestionnaire(this.userId!, this.userRole!).subscribe({
      next:(result:any)=> {
        
        this.gestionnaire = result,
        //get the recents projets sort by date
        this.projetsRecents = [...this.gestionnaire.projets]
        .sort((a, b) => new Date(b.dateDebut).getTime() - new Date(a.dateDebut).getTime())
        .slice(0, 4);
        
        // Récupérer toutes les demandes de contributions NON validées de tous ces projets
    this.demandeContributions = this.projetsRecents
    .flatMap(projet => (projet.demandeContributions ?? [])
    .filter(demande => !demande.estValide)
    .map(demande => ({
      projetNom: projet.titre,         
      contributeurNom: demande.contributeur.nom,  
      dateEnvoi: demande.dateEnvoi,       
      ...demande                          // on garde le reste des infos
    })))
    .sort((a, b) => b.id - a.id)       
      },
      error:(error) => console.error('Erreur lors de la récupération du gestionnaire', error)
    })
    this.dashboardgestionnaireservices.nbEnCours$
    .subscribe(nb =>this.nbreProjetsEnCours = nb);
    this.dashboardgestionnaireservices.nbTermines$
    .subscribe(nb =>this.nbreProjetsTermine = nb)
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

  closePopups(valeur: boolean) {
    this.ispopupVisible = valeur;
  }

  openPopups() {
    this.ispopupVisible = true;
  }
}
