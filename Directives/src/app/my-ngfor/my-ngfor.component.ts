import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ngfor',
  templateUrl: './my-ngfor.component.html',
  styleUrls: ['./my-ngfor.component.css']
})
export class MyNgforComponent implements OnInit {

  courses = [
    {id: 1, title: 'course1'},
    {id: 2, title: 'course2'},
    {id: 3, title: 'course3'},
  ];
  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.courses.push( {id: 4, title: 'course4'});
  }

  removeCourse(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  changeName(course) {
    course.title = 'UPDATE';
  }

}

