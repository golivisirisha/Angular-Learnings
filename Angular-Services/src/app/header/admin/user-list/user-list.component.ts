// user-list.component.ts
import { Component ,Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { UserService } from '../../../Services/user.service';
import { FormsModule } from '@angular/forms';
import{USER_TOKEN} from './../../../app.component';
import { User } from '../../../Models/User';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './user-list.component.html'
  
})
export class UserListComponent {
  constructor( @Inject(USER_TOKEN)private userService: UserService) {}

  userList = this.userService.GetAllUsers();

  ShowUserDetails(user:User){
    this.userService.OnShowUserDetails(user);
    
  }

}

