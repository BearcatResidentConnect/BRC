import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const API_URL = 'http://127.0.0.1:5000/api';

@Injectable()
export class newpropertyService {
    constructor(private http: HttpClient) { }
  
    postPropertydetails(formdetails:any): Observable<any> {
    //   return this.http.post(API_URL + '/user-posting', { responseType: 'text' });
      return this.http.post<any>(API_URL + "/user-posting", formdetails);

    }

    getUserrental(rental_id:any, user_name:any): Observable<any> {
      return this.http.get(API_URL + '/user-posting/' + user_name + '/postings/' + rental_id ) 
      
    }
}
