import { Component, OnInit } from '@angular/core';
import {Course} from "../models/coruse.model.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-course-grid-profile',
  templateUrl: './course-grid-profile.component.html',
  styleUrls: ['./course-grid-profile.component.css']
})
export class CourseGridProfileComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses: Course[] = [];

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
