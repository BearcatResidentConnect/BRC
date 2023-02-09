/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { NewpropertyModule } from './newproperty.module';

/* Containers */
import * as newpropertyContainers from './containers';

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: newpropertyContainers.NewpropertyComponent,
        data: {
            title: 'New Property',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Add new property',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [NewpropertyModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class NewpropertyRoutingModule {}
