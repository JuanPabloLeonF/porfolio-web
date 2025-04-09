import { Component, input } from '@angular/core';

@Component({
  selector: 'app-demo-svg',
  imports: [],
  templateUrl: './demo-svg.component.html',
  styleUrl: './demo-svg.component.css'
})
export class DemoSvgComponent {

  public inputUrl = input<string>("https://github.com/JuanPabloLeonF");
}
