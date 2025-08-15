import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../../models/users';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-inscription-index',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './inscription-index.component.html',
  styleUrl: './inscription-index.component.css'
})
export class InscriptionIndexComponent implements OnInit {

  erreur: string | undefined;
  formContenu:FormGroup;

  constructor(private fb:FormBuilder, private route:Router, private rt:ActivatedRoute,private data:DataService) {
    // Pour initialisation du formulaire
    this.formContenu = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
      genre: ['M', [Validators.required]],
    });

  }

  ngOnInit(){
    this.rt.paramMap.subscribe(params => {
      const users = params.get('user');

        if (users) {
          // Si l'utilisateur est déjà connecté, on pré-remplit le formulaire
          let user = JSON.parse(users);
          this.formContenu.patchValue({
              nom: user.nom || '',
              prenom: user.prenom || '',
              email: user.email || '',
              motDePasse: user.motDePasse || '',
              genre: user.genre || 'H'
          })
        }
    });
  }


  goToSuivant() {
      if (this.formContenu.valid) {
        const nom = this.formContenu.value.nom
        const prenom = this.formContenu.value.prenom
        const email = this.formContenu.value.email
        const motDePasse = this.formContenu.value.motDePasse
        const genre = this.formContenu.value.genre

        const user = new Users(prenom,nom,email,motDePasse,genre,[]);
        this.data.userData = user; // Enregistrer les données de l'utilisateur dans le service
        this.route.navigate(['inscription/choix']);
        console.log(`les données enregistrements : ${user.getEmail}`)
      } else {
        this.erreur = "Veuillez remplir tous les champs correctement.";
        setTimeout(() => {
          this.erreur = undefined;
        }, 3000);
      }
  }

}
