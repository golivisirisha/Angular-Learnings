import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]',
  standalone: true
})
export class SampleDirective {
  @HostBinding('value')inputValue:string="hi there";

  @HostListener('focus') logValue(){
    console.log("focus event happining by using event binding in component");
  }

  constructor() { }

}
