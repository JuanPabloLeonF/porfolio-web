import { Component } from '@angular/core';
import { SvgTecnologyComponent } from "../../components/svg-tecnology/svg-tecnology.component";
import { tecnologies, TypeTecnology } from '../../../utils/models/tecnology';
import { listProjects, TypeProject, TypeTecnologyProject } from '../../../utils/models/project';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-proyect',
  imports: [SvgTecnologyComponent, NgStyle],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.css'
})
export class ProyectComponent {
  protected tecnologiesList: TypeTecnology[] = tecnologies;
  protected projectsList: TypeProject[] = listProjects;
  protected tecnologySelected: TypeTecnology = tecnologies[0];
  protected tecnologySelectedOutput: TypeTecnology = this.tecnologySelected;
  protected validateTecnologies: boolean = false;
  protected tecnologiesListProjects: TypeTecnologyProject[] = this.projectsList[0].tecnologiesList;
  protected filteredProjects: TypeProject[] = [];

  protected tecnologySelectedOutputfuntion(data: TypeTecnology): void {
    this.tecnologySelectedOutput = data;
  }

  protected onGetTecnologySelected(data: TypeTecnology): void {
    this.tecnologySelected = data;
    this.filteredProjects = this.projectsList.filter(
      project => project.tecnologiesList.some(tecnology => tecnology.name.toLowerCase() === data.name.toLowerCase())
    );
  }

  protected isProjectFiltered(project: TypeProject): boolean {
    return this.filteredProjects.includes(project);
  }
}
