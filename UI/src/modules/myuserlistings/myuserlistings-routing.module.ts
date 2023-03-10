/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { MyuserlistingsModule } from './myuserlistings.module';

/* Containers */
import * as myuserlistingsContainers from './containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: myuserlistingsContainers.MyuserlistingsComponent,
        data: {
            title: 'My User listings',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'My listings',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [MyuserlistingsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class MyuserlistingsRoutingModule {}
