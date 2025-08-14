import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { DataService } from './data.service';
import { Login } from '../models/login/login';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  static routes: Router;
  isLoging: boolean = false;

  constructor(
    public route: Router,
    private dataG: DataService,
    private toastr: ToastrService
  ) {}

  login(data: Login) {
    this.isLoging = true;
    this.dataG.login(data).subscribe({
      next: (res: any) => {
        this.isLoging = false;
        if (res.message) {
          this.toastr.error(
            'Authentification échouée, veuillez réessayer',
            "Satut d'authentification",
            {
              timeOut: 3000,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right',
            }
          );
          this.route.navigateByUrl('/login');
          return;
        }
        console.log(res);
        localStorage.setItem('user_role', res.role);
        localStorage.setItem('user_id', res.id);
        localStorage.setItem('isExpanded', '1');
        let chemin = '';
        if (res.role == 'CONTRIBUTEUR') {
          chemin = 'contributeur';
          localStorage.setItem('chemin', chemin);
        } else if (res.role == 'GESTIONNAIRE') {
          chemin = 'gestionnaire';
          localStorage.setItem('chemin', chemin);
        } else if (res.role == 'PORTEUR_PROJET') {
          chemin = 'porteur_projet';
          localStorage.setItem('chemin', chemin);
        }
        this.toastr.success(
          'Authentification reussie avec succès',
          "Satut d'authentification",
          {
            timeOut: 1000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right',
          }
        );
        this.route.navigateByUrl('accueil');
      },
      error: (err: any) => {
        this.isLoging = false;
        console.log(err.message);
        this.toastr.error(err.message, 'erreur', {
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        });
        this.route.navigate(['login']);
      },
    });
  }

  static logout() {
    const route = new Router();
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('chemin');
    route.navigate(['login']);
  }
}
