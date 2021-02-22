import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, SocialComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, CoreModule],
})
export class SharedModule {}
