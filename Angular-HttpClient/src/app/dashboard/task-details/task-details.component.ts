import { Component, EventEmitter,Output,Input } from '@angular/core';
import { Task } from 'src/Models/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  @Output()
  CloseDetailsView:EventEmitter<boolean>=new EventEmitter<boolean>();

@Input()  currentTask: Task | null =null;

  OnCloseTaskDetails(){
    this.CloseDetailsView.emit(false);
  }
   

}
