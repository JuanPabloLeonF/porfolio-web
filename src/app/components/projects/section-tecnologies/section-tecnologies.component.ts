import { Component, output } from '@angular/core';
import { TypeTecnology, tecnologies } from '../../../../utils/models/tecnology';
import { SvgTecnologyComponent } from '../../svg-tecnology/svg-tecnology.component';

@Component({
  selector: 'app-section-tecnologies',
  imports: [SvgTecnologyComponent],
  templateUrl: './section-tecnologies.component.html',
  styleUrl: './section-tecnologies.component.css'
})
export class SectionTecnologiesComponent {

  public ouputDataSelected = output<TypeTecnology>();
  protected tecnologiesList: TypeTecnology[] = tecnologies;
  protected tecnologySelected: TypeTecnology = tecnologies[0];

  protected tecnologySelectedOutputfuntion(data: TypeTecnology): void {
      this.tecnologySelected = data;
      this.ouputDataSelected.emit(data);
  }
}
