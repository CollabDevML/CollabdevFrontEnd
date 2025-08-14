import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IdeesProjetService } from '../../services/idees-projet.service';
import { ResponseIdeeProjet2 } from '../../models/ideeprojet/response-idee-projet2';
import { ElapsedTimePipe } from '../../pipes/elapsed-time.pipe';
import { DomaineIdeeProjetService } from '../../services/domaine-idee-projet.service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-idees-projet',
  imports: [
    RouterLink,
    ElapsedTimePipe
  ],
  templateUrl: './idees-projet.component.html',
  styleUrl: './idees-projet.component.css'
})
export class IdeesProjetComponent implements OnInit{

  userId: number = 0;

  public ideesProjet: ResponseIdeeProjet2[] = []
  public ideesSoutenues: Map<number, boolean> = new Map();

  public constructor(private ideesProjetService: IdeesProjetService, private domaineService: DomaineIdeeProjetService) {}

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('user_id'));
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

}
