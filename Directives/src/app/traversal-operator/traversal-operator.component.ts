import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traversal-operator',
  templateUrl: './traversal-operator.component.html',
  styleUrls: ['./traversal-operator.component.css']
})
export class TraversalOperatorComponent implements OnInit {

  task = {
    title: 'Review application',
    assignee: {
      name: 'Pau'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
