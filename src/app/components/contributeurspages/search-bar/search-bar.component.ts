import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  imports:[
    FormsModule
  ]
})
export class SearchBarComponent {
  query: string = '';

  onSearch() {
    console.log('Recherche lancée pour :', this.query);
    
  }
}
