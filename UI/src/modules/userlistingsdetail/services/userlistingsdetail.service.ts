import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {environment} from 'environments/environment';

// const API_URL = 'http://18.207.93.25:5000/api';

// const API_URL  = 'http://192.168.1.23:5000/api';

@Injectable()
export class UserlistingsdetailService {
    constructor(private http: HttpClient) { }
   
    getUserrental(userName: string, postingId:number): Observable<any> {
        return this.http.get(environment.basePath + '/user-posting/'+  userName + '/postings/' + postingId ) 
        
      }
      setFormData(userData: any): Observable<any> {
        return this.http.post(environment.basePath + '/mail-service', userData) 
        
      }
}
