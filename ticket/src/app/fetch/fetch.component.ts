import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
ticketdetails: any;
  constructor(private ticketservice:TicketService) { this.fetch();}

  ngOnInit(): void {
  }
  fetch(){
    this.ticketservice.fetchservice().subscribe((resp: any)=>{this.ticketdetails=resp;}
    
    );
}
  }
