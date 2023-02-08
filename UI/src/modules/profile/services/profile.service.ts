import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {environment} from 'environments/environment';

// const API_URL = 'http://18.207.93.25:5000/api';

// const API_URL  = 'http://192.168.1.23:5000/api';

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) { }
   
    getUser(userName: string): Observable<any> {
        return this.http.get(environment.basePath + '/users/' + userName )   
      }

    updateUser(formdetails:any): Observable<any> {
          return this.http.put<any>(environment.basePath + "/user", formdetails);
        }
}
