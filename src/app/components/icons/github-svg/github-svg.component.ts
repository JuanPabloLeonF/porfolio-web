import { Component, input } from '@angular/core';

@Component({
  selector: 'app-github-svg',
  imports: [],
  templateUrl: './github-svg.component.html',
  styleUrl: './github-svg.component.css'
})
export class GithubSvgComponent {

  public inputUrl = input<string>("https://github.com/JuanPabloLeonF");
}
