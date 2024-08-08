import { Component,ElementRef,ViewChild,AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { from, Observable, of, fromEvent } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { SubjectComponent } from './subject/subject.component';
import { Subject } from 'rxjs';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NewTaskComponent,ShowTaskComponent,SubjectComponent,UnsubscribeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'Observables';
  data:any[]=[];
  array1=[1,2,3,4,5,6];
  array2=['a','b','c','d'];

  @ViewChild('createbtn') createBtn:ElementRef;
  createBtnObs;

  //observable is a stream of data that emits values over time
  //crating observable using new observable keyword 
  // myObservable=new Observable((observer)=>{
  //   // observer.next([1,2,3,4,5]);  //here the data completely  displayed at a once 

  // //straming the data 
  //   setTimeout(()=>{observer.next(1)},1000);
  //   setTimeout(()=>{observer.next(2)},2000);
  //   setTimeout(()=>{observer.next(3)},3000);
  //   // setTimeout(()=>{observer.error(new Error('someting went wrong.please try again later.'))},3000);
  //   setTimeout(()=>{observer.next(4)},4000);
  //   setTimeout(()=>{observer.next(5)},5000);
  //   setTimeout(()=>{observer.complete()},6000);
   
  // });

  //creating observable using of operator
// myObservable=of(this.array1,this.array2,20,"hello",true);

//creating observable using from operater but it takes one arugument which can iterate over the it.
// myObservable=from(this.array1);

//converting promise into observable
promisedata=new Promise((resolve,reject)=>{
  resolve([10,20,30,40,50]);
})

//observable emitted data is 2,6,4,5,8,8,9,8,98
//multi 5 -result -10,20,30,40,60..
myObservable=from([2,4,6,8,12]).pipe(map((val)=>{
  return val*5;
}),filter((val,i)=>{
  return val % 4 === 0; 
})
);

// filteredObs=this.myObservable.pipe(map((val)=>{
//   return val*5;
// }),filter((val,i)=>{
//   return val % 4 === 0; 
// })
// )

//20,40,60
// filteredObs=this.transformedObs.pipe(filter((val,i)=>{
//   return val % 4 === 0; 
// })
// )

  GetAsyncData(){
    //observer with handler 
    //next,error,completion these are callbacks that are called when an event occures based on the type of event from the observable.
    // this.myObservable.subscribe((val:any)=>{
    //   this.data.push(val);
    // },(err)=>{
    //   alert(err.message)
    // },()=>{
    //   alert("the data is completely streamed!")
    // })

    this.myObservable.subscribe({
      next:(val:any)=>{
      this.data.push(val);
      console.log(val);
    },
  error(err){
    alert(err.message);
  },
  complete(){
    alert("all the data is streamed");
  }
 })
}

// buttonClicked(){
//   let count=0;
//   this.createBtnObs=fromEvent(this.createBtn.nativeElement,'click')
//                                     .subscribe((data)=>{
//                                       console.log(data);
//                                       this.showItem(++count);
//                                     })
//  } 

ngAfterViewInit(){
//   // this.buttonClicked();

 }

// showItem(val){
//   let div=document.createElement('div');
//   div.innerText="Item"+val;
//   document.getElementById('items').appendChild(div);


// }
}

