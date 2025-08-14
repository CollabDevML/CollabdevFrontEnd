import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { Login } from '../models/login/login';
import { Env } from '../env';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //Pour la creation des headers :
  private headers = new HttpHeaders();

  userData!: Users;
  users: any;
  user_email = localStorage.getItem('user_email') || '';
  user_id = Number(localStorage.getItem('user_id')) || 0;
  user_role = localStorage.getItem('user_role') || '';

  constructor(private http: HttpClient) {
    this.users = {};

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE,PATCH ,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });

    // this.headers = this.headers.set('Authorization', 'Bearer ' + token);
  }

  //Les deux methodes qui vont recuperer les données de utilisateurs en fonction de localstorage que ca soit a travers sont email ou son id:
  getDataUserById(): Observable<any> {
    return this.getDataById(Env.INSCRIPTION_URL, this.user_id, this.user_role);
  }

  getDataUserByEmail(): Users {
    this.getDataByEmail(Env.INSCRIPTION_URL, this.user_email).subscribe(
      (res) => {
        this.userData = res;
      }
    );
    return this.userData;
  }

  //Pour la recuperation generale des données via n'importe quel chemin
  getData(url: string): Observable<any> {
    return this.http.get(url, { headers: this.headers });
  }

  //Pour l'insertion avec la methode POST
  postData(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data, { headers: this.headers });
  }

  //Pour la mise à jour avec la methode PUT
  putData(url: string, data: any) {
    return this.http.put(url, data, { headers: this.headers });
  }

  //Pour la suppression avec la methode DELETE
  deleteData(url: string) {
    return this.http.delete(url, { headers: this.headers });
  }

  //Pour la modification partielle des données avec la methode PATCH
  patchData(url: string, data: any) {
    return this.http.patch(url, data, { headers: this.headers });
  }

  //Pour la recuperation d'une donnée par son ID
  getDataById(url: string, id: number, role: string): Observable<any> {
    return this.http.get<Users>(`${url}/${id}?role=${role}`, {
      headers: this.headers,
    });
  }

  //Pour la recuperation d'une donnée par son ID
  getDataByEmail(url: string, email: string): Observable<Users> {
    return this.http.get<Users>(`${url}/${email}`, { headers: this.headers });
  }

  //Pour l'insertion, la mise à jour et la suppression de données par ID
  postDataWithId(url: string, id: number, data: any) {
    return this.http.post(`${url}/${id}`, data, { headers: this.headers });
  }

  //Pour la mise à jour des données par ID
  putDataById(url: string, id: number, data: any) {
    return this.http.put(`${url}/${id}`, data, { headers: this.headers });
  }

  //Pour la suppression des données par ID
  deleteDataById(url: string, id: number) {
    return this.http.delete(`${url}/${id}`, { headers: this.headers });
  }

  //Pour la mise à jour des données par ID
  patchDataById(url: string, id: number, value: boolean) {
    return this.http.patch(
      `${url}/${id}/estAcceptee/${value}`,
      {},
      { headers: this.headers }
    );
  }

  getById(url: string, id: number): Observable<any> {
    return this.http.get(`${url}/${id}`, { headers: this.headers });
  }

  // Pour l'envoi de fichiers
  uploadFile(
    url: string,
    file: File,
    fileName: any,
    type: string
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('type', type);
    return this.http.post<any>(url, formData, {
      headers: {
        enctype: 'multipart/form-data',
      },
    });
  }

  //Pour le login :
  login(data: Login) {
    return this.http.post(Env.LOGIN_URL, data, { headers: this.headers });
  }
}
