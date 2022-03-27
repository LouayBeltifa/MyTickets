import { Component, OnInit } from '@angular/core';
import { left } from '@popperjs/core';
import { LegendOptions, LegendPosition } from '@swimlane/ngx-charts';

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
          "name": "Fabrury",
          "value": 120
        },
        {
          "name": "march",
          "value": 200
        },
        {
          "name": "april",
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
          "name": "Fabrury",
          "value": 239
        },
        {
          "name": "march",
          "value": 120
        },  {
          "name": "april",
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
            "name": "Fabrury",
            "value": 250
          },
          {
            "name": "march",
            "value": 135
          },
          {
            "name": "april",
            "value": 100
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
