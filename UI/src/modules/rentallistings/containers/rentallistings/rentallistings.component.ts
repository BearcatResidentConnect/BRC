import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentallistingsService } from '@modules/rentallistings/services';

@Component({
    selector: 'sb-rentallistings',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './rentallistings.component.html',
    styleUrls: ['rentallistings.component.scss'],
})
export class RentallistingsComponent implements OnInit {
    
    rentallistings : any;
    localStorage: any;
    user_name:any = localStorage.getItem("user_name");
    rentalid: any;
    rental_id:any;
    constructor( private rentallistingsservice: RentallistingsService, private route: ActivatedRoute, private router: Router  ) {}
    
    ngOnInit():void {

        this.rentalid = this.route.snapshot.params.id;
        
        this.rentallistingsservice.getRentallistings().subscribe({
            next: data => {
            this.rentallistings = data;  
            console.log(this.rental_id,"xxxxx");
            // localStorage.setItem('rental_id',this.rentallistings[1].rental_id); 
            this.rental_id = localStorage.getItem('rental_id')
            console.log(this.rental_id, "rental id sfsdf");
            }
          });
    
    }

    navigateWithId(id: any){
        this.router.navigate(['newproperty/'+id])
    }

}
