import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderpageVisiteurComponent } from './components/headerpage-visiteur/headerpage-visiteur.component';
import { Router,Event,NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/UI/footer/footer.component";
import { TaskFormComponent } from './components/task-form/task-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderpageVisiteurComponent, CommonModule, FooterComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'collabdev';
  ispagevisiteur=false
  constructor(private router:Router){
   this.router.events.subscribe((eve:Event) =>
   {
    if(eve instanceof NavigationEnd){
      this.ispagevisiteur=eve.urlAfterRedirects === '/page-visiteur';
      console.log(this.ispagevisiteur);
    }
   })

}
}
