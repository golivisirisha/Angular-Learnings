import { Component,Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText:string="";

  @Output()
  SearchTextChanged:EventEmitter<string> =new EventEmitter<string>();

@ViewChild('SearchInput',{static:true}) searchInputE1: ElementRef;

  onSearchTextChanged(){
    // this.SearchTextChanged.emit(this.searchText);
  }
  // updatedSearchText(inputEL : HTMLInputElement){
   // console.log(inputEL.value);

   updatedSearchText(){
   this.searchText=this.searchInputE1.nativeElement.value;
   this.SearchTextChanged.emit(this.searchText);

  }


}
