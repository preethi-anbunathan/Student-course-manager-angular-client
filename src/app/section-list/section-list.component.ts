import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component
({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  course;

  loadSections(courseId) {
    this.courseId = courseId;
    this.service.findCourseById(this.courseId)
      .then(course=>this.course=course);
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  // createSection(sectionName, seats) {
  //   this
  //     .service
  //     .createSection(this.courseId, sectionName, seats)
  //     .then(() => {
  //       this.loadSections(this.courseId);
  //     });
  // }

  enroll(section) {
    // alert(section._id);
    if(section.seats==0)
    {
        alert("Sorry this section is closed");
    }
    else {
      this.service
        .enrollStudentInSection(section._id)
        .then((enrollment) => {
          this.nav(enrollment);
          // this.router.navigate(['profile']);
        });
    }
  }

  nav(enrollment)
  {
    console.log("IN SECTION ENROLL:"+enrollment.student);
    this.router.navigate(['profile']);
  }

  ngOnInit() {
  }

}
