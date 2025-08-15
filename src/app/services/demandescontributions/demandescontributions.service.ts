import { Injectable, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Env } from '../../env';


@Injectable({
  providedIn: 'root'
})
export class DemandescontributionsService {
  //injection de dependance
  data:DataService = inject(DataService)
  AccepteDemande(id:number, value:boolean){
    return this.data.patchDataById(Env.MODIFIER_EST_ACCEPTEE, id, value)
  }
}
