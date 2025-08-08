import { NgClass, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';
import { CardprojetComponent } from '../UI/cardprojet/cardprojet.component';
import { CardcontributionComponent } from '../UI/cardcontribution/cardcontribution.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { RouterLink } from '@angular/router';
import { PopUpsComponent } from '../UI/pop-ups/pop-ups.component';
import { DashboardgestionnaireServiceService } from '../../services/dashboardgestionnaire.service.service';
import { Gestionnaire } from '../../models/gestionnaire/gestionnaire';
import { Observable } from 'rxjs/internal/Observable';


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
  styleUrl: './dashboard-gestionnaire.component.css'
})
export class DashboardGestionnaireComponent {
  
  sidebarOpen:boolean = true;
  ispopupVisible:boolean = false;
  gestionnaire!: Gestionnaire
  //injection de dependance du composant
  dashboardgestionnaireservices = inject(DashboardgestionnaireServiceService)
  

  //get the gestionnaire
  getGestionnaire(){
    this.dashboardgestionnaireservices.getGestionnaire(2).subscribe(
      result => this.gestionnaire = result
    )
    console.log(this.gestionnaire.uriCv)
  }
  

   calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    weekends: true,
    locale: 'fr'
  };

  changerEtatSidebar(value: boolean){
    this.sidebarOpen = value
  }

  closePopups(valeur: boolean)
  {
    this.ispopupVisible = valeur
  }
  
  openPopups()
  {
    this.ispopupVisible = true;
  }
 
  
}
