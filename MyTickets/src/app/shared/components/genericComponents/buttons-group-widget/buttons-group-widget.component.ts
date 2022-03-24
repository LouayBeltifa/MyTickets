import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-group-widget',
  templateUrl: './buttons-group-widget.component.html',
  styleUrls: ['./buttons-group-widget.component.scss']
})
export class ButtonsGroupWidgetComponent implements OnInit {
 
  buttons=[
    {iconBtn:"addService",nameBtn:"Add Tickets  Stock"},
    {iconBtn:"mail", nameBtn:"send Email"},
    { iconBtn:"file-excel", nameBtn:"Generate Reports"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
