import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private ticketservice:TicketService) { }
  ngOnInit(): void {
   
  }
  insertdata(insertForm:any){
  this.ticketservice.addservice(insertForm.value).subscribe();
}
}