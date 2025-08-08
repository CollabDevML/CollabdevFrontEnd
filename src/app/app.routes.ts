import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { InscriptionChoixComponent } from './components/inscription/inscription-choix/inscription-choix.component';
import { ContributeurComponent } from './components/inscription/contributeur/contributeur.component';
import { GestionnaireComponent } from './components/inscription/gestionnaire/gestionnaire.component';
import { PorteurProjetComponent } from './components/inscription/porteur-projet/porteur-projet.component';
import { InscriptionIndexComponent } from './components/inscription/inscription-index/inscription-index.component';
import { PageVisiteurComponent } from './components/page-visiteur/page-visiteur.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { SideBarComponent } from './components/UI/side-bar/side-bar.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { DashboardGestionnaireComponent } from './components/dashboard-gestionnaire/dashboard-gestionnaire.component';
import { CardcontributionComponent } from './components/UI/cardcontribution/cardcontribution.component';
import { SidebargestionnaireComponent } from './components/UI/sidebargestionnaire/sidebargestionnaire.component';
import { CardprojetComponent } from './components/UI/cardprojet/cardprojet.component';
import { PopUpsComponent } from './components/UI/pop-ups/pop-ups.component';

import { PropositionIdeeProjetComponent } from './components/porteurProjet/proposition-idee-projet/proposition-idee-projet.component';
import { ListeIdeeProjetComponent } from './components/porteurProjet/liste-idee-projet/liste-idee-projet.component';

import { RecherchebarreComponent } from './components/UI/recherchebarre/recherchebarre.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProjetSuiviComponent } from './components/porteurProjet/projet-suivi/projet-suivi.component';
import { MesIdeeProjetComponent } from './components/porteurProjet/PorteurProjet/mes-idee-projet/mes-idee-projet.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {path: 'login',component:LoginComponent},
  {path: 'inscription',component:InscriptionComponent,children:[
    {path:'', component:InscriptionIndexComponent},
    {path:'choix', component:InscriptionChoixComponent},
    {path:'contributeur', component:ContributeurComponent},
    {path:'gestionnaire', component:GestionnaireComponent},
    {path:'porteur_de_projet', component:PorteurProjetComponent},
    {path:'**', redirectTo: ''},
  ]},
    {path:'page-visiteur',component:PageVisiteurComponent},
    {path: 'header', component:HeaderComponent},
    {path: 'sidebar', component:SideBarComponent},
    {path: 'footer', component:FooterComponent},

    {path:'dashboard', component:DashboardGestionnaireComponent},
    {
      path:'card-contribution', component: CardcontributionComponent
    },
    {path: 'header-barre', component:RecherchebarreComponent},
    {path:'sidebargestionnaire', component: SidebargestionnaireComponent},
    {path:'cardprojet', component: CardprojetComponent},
    {path: 'popup', component: PopUpsComponent},
    { path: 'accueil', component: AccueilComponent },
  
  { path: 'porteurProjet', component: PropositionIdeeProjetComponent },
  { path: 'porteurProjetListe', component: ListeIdeeProjetComponent },
  { path: 'header-barre', component: RecherchebarreComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'porteurProjetSuivi', component:ProjetSuiviComponent},
  { path: 'porteurProjetMesIdee', component:MesIdeeProjetComponent}
];
