import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [
    NgClass, 
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  protected activateStylesButton: boolean = false;
  protected activateStylesLink: boolean = false;

  protected onHover(isHovered: boolean, element: string) {
    if (isHovered) {
      if (element === 'button') {
        this.activateStylesLink = true;
      } else if (element === 'link') {
        this.activateStylesButton = true;
      }
    } else {
      if (element === 'button') {
        this.activateStylesLink = false;
      } else if (element === 'link') {
        this.activateStylesButton = false;
      }
    }
  }

  protected onScrollToTarget(event: Event): void {
    event.preventDefault();
    const target = document.getElementById('container-about-information');
    const offset = 50;
    if (target) {
      const top = target.getBoundingClientRect().top + globalThis.pageYOffset - offset;
      globalThis.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  }
}
