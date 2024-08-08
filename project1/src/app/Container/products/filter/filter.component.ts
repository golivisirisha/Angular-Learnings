import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  
  @Input()
  all:number=0;

  @Input()
  inStock:number=0;

  @Input()
  outOfStock:number=0;

  @Output()
  SelectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  SelectedFilterRadioButton:string='all';

  onSelectedFilterRadioButtonChanged() {
    console.log("selected button in the filter is changed");
    this.SelectedFilterRadioButtonChanged.emit(this.SelectedFilterRadioButton);
  }
}


 



