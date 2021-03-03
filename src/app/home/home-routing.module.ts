import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CommunitiesComponent } from './components/communities/communities.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'communities', component: CommunitiesComponent },
  {
    path: '**',
    redirectTo: 'communities',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
