import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { PorteurProjetDataService } from '../../../services/porteurProjet/porteur-projet-data.service';
import { DataService } from '../../../services/data.service';
import { HeaderComponent } from '../../UI/header/header.component';
import { FooterComponent } from '../../UI/footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { ResponseContributeur } from '../../../models/contributeur/response-contributeur';
import { CommonModule } from '@angular/common';
import { ResponsePorteurProjet } from '../../../models/porteurProjet/response-porteur_projet';

@Component({
  selector: 'app-index-porteur-projet',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './index-porteur-projet.component.html',
  styleUrl: './index-porteur-projet.component.css'
})
export class IndexPorteurProjetComponent implements OnInit {

  user!:ResponsePorteurProjet;
  constructor(
    private data:DataService,
    private dataG:PorteurProjetDataService,
    private route:Router
  ){

  }

  ngOnInit(): void {
    if  (this.data.user_role == null || this.data.user_role == undefined || this.data.user_role == "") {
      this.route.navigate(["login"]);
    }
    this.data.getDataUserById().subscribe({
      next:(res)=> {
        this.user = res;
      },
      error:(err)=> {
          console.warn(err);
      },
    });
  }
}
