import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mes-taches',
  imports: [CommonModule,FormsModule
  ],
  templateUrl: './mes-taches.component.html',
  styleUrl: '../../contributeurs2/contributeurs2.component.css'
})
export class MesTachesComponent {
  taches: any;

  tacheSel: any = null;
  showTacheDetail = true;
  marquerTerminee(tache: any) {
    // ICI
  }
  voirDetailTache(t: any) {
    this.openTacheDetail(t);
  }
  openTacheDetail(t: any) {
    this.tacheSel = t;
    this.showTacheDetail = true;
  }
  closeTacheDetail() {
    this.showTacheDetail = false;
    this.tacheSel = null;
  }
}
