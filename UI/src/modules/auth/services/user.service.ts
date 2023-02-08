import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'environments/environment';

// const API_URL = 'http://18.207.93.25:5000';

@Injectable()

export class UserService {
    constructor(private http: HttpClient) { }
  
    getPublicContent(): Observable<any> {
      return this.http.get(environment.basePath + '/users', { responseType: 'text' });
    }
  
  }
  