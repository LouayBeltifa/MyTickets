import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  notifications = [{id:1,desc:"Tickets Avalible"}, {id:2, desc:"Your Paiment is valide"}, {id:3, desc:"Tickets Avalible"}];
  constructor() { }

  ngOnInit(): void {
  }

}
