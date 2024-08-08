import { Component,Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{UserListComponent} from './user-list/user-list.component';
import { UserService } from '../../Services/user.service';
import{USER_TOKEN} from './../../app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';




@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,UserListComponent,UserDetailComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
 
})
export class AdminComponent {

  constructor( @Inject(USER_TOKEN)private userService:UserService){}


  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser(){
    this.userService. CreateUser(this.name,this.gender,this.subType,this.status);
    

  }

  
}


