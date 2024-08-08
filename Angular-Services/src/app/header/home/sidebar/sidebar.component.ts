import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  // providers:[SubscribeService ]
  
})
export class SidebarComponent {

  constructor(private subService:SubscribeService ){

  }
  OnSubscribe(){
    this.subService.OnSubscribeClicked('monthly');
  }

}
