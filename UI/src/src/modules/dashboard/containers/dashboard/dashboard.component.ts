import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services/dashboard.service';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    dashDetails!: Dash;


    constructor( private dashboardService:DashboardService ) {}
    ngOnInit() {
     
        this.dashboardService.getDash().subscribe(data => {
            this.dashDetails = data;
            console.log(this.dashDetails,"userDetails")
          });

    }

}


export interface Dash{
    num_users: any,
    num_rental_postings: any,
    num_user_postings: any,
    num_visitors: any
}
