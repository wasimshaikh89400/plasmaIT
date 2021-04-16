package com.spring.rest.springrest.entiities;

import javax.persistence.Entity
import javax.persistence.Id

@Entity
public class Customer {
	
	@Id
	private long Id;
	private String custName;
	private int contact;
	private String area;		
	private String dist;
	private String state;
	private String paymentMode;
	public Customer(long id, String custName, int contact, String area, String dist, String state, String paymentMode) {
		super();
		Id = id;
		this.custName = custName;
		this.contact = contact;
		this.area = area;
		this.dist = dist;
		this.state = state;
		this.paymentMode = paymentMode;
	}
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public int getContact() {
		return contact;
	}
	public void setContact(int contact) {
		this.contact = contact;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getDist() {
		return dist;
	}
	public void setDist(String dist) {
		this.dist = dist;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	@Override
	public String toString() {
		return "Customer [Id=" + Id + ", custName=" + custName + ", contact=" + contact + ", area=" + area + ", dist="
				+ dist + ", state=" + state + ", paymentMode=" + paymentMode + "]";
	}
	
	@Override
	
	public List<Customer> getCustomer(){
		
		return customerDao.findAll();
	}
	
	@Override
	public Customer addCustomer (Customer customer) {
		custmerDao.save(Customer);
		return Customer;
	}
	
	@Override
	public void deleteCustomer(long perseInt) {
		list = this.list.stream().filter (e -> e.getId()!=parseLong).collect(Collectors.toList());
		Customer entity =  customerDao.getOne(parseLong)
		customer.delete(entity);		
	}
	}
