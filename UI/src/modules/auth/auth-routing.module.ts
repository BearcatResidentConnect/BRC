/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { AuthModule } from './auth.module';

/* Containers */
import * as authContainers from './containers';

/* Guards */
import * as authGuards from './guards';
import { AuthGuard } from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate:[AuthGuard],
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        canActivate: [],
        component: authContainers.LoginComponent,
        data: {
            title: 'Pages Login - Bearcat Resident Connect',
        } as SBRouteData,
    },
    {
        path: 'register',
        canActivate: [],
        component: authContainers.RegisterComponent,
        data: {
            title: 'Pages Register - Bearcat Resident Connect',
        } as SBRouteData,
    },
    {
        path: 'forgot-password',
        canActivate: [AuthGuard],
        component: authContainers.ForgotPasswordComponent,
        data: {
            title: 'Pages Forgot Password - Bearcat Resident Connect',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
