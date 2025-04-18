import { AfterViewInit, Component, ElementRef, inject, input, output } from '@angular/core';
import { TypeTecnology } from '../../../utils/models/tecnology';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-svg-tecnology',
  imports: [NgStyle],
  template: `
    <div
    (click)="onSelectData()"
    (mouseover)="onHoverItem(true)"
    (mouseout)="onHoverItem(false)"
    [ngStyle]="{
        'box-shadow': dataSelected() || activateStylesHover ? '0px 0px 8px 1px ' + data().color : 'none',
        'border': true ? '1px solid ' + data().color : 'none'
      }"
    >
      <img [src]="data().urlImg" [alt]="data().name">
    </div>
  `,
  styleUrl: './svg-tecnology.component.css'
})
export class SvgTecnologyComponent implements AfterViewInit {

  private elementRef = inject(ElementRef);
  public data = input<TypeTecnology>({} as TypeTecnology);
  public dataSelected = input<boolean>(false);
  public dataSelectedOutput = output<TypeTecnology>();
  protected activateStylesHover: boolean = false;

  ngAfterViewInit() {
    this.elementRef.nativeElement.setAttribute('data-name', this.data.name);
  }

  protected onSelectData() {
    this.dataSelectedOutput.emit(this.data());
  }

  protected onHoverItem(isHovered: boolean) {
    this.activateStylesHover = isHovered;
  }
    
}
