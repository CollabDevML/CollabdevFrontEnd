import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GestionnaireDataService } from '../../services/gestionnaire/gestionnaire-data.service';
import { Router } from '@angular/router';
import { projet } from '../../models/projet/projet';
import { routes } from '../../app.routes';
import { ToastrService } from 'ngx-toastr';
import { Contributeur } from '../../models/contributeur/contributeur';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  projet!:projet;
  idGestionnaire!: number;
  contributeurs!:Contributeur[];
  constructor(private fb: FormBuilder,private data:GestionnaireDataService,private route:Router,private toastr:ToastrService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      assignee: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reward: [5, [Validators.required, Validators.min(0)]]
    });
  }
  ngOnInit(): void {
    this.idGestionnaire = Number(localStorage.getItem("user_id"));
    this.projet = this.data.dataProjet;
    if (this.projet == undefined || this.projet == null) {
      this.route.navigate(["gestionnaire/mon_espace"]);
    }
    this.data.listeContributeur().subscribe({
      next:(res)=> {
          this.contributeurs = res;
          console.log(res)
      },
      error(err) {
          console.log(err);
      },
    })
  }
  onSubmit() {
    if (this.taskForm.valid) {
      const tache = {
        idProjet:Number(this.projet.id),
        idGestionnaire:this.idGestionnaire,
        titre:this.taskForm.value.title,
        description:this.taskForm.value.description,
        dateDebut:new Date(this.taskForm.value.startDate).toISOString(),
        dateFin:new Date(this.taskForm.value.endDate).toISOString(),
        piecesAGagner:this.taskForm.value.reward,
        idContributeur: 0,
        niveau:this.projet.niveauDAcces,
      }
      console.log(tache)
      this.data.addTache(tache).subscribe({
        next:(value)=> {
          console.log(value);
          this.toastr.success('Tache ajouter avec succès !!!!',"create");
            this.route.navigate(["gestionnaire/mon_espace"]);
        },
        error:(err)=> {
          this.toastr.error("Erreur lors de l'enregistrement !!!","erreur");
            console.log(err);
        },
      });
    } else {
      this.toastr.warning("Formulaire invalide","alerte")
    }
  }

  voirToutesTaches() {
  // Redirige ou affiche la liste des tâches
  // Exemple : this.router.navigate(['/mes-taches']);
  }
}
