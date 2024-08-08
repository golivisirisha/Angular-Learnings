import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Forms';

  firstName:string='';
  lastName:string='';
  dob:string='';
  Email:string='';
  gender:string='';
  country:string='';
  city:string='';
  region:string='';
  postal:string='';
  userName:string='';
  Isagreed:boolean=false;


  @ViewChild('registrationForm') form: NgForm;

  genders=[
    {id:'check-male',value:'male',display:'Male'},
    {id:'chcek-female',value:'female',display:'Female'},
    {id:'chcek-other',value:'other',display:'Prefer not to say'}
  ]

  OnFormSubmit(){
    console.log(this.form)
    // console.log(this.form.controls['firstname'].value);
    // console.log(this.form.value.lastname);
    // console.log(this.form.value.email);
    // console.log(this.form.value.dob);
    // console.log(this.form.value.address.country);
    // console.log(this.form.value.address.postal);

    this.firstName=this.form.value.firstname;
    this.lastName=this.form.value.lastname;
    this.Email=this.form.value.email;
    this.dob=this.form.value.dob;
    this.country=this.form.value.address.country;
    this.city=this.form.value.address.city;
    this.region=this.form.value.address.region;
    this.postal=this.form.value.address.postal;
    this.userName=this.form.value.username;
    this.dob=this.form.value.dob;
    this.Isagreed=this.form.value.agreement;

    this.form.reset();
    this.form.form.patchValue({
      gender:'male',
      address:{
        country:'India'
      }
      
    })
  }
  GenerateUserName(){

    let username='';
    if(this.firstName.length >=3){
      username += this.firstName.slice(0,3);
    }
    else{
      username += this.firstName;
    }

    if(this.lastName.length >=3){
      username +=this.lastName.slice(0,3);
    }
    else{
      username +=this.lastName;
    }

    let dateTime=new Date(this.dob);
    username +=dateTime.getFullYear();

    username=username.toLowerCase();
    console.log(username);

  //   this.form.setValue({
  //  firstName:this.form.value.firstname,
  //  lastName:this.form.value.lastname,
  //  email:this.form.value.email,
  //  dob:this.form.value.dob,
  //  gender:this.form.value.gender,
  //  username:username,
  //  address:{
  //   street1:this.form.value.address.street1,
  //   street2:this.form.value.address.street2,
  //   country:this.form.value.address.country,
  //   city:this.form.value.address.city,
  //   region:this.form.value.address.region,
  //   postal:this.form.value.address.postal
  //  }


    // })

    this.form.form.patchValue({
      username:username
    })

   



  }
}
