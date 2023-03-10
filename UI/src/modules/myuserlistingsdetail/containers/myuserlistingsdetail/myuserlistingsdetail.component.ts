import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyuserlistingsdetailService } from '@modules/myuserlistingsdetail/services';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-myuserlistingsdetail',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './myuserlistingsdetail.component.html',
    styleUrls: ['myuserlistingsdetail.component.scss'],
})
export class MyuserlistingsdetailComponent implements OnInit {
    userlisting: any;
    localStorage: any;
    userName: any = localStorage.getItem("user_name");
    posting_id: any = localStorage.getItem("posting_id");

    constructor(private myuserlistingsdetailservice: MyuserlistingsdetailService, private route: ActivatedRoute,private router: Router) {

    }
    ngOnInit(): void {
        this.posting_id = this.route.snapshot.params.id;
        this.myuserlistingsdetailservice.getUserrental(this.userName, this.posting_id).subscribe((data: any) => {
            this.userlisting = data;
            console.log(this.userlisting, "abcd");
        console.log(this.posting_id, "abcd");

        });
    }
    ngAfterViewInit() {

    }
    deleteUserrental(){
        console.log(this.posting_id, "abcd");
        let text = 'Are you sure you want to delete this item?';
        if (confirm(text) == true) {
          alert("Property details deleted successfully");
          this.router.navigate([`myuserlistings`]);
        }
        else{
          this.router.navigate([`myuserlistings`]);
        }
        this.myuserlistingsdetailservice.deleteUserrental(this.posting_id).subscribe(
            () => console.log(`User rental with ID = ${this.posting_id} Deleted`),
            (err) => console.log(err)
          );
          
        }
}

// export interface UserListings {
//     Address: Address;
// }

// export interface Address {
//     address1: string;
//     address2: string;
//     address3: string;
// }
