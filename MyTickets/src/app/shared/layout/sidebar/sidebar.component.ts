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
  public shouldShow = true;
  @ViewChild("SidebarHeader") SidebarHeader: any;
  @ViewChild("MainSidebar") MainSidebar: any;
  @ViewChild("ClosedSideBar") ClosedSideBar: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.shouldShow = !this.shouldShow;
    if (!this.shouldShow) {
      this.SidebarHeader.nativeElement.classList.add("short");
      this.MainSidebar.nativeElement.classList.add("hide");
      this.ClosedSideBar.nativeElement.classList.add("sidebarClosed");
      this.ClosedSideBar.nativeElement.classList.remove("hide");

    }
    else {
      this.SidebarHeader.nativeElement.classList.remove("short");
      this.MainSidebar.nativeElement.classList.remove("hide");
      this.ClosedSideBar.nativeElement.classList.remove("sidebarClosed");
      this.ClosedSideBar.nativeElement.classList.add("hide");

    }
  }

}
