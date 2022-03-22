import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links = [
    {name:"Dashboard", route:"#Dashboard", class:"icon-home fs-23",active:"active"},
    {name:"History", route:"#History", class:"icon-history fs-23"},
    {name:"Validation", route:"#Validation", class:"icon-checkmark fs-23"},
    {name:"Services", route:"#Services", class:"icon-dropbox fs-23"},
    {name:"Logout", route:"#logout", class:"icon-exit fs-23"}
  ]
  constructor() { }

  ngOnInit(): void {

  }





}
