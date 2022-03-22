import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-widget',
  templateUrl: './ticket-widget.component.html',
  styleUrls: ['./ticket-widget.component.scss']
})
export class TicketWidgetComponent implements OnInit {
  url="../assets/Images/";
  ticketContent=[
   {icon:`${this.url}bleuTicket.svg`,sold:"250",statut:"tickets en stock"},
    {icon:`${this.url}yellowTicket.svg`,sold:"100",statut:"Ticket solde out"},
    {icon:`${this.url}greenTicket.svg`,sold:"100 DT",statut:"Total earnings"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
