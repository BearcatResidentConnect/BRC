import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProfileService } from '@modules/profile/services';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'sb-profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile.component.html',
    styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
      
  

      userDetails!: User;
      user_name:any = localStorage.getItem("user_name");
      email = localStorage.getItem('email')
      access_token = localStorage.getItem('access_token')
      first_name = localStorage.getItem('first_name')

     
    

    constructor( private profileService : ProfileService,private toastr: ToastrService) {}
    ngOnInit() {
   
        this.profileService.getUser(this.user_name).subscribe(data => {
            this.userDetails = data;
            console.log(this.userDetails,"userDetails")
            console.log(this.first_name,"first_name")
          });

    }
    // name = localStorage.getItem('first_name')
    // first_name = localStorage.getItem('first_name')
    // last_name = localStorage.getItem('last_name')
    // username = localStorage.getItem('user_name')
    // sid = localStorage.getItem('sid')
    // email = localStorage.getItem('email')

    onSubmit(): void {
        this.toastr.success('Hello, world!', 'Success!');
        
            this.profileService.updateUser(this.userDetails).subscribe({ 
                next: updateuser => { console.log(updateuser, "updateuser");}
            });
            alert("User details updated successfully")
    }

    showSuccess() {
        this.toastr.success('Hello, world!', 'Success!');
      }
}

export interface User{
    user_name: string,
    sid: any,
    email: string,
    first_name: string,
    last_name: string,
}
