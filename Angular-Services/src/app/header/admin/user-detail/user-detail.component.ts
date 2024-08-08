import { Component, OnInit,Inject } from '@angular/core';
import { User } from '../../../Models/User';
import { USER_TOKEN } from '../../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html'
  
})
export class UserDetailComponent implements OnInit{
  selectedUser:User;
  userService=Inject(USER_TOKEN)

  ngOnInit(){

    this.userService.OnUserDetailsClicked.subscribe((data:User) =>{
      this.selectedUser=data;
      console.log(this.selectedUser)
    })
    
    
  }


}
