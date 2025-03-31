import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { applyTheme, getSystemLocalStorage, getSystemTheme } from '../utils/utilsmodstheme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porfolio-web';

  constructor() {
    applyTheme(getSystemLocalStorage() || getSystemTheme());
  }
}
