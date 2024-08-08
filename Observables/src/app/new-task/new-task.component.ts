import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask:string='';
  taskService:TaskService=Inject(TaskService);

  onCreateTask(){
    console.log(this.newTask);
    this.taskService.OnCreateTask(this.newTask)

  }
}
