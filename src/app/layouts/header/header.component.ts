import { Component, HostListener, inject, OnInit } from '@angular/core';
import { applyTheme, getSystemLocalStorage, TypeTheme, TypeThemeInit } from '../../../utils/utilsmodstheme';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  protected typeMod!: string;
  protected activateMenuThemeValue: boolean = false;
  protected activateMenuBurguerValue: boolean = false;
  protected typeTheme: TypeTheme = TypeThemeInit;
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.typeMod = getSystemLocalStorage();
    this.activateMenuTheme(false);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.activateMenuBurguer(false)
    });
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
    this.activateMenuBurguerValue = false;
  }

  protected activateMenuTheme(value: boolean): void {
    this.activateMenuThemeValue = value;
  }

  protected activateMenuBurguer(value: boolean): void {
    this.activateMenuBurguerValue = value;
  }

  @HostListener('document:click', ['$event'])
  private onClickOutside(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.container-mod-theme')) {
      this.activateMenuThemeValue = false;
    }

    if (!targetElement.closest('.nav-responsive') && !targetElement.closest('.container-img-menu')) {
      this.activateMenuBurguerValue = false;
    }
  }

}
