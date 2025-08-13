import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ContributeurDataService } from '../../../services/contributeur/contributeur-data.service';
import { Users } from '../../../models/users';
import { HeaderComponent } from '../../UI/header/header.component';
import { FooterComponent } from '../../UI/footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { ResponseContributeur } from '../../../models/contributeur/response-contributeur';

@Component({
  selector: 'app-index-contributeur',
  imports: [
    // HeaderComponent,
    // FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './index-contributeur.component.html',
  styleUrl: './index-contributeur.component.css',
})
export class IndexContributeurComponent implements OnInit {
  user!: ResponseContributeur;
  constructor(
    private data: DataService,
    private dataC: ContributeurDataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // if (this.data.user_role == null || this.data.user_role == undefined || this.data.user_role == "") {
    //   this.route.navigate(["login"]);
    // }
    this.data.getDataUserById().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.warn(err);
      },
    });
  }
}
