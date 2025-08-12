import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-gestionnaire',
  imports: [],
  templateUrl: './sidebar-menu-gestionnaire.component.html',
  styleUrl: './sidebar-menu-gestionnaire.component.css'
})
export class SidebarMenuGestionnaireComponent {
  public static Menu = {
    HOME: 1,
    PROJECT_IDEAS: 2,
    DASHBOARD: 3,
    FOLLOWED_CONTENTS: 4,
    PROFILE: 5,
    LOGOUT: 6
  } as const;
  currentMenu: any = 1;

  collapseSideBar(): void {
    localStorage.setItem('isExpanded', String(Number(!this.getIsExpanded())));
  }
  goToMenu(menu: any): void {
    this.currentMenu = menu;
  }
  logout(): void {

  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

}
