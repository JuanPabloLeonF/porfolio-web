import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { tecnologies, TypeTecnology } from '../../../utils/models/tecnology';
import { listProjects, TypeProject } from '../../../utils/models/project';
import { SectionTecnologiesComponent } from '../../components/projects/section-tecnologies/section-tecnologies.component';
import { SectionProjectsComponent } from '../../components/projects/section-projects/section-projects.component';
import { SectionSelectedProjectComponent } from '../../components/projects/section-selected-project/section-selected-project.component';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
  imports: [ 
    SectionTecnologiesComponent,
    SectionProjectsComponent,
    SectionSelectedProjectComponent
  ]
})
export class ProyectComponent implements AfterViewInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('containerProjects') containerProjects!: ElementRef;
  private ctx!: CanvasRenderingContext2D;
  private animationFrame: number | null = null;
  private animationProgress = 0;
  private animationDuration = 300;

  protected tecnologiesList: TypeTecnology[] = tecnologies;
  protected projectsList: TypeProject[] = listProjects;
  protected tecnologySelected: TypeTecnology = tecnologies[0];
  protected filteredProjects: TypeProject[] = this.projectsList;
  protected projectSelected: TypeProject = this.projectsList[0];

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    globalThis.addEventListener('resize', () => this.resizeCanvas());
  }

  protected onProjectSelected(data: TypeProject): void {
    this.projectSelected = data;
  }

  private resizeCanvas() {
    const container = this.containerProjects.nativeElement;
    this.canvas.nativeElement.width = container.clientWidth;
    this.canvas.nativeElement.height = container.clientHeight;
    this.redrawConnections();
  }

  private redrawConnections() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    
    if (this.tecnologySelected) {
      const tecnologyRect = this.getTecnologyRect(this.tecnologySelected);
      if (tecnologyRect) {
        this.filteredProjects.forEach((project, index) => {
          const projectRect = this.getProjectRect(project);
          if (projectRect) {
            this.drawAnimatedConnection(tecnologyRect, projectRect, this.tecnologySelected.color, index, 1);
          }
        });
      }
    }
  }

  private animateConnections() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.animationFrame = requestAnimationFrame(() => {
      const progress = Math.min(1, this.animationProgress / this.animationDuration);
      
      const tecnologyRect = this.getTecnologyRect(this.tecnologySelected);
      if (tecnologyRect) {
        this.filteredProjects.forEach((project, index) => {
          const projectRect = this.getProjectRect(project);
          if (projectRect) {
            this.drawAnimatedConnection(tecnologyRect, projectRect, this.tecnologySelected.color, index, progress);
          }
        });
      }

      if (this.animationProgress < this.animationDuration) {
        this.animationProgress += 16;
        this.animateConnections();
      }
    });
  }

  private drawAnimatedConnection(tecnologyRect: DOMRect, projectRect: DOMRect, color: string, index: number, progress: number) {
    this.ctx.beginPath();
    
    const startX = tecnologyRect.left + tecnologyRect.width / 2;
    const startY = tecnologyRect.bottom;
    
    const endX = projectRect.left;
    const endY = projectRect.top + projectRect.height / 2;
    
    const totalLines = this.filteredProjects.length;
    const spacing = 20;
    const offset = (index - (totalLines - 1) / 2) * spacing;
    
    const controlX1 = startX;
    const controlY1 = startY + offset;
    
    const controlX2 = (startX + endX) / 2;
    const controlY2 = controlY1;
    
    const controlX3 = controlX2;
    const controlY3 = endY;
    
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(controlX1, controlY1);
    this.ctx.lineTo(controlX2, controlY2);
    this.ctx.lineTo(controlX3, controlY3);
    this.ctx.lineTo(endX, endY);
    
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'square';
    this.ctx.lineJoin = 'miter';
    
    this.ctx.shadowColor = color;
    this.ctx.shadowBlur = progress * 5;
    
    this.ctx.stroke();
  }

  private getTecnologyRect(tecnology: TypeTecnology): DOMRect | null {
    const index = this.tecnologiesList.indexOf(tecnology);
    const tecnologyElements = document.querySelectorAll('app-svg-tecnology');
    if (index >= 0 && index < tecnologyElements.length) {
      const element = tecnologyElements[index];
      const rect = element.getBoundingClientRect();
      const containerRect = this.containerProjects.nativeElement.getBoundingClientRect();
      return new DOMRect(
        rect.left - containerRect.left,
        rect.top - containerRect.top,
        rect.width,
        rect.height
      );
    }
    return null;
  }

  private getProjectRect(project: TypeProject): DOMRect | null {
    const projectElements = document.querySelectorAll('.item');
    const index = Array.from(projectElements).findIndex(el => el.textContent?.includes(project.title));
    if (index >= 0) {
      const element = projectElements[index];
      const rect = element.getBoundingClientRect();
      const containerRect = this.containerProjects.nativeElement.getBoundingClientRect();
      return new DOMRect(
        rect.left - containerRect.left,
        rect.top - containerRect.top,
        rect.width,
        rect.height
      );
    }
    return null;
  }

  protected onHandlerClickSectionTecnologies(data: TypeTecnology): void {
    this.tecnologySelected = data;
    this.functionFilteredProjects(data);
  }
  

  protected functionFilteredProjects(data: TypeTecnology): void {
    this.filteredProjects = this.projectsList.filter(
      project => project.tecnologiesList.some(tecnology => tecnology.name.toLowerCase() === data.name.toLowerCase())
    );
    this.redrawConnections();
  }
}
