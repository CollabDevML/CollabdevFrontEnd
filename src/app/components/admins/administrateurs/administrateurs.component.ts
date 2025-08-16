import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SidebarMenuAdministrateurComponent } from '../../tools/sidebar-menu-administrateur/sidebar-menu-administrateur.component';
import { SidebarMenuSuperAdministrateurComponent } from '../../tools/sidebar-menu-super-administrateur/sidebar-menu-super-administrateur.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-administrateurs',
  imports: [],
  templateUrl: './administrateurs.component.html',
  styleUrl: './administrateurs.component.css'
})
export class AdministrateursComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.setItem('currentMenu', String(2));
    this.router.events.subscribe(
      event => {
        if(event instanceof NavigationStart && event.url === '/admin/administrateurs') {
          SidebarMenuSuperAdministrateurComponent.currentMenu = 2
        }
      }
    )
  }

}
