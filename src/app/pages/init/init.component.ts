import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LinkedinSvgComponent } from "../../components/icons/linkedin-svg/linkedin-svg.component";
import { GithubSvgComponent } from "../../components/icons/github-svg/github-svg.component";
import { NgClass } from '@angular/common';
import { tecnologies, TypeTecnology } from '../../../utils/models';
import { CodePythonComponent } from '../../components/code/code-python/code-python.component';
import { SvgTecnologyComponent } from '../../components/svg-tecnology/svg-tecnology.component';
import { CodeHTMLComponent } from "../../components/code/code-html/code-html.component";
import { CodeCSSComponent } from "../../components/code/code-css/code-css.component";
import { CodeJavascriptComponent } from "../../components/code/code-javascript/code-javascript.component";
import { CodeAngularComponent } from "../../components/code/code-angular/code-angular.component";
import { CodeReactComponent } from "../../components/code/code-react/code-react.component";
import { CodeTypescriptComponent } from "../../components/code/code-typescript/code-typescript.component";

@Component({
  selector: 'app-init',
  imports: [
    RouterLink,
    RouterLinkActive,
    LinkedinSvgComponent,
    GithubSvgComponent,
    NgClass,
    CodePythonComponent,
    SvgTecnologyComponent,
    CodeHTMLComponent,
    CodeCSSComponent,
    CodeJavascriptComponent,
    CodeAngularComponent,
    CodeReactComponent,
    CodeTypescriptComponent
],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

  protected selectedTecnology: TypeTecnology = tecnologies[0];
  protected activateStylesButton: boolean = false;
  protected activateStylesLink: boolean = false;
  protected listTecnologies: TypeTecnology[] = tecnologies;

  protected selectTecnologyFuntion(tecnology: TypeTecnology) {
    this.selectedTecnology = tecnology;
  }

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