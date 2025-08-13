import { Component, OnInit } from '@angular/core';
import { GestionnaireDataService } from '../../../services/gestionnaire/gestionnaire-data.service';
import { Users } from '../../../models/users';
import { DataService } from '../../../services/data.service';
import { HeaderComponent } from '../../UI/header/header.component';
import { FooterComponent } from '../../UI/footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { ResponseGestionnaire } from '../../../models/gestionnaire/response-gestionnaire';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { RecherchebarreComponent } from '../../UI/recherchebarre/recherchebarre.component';
import { SidebargestionnaireComponent } from '../../UI/sidebargestionnaire/sidebargestionnaire.component';

@Component({
  selector: 'app-index-gestionnaire',
  imports: [
    // FooterComponent,
    RouterOutlet,
    CommonModule,
    // SidebargestionnaireComponent,
    // SideBarComponent,
    // HeaderComponent,
    // RecherchebarreComponent,
    // FooterComponent
  ],
  templateUrl: './index-gestionnaire.component.html',
  styleUrl: './index-gestionnaire.component.css',
})
export class IndexGestionnaireComponent implements OnInit {
  sidebarOpen: boolean = true;
  user!: ResponseGestionnaire;
  static sidebarOpen: boolean;
  constructor(
    private data: DataService,
    private dataG: GestionnaireDataService,
    private route: Router
  ) {}

  ngOnInit() {
    // if (this.data.user_role == null || this.data.user_role == ""){
    //   this.route.navigate(["login"]);
    // }
    this.data.getDataUserById().subscribe({
      next: (res) => {
        this.user = res;
        console.log(res);
      },
      error: (err) => {
        console.warn(err);
      },
    });
  }

  static changerEtatSidebar(value: boolean) {
    this.sidebarOpen = value;
    console.log('La valeur de side : ', this.sidebarOpen);
  }
}
