import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  activateEoute:ActivatedRoute=inject(ActivatedRoute);
  router:Router=inject(Router);
  course;

  ngOnInit(){
    this.course=history.state;

  }


}
