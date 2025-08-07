import { Component } from '@angular/core';
import { User } from '../../models/userProfil/profilUser';
import { HeaderComponent } from '../UI/header/header.component';
import { SideBarComponent } from '../UI/side-bar/side-bar.component';
import { FooterComponent } from '../UI/footer/footer.component';
import { HeaderProfilComponent } from '../header-profil/header-profil.component';

@Component({
  selector: 'app-profil-contributeur',
  imports: [HeaderProfilComponent, SideBarComponent, FooterComponent],
  templateUrl: './profil-contributeur.component.html',
  styleUrl: './profil-contributeur.component.css',
})
export class ProfilContributeurComponent {
  user: User = {
    id: '1',
    name: 'Djimé Dembélé',
    email: 'djimedembele3@gmail.com',
    identifiant: 'Djimou',
    organisation: 'ODK',
    intitulePoste: 'Contributeur',
    domaines: ['Développement web'],
    lieuResidence: '',
    contributions: [
      { type: 'CodeGov', name: 'CodeGov', icon: 'fas fa-code' },
      { type: 'Greenathon', name: 'Greenathon', icon: 'fas fa-leaf' },
      {
        type: 'Aruka Disanka',
        name: 'Aruka Disanka',
        icon: 'fas fa-project-diagram',
      },
    ],
    accomplishments: [
      { level: 'Novice', color: '#D4A574', achieved: true },
      { level: 'Débutant', color: '#C0C0C0', achieved: false },
    ],
  };
}
