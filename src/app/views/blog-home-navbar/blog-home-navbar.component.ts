import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-home-navbar',
  templateUrl: './blog-home-navbar.component.html',
  styleUrls: ['./blog-home-navbar.component.css']
})
export class BlogHomeNavbarComponent implements OnInit {

  constructor(private router: Router,
              private logOutService: LoginService) { }

  ngOnInit() {
  }

  deslogear() {
    this.logOutService.logout();
    this.router.navigate(['/']);
  }

}
