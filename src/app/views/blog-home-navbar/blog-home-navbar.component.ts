import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-home-navbar',
  templateUrl: './blog-home-navbar.component.html',
  styleUrls: ['./blog-home-navbar.component.css']
})
export class BlogHomeNavbarComponent implements OnInit {

  public cookieUser = '';
  constructor(private router: Router,
              private logOutService: LoginService) { }

  ngOnInit() {
    this.cookieUser = JSON.parse(localStorage.getItem('username')).username;
    console.log(this.cookieUser);
  }

  deslogear() {
    this.logOutService.logout();
    this.router.navigate(['/']);
  }



}
