import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGridProfileComponent } from './course-grid-profile.component';

describe('CourseGridProfileComponent', () => {
  let component: CourseGridProfileComponent;
  let fixture: ComponentFixture<CourseGridProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGridProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGridProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
