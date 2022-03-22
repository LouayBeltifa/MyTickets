import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';

import { SidebarModule } from 'ng-sidebar';
import { LayoutModule } from '@angular/cdk/layout';
import { UserHeaderComponent } from './shared/layout/user-header/user-header.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NotificationComponent} from "./shared/layout/user-header/notification/notification.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserHeaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    LayoutModule,
    BsDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
