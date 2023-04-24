/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ChangepasswordModule } from './changepassword.module';

/* Containers */
import * as changepasswordContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: changepasswordContainers.ChangepasswordComponent,
        data: {
            title: 'Changepassword - BRC',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Changepassword',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ChangepasswordModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ChangepasswordRoutingModule {}
