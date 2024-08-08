import { Component ,inject} from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  // providers:[SubscribeService] //2.WHAT TO PROVIDE
 
})
export class HeroComponent {
  

//HOw to peovide dependency 
  // constructor(private subService:SubscribeService ){

  // }

  subService=inject(SubscribeService)

  OnSubscribe(){
    this.subService.OnSubscribeClicked('yearly');
  }
  


}
