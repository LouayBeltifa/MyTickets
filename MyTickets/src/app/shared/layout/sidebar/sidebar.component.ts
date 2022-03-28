import {Component, OnInit} from '@angular/core';
import {SidebarServiceService} from "./sidebar-service.service";

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
    {name:"services", route:"/services", class:"icon-dropbox fs-23"},
    {name:"logout", route:"#logout", class:"icon-exit fs-23"}
  ]
  event: string = 'sidebar';
  opened:boolean | undefined;

  constructor(private SidebarService: SidebarServiceService) {
    this.opened = SidebarService.isSidebarVisible;
    this.SidebarService.sidebarVisibilityChange.subscribe(value => {
      this.opened = value;
    });
  }

  ngOnInit(): void {

  }


  toggleMenu(){
    if (this.opened){
      this.event = 'sidebar ';
      this.SidebarService.toggleSidebarVisibility();
    }
    else {
      this.event = 'sidebar sidebarDesktopCloser';
      this.SidebarService.toggleSidebarVisibility();
    }
  }

  toggleMenuMobile(){
    if (this.opened){
      this.event = 'sidebar sidebarMobileCloser';
      this.SidebarService.toggleSidebarVisibility();
    }
    else {
      this.event = 'sidebar sidebarMobileOpened';
      this.SidebarService.toggleSidebarVisibility();
    }
  }


}
