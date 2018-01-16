import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  categoryList = [
    { id: 1, name: 'dev'},
    { id: 2, name: 'test'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
