import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { newpropertyService } from '../../services/newproperty.service';

@Component({
    selector: 'sb-newproperty',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './newproperty.component.html',
    styleUrls: ['newproperty.component.scss'],
})
export class NewpropertyComponent implements OnInit {

  rentalid :any;
  rentallisting: any;

    form = {
        "user_name": "string",
        "accomedation_type": "Temporary",
        "name": "string",
        "available_date": "2022-11-23",
        "num_days": 7,
        "accomedated_date": "2022-11-24",
        "num_people": 1,
        "num_people_living": 2,
        "num_bedrooms": 1,
        "num_bathrooms": 1,
        "approx_rent": 200,
        "is_pet_friendly": false,
        "parking_available": false,
        "address": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "city": "string",
          "state": "string",
          "country": "string",
          "zipcode": 0
        },
        "description": "any"
      };
    localStorage: any;
    user_name:any = localStorage.getItem("user_name");
    accomdationtype: any;
    propDesc:any;
    numpeople:any;
    numpeopleneed:any;
    numRooms:any;
    numDays:any;
    numBaths:any;
    accomStart: any;
    appRent:any;
    parkingAvail:any;
    petFriendly:any;
    address:any;
    city:any;
    state:any;
    country:any;
    zipcode:any;
    name: any;
    description: any;
    constructor( private newpropertyService : newpropertyService, private datePipe: DatePipe, private route: ActivatedRoute) {}
    ngOnInit() {
      this.rentalid = this.route.snapshot.params.id;
      this.newpropertyService.getUserrental(this.rentalid,this.user_name).subscribe((data: any) => {
        this.rentallisting = data;
        console.log(this.rentallisting, "user listing detils");
    });
    }
    onSubmit(): void {
        this.form = {
            "user_name": this.user_name,
            "name": this.name,
            "accomedation_type": this.accomdationtype,
            "available_date": this.accomStart,
            "num_days": this.numDays,
            "accomedated_date": this.accomStart,
            "num_people": this.numpeople,
            "num_people_living": this.numpeopleneed,
            "num_bedrooms": this.numRooms,
            "num_bathrooms": this.numBaths,
            "approx_rent": this.appRent,
            "is_pet_friendly": this.petFriendly,
            "parking_available": this.parkingAvail,
            "address": {
              "address1": this.address,
              "address2": "",
              "address3": "",
              "city": this.city,
              "state": this.state,
              "country": this.country,
              "zipcode": this.zipcode,
              
            },
            "description":this.description,
          };
        
            this.newpropertyService.postPropertydetails(this.form).subscribe({ 
                next: postingproperty => { console.log(postingproperty, "postingproperty");}
            });

            alert("New property details added successfully")
    }
}
