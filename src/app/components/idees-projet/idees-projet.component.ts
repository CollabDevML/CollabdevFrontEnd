import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-idees-projet',
  imports: [
    RouterLink
  ],
  templateUrl: './idees-projet.component.html',
  styleUrl: './idees-projet.component.css'
})
export class IdeesProjetComponent {

  public get isExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

}
