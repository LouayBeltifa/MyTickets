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

import {NotificationComponent} from "./shared/layout/user-header/notification/notification.component";
import { ButtonsGroupWidgetComponent } from './shared/components/genericComponents/buttons-group-widget/buttons-group-widget.component';

import { ValidateComponent } from './shared/components/validate/validate.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HistoryComponent } from './shared/components/history/history.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDateRangeModule } from 'ngx-daterange';
import {  ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './shared/components/modal/modal.component';
import { UserDashboardComponent } from './shared/dashboard/user-dashboard/user-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserHeaderComponent,
    NotificationComponent,
    TicketWidgetComponent,
    WeatherWidgetComponent,
    SidebarComponent,
    ButtonsGroupWidgetComponent,
    ValidateComponent,
    HistoryComponent,
    ModalComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    CarouselModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbModule,
    NgxDateRangeModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
