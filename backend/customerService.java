package com.springrest.springrest.services
import java.util.List

import com.spring.rest.springrest.entiities.Customer;

public interface customerService {
	
	public List<Customer> getCustomer();
	
	public Customer addCustomer(Customer customer);
	
	public void deleteCustome(long parseLong);

}
