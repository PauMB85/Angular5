import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ngswitch-case',
  templateUrl: './my-ngswitch-case.component.html',
  styleUrls: ['./my-ngswitch-case.component.css']
})
export class MyNgswitchCaseComponent implements OnInit {

  viewMode: string;
  constructor() { }

  ngOnInit() {
    this.viewMode = 'map';
  }

  changeViewMode(view: string) {
    this.viewMode = view;
  }

}
