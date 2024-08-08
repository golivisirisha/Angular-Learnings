// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { ProductListComponent } from './Container/product-list.component';
import { FormsModule } from '@angular/forms';

import { DemoDirective } from './CustomDirectives/demo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopheaderComponent, ProductListComponent, FormsModule, DemoDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'project ukgbiygihguo1';
}