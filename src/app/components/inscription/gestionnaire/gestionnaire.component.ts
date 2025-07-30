import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestionnaire',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './gestionnaire.component.html',
  styleUrl: './gestionnaire.component.css'
})
export class GestionnaireComponent {
fichierSelectionner($event: Event) {
}
  conditionUtilisation: FormGroup;
  constructor(private fb:FormBuilder, private route:Router) {
    this.conditionUtilisation = this.fb.group({
      condition: [false,[Validators.requiredTrue]]
    });
  }

  valider(){
    if (this.conditionUtilisation.valid) {
      console.log("Conditions acceptées");
      // this.route.navigate(['inscription/choix']);
    } else {
      console.error("Veuillez accepter les conditions d'utilisation");
    }
  }

}
