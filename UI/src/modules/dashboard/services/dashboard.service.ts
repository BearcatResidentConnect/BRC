import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';

@Injectable()
export class DashboardService {
   
    constructor(private http: HttpClient) { }

    getDash( ): Observable<any> {
        return this.http.get(environment.basePath + '/dashboard/analytics' )   
      }
}
