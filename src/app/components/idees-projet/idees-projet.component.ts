import { Component } from '@angular/core';

@Component({
  selector: 'app-idees-projet',
  imports: [],
  templateUrl: './idees-projet.component.html',
  styleUrl: './idees-projet.component.css'
})
export class IdeesProjetComponent {

  public get isExpanded(): boolean {
    return Number(localStorage.getItem('isExpanded')) === 1;
  }

}
