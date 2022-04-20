import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  fetchbookdata() {
    throw new Error('Method not implemented.');
  }

  constructor( private  http:HttpClient) { }
  link='http://localhost:9091';

  public bookservice(bookdata:any){
    return this.http.post(this.link+'/update',bookdata);
  }
  public addservice(addbookdata:any){
    return this.http.post(this.link+'/insert',addbookdata);
  }
  public deleteservice(deletebookdata:any){
    return this.http.post(this.link+'/delete',deletebookdata);
  }
  public fetchservice(){
    return this.http.get(this.link+'/fetch');
  }
}
