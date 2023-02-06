import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { TokenStorageService } from '../../../auth/services/token-storage.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    form: any = {
        username: null,
        password: null,
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
  
    constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private myRoute: Router) { }
  
    ngOnInit(): void {
      if (this.tokenStorage.getToken('access_token')) {
        this.isLoggedIn = true;
        console.log('sdf');  
        console.log(this.tokenStorage.getToken('access_token'));
      }
    }
  
    onSubmit(): void {
      const { username, password } = this.form;
  
      this.authService.login(username, password).subscribe({
        next: data => {
          data && data.access_token &&  this.tokenStorage.setToken('access_token',data.access_token);
          data && data.refresh_token && this.tokenStorage.setToken('refresh_token',data.refresh_token);
          
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          console.log(data.access_token)
          console.log(data.refresh_token)
          this.getdetails(username);
          this.myRoute.navigateByUrl('dashboard');
        },
        
        error: err => {
          this.errorMessage = err.error.detail;
          this.isLoginFailed = true;
        }
      });
    }
    getdetails(username:any){
      this.authService.getUserDetails(username).subscribe({
            next: data1 => { console.log(data1, "dgdfg");
            localStorage.setItem('email',data1.email); 
            localStorage.setItem('first_name',data1.first_name); 
            localStorage.setItem('last_name',data1.last_name); 
            localStorage.setItem('user_name',data1.user_name); 
            localStorage.setItem('sid',data1.sid); 
          }
          });
    }
  }
