import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  @Output('change') change = new EventEmitter();
  heartBackground: string;
  constructor() { }

  ngOnInit() {
    this.heartBackground = (this.isActive) ? 'pink' : '#ccc';
  }

  onClick() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.heartBackground = 'pink';
      this.likesCount ++;
    } else {
      this.heartBackground = '#ccc';
      this.likesCount --;
    }
    this.change.emit(this.likesCount);
  }

}
