import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LinkedinSvgComponent } from "../../components/icons/linkedin-svg/linkedin-svg.component";
import { GithubSvgComponent } from "../../components/icons/github-svg/github-svg.component";
import { NgClass, NgStyle } from '@angular/common';
import { tecnologies, TypeTecnology } from '../../../utils/models';
import { CodePythonComponent } from '../../components/code/code-python/code-python.component';
import { SvgTecnologyComponent } from '../../components/svg-tecnology/svg-tecnology.component';
import { CodeHTMLComponent } from "../../components/code/code-html/code-html.component";
import { CodeCSSComponent } from "../../components/code/code-css/code-css.component";
import { CodeJavascriptComponent } from "../../components/code/code-javascript/code-javascript.component";
import { CodeAngularComponent } from "../../components/code/code-angular/code-angular.component";
import { CodeReactComponent } from "../../components/code/code-react/code-react.component";
import { CodeTypescriptComponent } from "../../components/code/code-typescript/code-typescript.component";
import { CodeMongoDbComponent } from "../../components/code/code-mongo-db/code-mongo-db.component";
import { CodeGitHubComponent } from "../../components/code/code-git-hub/code-git-hub.component";
import { CodeFlaskComponent } from "../../components/code/code-flask/code-flask.component";
import { CodeGitComponent } from "../../components/code/code-git/code-git.component";
import { CodeKubernetesComponent } from "../../components/code/code-kubernetes/code-kubernetes.component";
import { CodeDockerComponent } from "../../components/code/code-docker/code-docker.component";
import { CodePostgresqlComponent } from "../../components/code/code-postgresql/code-postgresql.component";
import { CodeMysqlComponent } from "../../components/code/code-mysql/code-mysql.component";

@Component({
  imports: [
    RouterLink,
    RouterLinkActive,
    LinkedinSvgComponent,
    GithubSvgComponent,
    NgClass,
    NgStyle,
    CodePythonComponent,
    SvgTecnologyComponent,
    CodeHTMLComponent,
    CodeCSSComponent,
    CodeJavascriptComponent,
    CodeAngularComponent,
    CodeReactComponent,
    CodeTypescriptComponent,
    CodeMongoDbComponent,
    CodeGitHubComponent,
    CodeFlaskComponent,
    CodeGitComponent,
    CodeKubernetesComponent,
    CodeDockerComponent,
    CodePostgresqlComponent,
    CodeMysqlComponent
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