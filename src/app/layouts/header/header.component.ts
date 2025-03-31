import { Component, OnInit } from '@angular/core';
import { applyTheme, getSystemTheme, TypeTheme, TypeThemeInit } from '../../../utils/utilsmodstheme';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  protected typeMod!: string;
  protected activateMenuThemeValue: boolean = false;
  protected typeTheme: TypeTheme = TypeThemeInit;

  ngOnInit(): void {
    this.typeMod = getSystemTheme();
    this.activateMenuTheme(false);
  }

  protected changeTypeTheme(value: string, event: Event): void {
    event.stopPropagation();
    this.typeMod = applyTheme(value);
    this.activateMenuThemeValue = false;
  }

  protected activateMenuTheme(value: boolean): void {
    this.activateMenuThemeValue = value;
  }

}
