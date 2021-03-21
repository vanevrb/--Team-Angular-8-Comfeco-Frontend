import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditionComponent } from './components/edition/edition.component';
import { BadgesComponent } from './components/badges/badges.component';
import { GroupsComponent } from './components/groups/groups.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'edit',
        component: EditionComponent,
      },
      {
        path: 'badges',
        component: BadgesComponent,
      },
      {
        path: 'groups',
        component: GroupsComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
