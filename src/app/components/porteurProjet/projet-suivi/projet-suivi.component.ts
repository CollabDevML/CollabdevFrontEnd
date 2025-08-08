import { Component } from '@angular/core';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { HeaderComponent } from '../../UI/header/header.component';
import { RecherchebarreComponent } from '../../UI/recherchebarre/recherchebarre.component';

@Component({
  selector: 'app-projet-suivi',
  imports: [
    SideBarComponent,
    RecherchebarreComponent
  ],
  templateUrl: './projet-suivi.component.html',
  styleUrl: './projet-suivi.component.css'
})
export class ProjetSuiviComponent {

}
