import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-administrateur',
  imports: [],
  templateUrl: './sidebar-menu-administrateur.component.html',
  styleUrl: './sidebar-menu-administrateur.component.css'
})
export class SidebarMenuAdministrateurComponent {

  public static Menu = {
    HOME: 1,
    USERS: 2,
    PROJECTS: 3,
    IDEAS: 4,
    BADGES: 5,
    LOGOUT: 6
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
        this.router.navigate(['/admin/dashboard']);
        break;
      }
      case 2: {
        // this.router.navigate(['']);
        break;
      }
      case 3: {
        // this.router.navigate(['']);
        break;
      }
      case 4: {
        // this.router.navigate(['']);
        break;
      }
      case 5: {
        // this.router.navigate(['']);
        break;
      }
      case 6: {
        this.logout()
        break;
      }
    }
  }

  logout(): void {
    localStorage.removeItem('isExpanded');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('chemin');
    this.router.navigate(['login']);
  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }
}
