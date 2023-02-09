/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { RentallistingsModule } from './rentallistings.module';

/* Containers */
import * as rentallistingsContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: rentallistingsContainers.RentallistingsComponent,
        data: {
            title: 'Rental listings - BRC',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Rental listings',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [RentallistingsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class RentallistingsRoutingModule {}
