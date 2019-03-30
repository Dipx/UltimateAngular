import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserDashboardModule } from './user-dashboard/user-dashboard.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
