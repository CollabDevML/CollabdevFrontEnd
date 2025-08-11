import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-gestionnaire',
  imports: [],
  templateUrl: './sidebar-menu-gestionnaire.component.html',
  styleUrl: './sidebar-menu-gestionnaire.component.css'
})
export class SidebarMenuGestionnaireComponent {
  isExpanded: boolean = false;

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
    this.isExpanded = !this.isExpanded
  }
  goToMenu(menu: any): void {
    this.currentMenu = menu;
  }
  logout(): void {

  }
}
