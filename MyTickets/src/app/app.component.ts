import { Component } from '@angular/core';
import {SidebarServiceService} from "./shared/layout/sidebar/sidebar-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title="MyTickets";
  constructor(private SidebarService : SidebarServiceService) {
  }

  get isSidebarVisible(): boolean {
    return <boolean>this.SidebarService.isSidebarVisible;
  }

}
