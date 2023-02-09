import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {environment} from 'environments/environment';


@Injectable()
export class UserlistingsService {
    constructor(private http: HttpClient) { }
   
    getUserrental(): Observable<any> {
        return this.http.get(environment.basePath + '/user-postings/' ) 
        
      }
}
