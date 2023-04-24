import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChangepasswordService } from '@modules/changepassword/services';
// import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'sb-changepassword',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './changepassword.component.html',
    styleUrls: ['changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
      
  

      userDetails!: User;
      username:any = localStorage.getItem("user_name");
      email = localStorage.getItem('email')
      first_name = localStorage.getItem('first_name')

      form = {
        "username": "string",
        "old_password": "string",
        "new_password": "string",
        "confirm_password": "string",
      }

     
    constructor( private changepasswordService : ChangepasswordService) {}
    ngOnInit() {
   
        this.changepasswordService.postChangepassword(this.username).subscribe(data => {
            this.userDetails = data;
            console.log(this.userDetails,"userDetails")
            console.log(this.first_name,"first_name")
          });

    }
    name = localStorage.getItem('first_name')
    last_name = localStorage.getItem('last_name')
    sid = localStorage.getItem('sid')

    onSubmit(): void {
        
            this.changepasswordService.postChangepassword(this.userDetails).subscribe({ 
                next: updateuser => { console.log(updateuser, "updateuser");}
            });
            alert("User details updated successfully")
    }

    // showSuccess() {
    //     this.toastr.success('Hello, world!', 'Success!');
    //   }
}

export interface User{
    username: string,
    old_password: string,
    new_password: string,
    confirm_password: string,
}
