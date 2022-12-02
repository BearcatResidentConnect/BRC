import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:5000/api';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly refreshToken = 'refreshToken';

    constructor(private http: HttpClient) {}

    login(user_name: string, password: string): Observable<any> {
        /*  var formData: any = new FormData();
  formData.append("name", this.form.get('name').value);
  formData.append("avatar", this.form.get('avatar').value);
  return this.http.post(AUTH_API + '/users/auth/token', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  ) */
        /*  const formData = new FormData();
  formData.append("username", user_name);
  formData.append("password", password);
  const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
  console.log({formData}); */
        const formData = new FormData();
        formData.append('username', user_name);
        formData.append('password', password);

        const headers = new HttpHeaders({ enctype: 'multipart/form-data' });
        return this.http.post(AUTH_API + '/users/auth/token', formData, { headers });
    }
    getUserDetails(user_name: string): Observable<any> {
      return this.http.get(AUTH_API + '/users/'+  user_name ) 
      
    }

    register(
        user_name: string,
        sid: string,
        first_name: string,
        last_name: string,
        email: string,
        password: string
    ): Observable<any> {
        return this.http.post(
            AUTH_API + '/user',
            {
                user_name,
                sid,
                first_name,
                last_name,
                email,
                password,
            },
            httpOptions
        );
    }

    IsLoggedIn(){
        return localStorage.getItem('token')!=null;
    }
    GetToken(){
        return localStorage.getItem('token')||'';
    }
}
