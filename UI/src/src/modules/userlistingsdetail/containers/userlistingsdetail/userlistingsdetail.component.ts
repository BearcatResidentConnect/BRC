import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserlistingsdetailService } from '@modules/userlistingsdetail/services';

@Component({
    selector: 'sb-userlistingsdetail',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './userlistingsdetail.component.html',
    styleUrls: ['userlistingsdetail.component.scss'],
})
export class UserlistingsdetailComponent implements OnInit {
    userlisting: any;
    localStorage: any;
    userName: any = localStorage.getItem("user_name");
    postingId: any;

    constructor(private userlistingsdetailservice: UserlistingsdetailService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.postingId = this.route.snapshot.params.id;
        this.userlistingsdetailservice.getUserrental(this.userName, this.postingId).subscribe((data: any) => {
            this.userlisting = data;
            console.log(this.userlisting, "abcd");
        });
    }
    ngAfterViewInit() {

    }
    submitForm(){
        let mockData = {
            subject: "subject",
            rental_name: this.userlisting.UserPosting.name,
            rental_email: "newuser@gmail.com",
            user_email: "k.narendar111@gmail.com",
            user_name: this.userName,
            body: ""
        }
        this.userlistingsdetailservice.setFormData(mockData).subscribe((data: any) => {
            this.userlisting = data;
            console.log(data);
        });
    }
}

export interface UserListings {
    Address: Address;
}

export interface Address {
    address1: string;
    address2: string;
    address3: string;
}
