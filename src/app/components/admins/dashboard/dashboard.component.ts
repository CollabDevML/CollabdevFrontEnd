import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { ResponseAdmins } from '../../../models/admins/response-admins';
import { AdminsService } from '../../../services/admins/admins.service';
import { NavigationStart, Router } from '@angular/router';
import { ResponseStats } from '../../../models/admins/response-stats';
import { RolePipe } from '../../../pipes/role.pipe';
import { SidebarMenuAdministrateurComponent } from '../../tools/sidebar-menu-administrateur/sidebar-menu-administrateur.component';
import { SidebarMenuSuperAdministrateurComponent } from '../../tools/sidebar-menu-super-administrateur/sidebar-menu-super-administrateur.component';
import { NgxSpinner, NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  imports: [RolePipe,NgxSpinnerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent implements OnInit {

  currentUserId: number = 0;
  currentUserInfo!: ResponseAdmins;
  stats!: ResponseStats;

  constructor(private adminsService: AdminsService, private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show()
    this.currentUserId = Number(localStorage.getItem('user_id'))
    this.adminsService.getAdminById(this.currentUserId).subscribe({
      next: (responseAdmins) => {
        this.currentUserInfo = responseAdmins;
      },
      error: (error) => {
        console.log(error);
      }
    })

    this.adminsService.getStats().subscribe({
      next: (ResponseStats) => {
        this.stats = ResponseStats;
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.spinner.hide()

    this.router.events.subscribe(
      event => {
        if(event instanceof NavigationStart && event.url === '/admin/dashboard') {
          if(this.currentUserInfo.role.toString() === 'ADMIN') {
            SidebarMenuAdministrateurComponent.currentMenu = 1
            localStorage.setItem('currentMenu', String(1));
          } else {
            SidebarMenuSuperAdministrateurComponent.currentMenu = 1
            localStorage.setItem('currentMenu', String(1));
          }
        }
      }
    )
  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

  goToMenu(menu: number) {
    if(this.currentUserInfo.role.toString() === 'ADMIN') {
      SidebarMenuAdministrateurComponent.currentMenu = menu;
    } else {
      SidebarMenuSuperAdministrateurComponent.currentMenu = menu;
    }
    switch(menu) {
      case 1: {this.router.navigateByUrl('/admin/administrateurs'); break;}
      case 2: {this.router.navigateByUrl('/admin/idees-projet'); break;}
      case 3: {this.router.navigateByUrl('/admin/badges'); break;}
      case 4: {this.router.navigateByUrl('/admin/utilisateurs'); break;}
      case 5: {this.router.navigateByUrl('/admin/projets'); break;}
      default: {this.router.navigateByUrl('/admin/dashboard'); break;}
    }
  }
}
