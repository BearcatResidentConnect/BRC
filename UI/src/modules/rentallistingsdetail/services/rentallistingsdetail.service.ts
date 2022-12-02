import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const API_URL = 'http://127.0.0.1:5000/api';

@Injectable()
export class RentallistingsdetailService {
    constructor(private http: HttpClient) { }
     
    getUserrental(rental_id:any): Observable<any> {
      return this.http.get(API_URL + '/rental-postings/' + rental_id ) 
      
    }

    setFormData(userData: any): Observable<any> {
        return this.http.post(API_URL + '/mail-service', userData) 
        
      }

}
