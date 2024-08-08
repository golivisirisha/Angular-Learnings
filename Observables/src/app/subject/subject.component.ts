import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  ngOnInit(){
    //let obs=new Observable((observer)=>{observer.next(Math.random())})
    // const subject=new Subject();
    // const subject=new ReplaySubject(2);
    // const subject=new BehaviorSubject<number>(100);

    // subject.next(100);
    // subject.next(200);
    // subject.next(300);
  

    //subscriber1
    // subject.subscribe((data)=>{console.log("subscriber1:"+data)})

    //subscriber2
    // subject.subscribe((data)=>{console.log("subscriber2:"+data)})
    

    // subject.next(Math.random());
    // subject.next(2020);

    //subscriber3
    // subject.subscribe((data)=>{console.log("subscriber3:"+data)})

    // subject.next(2023);



   

    //ajax call

    // const subject=new Subject();
    // const data=ajax('https://randomuser.me/api/');

    // subject.subscribe((res)=>console.log(res));
    // subject.subscribe((res)=>console.log(res));
    // subject.subscribe((res)=>console.log(res));

    // //emitting some data from a subject
    // data.subscribe(subject);

    //Async Subject
    // const asyncSubject=new AsyncSubject();
    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);
    // // asyncSubject.complete();

    // asyncSubject.subscribe((data)=>console.log(`subscriber1: ${data})`));

    // asyncSubject.complete();
    // asyncSubject.next(400);
    // asyncSubject.subscribe((data)=>console.log(`subscriber1: ${data})`));

    const promise=new Promise((resolve,reject)=>{
      console.log("promises called");
        resolve(100);
        resolve(200);
        resolve(300);
      //promise can only emit one vlaue not multiple

    })
    promise.then((data)=>{
      console.log(data);
    })

    const obs=new Observable((sub)=>{
      console.log("observable is called");
      sub.next(100);
      sub.next(200);
      sub.next(300);
    //observale can emit multiple values

    })
    //when the subscriber subscribe the observable ,its started the to excute the observable function.
    obs.subscribe((data)=>{
      console.log(data)
    });


    
  }
}
