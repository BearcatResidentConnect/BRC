import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const API_URL = 'http://127.0.0.1:5000/api';

@Injectable()
export class UserlistingsdetailService {
    constructor(private http: HttpClient) { }
   
    getUserrental(userName: string, postingId:number): Observable<any> {
        return this.http.get(API_URL + '/user-posting/'+  userName + '/postings/' + postingId ) 
        
      }
      setFormData(userData: any): Observable<any> {
        return this.http.post(API_URL + '/mail-service', userData) 
        
      }
}
