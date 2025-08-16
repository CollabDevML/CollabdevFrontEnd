import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-super-administrateur',
  imports: [],
  templateUrl: './sidebar-menu-super-administrateur.component.html',
  styleUrl: './sidebar-menu-super-administrateur.component.css'
})
export class SidebarMenuSuperAdministrateurComponent implements OnInit {

  public static Menu = {
    HOME: 1,
    ADMINISTRATORS: 2,
    USERS: 3,
    PROJECTS: 4,
    IDEAS: 5,
    BADGES: 6,
    LOGOUT: 7
  } as const;
  public static currentMenu: any = 1;

  public constructor(private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('currentMenu') === undefined) {
      localStorage.setItem('currentMenu', String(1));
    }
    SidebarMenuSuperAdministrateurComponent.currentMenu = Number(localStorage.getItem('currentMenu'))
  }

  collapseSideBar(): void {
    localStorage.setItem('isExpanded', String(Number(!this.getIsExpanded())));
  }
  
  goToMenu(menu: any): void {
    SidebarMenuSuperAdministrateurComponent.currentMenu = menu;
    switch (menu) {
      case 1: {
        localStorage.setItem('currentMenu', String(1));
        this.router.navigateByUrl('/admin/dashboard');
        break;
      }
      case 2: {
        localStorage.setItem('currentMenu', String(2));
        this.router.navigateByUrl('/admin/administrateurs');
        break;
      }
      case 3: {
        localStorage.setItem('currentMenu', String(3));
        this.router.navigateByUrl('/admin/utilisateurs');
        break;
      }
      case 4: {
        localStorage.setItem('currentMenu', String(4));
        this.router.navigateByUrl('/admin/projets');
        break;
      }
      case 5: {
        localStorage.setItem('currentMenu', String(5));
        this.router.navigateByUrl('/admin/idees-projet');
        break;
      }
      case 6: {
        localStorage.setItem('currentMenu', String(6));
        this.router.navigateByUrl('/admin/badges');
        break;
      }
      case 7: {
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

  get currentMenu(): any {
    return SidebarMenuSuperAdministrateurComponent.currentMenu;
  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

}
