import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditionComponent } from './components/edition/edition.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { GroupsComponent } from './components/groups/groups.component';
import { EventsComponent } from './components/events/events.component';
import { BadgesComponent } from './components/badges/badges.component';


@NgModule({
  declarations: [LayoutComponent, ProfileComponent, EditionComponent, SubmenuComponent, GroupsComponent, EventsComponent, BadgesComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
