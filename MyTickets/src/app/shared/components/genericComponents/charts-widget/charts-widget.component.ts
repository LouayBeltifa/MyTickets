import { Component, OnInit } from '@angular/core';
import { left } from '@popperjs/core';
import {  LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-charts-widget',
  templateUrl: './charts-widget.component.html',
  styleUrls: ['./charts-widget.component.scss']

})
export class ChartsWidgetComponent implements OnInit {
  singleData = [
    { name: 'sale', value: 10 },
    { name: 'distribute', value: 11 },
    { name: 'return', value: 11 }
  ];
  
   multiData = [
    {
      "name": "sale",
      "series": [
        {
          "name": "January",
          "value": 30
        },
        {
          "name": "Fabruary",
          "value": 120
        },
        {
          "name": "March",
          "value": 200
        },
        {
          "name": "April",
          "value": 250
        }
      ]
    },
     {
        "name": "distrubute",
      "series": [
        {
          "name": "January",
          "value": 160
        },
        {
          "name": "Fabruary",
          "value": 239
        },
        {
          "name": "March",
          "value": 120
        },  {
          "name": "April",
          "value": 203
        }
      ]},
        {
          "name": "out",
        "series": [
          {
            "name": "January",
            "value": 270
          },
          {
            "name": "Fabruary",
            "value": 250
          },
          {
            "name": "March",
            "value": 135
          },
          {
            "name": "April",
            "value": 150
          }
      ]
    }];
  //pie chart Options
  legendTitle: string="";
  legend:boolean= true;
  doughnut:boolean=true;
  customColors={
    domain:["#5B93FF","#FF8F6B","#FFD66B"]
  };
  legendPosition: LegendPosition= LegendPosition.Below;
  
  //line chart options
  showXAxis = true;
  showYAxis = true;


  
 

  constructor() {}

  ngOnInit(): void {
  }

}
