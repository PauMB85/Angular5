import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ngstyle',
  templateUrl: './my-ngstyle.component.html',
  styleUrls: ['./my-ngstyle.component.css']
})
export class MyNgstyleComponent implements OnInit {

  canSave: boolean;
  constructor() { }

  ngOnInit() {
    this.canSave = false;
  }

}
