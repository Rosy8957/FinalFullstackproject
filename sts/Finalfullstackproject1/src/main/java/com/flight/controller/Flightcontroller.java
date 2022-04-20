package com.flight.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flight.model.ticketbooking;
import com.flight.service.Flightservice;
;

@RestController
public class Flightcontroller {
	@Autowired
	private Flightservice bookservice;
	
	@PostMapping("/update")
	@CrossOrigin(origins="http://localhost:4200")
	public ticketbooking updatebooks(@RequestBody ticketbooking book) {
		return (ticketbooking) bookservice.Update(book);
	}

	@PostMapping("/insert")
	@CrossOrigin(origins="http://localhost:4200")
	public ticketbooking insertbooks(@RequestBody ticketbooking book1) {
		return (ticketbooking) bookservice.insert(book1);
	}
	
	@PostMapping("/delete")
	@CrossOrigin(origins="http://localhost:4200")
	public void deletebooks(@RequestBody ticketbooking book2) {
	 bookservice.delete(book2);
	}

	@GetMapping("/fetch")
	@CrossOrigin(origins="http://localhost:4200")
	public List<ticketbooking>fetchbooks(){
		return bookservice.fetch();
	}
}
