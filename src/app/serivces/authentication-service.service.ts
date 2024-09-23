import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../shared/models/responses/response.model';
import { User } from '../shared/models/user.model';
import { JwtHeader } from 'jwt-decode';
import { JwtHelper } from '../shared/helpers/jwt-helper';
import { SessionHelper } from '../shared/helpers/session-helper';
import { Router } from '@angular/router';
import { RegisterDto } from '../shared/models/register-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseurl =environment.baseApiurl+'Authentication/';
  constructor(private _http:HttpClient,private router:Router) { }

  login(username:string,password:string):Observable<any>
  {
    return this._http.post<Response>(this.baseurl+'Login?username='+username+'&password='+password,null);
  }
  Register(registerDto:RegisterDto):Observable<Response>
  {
    return this._http.post<Response>(this.baseurl+'Register',registerDto);
  }

  GetUser():Observable<any>
  {
    return this._http.get<User>(this.baseurl+'UserDetails');
  }

  async storeToken(jwtToken : string)
  {
    var jwtHelper :JwtHelper = new JwtHelper();
    jwtHelper.DecodeToken(jwtToken);
    SessionHelper.setToken(jwtToken);
    SessionHelper.setEmail(jwtHelper.GetClaims('emailaddress'));
    SessionHelper.setName(jwtHelper.GetClaims('name'));
    SessionHelper.setUserId(jwtHelper.GetClaims('nameidentifier'));
    SessionHelper.setRole(jwtHelper.GetClaims('role'));
    SessionHelper.setPhoneNumber(jwtHelper.GetClaims('mobilephone'));
    SessionHelper.setTokenExpiresTime(new Date (jwtHelper.GetClaims('exp')*1000).toString());
  }

  LogOut()
  {
    sessionStorage.clear();
    localStorage.clear();
    return this.router.navigate(['/signin']);
  }

  IsLoggedIn(): boolean{
    return SessionHelper.getToken()!=null;
  }

  IsTokenExpired():boolean{
    if(SessionHelper.getTokenExpiresTime())
    {
      return (new Date (SessionHelper.getTokenExpiresTime()!)<new Date())
    }else{
      return false;
    }
  }

}
