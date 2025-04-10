import { Component} from '@angular/core';
import { tecnologies, TypeTecnology } from '../../../utils/models/tecnology';
import { listProjects, TypeProject } from '../../../utils/models/project';
import { SectionTecnologiesComponent } from '../../components/projects/section-tecnologies/section-tecnologies.component';
import { SectionProjectsComponent } from '../../components/projects/section-projects/section-projects.component';
import { SectionSelectedProjectComponent } from '../../components/projects/section-selected-project/section-selected-project.component';
import { DemoSvgComponent } from '../../components/icons/demo-svg/demo-svg.component';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
  imports: [ 
    SectionTecnologiesComponent,
    SectionProjectsComponent,
    SectionSelectedProjectComponent,
    DemoSvgComponent
  ]
})
export class ProyectComponent {

  protected tecnologiesList: TypeTecnology[] = tecnologies;
  protected projectsList: TypeProject[] = listProjects;
  protected tecnologySelected: TypeTecnology = tecnologies[0];
  protected filteredProjects: TypeProject[] = this.projectsList;
  protected projectSelected: TypeProject = this.projectsList[0];

  protected onProjectSelected(data: TypeProject): void {
    this.projectSelected = data;
  }

  protected onHandlerClickSectionTecnologies(data: TypeTecnology): void {
    this.tecnologySelected = data;
    this.functionFilteredProjects(data);
  }
  

  protected functionFilteredProjects(data: TypeTecnology): void {
    this.filteredProjects = this.projectsList.filter(
      project => project.tecnologiesList.some(tecnology => tecnology.name.toLowerCase() === data.name.toLowerCase())
    );
  }

  protected onScrollToTarget(event: Event): void {
    event.preventDefault();
    const target = document.getElementById('container-projects');
    const offset = 80;
  
    if (target) {
      const top = target.getBoundingClientRect().top + globalThis.pageYOffset - offset;
  
      globalThis.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  }
  
}
