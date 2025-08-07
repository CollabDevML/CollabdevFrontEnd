import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';
import { CardprojetComponent } from '../UI/cardprojet/cardprojet.component';
import { CardcontributionComponent } from '../UI/cardcontribution/cardcontribution.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core/index.js';

@Component({
  selector: 'app-dashboard-gestionnaire',
  imports: [
    NgStyle,
    SidebargestionnaireComponent,
    CardprojetComponent,
    CardcontributionComponent,
    FullCalendarModule,
  ],
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrl: './dashboard-gestionnaire.component.css'
})
export class DashboardGestionnaireComponent {
  
  sidebarOpen!:boolean

   calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    weekends: true,
    locale: 'fr'
  };
  changerEtatSidebar(value: boolean){
    this.sidebarOpen = value
  }
 
  
}
