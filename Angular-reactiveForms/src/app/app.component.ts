import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators,FormArray, CheckboxRequiredValidator} from '@angular/forms';
import {CustomValidators} from './validators/noSpaceAllowed.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'template-driven-form';
  reactiveForm:FormGroup;
  formStatus:string='';



  ngOnInit(){

    this.reactiveForm=new FormGroup({
      firstname:new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
      lastname:new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      username:new FormControl(null,Validators.required,CustomValidators.checkUserName  ),
      dob:new FormControl(null),
      gender:new FormControl('male'),
      address:new FormGroup({
        street:new FormControl(null,Validators.required),
        country:new FormControl('India',Validators.required),
        city:new FormControl(null),
        region:new FormControl(null),
        postal:new FormControl(null,Validators.required)

      }),
      skills:new FormArray([
        new FormControl(null,Validators.required)
        // new FormControl(null,Validators.required),
      ]),

      experience:new FormArray([
        // new FormGroup({
        //   company:new FormControl(null),
        //   position:new FormControl(null),
        //   totalExp:new FormControl(null),
        //   start:new FormControl(null),
        //   end:new FormControl(null),


        // })
      ]),

    });

    // this.reactiveForm.get('firstname').valueChanges.subscribe((value)=>{
    //   console.log(value);

    // })

    // this.reactiveForm.valueChanges.subscribe((data)=>{
    //   console.log(data);
    // })

    // this.reactiveForm.get('username').statusChanges.subscribe((status)=>{
    //   console.log(status);
    // })

    this.reactiveForm.statusChanges.subscribe((status)=>{
      console.log(status);
      this.formStatus=status;
    });
    
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm);

  }      
  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));

  }
  DeletSkill(index:number){
    const controls=<FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
  AddExperience(){
    const frmGroup=new FormGroup({
      company:new FormControl(null),
      position:new FormControl(null),
      totalExp:new FormControl(null),
      start:new FormControl(null),
      end:new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(frmGroup )

  }

  DeleteExperience(index:number){
    const frmArray=<FormArray>this.reactiveForm.get('experience');
    frmArray  .removeAt(index)
  }

  
   
} 
