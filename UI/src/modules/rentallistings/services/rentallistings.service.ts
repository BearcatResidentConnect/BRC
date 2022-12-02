import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


const API_URL = 'http://127.0.0.1:5000/api';

@Injectable()
export class RentallistingsService {
    constructor(private http: HttpClient) { }
  
    getRentallistings(): Observable<any> {
    
      return this.http.get<any>(API_URL + "/rental-postings");

    }
}
