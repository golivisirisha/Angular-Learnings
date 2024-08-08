import { Component, } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { SubscribeService } from '../Services/subscribe.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent,AdminComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // providers:[SubscribeService]
})
export class HeaderComponent {

  selectedTab: string = 'home';

  //1. HOW TO PROVIDE DEPENDENCY
  constructor(private subService:SubscribeService){

  }
  
  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    
    
    this.subService.OnSubscribeClicked('monthly');

  }
  

}
