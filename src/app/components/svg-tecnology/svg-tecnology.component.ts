import { Component, input } from '@angular/core';
import { TypeTecnology } from '../../../utils/models';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-svg-tecnology',
  imports: [NgStyle],
  template: `
    <div 
      (mouseover)="onHover(true)"
      (mouseout)="onHover(false)"
      (click)="onSelectData()" 
      [ngStyle]="{
        'box-shadow': activateStylesSelect || activateStylesHover ? '0px 0px 8px 1px ' + data().color : 'none',
        'border': true ? '2px solid ' + data().color : '2px solid ' + data().color
      }"
    >
      <img [src]="data().urlImg" [alt]="data().name">
    </div>
  `,
  styleUrl: './svg-tecnology.component.css'
})
export class SvgTecnologyComponent {
    
  public data = input<TypeTecnology>({} as TypeTecnology);
  protected activateStylesSelect: boolean = false;
  protected activateStylesHover: boolean = false;

  protected onSelectData() {
    this.activateStylesSelect = true;
  }

  protected onHover(isHovered: boolean) {
    this.activateStylesHover = isHovered;
  }
}
