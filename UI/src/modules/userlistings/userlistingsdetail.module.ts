/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Containers */
import * as userlistingsdetailContainers from './containers';

/* Services */
import * as userlistingsdetailServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...userlistingsdetailServices.services],
    declarations: [...userlistingsdetailContainers.containers],
    exports: [...userlistingsdetailContainers.containers],
})
export class UserlistingsdetailModule {}
