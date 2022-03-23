import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketWidgetComponent } from './shared/components/genericComponents/ticket-widget/ticket-widget.component';
import { WeatherWidgetComponent } from './shared/components/genericComponents/weather-widget/weather-widget.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { UserHeaderComponent } from './shared/layout/user-header/user-header.component';
import {CarouselModule} from "ngx-owl-carousel-o";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NotificationComponent} from "./shared/layout/user-header/notification/notification.component";
import { ChartWidgetComponent } from './shared/components/genericComponents/chart-widget/chart-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserHeaderComponent,
    NotificationComponent,
    TicketWidgetComponent,
    WeatherWidgetComponent,
    SidebarComponent,
    ChartWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
