import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProfileService } from '@modules/profile/services';

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

     
    

    constructor( private profileService : ProfileService) {}
    ngOnInit() {
   
        this.profileService.getUser(this.user_name).subscribe(data => {
            this.userDetails = data;
            console.log(this.userDetails,"userDetails")
          });

    }
    // name = localStorage.getItem('first_name')
    // first_name = localStorage.getItem('first_name')
    // last_name = localStorage.getItem('last_name')
    // username = localStorage.getItem('user_name')
    // sid = localStorage.getItem('sid')
    // email = localStorage.getItem('email')

    onSubmit(): void {
        
            this.profileService.updateUser(this.userDetails).subscribe({ 
                next: updateuser => { console.log(updateuser, "updateuser");}
            });
            alert("User details updated successfully")
    }
}

export interface User{
    user_name: string,
    sid: any,
    email: string,
    first_name: string,
    last_name: string,
}
