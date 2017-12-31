import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ngfor-track-by',
  templateUrl: './my-ngfor-track-by.component.html',
  styleUrls: ['./my-ngfor-track-by.component.css']
})
export class MyNgforTrackByComponent implements OnInit {

  courses = [];
  constructor() { }

  ngOnInit() {

  }

  loadCourses () {
    this.courses = [
        {id: 1, title: 'course1'},
        {id: 2, title: 'course2'},
        {id: 3, title: 'course3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }


}
