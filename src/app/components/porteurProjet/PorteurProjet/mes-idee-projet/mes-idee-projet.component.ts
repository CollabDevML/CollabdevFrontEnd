import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../../UI/side-bar/side-bar.component';
import { RecherchebarreComponent } from '../../../UI/recherchebarre/recherchebarre.component';
import { PorteurProjet } from '../../../../models/porteurProjet/porteur-projet';
import { PorteurProjetDataService } from '../../../../services/porteurProjet/porteur-projet-data.service';

@Component({
  selector: 'app-mes-idee-projet',
  imports: [],
  templateUrl: './mes-idee-projet.component.html',
  styleUrl: './mes-idee-projet.component.css'
})
export class MesIdeeProjetComponent implements OnInit {
  mesProjets:any
  constructor(private data:PorteurProjetDataService){}
  ngOnInit(): void {
    this.data.listerMesProjet().subscribe({
      next: (res) => {
        console.log(res);
        this.mesProjets = res;
      },
      error(err) {
        console.log(
          'Erreur lors de la recuperation des idees de projet !!!',
          err
        );
      },
    });
  }
}
