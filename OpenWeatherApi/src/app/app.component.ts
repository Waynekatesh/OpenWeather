import { Component } from '@angular/core';
import { OperWeatherServiceService } from './oper-weather-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenWeatherMap';
  constructor(private service: OperWeatherServiceService,private  router:Router,public spinner: NgxSpinnerService) { }
  ngOnInit()
  {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  // }, 2000);
  }
}
