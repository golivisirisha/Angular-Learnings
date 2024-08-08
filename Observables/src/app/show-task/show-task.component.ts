import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {

  tasks:string[]=["task1","task2","task3"];

  // taskService:TaskService=Inject(TaskService);

  // ngOnInit(){
  //   this.taskService.CreateTask.subscribe((value)=>{
  //     this.tasks.push(value);
  //   });


  constructor(private taskService: TaskService) { }

  ngOnInit(){
    if (this.taskService.CreateTask) {
      this.taskService.CreateTask.subscribe((value)=>{
        this.tasks.push(value);
      });
    } else {
      console.error('CreateTask is undefined');
    }
  }

}
