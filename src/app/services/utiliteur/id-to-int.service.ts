import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdToIntService {
  //recupère le contenu de localstorage
   getId(): number | null {
    const userIdStr = localStorage.getItem('user_id');
    return userIdStr && !isNaN(+userIdStr) ? parseInt(userIdStr, 10) : null;
  }
  
}
