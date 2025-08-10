import { Component, Input } from '@angular/core';
import { projet } from '../../../models/projet/projet';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cardprojet',
  imports: [
    DatePipe
  ],
  templateUrl: './cardprojet.component.html',
  styleUrl: './cardprojet.component.css'
})
export class CardprojetComponent {
  @Input() projet!: projet
}
