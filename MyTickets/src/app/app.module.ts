import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketWidgetComponent } from './shared/components/genericComponents/ticket-widget/ticket-widget.component';
import { WeatherWidgetComponent } from './shared/components/genericComponents/weather-widget/weather-widget.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';

import { LayoutModule } from '@angular/cdk/layout';
import { SidebarModule } from 'ng-sidebar';
import { ChartWidgetComponent } from './shared/components/genericComponents/chart-widget/chart-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketWidgetComponent,
    WeatherWidgetComponent,
    SidebarComponent,
    ChartWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    LayoutModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
