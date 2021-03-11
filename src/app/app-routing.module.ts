import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectRoutesGuard } from './core/guards/protect-routes.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { UserInfoResolver } from './core/guards/user-info.resolver';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'conditions',
    loadChildren: () =>
      import('./conditions/conditions.module').then((m) => m.ConditionsModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [ProtectRoutesGuard],
    // resolve: [UserInfoResolver],
  },
  {
    path: 'communities',
    loadChildren: () =>
      import('./communities/communities.module').then(
        (m) => m.CommunitiesModule
      ),
    canLoad: [ProtectRoutesGuard],
    // resolve: [UserInfoResolver],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    canLoad: [ProtectRoutesGuard],
    // resolve: [UserInfoResolver],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
