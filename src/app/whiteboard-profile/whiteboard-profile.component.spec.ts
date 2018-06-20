import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardProfileComponent } from './whiteboard-profile.component';

describe('WhiteboardProfileComponent', () => {
  let component: WhiteboardProfileComponent;
  let fixture: ComponentFixture<WhiteboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
