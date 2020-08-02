import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperWeatherServiceService {
  private _response;  
  public get response() {
    return this._response;
  }
  public set response(value) {
    this._response = value;
  }
  constructor(private httpClient: HttpClient) { }
  private baseUrl = 'http://localhost:9191/api';

  getCountries():Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}/countries`);
  }

  register(data:object):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/user/create`,data);
  }
  login(data:object):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/user/login`,data);
  }

   getCities(data,data2):Observable<Object>
   {
      let header=new HttpHeaders().set('token',data2);
      header= header.set('Access-Control-Allow-Headers',"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      header=header.set('Content-Type', 'application/json');
      header=header.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      header=header.set("Access-Control-Allow-Credentials", "true");
      header=header.set("Access-Control-Allow-Origin", "*");
      // header=header.set('Authorization',
      // 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXRlbTEyMyIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfRU1Q')
    //   http.set('token',data2);
    //   http.append('Content-Type','application/json');

    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'token':data2
    // }
    
    // const requestOptions = {                                                                                                                                                                                
    //   headers: new Headers(headerDict), 
    // };
     return this.httpClient.get("http://localhost:9191/api/country/"+data+"/cities",{headers:header});
  //  return this.httpClient.get("http://localhost:9191/api/country/6/city/1/hourly-weather-details",{headers:header});
   }



   getCurrentWeather(data,token):Observable<Object>
   {
    let header=new HttpHeaders().set('token',token);
    header= header.set('Access-Control-Allow-Headers',"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    header=header.set('Content-Type', 'application/json');
    header=header.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    header=header.set("Access-Control-Allow-Credentials", "true");
    header=header.set("Access-Control-Allow-Origin", "*");
    return this.httpClient.get("http://localhost:9191/api/country/"+data+"/current-weather-details",{headers:header});
   }

   getCurrentWeatherForCity(data,data2,token):Observable<Object>
   {
    let header=new HttpHeaders().set('token',token);
    header= header.set('Access-Control-Allow-Headers',"Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    header=header.set('Content-Type', 'application/json');
    header=header.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    header=header.set("Access-Control-Allow-Credentials", "true");
    header=header.set("Access-Control-Allow-Origin", "*");
    return this.httpClient.get("http://localhost:9191/api/country/"+data+"/city/"+data2+"/hourly-weather-details",{headers:header});
   }

}
