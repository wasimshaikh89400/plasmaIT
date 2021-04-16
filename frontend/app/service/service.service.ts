import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http : HttpClient) { }


  addCustomer(custData: any) {
    this.http.post('localhost:8080/customer', custData).subscribe((data) => {
      console.log(data);
      
    })
  }

  getCustomer() {
    this.http.get('localhost:8080/customer').subscribe((data) => {
      console.log(data);
      
    })
  }

  deleteCustomer(custid:any) {
    this.http.delete('localhost:8080/customer'+custid)
  }

}
