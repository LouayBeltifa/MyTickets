import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links = [
    {name:"dashboard", route:"#Dashboard", class:"icon-home fs-23"},
    {name:"history", route:"/history", class:"icon-history fs-23"},
    {name:"Validate", route:"/validate", class:"icon-checkmark fs-23"},
    {name:"services", route:"#Services", class:"icon-dropbox fs-23"},
    {name:"logout", route:"#logout", class:"icon-exit fs-23"}
  ]
  event: string = 'sidebar';
  opened:boolean = true;

  constructor() { }

  ngOnInit(): void {

  }


  toggleMenu(){
    if (!this.opened){
      this.event = 'sidebar sidebarDesktopCloser';
      this.opened=!this.opened;
    }
    else {
      this.event = 'sidebar';
      this.opened = !this.opened;
    }
  }

  toggleMenuMobile(){
    if (!this.opened){
      this.event = 'sidebar sidebarMobileCloser';
      this.opened=!this.opened;
    }
    else {
      this.event = 'sidebar sidebarMobileOpened';
      this.opened = !this.opened;
    }
  }


}
