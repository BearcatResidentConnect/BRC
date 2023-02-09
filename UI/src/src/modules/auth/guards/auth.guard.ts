import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private service: AuthService, private route: Router) { 
        
    }

    canActivate() {
        if  (this.service.IsLoggedIn()) {
            return true;
        }
        else {
            this.route.navigate(['login']); 
            return false;
        }
    }
}
