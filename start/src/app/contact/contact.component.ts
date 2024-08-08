import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName:string='';
  lastName:string='';
  country:string='usa';
  message:string='';

  isSubmitted:boolean=false;
  OnSubmit(){
    this.isSubmitted=true;

  }

  canExit():boolean{
    return true;

  }

}
