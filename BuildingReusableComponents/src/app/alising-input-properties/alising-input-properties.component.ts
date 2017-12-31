import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alising-input-properties',
  templateUrl: './alising-input-properties.component.html',
  styleUrls: ['./alising-input-properties.component.css']
})
export class AlisingInputPropertiesComponent implements OnInit {

  @Input('is-favorite') isFavorite: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
