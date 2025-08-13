// src/app/components/attribution-tache/attribution-tache.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RequestTache, TacheService } from '../../../services/tache.service';
import { HeaderComponent } from "../../UI/header/header.component";
import { FooterComponent } from "../../UI/footer/footer.component";
import { SideBarComponent } from "../../UI/side-bar/side-bar.component";

@Component({
  selector: 'app-attribution-tache',
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    SideBarComponent
],
  templateUrl: './attribution-tache.component.html',
  styleUrls: ['./attribution-tache.component.css']
})
export class AttributionTacheComponent implements OnInit {
  tacheForm!: FormGroup;
  membres: any[] = [];
  projetId = 1; // à adapter selon le projet sélectionné

  constructor(
    private fb: FormBuilder,
    private tacheService: TacheService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.tacheForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      idContributeur: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      pieceAGagner: [0, [Validators.required, Validators.min(1)]],
      niveau: ['MOYEN', Validators.required]
    });

    this.loadMembres();
  }

  loadMembres() {
    this.http.get<any[]>('http://localhost:8080/api/contributeurs') // adapte l’URL à ton backend
      .subscribe(data => this.membres = data);
  }

  onSubmit() {
    if (this.tacheForm.valid) {
      const formValues = this.tacheForm.value;
      const payload: RequestTache = {
        ...formValues,
        idProjet: this.projetId,
        dateDebut: new Date(formValues.dateDebut).toISOString(),
        dateFin: new Date(formValues.dateFin).toISOString()
      };

      this.tacheService.ajouterTache(payload).subscribe({
        next: () => {
          alert('Tâche attribuée avec succès');
          this.tacheForm.reset();
        },
        error: err => {
          console.error(err);
          alert('Erreur lors de l’attribution');
        }
      });
    }
  }

  voirToutesTaches() {
  // Redirige ou affiche la liste des tâches
  // Exemple : this.router.navigate(['/mes-taches']);
}
}
