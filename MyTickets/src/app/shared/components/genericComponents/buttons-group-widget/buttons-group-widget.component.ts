import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons-group-widget',
  templateUrl: './buttons-group-widget.component.html',
  styleUrls: ['./buttons-group-widget.component.scss']
})
export class ButtonsGroupWidgetComponent implements OnInit {
 
  buttons=[
    {iconBtn:"addService",nameBtn:"Add Tickets Stock"},
    {iconBtn:"mail", nameBtn:"send Email"},
    { iconBtn:"file-excel", nameBtn:"Generate Reports"}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changeView(btn:string){
    if (btn=="Add Tickets Stock"){
      this.router.navigate(['/validate']);
    }
    if (btn=="send Email"){
      this.router.navigate(['/history']);
    }


  }

}
