import { Component, HostListener, OnInit } from '@angular/core';
import { applyTheme, getSystemLocalStorage, TypeTheme, TypeThemeInit } from '../../../utils/utilsmodstheme';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  protected typeMod!: string;
  protected activateMenuThemeValue: boolean = false;
  protected typeTheme: TypeTheme = TypeThemeInit;

  ngOnInit(): void {
    this.typeMod = getSystemLocalStorage();
    this.activateMenuTheme(false);
  }

  protected changeTypeTheme(value: string, event: Event): void {
    event.stopPropagation();

    switch (value) {
      case (this.typeTheme.light):
        this.typeMod = applyTheme(value);
        break;
      case (this.typeTheme.dark):
        this.typeMod = applyTheme(value);
        break;
      case (this.typeTheme.reset):
        this.typeMod = applyTheme(value);
        break;
    }

    this.activateMenuThemeValue = false;
  }

  protected activateMenuTheme(value: boolean): void {
    this.activateMenuThemeValue = value;
  }

  @HostListener('document:click', ['$event'])
  private onClickOutside(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.container-mod-theme')) {
      this.activateMenuThemeValue = false;
    }
  }

}
