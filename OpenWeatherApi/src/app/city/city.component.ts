import { Component, OnInit } from '@angular/core';
import { OperWeatherServiceService } from '../oper-weather-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  constructor(private service: OperWeatherServiceService,private  router:Router,private spinner: NgxSpinnerService) { }

currentWeather:any=[];
  city:any=[];
  ngOnInit() {

    setTimeout(() => {
 
      this.spinner.hide();
  }, 100);

     this.service.getCities(localStorage.getItem('countryid'),localStorage.getItem('token')).subscribe((cities:any)=>{
       console.log(cities)
       this.city=cities
       localStorage.setItem('cityid',cities.cityid)
       localStorage.setItem('cityname',cities.cityname)
      //  localStorage.setItem('countryname',cities.city.country.countryName)
      }
      );

       this.service.getCurrentWeather(localStorage.getItem('countryid'),localStorage.getItem('token')).subscribe((current:any)=>{
        console.log(current)
        this.currentWeather=current.currentWeathers;
     }
      );
    
  }

  getcity(ciit)
  {
    console.log(ciit)
    console.log(ciit.city.cityid)
    console.log(ciit.currentWeather)
    localStorage.setItem('cityidforOneCity',ciit.city.cityid)
     localStorage.setItem('countryNameForOneCity',ciit.city.country.countryName)
     localStorage.setItem('citynameforonecity',ciit.city.cityname)
     localStorage.setItem('date',ciit.dt)
     localStorage.setItem('currentWeather',ciit.currentWeather)
     localStorage.setItem("feelslike",ciit.feels_like)
     localStorage.setItem("humidity",ciit.humidity)
     localStorage.setItem("pressure",ciit.pressure)
     localStorage.setItem("windspeed",ciit.wind_speed)
     this.spinner.show();
     this.router.navigate(['Weather']);
  }
}