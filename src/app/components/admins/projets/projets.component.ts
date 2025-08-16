import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SidebarMenuAdministrateurComponent } from '../../tools/sidebar-menu-administrateur/sidebar-menu-administrateur.component';
import { SidebarMenuSuperAdministrateurComponent } from '../../tools/sidebar-menu-super-administrateur/sidebar-menu-super-administrateur.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projets',
  imports: [],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(
      event => {
        if(event instanceof NavigationStart && event.url === '/admin/projets') {
          if(localStorage.getItem('user_role') === 'ADMIN') {
            SidebarMenuAdministrateurComponent.currentMenu = 3
            localStorage.setItem('currentMenu', String(3));
          } else {
            SidebarMenuSuperAdministrateurComponent.currentMenu = 4
            localStorage.setItem('currentMenu', String(4));
          }
        }
      }
    )
  }
}
