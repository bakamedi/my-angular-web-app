import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert-service',
  templateUrl: './alert-service.component.html',
  styleUrls: ['./alert-service.component.css']
})
export class AlertServiceComponent implements OnInit {
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMensaje().subscribe(message => {
      this.message = message;
      console.log(this.message);
    });
  }

}
