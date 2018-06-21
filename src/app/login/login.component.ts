import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: String;
  username;
  password;
credentials;
user:{};

  login(username, password) {
    this.username=username;
    this.password=password;
      this.service
        .login(username, password)
        .then(user => this.credentials = user)
        .then(() => this.check_login(this.credentials));

  }

  check_login(credentials)
  {
    console.log("In login component check:"+credentials.username);
    console.log("IN login component check:"+credentials.error);
    //console.log("In login component check:"+JSON.stringify(credentials));
    console.log("CRED:"+credentials);
      if(credentials.user=="Invalid User" || this.password==undefined || this.username==undefined)
        this.message="Please enter correct credentials";
      else if(credentials.username=="admin")
        this.router.navigate(['user-admin']);
      else
        this.router.navigate(['profile']);

  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
