import { Component, Input } from '@angular/core';
import { projet } from '../../../models/projet/projet';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardprojet',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './cardprojet.component.html',
  styleUrl: './cardprojet.component.css'
})
export class CardprojetComponent {
  @Input() projet!: projet

  constructor(projetService: ProjetService, router: Router) {}

  voirProjet(projet: any) {
    this.projetService.setProjet(projet);
    this.router.navigate(['/projet-details']);
  }
}
