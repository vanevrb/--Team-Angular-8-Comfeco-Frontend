import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectRoutesGuard } from './core/guards/protect-routes.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
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
    // canActivate: [ProtectRoutesGuard],
  },
  {
    path: 'communities',
    loadChildren: () =>
      import('./communities/communities.module').then(
        (m) => m.CommunitiesModule
      ),
    canLoad: [ProtectRoutesGuard],
    // canActivate: [ProtectRoutesGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    canLoad: [ProtectRoutesGuard],
    // canActivate: [ProtectRoutesGuard],
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
