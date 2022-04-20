import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private ticketservice:TicketService) { }

  ngOnInit(): void {
  }
  deletedata(deleteform:any){
    this.ticketservice.deleteservice(deleteform.value).subscribe();
}
}
