import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-administrateur',
  imports: [],
  templateUrl: './sidebar-menu-administrateur.component.html',
  styleUrl: './sidebar-menu-administrateur.component.css'
})
export class SidebarMenuAdministrateurComponent implements OnInit, OnDestroy {

  public static Menu = {
    HOME: 1,
    USERS: 2,
    PROJECTS: 3,
    IDEAS: 4,
    BADGES: 5,
    LOGOUT: 6
  } as const;
  public static currentMenu: any = 1;

  public constructor(private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('currentMenu') === undefined) {
      localStorage.setItem('currentMenu', String(1));
    }
    SidebarMenuAdministrateurComponent.currentMenu = Number(localStorage.getItem('currentMenu'))
  }

  ngOnDestroy(): void {
    localStorage.setItem('currentMenu', SidebarMenuAdministrateurComponent.currentMenu.toString())
  }

  collapseSideBar(): void {
    localStorage.setItem('isExpanded', String(Number(!this.getIsExpanded())));
  }
  goToMenu(menu: any): void {
    SidebarMenuAdministrateurComponent.currentMenu = menu;
    switch (menu) {
      case 1: {
        localStorage.setItem('currentMenu', String(1));
        this.router.navigate(['/admin/dashboard']);
        break;
      }
      case 2: {
        localStorage.setItem('currentMenu', String(2));
        this.router.navigateByUrl('/admin/utilisateurs');
        break;
      }
      case 3: {
        localStorage.setItem('currentMenu', String(3));
        this.router.navigateByUrl('/admin/projets');
        break;
      }
      case 4: {
        localStorage.setItem('currentMenu', String(4));
        this.router.navigateByUrl('/admin/idees-projet');
        break;
      }
      case 5: {
        localStorage.setItem('currentMenu', String(5));
        this.router.navigateByUrl('/admin/badges');
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

  get currentMenu(): any {
    return SidebarMenuAdministrateurComponent.currentMenu;
  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }
}
