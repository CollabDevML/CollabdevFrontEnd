import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-contributeur',
  imports: [],
  templateUrl: './sidebar-menu-contributeur.component.html',
  styleUrl: './sidebar-menu-contributeur.component.css'
})
export class SidebarMenuContributeurComponent {

  public static Menu = {
    HOME: 1,
    PROJECT_IDEAS: 2,
    CONTRIBUTIONS: 3,
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
