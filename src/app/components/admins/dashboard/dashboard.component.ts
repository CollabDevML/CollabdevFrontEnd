import { Component, OnInit } from '@angular/core';
import { ResponseAdmins } from '../../../models/admins/response-admins';
import { AdminsService } from '../../../services/admins/admins.service';
import { Router } from '@angular/router';
import { ResponseStats } from '../../../models/admins/response-stats';
import { RolePipe } from '../../../pipes/role.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [RolePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  currentUserId: number = 0;
  currentUserInfo!: ResponseAdmins;
  stats!: ResponseStats;

  constructor(private adminsService: AdminsService, private router: Router) {}

  ngOnInit(): void {
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
  }

  getIsExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

  goToMenu(menu: number) {
    switch(menu) {
      case 1: {this.router.navigateByUrl('/admin/dashboard'); break;}
      case 2: {this.router.navigateByUrl('/admin/dashboard'); break;}
      case 3: {this.router.navigateByUrl('/admin/dashboard'); break;}
      case 4: {this.router.navigateByUrl('/admin/dashboard'); break;}
      case 5: {this.router.navigateByUrl('/admin/dashboard'); break;}
      default: {this.router.navigateByUrl('/admin/dashboard'); break;}
    }
  }
}
