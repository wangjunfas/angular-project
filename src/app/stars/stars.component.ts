import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating:number

  @Input()
  writable:boolean

  @Output()
  starsNums:EventEmitter<number> = new EventEmitter()

  stars:Array<boolean> = []

  constructor() { }

  ngOnInit() {
    for (var i = 1; i <= 5; i++) {
      this.stars.push(this.rating < i)
    }
    // this.stars = [false, false, true, true, true]
  }

  handleClick(index) {
    if (this.writable) {
      return
    }

    this.starsNums.emit(index)
    this.stars = []
    for (var i = 1; i <= 5; i++) {
      this.stars.push(index + 1 < i)
    }
  }

}
