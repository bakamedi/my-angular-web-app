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
  public cookieUser: String;
  constructor(private router: Router,
              private logOutService: LoginService) {
              }

  ngOnInit() {
    try {
      this.cookieUser = JSON.parse(localStorage.getItem('username')).username;
      if (this.cookieUser != null ) {
        console.log(this.cookieUser);
        this.navBarVisible = true;
      } else {
        this.navBarVisible = false;
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
