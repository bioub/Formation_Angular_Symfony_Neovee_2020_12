import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { GroupsModule } from './groups/groups.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ContactsModule,
    GroupsModule,
    SharedModule,
    UsersModule,
    AppRoutingModule, // en dernier si la route ** est utilisé ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
