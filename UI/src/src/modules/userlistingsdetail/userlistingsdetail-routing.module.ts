/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { UserlistingsdetailModule } from './userlistingsdetail.module';

/* Containers */
import * as userlistingsdetailContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: userlistingsdetailContainers.UserlistingsdetailComponent,
        data: {
            title: 'Profile - BRC',
            breadcrumbs: [
                {
                    text: 'User Listings',
                    link: '/userlistings',
                },
                {
                    text: 'User listing details',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [UserlistingsdetailModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UserlistingsdetailRoutingModule {}
