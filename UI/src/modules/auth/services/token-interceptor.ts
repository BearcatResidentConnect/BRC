import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";
import { TokenStorageService } from '../../auth/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {
    key:any;
    constructor(private inject:Injector,private tokenStorage: TokenStorageService, private auth: AuthService){ }

    intercept(req : HttpRequest<any> , next : HttpHandler): Observable<HttpEvent<any>> {
        let key = this.tokenStorage.getToken('access_token')
        if(key){
            req = req.clone({
                setHeaders: {Authorization: `Bearer ${key}`}
            })
        }
    //     let authservice = this.inject.get(AuthService);
    //     let jwtToken = req.clone ({
    //     setHeaders: {
    //         Authorization: 'bearer ' + this.tokenStorage.getToken('access_token'),
    //     }
    //  });
     return next.handle(req);
    }    
    
}