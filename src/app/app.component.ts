import { Component, Inject, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, Event, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/UI/header/header.component';
import { SidebarMenuContributeurComponent } from './components/tools/sidebar-menu-contributeur/sidebar-menu-contributeur.component';
import { SidebarMenuGestionnaireComponent } from './components/tools/sidebar-menu-gestionnaire/sidebar-menu-gestionnaire.component';
import { SidebarMenuPorteurComponent } from './components/tools/sidebar-menu-porteur/sidebar-menu-porteur.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    SidebarMenuContributeurComponent,
    SidebarMenuGestionnaireComponent,
    SidebarMenuPorteurComponent ,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'collabdev';
  ispagevisiteur:boolean = false;
  isLoginPage: boolean = false;
  isSignInPages: boolean = false;
  currentUserRole = localStorage.getItem('user_role');
  static router: Router;
  constructor(private router: Router) {
    localStorage.setItem('isExpanded', '0');
    this.router.events.subscribe((eve: Event) => {
      if (eve instanceof NavigationEnd) {
        this.ispagevisiteur = eve.url === '/page-visiteur';
      }
      if (eve instanceof NavigationEnd) {
        this.isLoginPage = eve.url === '/login';
      }
       if (eve instanceof NavigationEnd) {
        const allLinks =  ['/inscription', '/inscription/choix', '/inscription/gestionnaire', '/inscription/contributeur', '/inscription/porteur-projet']
        this.isSignInPages = allLinks.includes(eve.url);
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
