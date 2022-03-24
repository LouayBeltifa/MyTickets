import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-ticket-widget',
  templateUrl: './ticket-widget.component.html',
  styleUrls: ['./ticket-widget.component.scss'],
 
})
export class TicketWidgetComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  url="../assets/Images/";
  ticketContent=[
   {id:1,icon:`${this.url}bleuTicket.svg`,sold:"250",statut:"tickets en stock"},
    {id:2,icon:`${this.url}yellowTicket.svg`,sold:"100",statut:"Ticket solde out"},
    {id:3,icon:`${this.url}greenTicket.svg`,sold:"100 DT",statut:"Total earnings"}
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
