import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ContributeurDataService } from '../../../services/contributeur/contributeur-data.service';
import { projet } from '../../../models/projet/projet';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-mes-projet',
  imports: [SlicePipe, DatePipe,CommonModule,FormsModule],
  templateUrl: './mes-projet.component.html',
  styleUrl: '../../contributeurs2/contributeurs2.component.css',
})
export class MesProjetComponent implements OnInit {
marquerTerminee(arg0: any) {
throw new Error('Method not implemented.');
}
  projets: any;
  constructor(
    private data: DataService,
    private dataC: ContributeurDataService
  ) {}
  ngOnInit(): void {
    const id = Number(localStorage.getItem('user_id'));
    this.dataC.listProjetContributeur(id).subscribe({
      next: (value) => {
        this.projets = value;
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selected: any = null;
  showDetail = false;
  showDemande = false;

  tacheSel: any = null;
  showTacheDetail = false;

  message = '';
  profileContributeur = '';
  disponibilite?: number;

  openDetail(p: any) {
    this.selected = p;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
    this.selected = null;
  }

  openDemande(p: any) {
    this.selected = p;
    this.showDemande = true;
  }
  closeDemande() {
    this.showDemande = false;
  }

  envoyerDemande(id: number) {
    this.closeDemande();
  }

}
