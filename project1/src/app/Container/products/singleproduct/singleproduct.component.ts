import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from './../../../models/Product';
import { HighlightDirective } from '../../../CustomDirectives/highlight.directive';
import { DisableProductDirective } from '../../../CustomDirectives/disable-product.directive';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [CommonModule,HighlightDirective,DisableProductDirective],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
  @Input()
  product:Product;

}
