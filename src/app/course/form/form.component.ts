import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Course, CourseService} from "../course.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [CourseService]
})
export class FormComponent implements OnInit {

  id:number

  course:Course

  constructor(
    public route:ActivatedRoute,
    public router: Router,
    public courseService: CourseService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id'])
    this.course = this.courseService.getCourse(this.id)
  }

  handleSubmit() {
    // todo
    this.router.navigateByUrl('/course')
  }

}
