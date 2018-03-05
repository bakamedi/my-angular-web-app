import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-home-navbar',
  templateUrl: './blog-home-navbar.component.html',
  styleUrls: ['./blog-home-navbar.component.css']
})
export class BlogHomeNavbarComponent implements OnInit {

  navBarVisible = false;
  public cookieUser = '';
  constructor(private router: Router,
              private logOutService: LoginService) { }

  ngOnInit() {
    try {
      this.cookieUser = JSON.parse(localStorage.getItem('username')).username;
      if (this.cookieUser != null ) {
        this.navBarVisible = true;
      }
    } catch (error) {
      this.navBarVisible = false;
    }
  }

  deslogear() {
    this.logOutService.logout();
    this.router.navigate(['/']);
  }



}
