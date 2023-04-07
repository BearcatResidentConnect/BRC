/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Containers */
import * as myuserlistingsdetailContainers from './containers';

/* Services */
import * as myuserlistingsdetailServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...myuserlistingsdetailServices.services],
    declarations: [...myuserlistingsdetailContainers.containers],
    exports: [...myuserlistingsdetailContainers.containers],
})
export class MyuserlistingsdetailModule {}
