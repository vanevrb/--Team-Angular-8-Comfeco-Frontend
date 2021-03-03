import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { UserMenuModule } from './user-menu/user-menu.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SocialComponent } from '../components/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SocialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, UserMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
