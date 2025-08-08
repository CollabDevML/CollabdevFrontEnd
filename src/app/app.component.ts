import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/UI/header/header.component';
import { Router,Event,NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/UI/footer/footer.component";
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SideBarComponent } from './components/UI/side-bar/side-bar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, TaskFormComponent, FooterComponent, TaskListComponent, SideBarComponent],
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

    }
   })

}
}
