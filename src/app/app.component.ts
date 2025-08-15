import { Component, Inject, Injectable } from '@angular/core';
import { NavigationStart, RouterOutlet } from '@angular/router';
import { Router, Event, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/UI/header/header.component';
import { SidebarMenuContributeurComponent } from './components/tools/sidebar-menu-contributeur/sidebar-menu-contributeur.component';
import { SidebarMenuGestionnaireComponent } from './components/tools/sidebar-menu-gestionnaire/sidebar-menu-gestionnaire.component';
import { SidebarMenuPorteurComponent } from './components/tools/sidebar-menu-porteur/sidebar-menu-porteur.component';
import { SidebarMenuAdministrateurComponent } from "./components/tools/sidebar-menu-administrateur/sidebar-menu-administrateur.component";
import { SidebarMenuSuperAdministrateurComponent } from "./components/tools/sidebar-menu-super-administrateur/sidebar-menu-super-administrateur.component";
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    SidebarMenuContributeurComponent,
    SidebarMenuGestionnaireComponent,
    SidebarMenuPorteurComponent,
    SidebarMenuAdministrateurComponent,
    SidebarMenuSuperAdministrateurComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'collabdev';
  ispagevisiteur:boolean = false;
  isLoginPage: boolean = false;
  isSignInPages: boolean = false;
  isDetailCommentairePage: boolean = false;
  currentUserRole = localStorage.getItem('user_role');
  static router: Router;
  constructor(private router: Router) {
    localStorage.setItem('isExpanded', '0');
    this.router.events.subscribe((eve: Event) => {
       if (eve instanceof NavigationEnd) {
        this.ispagevisiteur = eve.urlAfterRedirects === '/page-visiteur';
        this.isLoginPage = eve.urlAfterRedirects === '/login';
        this.isDetailCommentairePage = eve.urlAfterRedirects === '/detailCommentaire'
        const allLinks =  ['/inscription', '/inscription/choix', '/inscription/gestionnaire', '/inscription/contributeur', '/inscription/porteur-projet']
        this.isSignInPages = allLinks.includes(eve.urlAfterRedirects);
      }
      if (eve instanceof NavigationStart) {
        this.currentUserRole = localStorage.getItem('user_role');
      }
    });
  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

  redirectTo(link: string) {
    this.router.navigate([link]);
  }

}
