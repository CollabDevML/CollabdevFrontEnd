import { Component, Input } from '@angular/core';
import { Contribution } from '../../../models/contribution/contribution';

@Component({
  selector: 'app-cardcontribution',
  imports: [],
  templateUrl: './cardcontribution.component.html',
  styleUrl: './cardcontribution.component.css'
})
export class CardcontributionComponent {
  @Input() contribution!: Contribution
}
