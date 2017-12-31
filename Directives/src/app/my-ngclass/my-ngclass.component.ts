import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ngclass',
  templateUrl: './my-ngclass.component.html',
  styleUrls: ['./my-ngclass.component.css']
})
export class MyNgclassComponent implements OnInit {

  isSelected: boolean;
  constructor() { }

  ngOnInit() {
    this.isSelected = false;
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }

}
