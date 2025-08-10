import { Component } from '@angular/core';

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

  isExpanded: boolean = false;
  currentMenu: any = 1;

  collapseSideBar(): void {
    this.isExpanded = !this.isExpanded;
  }
  goToMenu(menu: any): void {
    this.currentMenu = menu;
  }
}
