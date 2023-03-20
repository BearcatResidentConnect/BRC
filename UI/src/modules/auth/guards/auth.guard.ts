import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private route: Router,private router: Router) { 
        
    }

    canActivate(): boolean{
       
        if  (this.auth.IsLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['../auth/login']); 
            return false;
        }
    }
}
