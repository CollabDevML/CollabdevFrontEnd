import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardprojet',
  imports: [],
  templateUrl: './cardprojet.component.html',
  styleUrl: './cardprojet.component.css'
})
export class CardprojetComponent {
  @Input() projet: { date: string, title: string, description: string, level: string, buttonText: string } = {
    date: '',
    title: '',
    description: '',
    level: '',
    buttonText: ''
  };
}
