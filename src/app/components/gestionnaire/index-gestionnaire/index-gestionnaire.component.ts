import { Component, OnInit } from '@angular/core';
import { GestionnaireDataService } from '../../../services/gestionnaire/gestionnaire-data.service';
import { Users } from '../../../models/users';
import { DataService } from '../../../services/data.service';
import { HeaderComponent } from '../../UI/header/header.component';
import { FooterComponent } from '../../UI/footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { ResponseGestionnaire } from '../../../models/gestionnaire/response-gestionnaire';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index-gestionnaire',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './index-gestionnaire.component.html',
  styleUrl: './index-gestionnaire.component.css'
})
export class IndexGestionnaireComponent implements OnInit {
  user!:ResponseGestionnaire;
  constructor(
    private data:DataService,
    private dataG:GestionnaireDataService,
    private route:Router
  ){

  }

  ngOnInit(): void {
    if (this.data.user_role == null || this.data.user_role == undefined || this.data.user_role == ""){
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

}
