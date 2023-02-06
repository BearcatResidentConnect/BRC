import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// const API_URL = 'http://18.207.93.25:5000/api';

const API_URL  = 'http://10.34.119.166:5000/api';

@Injectable()
export class UserlistingsService {
    constructor(private http: HttpClient) { }
   
    getUserrental(): Observable<any> {
        return this.http.get(API_URL + '/user-postings/' ) 
        
      }
}
