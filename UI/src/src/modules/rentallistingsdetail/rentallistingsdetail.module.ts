/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Containers */
import * as rentallistingsdetailContainers from './containers';

/* Services */
import * as rentallistingsdetailServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...rentallistingsdetailServices.services],
    declarations: [...rentallistingsdetailContainers.containers],
    exports: [...rentallistingsdetailContainers.containers],
})
export class RentallistingsdetailModule {}
