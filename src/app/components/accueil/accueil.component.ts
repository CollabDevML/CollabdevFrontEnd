import { Component, inject, OnInit, signal } from '@angular/core';
import { AccueilService } from '../../services/accueil/accueil.service';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { projet } from '../../models/projet/projet';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent implements OnInit {
  isSoutienState = signal(false);

  constructor(private accueilService: AccueilService) {}

  ideeProjets: Ideeprojet[] = [];
  projets: projet[] = [];

  ngOnInit(): void {
    const users_id = Number(localStorage.getItem('user_id'));
    this.accueilService
      .getRecommandationByideeProjet(users_id)
      .subscribe((data) => {
        this.ideeProjets = data;
      });
    this.accueilService
      .getRecommandationByProjet(users_id)
      .subscribe((data) => {
        this.projets = data;
      });
    throw new Error('Method not implemented.');
  }

  handelClick(): void {
    if (this.isSoutienState()) {
      this.isSoutienState.set(false);
    } else {
      this.isSoutienState.set(true);
    }
  }
}
