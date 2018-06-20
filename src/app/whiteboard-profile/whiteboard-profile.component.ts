import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-whiteboard-profile',
  templateUrl: './whiteboard-profile.component.html',
  styleUrls: ['./whiteboard-profile.component.css']
})
export class WhiteboardProfileComponent implements OnInit {

  userId;
  constructor(
    private router: Router,
    private route: ActivatedRoute)
  {
    this.route.params.subscribe(params => this.userId=(params['userId']));
  }

  navprof()
  {
    this.router.navigate(['profile']);
  }
  ngOnInit() {
  }

}
