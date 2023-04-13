import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { updnewpropertyService } from '../../services/updnewproperty.service';

@Component({
    selector: 'sb-updnewproperty',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './updnewproperty.component.html',
    styleUrls: ['updnewproperty.component.scss'],
})
export class UpdnewpropertyComponent implements OnInit {

  restrictNegativeValues(event: KeyboardEvent) {
    if (event.key === '-' || event.key === '+') {
      event.preventDefault();
    }
  }

  rentallisting: any;

    form = {
        "user_name": "string",
        "accomedation_type": "string",
        "name": "string",
        "available_date": "any",
        "num_days": "any",
        "accomedated_date": "any",
        "num_people": "any",
        "num_people_living":"any",
        "num_bedrooms": "any",
        "num_bathrooms": "any",
        "approx_rent": "any",
        "is_pet_friendly": "any",
        "parking_available": "any",
        "address": "string",
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "city": "string",
          "state": "string",
          "country": "string",
          "zipcode": "any",
          "description": "any"
      };
    localStorage: any;
    user_name:any = "";
    posting_id:any = localStorage.getItem("posting_id")
    accomedation_type: any;
    available_date:any;
    accomedated_date:any;
    propDesc:any;
    num_people:any;
    numpeopleneed:any;
    numRooms:any;
    numDays:any;
    numBaths:any;
    accomStart: any;
    appRent:any;
    parking_available:any;
    petFriendly:any;
    address:any;
    city:any;
    state:any;
    country:any;
    zipcode:any;
    name: any;
    description: any;
    constructor( private updnewpropertyService : updnewpropertyService, private datePipe: DatePipe, private route: ActivatedRoute,private router: Router) {}
    ngOnInit() {
      this.posting_id = this.route.snapshot.params.id;
      this.updnewpropertyService.getUserrental(this.posting_id).subscribe((data: any) => {
        this.rentallisting = data;
        console.log(this.rentallisting, "user listing detils");
    });
    }

    getCurrentDate(): string {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    
    onSubmit(): void {
        this.form = {
            "user_name": this.user_name,
            "name": this.name,
            "accomedation_type": this.accomedation_type,
            "available_date": this.available_date,
            "num_days": this.numDays,
            "accomedated_date": this.accomedated_date,
            "num_people": this.num_people,
            "num_people_living": this.numpeopleneed,
            "num_bedrooms": this.numRooms,
            "num_bathrooms": this.numBaths,
            "approx_rent": this.appRent,
            "is_pet_friendly": this.petFriendly,
            "parking_available": this.parking_available,
             "address": this.address,
              "address1": "",
              "address2": "",
              "address3": "",
              "city": this.city,
              "state": this.state,
              "country": this.country,
              "zipcode": this.zipcode,
            "description":this.description,
          };
        
            this.updnewpropertyService.updatePropertydetails(this.rentallisting).subscribe({ 
                next: postingproperty => { console.log(postingproperty, "updatingproperty");}
            });
            this.router.navigate([`myuserlistings`]);
            alert("Property details updated successfully")
    }
}


export interface User{
  accomedated_date: any,
  accomedation_type: any,
  address1: string,
  approx_rent: any,
  available_date: any,
  city: string,
  country: string,
  description: string,
  email: string,
  is_pet_friendly: boolean,
  name: string,
  num_bathrooms: string,
  num_bedrooms: string,
  num_days: string,
  num_people: string,
  num_people_living: string,
  parking_available: boolean,
  posting_id: any,
  state: string,
  user_name: string,
  zipcode: any,

}
