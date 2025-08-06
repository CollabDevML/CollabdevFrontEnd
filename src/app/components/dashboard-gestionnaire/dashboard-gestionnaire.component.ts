import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';

@Component({
  selector: 'app-dashboard-gestionnaire',
  imports: [
    NgStyle,
    SidebargestionnaireComponent,
    NgClass,
  ],
  templateUrl: './dashboard-gestionnaire.component.html',
  styleUrl: './dashboard-gestionnaire.component.css'
})
export class DashboardGestionnaireComponent {
  
  sidebarOpen!:boolean
  changerEtatSidebar(value: boolean){
    this.sidebarOpen = value
  }
 
  
}
