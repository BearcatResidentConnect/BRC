/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { RentallistingsdetailModule } from './rentallistingsdetail.module';

/* Containers */
import * as rentallistingsdetailContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: rentallistingsdetailContainers.RentallistingsdetailComponent,
        data: {
            title: 'Rental listings detail',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Rentallistingsdetail',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [RentallistingsdetailModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class RentallistingsdetailRoutingModule {}
