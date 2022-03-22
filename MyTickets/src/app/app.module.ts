import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketWidgetComponent } from './shared/components/genericComponents/ticket-widget/ticket-widget.component';
import { WeatherWidgetComponent } from './shared/components/genericComponents/weather-widget/weather-widget.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    TicketWidgetComponent,
    WeatherWidgetComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
