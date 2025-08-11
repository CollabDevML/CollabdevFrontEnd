import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-porteur',
  imports: [],
  templateUrl: './sidebar-menu-porteur.component.html',
  styleUrl: './sidebar-menu-porteur.component.css'
})
export class SidebarMenuPorteurComponent {
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
