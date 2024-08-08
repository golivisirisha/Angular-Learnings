import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Lifecycle-Hook';
  inputVal:string='';

  constructor(){
    console.log("root constructor called");
  }

  onbuttonclick(inputEl:HTMLInputElement){
    this.inputVal=inputEl.value;

  }

}
