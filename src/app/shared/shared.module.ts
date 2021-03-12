import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { UserMenuModule } from '../user-menu/user-menu.module';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SocialComponent,
    LoaderComponent,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SocialComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, CoreModule, UserMenuModule, RouterModule],
})
export class SharedModule {}
