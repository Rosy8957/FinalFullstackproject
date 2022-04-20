package com.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.model.ticketbooking;
import com.flight.repository.Flightinterface;

@Service
public class Flightservice {
	@Autowired
	private Flightinterface lib;
	
	public ticketbooking Update(ticketbooking book) {
		return  lib.save(book);
	}
	public ticketbooking insert( ticketbooking book1) {
		return lib.save(book1);
	}
	public void delete(ticketbooking book2) {
		lib.delete(book2);
	}
	public List<ticketbooking>fetch(){
		return lib.findAll();
	}
}
