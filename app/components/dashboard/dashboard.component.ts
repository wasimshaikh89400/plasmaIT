import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../../service/service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private service :ServiceService) { }
 custData:any
  ngOnInit() {
    this.service.getCustomer().subscribe((data) => {
      console.log(data);
      this.custData = data
    })
  }

  deleteCust(id:any) {
    this.service.deleteCustomer(id)
  }

}
