import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-projet',
  imports: [],
  templateUrl: './formulaire-projet.component.html',
  styleUrl: './formulaire-projet.component.css'
})
export class FormulaireProjetComponent implements OnInit {

  constructor(private route:Router){}
  ngOnInit(): void {
  }

  choix(ch:string){

  }
}
