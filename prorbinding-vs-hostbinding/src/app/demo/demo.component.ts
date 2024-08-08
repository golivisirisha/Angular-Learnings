import { Component } from '@angular/core';
import { SampleDirective } from '../CustomDirectives/sample.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [SampleDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  textValue:string="hello world!";

  logValue(){
    console.log("focus event happining by using event binding in component");
  }


}
