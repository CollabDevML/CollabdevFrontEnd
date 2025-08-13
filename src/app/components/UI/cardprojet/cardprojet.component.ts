import { Component, Input, inject } from '@angular/core';
import { projet } from '../../../models/projet/projet';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProjetServiceService } from '../../../services/projet/projet-service.service';


@Component({
  selector: 'app-cardprojet',
  imports: [


  DatePipe,
  ],
  templateUrl: './cardprojet.component.html',
  styleUrl: './cardprojet.component.css'
})
export class CardprojetComponent {
  @Input() projet!: projet
  projetService:ProjetServiceService= inject(ProjetServiceService)
  router : Router = inject(Router)

  voirdetail(projet:any)
  {
    this.projetService.setProjet(projet);
    this.router.navigate(["details_projet"]);
  }
}
