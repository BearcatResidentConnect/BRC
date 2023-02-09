/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { UserlistingsModule } from './userlistings.module';

/* Containers */
import * as userlistingsContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: userlistingsContainers.UserlistingsComponent,
        data: {
            title: 'User listings',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'User listings',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [UserlistingsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UserlistingsRoutingModule {}
