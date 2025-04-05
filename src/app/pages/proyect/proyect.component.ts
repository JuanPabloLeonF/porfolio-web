import { Component } from '@angular/core';
import { SvgTecnologyComponent } from "../../components/svg-tecnology/svg-tecnology.component";
import { tecnologies, TypeTecnology } from '../../../utils/models';

@Component({
  selector: 'app-proyect',
  imports: [SvgTecnologyComponent],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.css'
})
export class ProyectComponent {
  protected tecnologiesList: TypeTecnology[] = tecnologies;
}
