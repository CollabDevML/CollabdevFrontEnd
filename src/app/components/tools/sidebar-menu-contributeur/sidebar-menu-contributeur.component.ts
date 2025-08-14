import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  public constructor(private router:Router) {}

  collapseSideBar(): void {
    localStorage.setItem('isExpanded', String(Number(!this.getIsExpanded())));
  }
  goToMenu(menu: any): void {
    this.currentMenu = menu;
  }
  logout(): void {
    localStorage.removeItem("isExpanded")
    localStorage.removeItem("user_role")
    localStorage.removeItem("user_id")
    localStorage.removeItem("chemin")
    // window.location.reload()
    this.router.navigate(['login'])
  }


  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

}
