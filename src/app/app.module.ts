import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { UserMenuModule } from './user-menu/user-menu.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/reducers';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    CoreModule,
    UserMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
