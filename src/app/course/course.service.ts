import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  private courseList:Array<Course>

  constructor() {
    this.courseList = [
      new Course(1, 'HTML5', 34, 4.4, 'HTML5视频教程'),
      new Course(2, 'CSS3', 34, 3.0, 'HTML5视频教程'),
      new Course(3, 'JavaScript', 34, 4.9, 'HTML5视频教程'),
      new Course(4, 'Java', 34, 5.0, 'HTML5视频教程'),
      new Course(5, 'Python', 34, 1.5, 'HTML5视频教程')
    ]
  }

  getCourses():Array<Course> {
    return this.courseList
  }

  getCourse(id:number):Course {
    if (id === 0) {
      return new Course(0, '', 0, 0, '')
    }
    return this.courseList.find((course) => course.id === id)
  }

}

export class Course {
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string ) {}
}
