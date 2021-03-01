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
import { UserInfoCardComponent } from './components/user-info-card/user-info-card.component';
import { UserBadgesCardComponent } from './components/user-badges-card/user-badges-card.component';
import { UserActivitiesCardComponent } from './components/user-activities-card/user-activities-card.component';
import { UserEventsCardComponent } from './components/user-events-card/user-events-card.component';


@NgModule({
  declarations: [LayoutComponent, ProfileComponent, EditionComponent, SubmenuComponent, GroupsComponent, EventsComponent, BadgesComponent, UserInfoCardComponent, UserBadgesCardComponent, UserActivitiesCardComponent, UserEventsCardComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
