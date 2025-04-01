import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LinkedinSvgComponent } from "../../components/icons/linkedin-svg/linkedin-svg.component";
import { GithubSvgComponent } from "../../components/icons/github-svg/github-svg.component";

@Component({
  selector: 'app-init',
  imports: [RouterLink, RouterLinkActive, LinkedinSvgComponent, GithubSvgComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

  protected activateStylesButton: boolean = false;
  protected activateStylesLink: boolean = false;

  protected onHover(isHovered: boolean, element: string) {
    const action = isHovered ? 'entró en' : 'salió de';

    if (element === 'button') {
        console.log(`🔘 Botón: El cursor ${action} el botón.`);
    } else if (element === 'link') {
        console.log(`🔗 Enlace: El cursor ${action} el enlace.`);
    }
}

}
