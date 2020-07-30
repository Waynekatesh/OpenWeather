import { Component, OnInit } from '@angular/core';
import { OperWeatherServiceService } from '../oper-weather-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  token: any;
  constructor(private service: OperWeatherServiceService, private router: Router) { }

  ngOnInit() {
  }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  login() {
    if ((this.loginForm.value.password != '' && this.loginForm.value.email != '')) {
      this.service.login(this.loginForm.value).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('countryid', res.countryID)
          this.router.navigate(['City']);
        },
        err => {
          console.log("error");
        }
      );
    }
    else {
      alert("Incorrect password");
    }
  }
}