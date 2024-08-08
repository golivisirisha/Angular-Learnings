import { Component,ViewChild } from '@angular/core';
import { SearchComponent }  from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent,CommonModule,ProductsComponent, ProductDetailsComponent,FeaturedBrandsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  Name="siri";
  addToCart:number=10;

  product={
    name:"iphone 13",
    price:999,
    color:'green',
    describe: 'Product description',
    discount:8.5,
    inStock: 10,
    pimage:"/assets/iphone.png"
  }
  getDiscountedPrice(){
    return this.product.price-(this.product.price*this.product.discount/100)
  }
  onChangeName(event:any){
     this.Name=event.target.value
     
  }
  incrementCart(){
    if(this.addToCart<=10){
      this.addToCart++;
    }
    
  }

  decrementCart(){
    if(this.addToCart>0){
      this.addToCart--;
    }
    
  }

  ListofStrings:string[]=["apple","banana","cherry","date","fig"];

 searchText:string="";

 setSearchText(value:string){
  this.searchText=value;
 }

 @ViewChild('ProductsComponent') productslistComponent:ProductsComponent;

  
}


