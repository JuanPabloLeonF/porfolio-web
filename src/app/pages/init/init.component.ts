import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LinkedinSvgComponent } from "../../components/icons/linkedin-svg/linkedin-svg.component";
import { GithubSvgComponent } from "../../components/icons/github-svg/github-svg.component";
import { NgClass } from '@angular/common';

@Component({
  imports: [
    RouterLink,
    RouterLinkActive,
    LinkedinSvgComponent,
    GithubSvgComponent,
    NgClass,
  ],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

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
}