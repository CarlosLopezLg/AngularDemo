import { Component } from '@angular/core';
import { GlobalesService } from './services/globales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libreria';

  constructor(
    public variablesGlobales: GlobalesService
  ){}
}
