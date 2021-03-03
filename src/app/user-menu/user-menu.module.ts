import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  declarations: [UserMenuComponent],
  exports: [UserMenuComponent],
  imports: [CommonModule, CoreModule],
})
export class UserMenuModule {}
