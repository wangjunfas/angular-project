import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  title:string = ''
  desc:string = ''

  constructor(public router:Router) {}

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        if (event['url'] == '/') {
          this.title = '首页'
          this.desc = 'welcome'
        } else {
          this.title = '课程管理'
          this.desc = '课程管理列表'
        }
      })
  }

}
