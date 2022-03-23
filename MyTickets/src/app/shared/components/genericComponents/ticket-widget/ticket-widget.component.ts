import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-ticket-widget',
  templateUrl: './ticket-widget.component.html',
  styleUrls: ['./ticket-widget.component.scss'],
 
})
export class TicketWidgetComponent implements OnInit {
  customOptions: OwlOptions = {
    navText:["",""],
    margin:12,
    
    center: true  ,
    items:1,
    loop:false,
    responsive:{
        600:{
            items:4
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
