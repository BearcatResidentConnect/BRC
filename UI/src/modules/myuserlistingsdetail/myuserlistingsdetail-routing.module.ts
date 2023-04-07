/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { MyuserlistingsdetailModule } from './myuserlistingsdetail.module';

/* Containers */
import * as myuserlistingsdetailContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: myuserlistingsdetailContainers.MyuserlistingsdetailComponent,
        data: {
            title: 'Profile - BRC',
            breadcrumbs: [
                {
                    text: 'User Listings',
                    link: '/myuserlistings',
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
    imports: [MyuserlistingsdetailModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class MyuserlistingsdetailRoutingModule {}
