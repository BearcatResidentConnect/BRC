/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { UpdnewpropertyModule } from './updnewproperty.module';

/* Containers */
import * as updnewpropertyContainers from './containers';

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: updnewpropertyContainers.UpdnewpropertyComponent,
        data: {
            title: 'New Property',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Update property',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [UpdnewpropertyModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UpdnewpropertyRoutingModule {}
