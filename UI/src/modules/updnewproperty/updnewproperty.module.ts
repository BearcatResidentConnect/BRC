/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Containers */
import * as updnewpropertyContainers from './containers';

/* Services */
import * as updnewpropertyServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [DecimalPipe, ...updnewpropertyServices.services],
    declarations: [...updnewpropertyContainers.containers],
    exports: [...updnewpropertyContainers.containers],
})
export class UpdnewpropertyModule {}
