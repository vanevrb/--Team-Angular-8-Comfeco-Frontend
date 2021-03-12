import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { UserMenuModule } from '../user-menu/user-menu.module';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SocialComponent,
  ],
  exports: [HeaderComponent, NavbarComponent, FooterComponent, SocialComponent],
  imports: [CommonModule, CoreModule, UserMenuModule],
})
export class SharedModule {}
