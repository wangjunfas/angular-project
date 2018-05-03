import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Course, CourseService} from "../course.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})

export class ManagementComponent implements OnInit {
  constructor(public router:Router, public courseService:CourseService) { }

  courseList:Array<Course>

  courseFilter:FormControl = new FormControl()

  keywords:string = ''

  ngOnInit() {
    this.courseList = this.courseService.getCourses()

    this.courseFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        (value) => {
          this.keywords = value
        }
      )
  }

  nav(id:any) {
    this.router.navigateByUrl(`/form/${id || 0}`)
  }

  handleEmit(e) {

  }

}


