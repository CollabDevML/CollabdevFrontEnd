import { CommonModule } from '@angular/common';
import { Component,Input,output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../../services/data.service';
import { GestionnaireDataService } from '../../../services/gestionnaire/gestionnaire-data.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pop-ups',
  imports: [
  CommonModule,
    FormsModule,
  ],
  templateUrl: './pop-ups.component.html',
  styleUrl: './pop-ups.component.css'
})
export class PopUpsComponent {
  @Input() visible: boolean = true;
  @Input() idDemandeContribution:number = 0;
  constructor(
    private data:DataService,
    private dataG:GestionnaireDataService,
    private route:Router,
    private spinner:NgxSpinnerService,
    private toast:ToastrService
  ){

  }
  close= output<boolean>();

  checked: boolean = false;

  confirmer() {
    if (this.checked) {
      this.dataG.demandeAccepter(this.idDemandeContribution,true).subscribe({
        next:(value)=> {
          this.toast.success("Contributeur Validé avec succès !!!","Validation")
        },
        error:(err)=> {
          this.toast.error(err.getMessage(),"erreur")
            console.log(err);
        },
      });
      this.close.emit(true);
    }
  }

  annuler() {
    this.close.emit(false);
  }
}
