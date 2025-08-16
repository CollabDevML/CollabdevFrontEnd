import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SidebarMenuAdministrateurComponent } from '../../tools/sidebar-menu-administrateur/sidebar-menu-administrateur.component';
import { SidebarMenuSuperAdministrateurComponent } from '../../tools/sidebar-menu-super-administrateur/sidebar-menu-super-administrateur.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-idees-projet',
  imports: [],
  templateUrl: './idees-projet.component.html',
  styleUrl: './idees-projet.component.css'
})
export class IdeesProjetAdminComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(
      event => {
        if(event instanceof NavigationStart && event.url === '/admin/idees-projet') {
          if(localStorage.getItem('user_role') === 'ADMIN') {
            SidebarMenuAdministrateurComponent.currentMenu = 4
            localStorage.setItem('currentMenu', String(4));
          } else {
            localStorage.setItem('currentMenu', String(5));
            SidebarMenuSuperAdministrateurComponent.currentMenu = 5
          }
        }
      }
    )
  }
}
