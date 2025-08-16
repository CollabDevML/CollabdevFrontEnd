import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SidebarMenuAdministrateurComponent } from '../../tools/sidebar-menu-administrateur/sidebar-menu-administrateur.component';
import { SidebarMenuSuperAdministrateurComponent } from '../../tools/sidebar-menu-super-administrateur/sidebar-menu-super-administrateur.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-utilisateurs',
  imports: [],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(
      event => {
        if(event instanceof NavigationStart && event.url === '/admin/utilisateurs') {
          if(localStorage.getItem('user_role') === 'ADMIN') {
            SidebarMenuAdministrateurComponent.currentMenu = 2
            localStorage.setItem('currentMenu', String(2));
          } else {
            SidebarMenuSuperAdministrateurComponent.currentMenu = 3
            localStorage.setItem('currentMenu', String(3));
          }
        }
      }
    )
  }
}
