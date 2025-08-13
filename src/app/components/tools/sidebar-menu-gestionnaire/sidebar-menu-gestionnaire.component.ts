import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-gestionnaire',
  imports: [],
  templateUrl: './sidebar-menu-gestionnaire.component.html',
  styleUrl: './sidebar-menu-gestionnaire.component.css',
})
export class SidebarMenuGestionnaireComponent {
  public static Menu = {
    HOME: 1,
    PROJECT_IDEAS: 2,
    DASHBOARD: 3,
    FOLLOWED_CONTENTS: 4,
    PROFILE: 5,
    LOGOUT: 6,
  } as const;
  currentMenu: any = 1;

  public constructor(private router: Router) {}

  collapseSideBar(): void {
    localStorage.setItem('isExpanded', String(Number(!this.getIsExpanded())));
  }
  goToMenu(menu: any): void {
    this.currentMenu = menu;
    switch (menu) {
      case 1: {
        this.router.navigate(['gestionnaire/accueil']);
        break;
      }
      case 2: {
        this.router.navigate(['idees-projet']);
        break;
      }
      case 3: {
        this.router.navigate(['gestionnaire/mon_espace']);
        break;
      }
      case 4: {
        this.router.navigate(['gestionnaire/nouveau_projet']);
        break;
      }
      case 5: {
        this.router.navigate(['profil']);
        break;
        break;
      }
      case 6: {
        // this.router.navigate(['gestionnaire/mes_proj'])
        break;
      }
      case 7: {
        this.router.navigate(['gestionnaire/nouvelle_idee']);
        break;
      }
    }
  }

  logout(): void {
    localStorage.removeItem('isExpanded');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('chemin');
    window.location.reload();
    this.router.navigate(['login']);
  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }
}
