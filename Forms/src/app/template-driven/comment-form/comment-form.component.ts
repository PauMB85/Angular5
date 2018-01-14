import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'}
  ];

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
    let valueF = f.value;
  }

}
