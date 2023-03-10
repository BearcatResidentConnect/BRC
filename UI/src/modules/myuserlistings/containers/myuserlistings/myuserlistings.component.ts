import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MyuserlistingsService } from '@modules/myuserlistings/services';
import  { Myuserlistings } from '.././../models/myuserlistings.model';

@Component({
    selector: 'sb-myuserlistings',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './myuserlistings.component.html',
    styleUrls: ['myuserlistings.component.scss'],
})
export class MyuserlistingsComponent implements OnInit {

    myuserlistings : any;
    localStorage: any;
    user_name:any = localStorage.getItem("user_name");
    posting_id:any;
    Address:any;
    postingId: any;

    constructor( private myuserlistingsservice: MyuserlistingsService, private route: ActivatedRoute, private router: Router ) {}
    ngOnInit():void {

        this.postingId = this.route.snapshot.params.id;

        this.myuserlistingsservice.getUserrental(this.user_name).subscribe({
            next: data => {
            this.myuserlistings = data;  
            console.log(this.myuserlistings[0],"fskdjhfk")
             console.log(this.myuserlistings[0].posting_id);
             console.log(this.myuserlistings[0].posting_id);
             console.log(this.myuserlistings[0].address1,"address")
            
            localStorage.setItem('posting_id',this.myuserlistings[1].posting_id); 
            this.posting_id = localStorage.getItem('posting_id')
            console.log(this.posting_id, "posting_id");
            }
          });

          this.myuserlistingsservice.deleteUserrental(this.posting_id).subscribe({
            next: data => {
                this.myuserlistings = data;  
            }
        });
        
    }
    navigateWithId(id: any){
        this.router.navigate(['updnewproperty/'+id])

    }

    // deleteUserrental(){
    //     localStorage.setItem('posting_id',this.myuserlistings[1].posting_id); 
    //     this.posting_id = localStorage.getItem('posting_id')
    //     this.myuserlistingsservice.deleteUserrental(this.posting_id).subscribe(
    //         () => console.log(`User rental with ID = ${this.posting_id} Deleted`),
    //         (err) => console.log(err)
    //       );
    //     }
}
