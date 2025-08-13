import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomaineIdeeProjetService } from '../../../services/domaine-idee-projet.service.service';
import { Env } from '../../../env';
import { DataService } from '../../../services/data.service';
import { PorteurProjetDataService } from '../../../services/porteurProjet/porteur-projet-data.service';
import { RequestIdeeProjet } from '../../../models/ideeprojet/request-idee-projet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposition-idee-projet',
  imports: [FormsModule, CommonModule],
  templateUrl: './proposition-idee-projet.component.html',
  styleUrls: ['./proposition-idee-projet.component.css'],
})
export class PropositionIdeeProjetComponent implements OnInit {
  titre: string = '';
  description: string = '';
  domaine: string = '';
  nomFichier: string = '';
  fichier: File | null = null;

  domaines: { key: string; label: string }[] = [];

  erreurs: string[] = [];
  user_id!: number;
  constructor(
    private http: HttpClient,
    private domaineService: DomaineIdeeProjetService,
    private data: DataService,
    private dataPorteur: PorteurProjetDataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.domaines = this.domaineService.getAllOptions();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.nomFichier = file.name;
      this.fichier = file;
    }
  }

  changerFichier(): void {
    this.nomFichier = '';
    this.fichier = null;
  }

// //   onSubmit(): void {
// //     this.erreurs = [];

//     // Validation sans le fichier obligatoire
//     if (!this.titre || !this.description || !this.domaine) {
//       this.erreurs.push('Titre, description et domaine sont obligatoires.');
//       return;
//     }

//     // Si aucun fichier → envoyer directement
//     if (!this.fichier) {
//         const ideeProjet = {
//           titre: this.titre,
//           description: this.description,
//           domaine: [this.domaine],
//           uriCDC: null,
//         };
//         console.log(ideeProjet);
//         this.dataPorteur.newIdee(ideeProjet).subscribe({
//           next: () => {
//             alert('Idée de projet envoyée avec succès !');
//             const role = localStorage.getItem("user_role");
//             if (role === "GESTIONNAIRE") {
//               this.route.navigateByUrl('/gestionnaire/mes_idees');
//             }else{
//               this.route.navigateByUrl('/porteur_projet/mes_idees');
//             }
//             this.resetForm();
//           },
//           error: (err) => {
//             this.erreurs.push(
//               "Erreur lors de l'envoi du projet : " +
//                 (err.error?.message || err.message)
//             );
//           },
//         });
//       return;
//     }

  //   // Sinon, téléverser d'abord le fichier puis envoyer
  //   const formData = new FormData();
  //   formData.append('file', this.fichier);
  //   formData.append('fileName', this.fichier.name);
  //   formData.append('type', 'CDC');
  //   this.dataPorteur.uploadCDC(this.fichier, this.fichier.name).subscribe({
  //     next: (res) => {
  //       console.log("Le chemin c'est : ", res.chemin);
  //       const ideeProjet = {
  //         titre: this.titre,
  //         description: this.description,
  //         domaine: [this.domaine],
  //         uriCDC: res.chemin,
  //       };
  //       console.log(ideeProjet);
  //       this.dataPorteur.newIdee(ideeProjet).subscribe({
  //         next: () => {
  //           alert('Idée de projet envoyée avec succès !');
  //           this.route.navigateByUrl('/idees-projet');
  //           this.resetForm();
  //         },
  //         error: (err) => {
  //           this.erreurs.push(
  //             "Erreur lors de l'envoi du projet : " +
  //               (err.error?.message || err.message)
  //           );
  //         },
  //       });
  //     },
  //     error: (err) => {
  //       alert("Erreur mlors de l'Upload de fichier !!!");
  //       console.log(err);
  //     },
  //   });
  // }

  // resetForm(): void {
  //   this.titre = '';
  //   this.description = '';
  //   this.domaine = '';
  //   this.nomFichier = '';
  //   this.fichier = null;
  // }
}
