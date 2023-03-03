import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentallistingsdetailService } from '@modules/rentallistingsdetail/services';

@Component({
    selector: 'sb-rentallistingsdetail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './rentallistingsdetail.component.html',
    styleUrls: ['rentallistingsdetail.component.scss'],
})
export class RentallistingsdetailComponent implements OnInit {
    rentallisting: any;
    localStorage: any;
    userName: any = localStorage.getItem("user_name");
    name :any = localStorage.getItem("first_name");
    email :any = localStorage.getItem("email");
    rentalid :any;

    constructor(private rentallistingsdetailservice: RentallistingsdetailService,  private route: ActivatedRoute) {}
    ngOnInit() {
        this.rentalid = this.route.snapshot.params.id;
        this.rentallistingsdetailservice.getUserrental(this.rentalid).subscribe((data: any) => {
            this.rentallisting = data;
            console.log(this.rentallisting, "rentallisting detils");
        });

            console.log(this.rentalid, "rental id sfsdf");

    }
    
    submitForm(){
        let mockData = {
            subject: "Looking for lease",
            rental_name: this.name,
            rental_email: this.rentallisting.email,
            user_email: this.email,
            user_name: this.userName,
            
        }
        this.rentallistingsdetailservice.setFormData(mockData).subscribe((data: any) => {
            this.rentallisting = data;
            console.log(data);
        });
    }
}
