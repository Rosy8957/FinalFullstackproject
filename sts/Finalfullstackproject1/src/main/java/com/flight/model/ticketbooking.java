package com.flight.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ticketbooking {
	@Id
	private String name;
	private String email;
	private String phone;
	private String address;
	private String location;
	private int guest;
	private Date arrivals;
	private Date leaving;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getGuest() {
		return guest;
	}
	public void setGuest(int guest) {
		this.guest = guest;
	}
	public Date getArrivals() {
		return arrivals;
	}
	public void setArrivals(Date arrivals) {
		this.arrivals = arrivals;
	}
	public Date getLeaving() {
		return leaving;
	}
	public void setLeaving(Date leaving) {
		this.leaving = leaving;
	}
	public ticketbooking() {
		
	}
	public ticketbooking(String name,String email,String phone,String address,String location,int guest,Date arrivals,Date leaving) {
		super();
		this.name=name;
		this.email=email;
		this.phone=phone;
		this.address=address;
		this.location=location;
		this.guest=guest;
		this.arrivals=arrivals;
		this.leaving=leaving;
	}
}
