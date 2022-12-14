import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:5000';

@Injectable()

export class UserService {
    constructor(private http: HttpClient) { }
  
    getPublicContent(): Observable<any> {
      return this.http.get(API_URL + '/users', { responseType: 'text' });
    }
  
  }
  