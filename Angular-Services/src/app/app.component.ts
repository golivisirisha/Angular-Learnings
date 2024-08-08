import { Component, InjectionToken } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {SubscribeService} from './Services/subscribe.service';
import { CommonModule } from '@angular/common';
import { UserService } from './Services/user.service';


export const USER_TOKEN=new InjectionToken<UserService>('USER_SERVICE');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[SubscribeService,
    {provide:USER_TOKEN ,useClass:UserService},
   ]
})
export class AppComponent {
  title = 'Angular-Services';
}
