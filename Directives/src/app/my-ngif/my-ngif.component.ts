import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ngif',
  templateUrl: './my-ngif.component.html',
  styleUrls: ['./my-ngif.component.css']
})
export class MyNgifComponent implements OnInit {

  courses: Array<string> = []; // ['angular', 'webservices'];

  constructor() { }

  ngOnInit() {
  }

}
