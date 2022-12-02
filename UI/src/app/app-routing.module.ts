import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login',
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('@modules/profile/profile-routing.module').then(m => m.ProfileRoutingModule),
    },
    {
        path: 'userlistings',
        loadChildren: () =>
            import('modules/userlistings/userlistings-routing.module').then(m => m.UserlistingsRoutingModule),
    },
    {
        path: 'rentallistings',
        loadChildren: () =>
            import('modules/rentallistings/rentallistings-routing.module').then(m => m.RentallistingsRoutingModule),
    },

    {
        path: 'userlistingsdetail/:id',
        loadChildren: () =>
            import('modules/userlistingsdetail/userlistingsdetail-routing.module').then(m => m.UserlistingsdetailRoutingModule),
    },
    {
        path: 'rentallistingsdetail/:id',
        loadChildren: () =>
            import('@modules/rentallistingsdetail/rentallistings-routing.module').then(m => m.RentallistingsdetailRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'newproperty',
        loadChildren: () =>
            import('modules/newproperty/newproperty-routing.module').then(m => m.NewpropertyRoutingModule),
    },
    {
        path: 'newproperty/:id',
        loadChildren: () =>
            import('modules/newproperty/newproperty-routing.module').then(m => m.NewpropertyRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
