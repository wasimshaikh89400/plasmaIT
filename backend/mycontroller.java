package com.spring.rest.springrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.rest.springrest.entiities.Customer;
import com.spring.rest.springrest.entities.Course;
import com.sun.tools.javac.util.List;

@RestController
public class myController {
	
	@Autowired
	private CustomerService customerService;
	
	//get the customer details
	@GetMapping("/customer")
	public List<Customer> getCustomer() {
		return this.customerService.getCustomer();
	}
	
	
	//post customer details
	@PostMapping ("/customer")
	public customer AddCustomer(Customer customer) {
		return this.customerService.addCustomer(Customer);
	}
	
	
	//delete customer details
	@DeleteMapping  ("/cunstomer/{custId}"){
		public deleteCustomer(@pathVariable  String custId) {
			try {
				this.customerService.deleteCustomer(Long.parselong(custId));
				return new ResponceEntity<> (httpStatus , OK);
			}
			catch (exception e) {
				return new ResponceEntity<> (HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	}
}
