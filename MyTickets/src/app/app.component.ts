import {Component, OnInit} from '@angular/core';
import {BreakpointState} from "@angular/cdk/layout";
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  opened: boolean = false;
  public showOverlay: boolean = false;
  public ChangeDock: boolean | undefined;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 500px)'])
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

  public toggleSidebarMobile() {
    this.opened = !this.opened;
    this.showOverlay =!this.showOverlay;
  }


}
