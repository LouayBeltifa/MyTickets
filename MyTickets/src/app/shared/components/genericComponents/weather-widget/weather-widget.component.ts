import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  weatherData:any;

  constructor() { }

  ngOnInit(): void {
    this.weatherData = {
      sys : {},
      main : {},
     
      isDay: true
    };
    this.getWeatherData();
    console.log(this.weatherData);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tunis&appid=65e374f680c74d975c4c612688b9387c')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData( data: any){
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();

    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());

    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.country = (this.weatherData.sys.country);


    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
   // this.weatherData.description= (this.weatherData.weather.description);
  }

}
