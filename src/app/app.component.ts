import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { applyTheme, getSystemLocalStorage, getSystemTheme } from '../utils/utilsmodstheme';
import { slideInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation]
})
export class AppComponent {

  constructor() {
    applyTheme(getSystemLocalStorage() || getSystemTheme());
  }

  protected prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
