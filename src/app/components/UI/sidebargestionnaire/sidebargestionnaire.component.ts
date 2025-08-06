import { CommonModule } from '@angular/common';
import { Component, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-sidebargestionnaire',
  imports: [CommonModule],
  templateUrl: './sidebargestionnaire.component.html',
  styleUrl: './sidebargestionnaire.component.css'
})
export class SidebargestionnaireComponent {
  AfficherSideBar = output<boolean>()
  // Propriété pour contrôler l'affichage détaillé ou compact de la sidebar
  afficherDetailsSidebar = true;

  // Méthode pour basculer entre l'état détaillé et compact de la sidebar
  public changerEtatSidebar() {
    this.afficherDetailsSidebar = !this.afficherDetailsSidebar;
    //Catch the change and emit it
    this.AfficherSideBar.emit(this.afficherDetailsSidebar)
    
  }

}
