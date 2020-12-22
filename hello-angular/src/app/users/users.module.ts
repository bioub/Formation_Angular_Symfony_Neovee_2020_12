import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, UserCardComponent, UsersListComponent],
  imports: [SharedModule, UsersRoutingModule],
})
export class UsersModule {}
