import { Component } from '@angular/core';
import { SideBarComponent } from '../../../UI/side-bar/side-bar.component';
import { RecherchebarreComponent } from '../../../UI/recherchebarre/recherchebarre.component';

@Component({
  selector: 'app-mes-idee-projet',
  imports: [
     SideBarComponent,
    RecherchebarreComponent  ],
  templateUrl: './mes-idee-projet.component.html',
  styleUrl: './mes-idee-projet.component.css'
})
export class MesIdeeProjetComponent {

}
