import { Component } from '@angular/core';
import { SideBarComponent } from '../UI/side-bar/side-bar.component';
import { SidebargestionnaireComponent } from '../UI/sidebargestionnaire/sidebargestionnaire.component';

@Component({
  selector: 'app-projetgestionnairedetail',
  imports: [
    SidebargestionnaireComponent,
  ],
  templateUrl: './projetgestionnairedetail.component.html',
  styleUrl: './projetgestionnairedetail.component.css'
})
export class ProjetgestionnairedetailComponent {
  sidebarOpen:boolean = true;
  changerEtatSidebar(value: boolean){
    this.sidebarOpen = value
  }

}
