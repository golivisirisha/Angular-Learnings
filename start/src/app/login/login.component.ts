import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 @ViewChild('username') username:ElementRef;
 @ViewChild('password')  password:ElementRef;

 authService:AuthService=inject(AuthService);
 router:Router=inject(Router);
 activeRoute:ActivatedRoute=inject(ActivatedRoute);

 ngOnInit(){
  this.activeRoute.queryParamMap.subscribe((queries)=>{
    const logout=queries.get('logout');
    if(logout){
      this.authService.logout();
        alert('you have been loggedout');
      }
    
  })

 }

 OnLoginClicked(){
  const username=this.username.nativeElement.value;
  const password=this.password.nativeElement.value;

  const user=this.authService.login(username,password);

  if(user === undefined){
    alert ('the login credentials you have entered is not correct');
  }else{
    alert('welcome'+user.name +'.you are logged in.');
    this.router.navigate(['/Courses']);
  }
 }

 
}
