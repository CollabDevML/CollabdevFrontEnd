import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';
import { CardprojetComponent } from '../UI/cardprojet/cardprojet.component';
import { CardcontributionComponent } from '../UI/cardcontribution/cardcontribution.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PopUpsComponent } from '../UI/pop-ups/pop-ups.component';
import { DataService } from '../../services/data.service';
import { GestionnaireDataService } from '../../services/gestionnaire/gestionnaire-data.service';
import { ResponseGestionnaire } from '../../models/gestionnaire/response-gestionnaire';

@Component({
  selector: 'app-dashboard-gestionnaire',
  imports: [
    NgStyle,
    CardprojetComponent,
    CardcontributionComponent,
    FullCalendarModule,
    PopUpsComponent,
    SidebargestionnaireComponent,
    RouterOutlet
],
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrls: ['./dashboard-gestionnaire.component.css','.././gestionnaire/index-gestionnaire/index-gestionnaire.component.css']
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
      },
      error:(err)=> {
          console.warn(err);
      },
    });
  }

  sidebarOpen:boolean = true;
  ispopupVisible:boolean = false

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
    console.log("je click")
  }


}
