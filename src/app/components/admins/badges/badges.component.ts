import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SidebarMenuAdministrateurComponent } from '../../tools/sidebar-menu-administrateur/sidebar-menu-administrateur.component';
import { SidebarMenuSuperAdministrateurComponent } from '../../tools/sidebar-menu-super-administrateur/sidebar-menu-super-administrateur.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-badges',
  imports: [],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.css'
})
export class BadgesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(
      event => {
        if(event instanceof NavigationStart && event.url === '/admin/badges') {
          if(localStorage.getItem('user_role') === 'ADMIN') {
            SidebarMenuAdministrateurComponent.currentMenu = 5
            localStorage.setItem('currentMenu', String(5));
          } else {
            localStorage.setItem('currentMenu', String(6));
            SidebarMenuSuperAdministrateurComponent.currentMenu = 6
          }
        }
      }
    )
  }

}
