import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserlistingsService } from '@modules/userlistings/services';
import  { Userlistings } from '.././../models/userlistings.model';

@Component({
    selector: 'sb-userlistings',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './userlistings.component.html',
    styleUrls: ['userlistings.component.scss'],
})
export class UserlistingsComponent implements OnInit {

    userlistings : any;
    localStorage: any;
    user_name:any = localStorage.getItem("user_name");
    posting_id:any;
    Address:any;
    postingId: any;

    constructor( private userlistingsservice: UserlistingsService, private route: ActivatedRoute, private router: Router ) {}
    ngOnInit():void {

        this.postingId = this.route.snapshot.params.id;

        this.userlistingsservice.getUserrental().subscribe({
            next: data => {
            this.userlistings = data;  
            console.log(this.userlistings,"fskdjhfk")
            // console.log(this.userlistings[0].UserPosting.posting_id);
             console.log(this.userlistings.address1,"address")
            
            localStorage.setItem('posting_id',this.userlistings[1].posting_id); 
            this.posting_id = localStorage.getItem('posting_id')
            console.log(this.posting_id, "posting_id");
            }
          });
    }
    navigateWithId(id: any){
        this.router.navigate(['updnewproperty/'+id])
    }
}
