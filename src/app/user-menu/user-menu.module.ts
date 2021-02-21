import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [UserMenuComponent],
  exports: [UserMenuComponent],
  imports: [CommonModule],
})
export class UserMenuModule {}
