import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-passing-event-data',
  templateUrl: './passing-event-data.component.html',
  styleUrls: ['./passing-event-data.component.css']
})
export class PassingEventDataComponent implements OnInit {

  @Input('isFavorite') isFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    // this.change.emit(this.isFavorite);
    // pass an object
    this.change.emit({newValue: this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
