import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links = [
    {name:"Dashboard", route:"#Dashboard", icon:"icon-home"},
    {name:"History", route:"#History", icon:"icon-history"},
    {name:"Validation", route:"#Validation", icon:"icon-checkmark"},
    {name:"Services", route:"#Services", icon:"icon-dropbox"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
