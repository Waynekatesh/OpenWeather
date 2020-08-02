import { Component, OnInit } from '@angular/core';
import { OperWeatherServiceService } from '../oper-weather-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private service: OperWeatherServiceService,private  router:Router,private spinner: NgxSpinnerService) { }
  humidity:any='';

  feelslike:any='';
  windspeed:any='';
  pressure:any='';
  country:any='';
  city:any='';
  datee:any='';
CW:any=''
  hourlyWeatherForcity:any=[];

  times: any = ["1am","2am","3am","4am","5am","6am"];
  degrees:any=["25*","24*","26*","27*","22*","24*"]

  cards:any=[{times:"1am",degrees:25}, {times:"2am",degrees:24},{times:"3am",degrees:26},{times:"4am",degrees:27},
  {times:"5am",degrees:22},{times:"6am",degrees:24}];
  ngOnInit() {
    setTimeout(() => {
 
      this.spinner.hide();
  }, 500);
    this.service.getCurrentWeatherForCity(localStorage.getItem('countryid'),localStorage.getItem('cityidforOneCity'),localStorage.getItem('token')).subscribe((hourlyforcity:any)=>{
      console.log(hourlyforcity)
      this.hourlyWeatherForcity=hourlyforcity.hourlyWeather;
   }
    );
    this.country=localStorage.getItem("countryNameForOneCity");
    this.city=localStorage.getItem("citynameforonecity")
   this.datee=localStorage.getItem('date');
   this.CW=localStorage.getItem('currentWeather');
this.pressure=localStorage.getItem('pressure');
this.windspeed=localStorage.getItem('windspeed')
this.humidity=localStorage.getItem('humidity')
this.feelslike=localStorage.getItem('feelslike');
  }
}
