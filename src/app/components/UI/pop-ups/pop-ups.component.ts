import { CommonModule } from '@angular/common';
import { Component,Input,output} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pop-ups',
  imports: [
  CommonModule,
    FormsModule,
  ],
  templateUrl: './pop-ups.component.html',
  styleUrl: './pop-ups.component.css'
})
export class PopUpsComponent {
  @Input() visible: boolean = true;
  close= output<boolean>();

  checked: boolean = false;

  confirmer() {
    if (this.checked) {
      this.close.emit(true);
    }
  }

  annuler() {
    this.close.emit(false);
  }
}
