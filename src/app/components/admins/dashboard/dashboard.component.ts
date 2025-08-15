import { Component, OnInit } from '@angular/core';
import { ResponseAdmins } from '../../../models/admins/response-admins';
import { AdminsService } from '../../../services/admins/admins.service';
import { Router } from '@angular/router';
import { ResponseStats } from '../../../models/admins/response-stats';

@Component({
  selector: 'app-dashboard',
  imports: [],
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
        console.log(this.currentUserInfo);
      },
      error: (error) => {
        console.log(error);
      }
    })

    this.adminsService.getStats().subscribe({
      next: (ResponseStats) => {
        this.stats = ResponseStats;
        console.log(this.stats);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
