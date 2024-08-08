import { Component } from '@angular/core';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopmenuComponent,MainMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
