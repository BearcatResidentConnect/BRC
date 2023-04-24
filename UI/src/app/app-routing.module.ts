import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard], 
        pathMatch: 'full',
        redirectTo: '/auth/login',
     
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('@modules/profile/profile-routing.module').then(m => m.ProfileRoutingModule),
        
    },
    {
        path: 'changepassword',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('@modules/changepassword/changepassword-routing.module').then(m => m.ChangepasswordRoutingModule),
        
    },
    {
        path: 'myuserlistings',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('modules/myuserlistings/myuserlistings-routing.module').then(m => m.MyuserlistingsRoutingModule),
            
    },
    {
        path: 'myuserlistingsdetail/:id',
        loadChildren: () =>
            import('modules/myuserlistingsdetail/myuserlistingsdetail-routing.module').then(m => m.MyuserlistingsdetailRoutingModule),
            canActivate: [AuthGuard], 
    },
    {
        path: 'updnewproperty',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('modules/updnewproperty/updnewproperty-routing.module').then(m => m.UpdnewpropertyRoutingModule),
    },
    {
        path: 'updnewproperty/:id',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('modules/updnewproperty/updnewproperty-routing.module').then(m => m.UpdnewpropertyRoutingModule),
    },
    {
        path: 'userlistings',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('modules/userlistings/userlistings-routing.module').then(m => m.UserlistingsRoutingModule),
    },
    {
        path: 'rentallistings',
        canActivate: [AuthGuard],
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
            canActivate: [AuthGuard],
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
            canActivate: [AuthGuard],
    },
    {
        path: 'newproperty/:id',
        loadChildren: () =>
            import('modules/newproperty/newproperty-routing.module').then(m => m.NewpropertyRoutingModule),
            canActivate: [AuthGuard],
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
    providers: [AuthGuard], // Add AuthGuard to providers array
    exports: [RouterModule],
})
export class AppRoutingModule {}
