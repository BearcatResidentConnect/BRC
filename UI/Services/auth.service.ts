import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:5000/api/users/auth/token';
const Api_Url = 'http://127.0.0.1:5000/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user_name: string, password: string): Observable<any> {
    return this.http.post(
      Api_Url + 'user',
      {
        user_name,
        password,
      }, httpOptions
    );
  }

  register(sid:string, user_name: string,first_name:string,last_name:string, email: string, password: string): Observable<any> {
    return this.http.post(
      Api_Url + 'users',
      {
        sid,
        user_name,
        password,
        first_name,
        last_name,
        email
      }, httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(Api_Url + 'signout', { }, httpOptions);
  }
}
