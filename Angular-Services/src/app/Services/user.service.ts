import { Injectable ,EventEmitter } from '@angular/core';
import { User } from "../Models/User";
import {LoggerService} from "./../Services/logger.service";



@Injectable()
export  class UserService{
    users:User[]=[
        new User('siri','female','Monthly','active'),
        new User('subbu','male','Yearly','inactive'),
        new User('gnani','male','monthly','active')

    ];
    constructor(private logger:LoggerService){}

    //this method used to return the users from the users array 
    GetAllUsers(){
        return this.users;
    }

    OnUserDetailsClicked:EventEmitter<User>=new EventEmitter<User>();
    OnShowUserDetails(user:User){
        this.  OnUserDetailsClicked.emit()

    }

    //it is used to create to the new user 

    CreateUser(name:string,gender:string,subtype:string,status:string){

        let user=new User(name,gender,subtype,status);
        //adding new user to the existed users array by using push method
        this.users.push(user);
        // let logger=new LoggerService();
        this.logger.LogMessage(name,status)

    }

}