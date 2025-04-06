import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SvgTecnologyComponent } from "../../components/svg-tecnology/svg-tecnology.component";
import { tecnologies, TypeTecnology } from '../../../utils/models/tecnology';
import { listProjects, TypeProject, TypeTecnologyProject } from '../../../utils/models/project';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
  imports: [SvgTecnologyComponent, NgStyle]
})
export class ProyectComponent implements AfterViewInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('containerProjects') containerProjects!: ElementRef;
  private ctx!: CanvasRenderingContext2D;
  private animationFrame: number | null = null;
  private animationProgress = 0;
  private animationDuration = 300; // Duración de la animación en milisegundos

  protected tecnologiesList: TypeTecnology[] = tecnologies;
  protected projectsList: TypeProject[] = listProjects;
  protected tecnologySelected: TypeTecnology = tecnologies[0];
  protected tecnologySelectedOutput: TypeTecnology = this.tecnologySelected;
  protected validateTecnologies: boolean = false;
  protected tecnologiesListProjects: TypeTecnologyProject[] = this.projectsList[0].tecnologiesList;
  protected filteredProjects: TypeProject[] = this.projectsList;

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  private resizeCanvas() {
    const container = this.containerProjects.nativeElement;
    this.canvas.nativeElement.width = container.clientWidth;
    this.canvas.nativeElement.height = container.clientHeight;
    this.redrawConnections();
  }

  private redrawConnections() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    
    // Solo dibujar las líneas de la tecnología seleccionada
    if (this.tecnologySelectedOutput) {
      const tecnologyRect = this.getTecnologyRect(this.tecnologySelectedOutput);
      if (tecnologyRect) {
        this.filteredProjects.forEach((project, index) => {
          const projectRect = this.getProjectRect(project);
          if (projectRect) {
            this.drawAnimatedConnection(tecnologyRect, projectRect, this.tecnologySelectedOutput.color, index, 1);
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
      
      // Dibujar las líneas animadas
      const tecnologyRect = this.getTecnologyRect(this.tecnologySelected);
      if (tecnologyRect) {
        this.filteredProjects.forEach((project, index) => {
          const projectRect = this.getProjectRect(project);
          if (projectRect) {
            this.drawAnimatedConnection(tecnologyRect, projectRect, this.tecnologySelected.color, index, progress);
          }
        });
      }

      // Continuar la animación si no ha terminado
      if (this.animationProgress < this.animationDuration) {
        this.animationProgress += 16; // Aproximadamente 60fps
        this.animateConnections();
      }
    });
  }

  private drawAnimatedConnection(tecnologyRect: DOMRect, projectRect: DOMRect, color: string, index: number, progress: number) {
    this.ctx.beginPath();
    
    // Ajustar el punto de partida al centro horizontal y parte inferior
    const startX = tecnologyRect.left + tecnologyRect.width / 2;
    const startY = tecnologyRect.bottom;
    
    // El punto final será el lado izquierdo del proyecto en su centro vertical
    const endX = projectRect.left;
    const endY = projectRect.top + projectRect.height / 2;
    
    // Calcular puntos intermedios con variación para cada línea
    const totalLines = this.filteredProjects.length;
    const spacing = 20;
    const offset = (index - (totalLines - 1) / 2) * spacing;
    
    // Punto de control 1 (vertical con offset)
    const controlX1 = startX;
    const controlY1 = startY + offset;
    
    // Punto de control 2 (horizontal con offset)
    const controlX2 = (startX + endX) / 2;
    const controlY2 = controlY1;
    
    // Punto de control 3 (vertical con offset)
    const controlX3 = controlX2;
    const controlY3 = endY;
    
    // Dibujar la línea con ángulos rectos
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(controlX1, controlY1);
    this.ctx.lineTo(controlX2, controlY2);
    this.ctx.lineTo(controlX3, controlY3);
    this.ctx.lineTo(endX, endY);
    
    // Estilos con animación
    // Convertir el color a RGB si es necesario
    const rgbColor = this.rgbToHex(color);
    const [r, g, b] = this.hexToRgb(rgbColor);
    
    // Estilo de la línea
    this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${progress})`;
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'square';
    this.ctx.lineJoin = 'miter';
    
    // Efecto de brillo con el mismo color
    this.ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${progress * 5})`;
    this.ctx.shadowBlur = progress * 5;
    
    this.ctx.stroke();
  }

  private rgbToHex(color: string): string {
    // Si ya es hex, devolverlo
    if (color.startsWith('#')) return color;
    
    // Si es rgb, convertir a hex
    const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match) {
      const [r, g, b] = match.slice(1).map(Number);
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
    return '#000000'; // Negro por defecto
  }

  private hexToRgb(hex: string): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [0, 0, 0];
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

  private drawConnection(tecnologyRect: DOMRect, projectRect: DOMRect, color: string, index: number = 0, selected: boolean = false) {
    this.ctx.beginPath();
    
    const startX = tecnologyRect.right;
    const startY = tecnologyRect.bottom;
    
    // El punto final será el lado izquierdo del proyecto en su centro vertical
    const endX = projectRect.left;
    const endY = projectRect.top + projectRect.height / 2;
    
    // Calcular puntos intermedios con variación para cada línea
    const totalLines = this.filteredProjects.length;
    const spacing = 20; // Espaciado entre líneas
    const offset = (index - (totalLines - 1) / 2) * spacing;
    
    // Punto de control 1 (vertical con offset)
    const controlX1 = startX;
    const controlY1 = startY + offset;
    
    // Punto de control 2 (horizontal con offset)
    const controlX2 = (startX + endX) / 2;
    const controlY2 = controlY1;
    
    // Punto de control 3 (vertical con offset)
    const controlX3 = controlX2;
    // Ajustar la altura para que la última línea sea horizontal
    const controlY3 = endY;
    
    // Dibujar la línea con ángulos rectos
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(controlX1, controlY1); // Primera línea vertical
    this.ctx.lineTo(controlX2, controlY2); // Línea horizontal
    this.ctx.lineTo(controlX3, controlY3); // Segunda línea vertical
    this.ctx.lineTo(endX, endY); // Última línea horizontal
    
    // Estilos
    this.ctx.lineWidth = 2;
    if (selected) {
      // Línea de la tecnología seleccionada
      this.ctx.strokeStyle = color;
      this.ctx.shadowColor = color;
      this.ctx.shadowBlur = 5;
    } else {
      // Líneas de las otras tecnologías
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      this.ctx.shadowColor = 'rgba(255, 255, 255, 0.1)';
      this.ctx.shadowBlur = 2;
    }
    this.ctx.lineCap = 'square';
    this.ctx.lineJoin = 'miter';
    
    this.ctx.stroke();
  }

  protected tecnologySelectedOutputfuntion(data: TypeTecnology): void {
    this.tecnologySelectedOutput = data;
    this.functionFilteredProjects(data);
  }

  protected onGetTecnologySelected(data: TypeTecnology): void {
    this.tecnologySelected = data;
    this.tecnologySelectedOutput = data;
    this.functionFilteredProjects(data);
    this.redrawConnections(); // Aseguramos que se redibujen las conexiones
  }
  

  protected functionFilteredProjects(data: TypeTecnology): void {
    this.filteredProjects = this.projectsList.filter(
      project => project.tecnologiesList.some(tecnology => tecnology.name.toLowerCase() === data.name.toLowerCase())
    );
    this.redrawConnections(); // Aseguramos que se redibujen las conexiones
  }

  protected isProjectFiltered(project: TypeProject): boolean {
    return this.filteredProjects.includes(project);
  }
}
