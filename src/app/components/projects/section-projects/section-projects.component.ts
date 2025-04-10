import { Component, input, output } from '@angular/core';
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
  public projectSelectedOutput = output<TypeProject>();
  protected projectsList: TypeProject[] = listProjects;

  protected onProjectSelected(project: TypeProject): void {
    this.projectSelectedOutput.emit(project);
  }

  protected isProjectFiltered(project: TypeProject): boolean {
      return this.filteredProjects().includes(project);
  }

  protected onScrollToTarget(event: Event): void {
    event.preventDefault();
    const target = document.getElementById('container-selected-project');
    const offset = 25;
  
    if (target) {
      const top = target.getBoundingClientRect().top + globalThis.pageYOffset - offset;
  
      globalThis.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  }
  
}
