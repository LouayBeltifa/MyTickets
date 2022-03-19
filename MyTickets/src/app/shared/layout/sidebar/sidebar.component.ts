import {Component, OnInit, ViewChild} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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

  opened: boolean = false;
  public ChangeDock: boolean | undefined;
  public showOverlay: boolean = false;


  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 400px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.ChangeDock = true;
        } else {
          this.ChangeDock = false;
        }
      });
  }



  public toggleSidebar() {
      this.opened = !this.opened;
 }

 public toggleSidebarMobile(){
   this.opened = !this.opened;
   this.showOverlay =!this.showOverlay;
 }
}
