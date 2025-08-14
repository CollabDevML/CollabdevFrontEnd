import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../UI/header/header.component";

@Component({
  selector: 'app-page-visiteur',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './page-visiteur.component.html',
  styleUrl: './page-visiteur.component.css'
})
export class PageVisiteurComponent {



}
