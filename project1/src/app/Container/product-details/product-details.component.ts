import { Component,Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { SetBackgroundDirective } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';
import { DisableProductDirective } from '../../CustomDirectives/disable-product.directive';

@Component({
  selector: 'product-details',
  standalone: true,
  imports: [ProductsComponent,CommonModule, SetBackgroundDirective,AppHoverDirective,DisableProductDirective],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',

})
export class ProductDetailsComponent {

@Input() productlistcomp: ProductsComponent;

product:Product;

ngOnInit(){
  this.product=this.productlistcomp.selectedProduct;
}

}

