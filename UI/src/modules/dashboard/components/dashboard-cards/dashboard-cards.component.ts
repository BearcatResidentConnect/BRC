import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    
    dashDetails!: Dash;

    constructor( private dashboardService:DashboardService ) {}
    
    ngOnInit() {

        this.dashboardService.getDash().subscribe(data => {
            this.dashDetails = data;
            console.log(this.dashDetails,"userDetails")
          });
    }

     name = localStorage.getItem('first_name')
}


export interface Dash{
    num_users: any,
    num_rental_postings: any,
    num_user_postings: any,
    num_visitors: any
}