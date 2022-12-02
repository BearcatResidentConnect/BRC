import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://127.0.0.1:5000/api';

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) { }
   
    getUser(userName: string): Observable<any> {
        return this.http.get(API_URL + '/users/' + userName )   
      }

    updateUser(formdetails:any): Observable<any> {
          return this.http.put<any>(API_URL + "/user", formdetails);
        }
}
