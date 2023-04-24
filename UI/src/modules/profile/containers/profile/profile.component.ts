import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProfileService } from '@modules/profile/services';
// import { ToastrService } from 'ngx-toastr';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'sb-profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile.component.html',
    styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
      
  
    @ViewChild('nf', { static: false }) nf!: NgForm;

      userDetails!: User;
      user_name:any = localStorage.getItem("user_name");
      email = localStorage.getItem('email')
      access_token = localStorage.getItem('access_token')
      first_name = localStorage.getItem('first_name')

     
    

    constructor( private profileService : ProfileService) {}
    ngOnInit() {
   
        this.profileService.getUser(this.user_name).subscribe(data => {
            this.userDetails = data;
            console.log(this.userDetails,"userDetails")
            console.log(this.first_name,"first_name")
          });

    }
    name = localStorage.getItem('first_name')
    last_name = localStorage.getItem('last_name')
    username = localStorage.getItem('user_name')
    sid = localStorage.getItem('sid')

    onSubmit(): void {
        if (this.nf.form.valid) {
            if (this.isFormDirty()) {
                this.profileService.updateUser(this.userDetails).subscribe({
                    next: updateuser => {
                        console.log(updateuser, "updateuser");
                        alert("User details updated successfully");
                    }
                });
            } else {
                alert("No changes made to user details");
            }
        }
    }
    
    
    isFormDirty(): boolean {
        return Object.values(this.nf.form.controls).some(control => control.dirty);
    }
    
}

export interface User{
    user_name: string,
    sid: any,
    email: string,
    first_name: string,
    last_name: string,
}
