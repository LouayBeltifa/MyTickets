import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {

  isSidebarVisible: boolean  = false;

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor()  {
    this.sidebarVisibilityChange.subscribe((value: boolean ) => {
      this.isSidebarVisible = value
    });
  }

  toggleSidebarVisibility() {
    this.sidebarVisibilityChange.next(!this.isSidebarVisible);
  }
}
