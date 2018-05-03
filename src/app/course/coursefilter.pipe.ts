import { Pipe, PipeTransform } from '@angular/core';
import {logger} from "codelyzer/util/logger";

@Pipe({
  name: 'coursefilter'
})
export class CoursefilterPipe implements PipeTransform {

  transform(courses: any, field: any, keyword: any): any {
    if(keyword == '') {
      return courses
    }
    return courses.filter((item)=>{
      return new RegExp(keyword, 'i').test(item[field])
    })
  }

}
