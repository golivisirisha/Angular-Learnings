import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges {
  title:string="hello from demo component";
  @Input() message:string="";

  constructor(){
    console.log("explicit constructor called");
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnchanges hook called");
    console.log(changes);

  }

}
