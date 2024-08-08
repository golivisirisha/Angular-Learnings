import { Component,Inject,OnDestroy,OnInit } from '@angular/core';
import{Course} from 'src/app/Models/course';
import {CourseService} from 'src/app/Services/course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy {
  selectedCourse:Course;
  courseid:number;
  courseService:CourseService=Inject(CourseService);
  activeRoute:ActivatedRoute=Inject(ActivatedRoute);
  paramMap;

  ngOnInit(){
    //stroes the id of the activated route
    // this.courseid=this.activeRoute.snapshot.params['id'];
    // this.courseid=+this.activeRoute.snapshot.paramMap.get('id');
    // this.activeRoute.params.subscribe((data)=>{
    //   this.courseid= +data['id'];
    // })
    // this.selectedCourse=this.courseService.courses.find(course=>course.id === this.courseid);


    this.activeRoute.paramMap.subscribe((data)=>{
      this.courseid= +data.get('id');
    })
    this.selectedCourse=this.courseService.courses.find(course=>course.id === this.courseid);

  }
  ngOnDestroy(){
    this.paramMap.unsubscribe();

  }

}
