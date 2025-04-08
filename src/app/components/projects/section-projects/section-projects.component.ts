import { Component, input } from '@angular/core';
import { TypeProject, listProjects } from '../../../../utils/models/project';
import { NgStyle } from '@angular/common';
import { TypeTecnology } from '../../../../utils/models/tecnology';

@Component({
  selector: 'app-section-projects',
  imports: [NgStyle],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.css'
})
export class SectionProjectsComponent {

  public tecnologySelected = input<TypeTecnology>({} as TypeTecnology);
  public filteredProjects = input<TypeProject[]>([]);
  protected projectsList: TypeProject[] = listProjects;

  protected isProjectFiltered(project: TypeProject): boolean {
      return this.filteredProjects().includes(project);
  }
}
