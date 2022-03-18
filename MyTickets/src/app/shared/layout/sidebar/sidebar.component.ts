import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links = [
    {name:"Dashboard", route:"#Dashboard", class:"icon-home fs-18",active:"active"},
    {name:"History", route:"#History", class:"icon-history fs-18"},
    {name:"Validation", route:"#Validation", class:"icon-checkmark fs-18"},
    {name:"Services", route:"#Services", class:"icon-dropbox fs-18"},
    {name:"Logout", route:"#logout", class:"icon-exit fs-18"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
