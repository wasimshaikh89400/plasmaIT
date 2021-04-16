import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ServiceService} from '../../service/service.service'


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor( private service : ServiceService) { }
  customerDataForm: any
   regXname = /^[a-z A-Z]{1,15}$/

 ngOnInit(): void {
     this.customerDataForm = new FormGroup({
        customerName : new FormControl( '' , [Validators.required ,  Validators.pattern(this.regXname)] ),
        contact : new FormControl( '' , [Validators.required] ),
        area: new FormControl('', [Validators.required, Validators.pattern(this.regXname) ]),
        district: new FormControl('', [Validators.required, Validators.pattern(this.regXname)]),
        state : new FormControl( '' , [Validators.required, Validators.pattern(this.regXname)] ),
        paymentt: new FormControl('', [Validators.required])
     })
      
  }
 
 
  submitData() {
    if (this.customerDataForm.invalid) {
      alert("please enter valid data")
      return;
    }
    else {
      const custData: any = {
        firstName: this.customerDataForm.value.customername,
        surname: this.customerDataForm.value.contact,
        dateOfBirth: this.customerDataForm.value.area,
        gender: this.customerDataForm.value.district,
        email: this.customerDataForm.value.state,
        city: this.customerDataForm.value.payment
      
      }
      
      
      this.service.addCustomer(custData)
    
    }
 

  }
}
