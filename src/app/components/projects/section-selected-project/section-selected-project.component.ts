import { Component, input } from '@angular/core';
import { TypeProject } from '../../../../utils/models/project';
import { GithubSvgComponent } from "../../icons/github-svg/github-svg.component";
import { DemoSvgComponent } from '../../icons/demo-svg/demo-svg.component';

@Component({
  selector: 'app-section-selected-project',
  imports: [GithubSvgComponent, DemoSvgComponent],
  templateUrl: './section-selected-project.component.html',
  styleUrl: './section-selected-project.component.css'
})
export class SectionSelectedProjectComponent {

  public projectSelected = input<TypeProject>({} as TypeProject);

}
