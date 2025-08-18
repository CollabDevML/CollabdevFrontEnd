import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GestionnaireDataService } from '../../services/gestionnaire/gestionnaire-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { projet } from '../../models/projet/projet';
import { routes } from '../../app.routes';
import { ToastrService } from 'ngx-toastr';
import { Contributeur } from '../../models/contributeur/contributeur';
import { ResponseGestionnaire } from '../../models/gestionnaire/response-gestionnaire';
import { GestionnaireDto } from '../../models/gestionnaire/gestionnaireDTo';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  // Map des intervalles par niveau
  private niveauPiece: Record<string, { min: number; max: number }> = {
    SIMPLE: { min: 1, max: 10 },
    NOVICE: { min: 11, max: 20 },
    INTERMEDIAIRE: { min: 21, max: 30 },
    DIFFICILE: { min: 31, max: 40 },
    COMPLEXE: { min: 41, max: 50 },
  };
  // Validateur croisé (level + reward)
  private pieceNiveauValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const niveau = group.get('niveau')?.value as string | null;
      const pieceAgagner = group.get('pieces')?.value as number | null;

      if (!niveau || pieceAgagner == null) return null;

      const range = this.niveauPiece[niveau];
      if (!range) return { niveauInvalid: true };

      if (pieceAgagner < range.min || pieceAgagner > range.max) {
        return {
          pieceAgagnerValide: { expected: range, actual: pieceAgagner },
        };
      }
      return null;
    };
  }

  taskForm: FormGroup;
  projet!: projet;
  gestionnaire!: GestionnaireDto;
  idGestionnaire!: number;
  idUtilisateur!: number;
  contributeurs!: Contributeur[];

  projetId!: number;
  constructor(
    private fb: FormBuilder,
    private data: GestionnaireDataService,
    private route: Router,
    private toastr: ToastrService,
    private router: ActivatedRoute
  ) {
    this.taskForm = this.fb.group(
      {
        title: ['', Validators.required],
        description: [''],
        assignee: [''],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        pieces: [null, [Validators.required]],
        niveau: ['', [Validators.required]],
      },
      { validators: [this.pieceNiveauValidator()] }
    );
  }

  get selectedNiveau() {
    const lvl = this.taskForm.get('niveau')?.value as string | null;
    return lvl ? this.niveauPiece[lvl] : null;
  }

  // (Facultatif) utilitaires pour l’affichage d’erreurs
  get piecesErrorMsg(): string | null {
    const formErr = this.taskForm.errors as any;
    if (formErr?.pieceNiveauValidator?.expected) {
      const { min, max } = formErr.pieceNiveauValidator.expected;
      return `Pour ce niveau, les pièces doivent être entre ${min} et ${max}.`;
    }
    if (this.taskForm.get('pieces')?.hasError('required'))
      return 'Le nombre de pièces est requis.';
    return null;
  }

  ngOnInit(): void {
    this.projetId = Number(this.router.snapshot.paramMap.get('idProjet'));
    console.log('ID projet reçu :', this.projetId);

    this.idUtilisateur = Number(localStorage.getItem('user_id'));
    this.projet = this.data.dataProjet;

    if (this.projet == undefined || this.projet == null) {
      this.route.navigate(['gestionnaire/mon_espace']);
    }
    this.data.listeContributeur().subscribe({
      next: (res) => {
        this.contributeurs = res;
        console.log(res);
      },
      error(err) {
        console.log(err);
      },
    });
    this.data
      .trouverUnGestionnaireParsonidutilisateur(this.idUtilisateur)
      .subscribe({
        next: (data) => {
          this.gestionnaire = data;
          console.log(this.gestionnaire);
        },
      });
  }
  onSubmit() {
    if (this.taskForm.valid) {
      // const idProjet = Number(localStorage.getItem("id_projet"));
      const tache = {
        idProjet: this.projetId,
        idGestionnaire: this.gestionnaire.id,
        titre: this.taskForm.value.title,
        description: this.taskForm.value.description,
        dateDebut: new Date(this.taskForm.value.startDate).toISOString(),
        dateFin: new Date(this.taskForm.value.endDate).toISOString(),
        piecesAGagner: this.taskForm.value.pieces,
        idContributeur: 0,
        niveau: this.taskForm.value.niveau,
      };
      // console.log()
      console.log(tache);
      this.data.addTache(tache).subscribe({
        next: (value) => {
          console.log(value);
          this.toastr.success('Tache ajouter avec succès !!!!', 'create');
          this.route.navigate(['gestionnaire/details_projet']);
        },
        error: (err) => {
          this.toastr.error("Erreur lors de l'enregistrement !!!", 'erreur');
          console.log(err);
        },
      });
    } else {
      this.toastr.warning('Formulaire invalide', 'alerte');
    }
  }

  voirToutesTaches() {
    // Redirige ou affiche la liste des tâches
    // Exemple : this.router.navigate(['/mes-taches']);
  }
}
