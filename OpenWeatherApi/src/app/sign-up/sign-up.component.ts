import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OperWeatherServiceService } from '../oper-weather-service.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service: OperWeatherServiceService,private spinner: NgxSpinnerService) { }
  countries: any = [];

  ngOnInit() {
    this.spinner.show();
    this.getContries();
    this.spinner.hide();
  }
  userForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    country:new FormControl(this.countries)
  });

  getContries() {
    this.service.getCountries().subscribe(x => {
      console.log(x);
      this.countries = x;
    })
  }


  addUser(){
    if((this.userForm.value.password!='')&&(this.userForm.value.username!='')&&(this.userForm.value.email!=''))
    {
      this.service.register(this.userForm.value).subscribe(
      data=>console.log(data));
    }
    else
    {
      alert("Please enter the username and password");
    }
  }


}
