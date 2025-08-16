import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../UI/header/header.component";
import { IdeeprojetService } from '../../services/ideeprojet/ideeprojet.service';
import { Ideeprojet } from '../../models/ideeprojet/ideeprojet';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detail-commentaire',
  imports: [HeaderComponent,CommonModule],
  templateUrl: './detail-commentaire.component.html',
  styleUrl: './detail-commentaire.component.css'
})
export class DetailCommentaireComponent implements OnInit{
  listecommentaire!:Ideeprojet
  constructor(private ideeprojetservice:IdeeprojetService){}
  ngOnInit(): void {
    


       this.ideeprojetservice.donneeIdeeProjet$.subscribe(data => {
      if (data) {this.listecommentaire=data
       
      
  }})}
  

       }
