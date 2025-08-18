import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SidebarMenuAdministrateurComponent } from '../../tools/sidebar-menu-administrateur/sidebar-menu-administrateur.component';
import { SidebarMenuSuperAdministrateurComponent } from '../../tools/sidebar-menu-super-administrateur/sidebar-menu-super-administrateur.component';
import { ResponseAdmins } from '../../../models/admins/response-admins';
import { ResponseStats } from '../../../models/admins/response-stats';
import { AdminsService } from '../../../services/admins/admins.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-utilisateurs',
  imports: [NgxSpinnerModule],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent implements OnInit {

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

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }
}