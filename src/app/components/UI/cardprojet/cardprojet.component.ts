import { Component, Input, inject } from '@angular/core';
import { projet } from '../../../models/projet/projet';
import { DatePipe, SlicePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProjetServiceService } from '../../../services/projet/projet-service.service';
import { Projets } from '../../dashboard-gestionnaire/dashboard-gestionnaire.component';


@Component({
  selector: 'app-cardprojet',
  imports: [
  DatePipe,
  SlicePipe
  ],
  templateUrl: './cardprojet.component.html',
  styleUrl: './cardprojet.component.css'
})
export class CardprojetComponent {
  date(dat: string) {
    return new Date(dat);
  }
  @Input() projets!: Projets
  projetService:ProjetServiceService= inject(ProjetServiceService)
  router : Router = inject(Router)

  voirdetail(projet:any)
  {
    this.projetService.setProjet(projet);
    this.router.navigate(["gestionnaire/details_projet"]);
  }
}
