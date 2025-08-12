import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sidebar-menu-porteur',
  imports: [],
  templateUrl: './sidebar-menu-porteur.component.html',
  styleUrl: './sidebar-menu-porteur.component.css'
})
export class SidebarMenuPorteurComponent {  
  public static Menu = {
    HOME: 1,
    PROJECT_IDEAS: 2,
    FOLLOWED_CONTENTS: 3,
    PROFILE: 4,
    LOGOUT: 5
  } as const;
  currentMenu: any = 1;

  public constructor(private router:Router) {}

  collapseSideBar(): void {
    localStorage.setItem('isExpanded', String(Number(!this.getIsExpanded())));
  }
  goToMenu(menu: any): void {
    this.currentMenu = menu;
    switch(menu) {
      case 1:  {
        this.router.navigate(['porteur_projet/accueil'])
        break;
      }
      case 2: {
        this.router.navigate(['porteur_projet/mes_idees']);
        break;
      }
      case 3: {
        this.router.navigate(['porteur_projet/mes_favories'])
        break;
      } 
      case 4: {
        break;
      }
      case 5:{
        break;
      }
    }
  }
  logout(): void {

  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }
}
