import { Component, OnInit } from '@angular/core';
import { OperWeatherServiceService } from '../oper-weather-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HourlyWeather } from '../Hourlyweather';

@Component({
  selector: 'app-dailyweather',
  templateUrl: './dailyweather.component.html',
  styleUrls: ['./dailyweather.component.css']
})
export class DailyweatherComponent implements OnInit {

  owlOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1400: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }

  constructor(private service: OperWeatherServiceService, private router: Router, private spinner: NgxSpinnerService) { }
current: any;
dailyweather:any;
  ngOnInit() {
    this.current=JSON.parse(localStorage.getItem('city'));
    console.log('city',this.current)
   // this.spinner.show();
    this.service.getDailyWeatherForCity(localStorage.getItem('countryNameForOneCity'), localStorage.getItem('cityname'), localStorage.getItem('token')).subscribe((daily: any) => {
  //    this.spinner.hide();
      console.log("daily",daily);
      this.dailyweather = daily.dailyWeather;
    },
    err => {
      alert(err)
    }
    );
  }

}
