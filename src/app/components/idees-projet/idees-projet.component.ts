import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IdeesProjetService } from '../../services/idees-projet.service';
import { ResponseIdeeProjet2 } from '../../models/ideeprojet/response-idee-projet2';
import { ElapsedTimePipe } from '../../pipes/elapsed-time.pipe';
import { DomaineIdeeProjetService } from '../../services/domaine-idee-projet.service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ListeIdeeProjetComponent } from '../porteurProjet/liste-idee-projet/liste-idee-projet.component';
import { GestionnaireDataService } from '../../services/gestionnaire/gestionnaire-data.service';

@Component({
  selector: 'app-idees-projet',
  imports: [
    RouterLink,
    ElapsedTimePipe,
    ListeIdeeProjetComponent
  ],
  templateUrl: './idees-projet.component.html',
  styleUrl: './idees-projet.component.css'
})
export class IdeesProjetComponent implements OnInit{

  userId: number = 0;
  isGestionnaire:boolean = false;
  public ideesProjet: ResponseIdeeProjet2[] = []
  public ideesSoutenues: Map<number, boolean> = new Map();

  constructor(
    private ideesProjetService: IdeesProjetService,
     private domaineService: DomaineIdeeProjetService,
     private dataGest:GestionnaireDataService,
     private route:Router,
     public sanitizer: DomSanitizer
    ) {}

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('user_id'));
    if (localStorage.getItem("user_role")==="GESTIONNAIRE") {
      this.isGestionnaire = true;
    }
    if(this.userId !== 0) {
      this.ideesProjetService.getUserIdeas(this.userId).subscribe(
        {
          next: (data: ResponseIdeeProjet2[]) => {
            this.ideesProjet = data
          },
          error: (error) => {
            console.log(error)
          }
        }
      );
    }
    for(const ideeProjet of this.ideesProjet) {
      var isHelped: boolean = false;
      this.ideesProjetService.isHelped(this.userId, ideeProjet.id).subscribe({
        next: (data) => {
          isHelped = data;
        }
      })
      this.ideesSoutenues.set(ideeProjet.id, isHelped);
    }
    console.log(this.ideesSoutenues)
  }

  creerProjet(idee:any){
    this.dataGest.ideeData = idee;
    this.route.navigate(['gestionnaire/nouveau_projet']);
  }

  isHelped(ideaId: number): boolean {
    const estSoutenu = this.ideesSoutenues.get(ideaId)
    if(typeof estSoutenu === undefined) {
      return false;
    } else {
      return estSoutenu!;
    }
  }

  labelFromEnum(enumeration: string): string {
    return this.domaineService.getLabelFromEnum(enumeration);
  }

  public get isExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

  helpIdea(idIdea: number) {
    this.ideesProjetService.helpIdea(this.userId, idIdea).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  plus:boolean = false;
  voirPlus(){
    this.plus = true;
  }
  voirMoins(){
    this.plus = false;
  }

  download(fileName: string) {
    window.location.href = `localhost:8180/download/CDC/${fileName}`
  }

  getEncodedURI(uri: string) {
    return encodeURI(uri);
  }

}
