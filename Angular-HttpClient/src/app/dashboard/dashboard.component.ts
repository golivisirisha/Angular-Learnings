import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Task } from 'src/Models/Task';
import{map} from 'rxjs/operators';
import { TaskService } from '../Services/task.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  showTaskDetails:boolean=false;
  http:HttpClient=inject(HttpClient);
  allTasks:Task[]=[];
  taskService:TaskService=inject(TaskService);

  editMode:boolean=false;

  selectedTask:Task;
  currentTaskId:string='';
  isLoading:boolean=false;

  currentTask: Task | null = null;

  errorMessage:string | null =null;
  errorSub:Subscription;




  ngOnInit(){
    this.fetchAllTasks();
    this.errorSub=this.taskService.errorSubject.subscribe({next:(httpError)=>{
      this.setErrorMessage(httpError);

    }

    });

  }
  ngonDestroy(){
  this.errorSub.unsubscribe();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode=false;
    this.selectedTask={
      title:'',
      desc:'',
      assignedTo:'',
      createdAt:'',
      priority:'',
      status:''


    }
  }
  showCurrentTaskDetails(id:string |undefined){
    this.showTaskDetails=true;
    this.taskService.getTaskDetails(id).subscribe({next:(data:Task)=>{
      this.currentTask=data;

    }});


  }
  CloseTaskDetails(){
    this.showTaskDetails=false;

  }


  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }
  CreateOrUpdateTask(data:Task){
    if(!this.editMode)
     this.taskService.CreateTask(data);
    else{
      //task edit
      this.taskService.UpdateTask(this.currentTaskId,data);
    }


    // const headers=new HttpHeaders({'my-header':'hello-world'})
  //  this.http.post<{name:string}>('https://angular-http-client-360ac-default-rtdb.firebaseio.com/tasks.json',data)
  //  .subscribe((response)=>{
  //   console.log(response);
  //   this.fetchAllTasks();
  //  });

   

  } 

  FetchAllTaskClicked(){
    this.fetchAllTasks();

  }

  private fetchAllTasks(){
    // this.http.get<{[key:string]:Task}>('https://angular-http-client-360ac-default-rtdb.firebaseio.com/tasks.json')
    // .pipe(map((response)=>{

    //   //trasforming data
    //   let tasks=[];

    //   for(let key in response){
    //     if(response.hasOwnProperty(key)){
    //       tasks.push({...response[key],id:key});

    //     }
       
    //   }

    //   return tasks;

    // }))

    this.isLoading=true;
    this.taskService.GetAlltasks()
    .subscribe({next:(tasks)=>{
      this.allTasks=tasks;
      this.isLoading=false;
      // console.log(tasks);
    },error:(error)=>{
      // this.errorMessage=error.message;
      this.setErrorMessage(error);
      this.isLoading=false;
      

    }

    });

  }

  private setErrorMessage(err:HttpErrorResponse){
    // console.log(err);
    if(err.error.error==='Permission denied'){
      this.errorMessage='you do not have permission to perform this action';
    }
    else{
      this.errorMessage=err.message;
    }
    setTimeout(()=>{
      this.errorMessage=null;

    },3000);

  }



  DeleteTask(id:string | undefined){
    // this.http.delete('https://angular-http-client-360ac-default-rtdb.firebaseio.com/tasks/'+ id +'.json')
    // .subscribe((res)=>{
    //   this.fetchAllTasks();
    // })
    this.taskService.DeleteTask(id);

  }

  DeleteAllTasks(){
    // this.http.delete('https://angular-http-client-360ac-default-rtdb.firebaseio.com/tasks.json')
    // .subscribe((res)=>{
    //    this.fetchAllTasks();

    // })
    this.taskService.DeleteAllTask();
  }
  
  OnEditTaskClicked(id:string |undefined){
    this.currentTaskId=id;
    //open edit task form
    this.showCreateTaskForm=true;
    this.editMode=true; 

   this.selectedTask= this.allTasks.find((task)=>{
      return task.id === id;

    })


  }
}
