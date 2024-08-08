import { Component,ElementRef, ViewChildren,QueryList} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Viewchildren';
  FullName:string='';

@ViewChildren('inputEl')
  inputElements:QueryList<ElementRef> ;

showoff(){
  let name=''
 this.inputElements.forEach((el) => {
  name += el.nativeElement.value + '';
 })
 this.FullName=name.trim();
}
}
