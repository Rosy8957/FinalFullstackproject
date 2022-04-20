import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ticketservice:TicketService) { }

  ngOnInit(): void {
  }
  update(updateform:any){
    this.ticketservice.bookservice(updateform.value).subscribe();
}
}
