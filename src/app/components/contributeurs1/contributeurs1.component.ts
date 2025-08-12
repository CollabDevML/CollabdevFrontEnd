import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideBarComponent } from '../UI/side-bar/side-bar.component';
import { FooterComponent } from '../UI/footer/footer.component';
import { RecherchebarreComponent } from '../UI/recherchebarre/recherchebarre.component';

@Component({
  selector: 'app-contributeurs1',
  imports: [CommonModule, RecherchebarreComponent, SideBarComponent, FooterComponent],
  templateUrl: './contributeurs1.component.html',
  styleUrl: './contributeurs1.component.css'
})
export class Contributeurs1Component {

}
