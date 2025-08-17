import { Component, inject, OnInit, signal } from '@angular/core';
import { AccueilService } from '../../services/accueil/accueil.service';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { projet } from '../../models/projet/projet';
import { ElapsedTimePipe } from '../../pipes/elapsed-time.pipe';
import { FormsModule } from '@angular/forms';
import { RechercheService, ResultatRecherche } from '../../services/recherche.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [ElapsedTimePipe, FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent implements OnInit {
  soutiensState = signal<{ [key: number]: boolean }>({});
  searchTerm = '';
  searchResults: ResultatRecherche[]= [];
  searchExecuted = false;//indique si on a deja cherche
  ideeProjets: Ideeprojet[] = [];
  projets: projet[] = [];
  users_id = Number(localStorage.getItem('user_id'));
  constructor(
    private accueilService: AccueilService,
    private rechercheService:RechercheService,
    private router : Router
  ) {}

 

  ngOnInit(): void {
    this.accueilService
    .getRecommandationByideeProjet(this.users_id)
    .subscribe((data) => {
      // Conversion Date -> string ISO
      this.ideeProjets = data.map((idee: any) => ({
        ...idee,
        datePublication: new Date(idee.datePublication)
      }));
    });
    console.log("Id de l'utilisateur : ", this.users_id);
    this.accueilService
      .getRecommandationByProjet(this.users_id)
      .subscribe((data) => {
        this.projets = data;
         console.log('Projets reçus :', this.projets);
      });
  }
  search(): void{
    this.searchExecuted = true;
    if(!this.searchTerm.trim()){
    this.searchResults= [];
    return;
    }
    this.rechercheService.searchAll(this.searchTerm)
    .subscribe(results =>{
      console.log("Résultats recherche :", results);
      this.searchResults = results;
    });
  }
  //Navigation selon type de résultat
  goToResult(result: ResultatRecherche): void{
    switch(result.type){
     case 'projet':
        this.router.navigate(['/projets', result.id]);
        break;
      case 'idee':
        this.router.navigate(['/idees', result.id]);
        break;
      case 'utilisateur':
        this.router.navigate(['/utilisateurs', result.id]);
        break;
      default:
        console.warn('Type inconnu:', result);
    }
  }

  // Vérifie si un projet est soutenu
  isSoutienState(id: number): boolean {
    // return this.soutiensState.get(id) || false;
    return this.soutiensState()[id] || false;
  }
  // Change l'état de soutien pour un projet spécifique
  handelClick(id: number): void {
    if (this.isSoutienState(id)) {
      // Retirer soutien
      this.accueilService.retirerSoutien(id, this.users_id).subscribe({
        next: () => {
          this.soutiensState.update((state) => ({
            ...state,
            [id]: false,
          }));
        },
        error: (err) => console.error('Erreur retrait soutien', err),
      });
    } else {
      // Ajouter soutien
      this.accueilService.soutenirUneIdeeProjet(id, this.users_id).subscribe({
        next: () => {
          this.soutiensState.update((state) => ({
            ...state,
            [id]: true,
          }));
        },
        error: (err) => console.error('Erreur ajout soutien', err),
      });
    }
  }
}
