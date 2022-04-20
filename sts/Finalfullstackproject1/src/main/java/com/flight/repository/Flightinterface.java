package com.flight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flight.model.ticketbooking;


@Repository
public interface Flightinterface extends JpaRepository<ticketbooking,String> {

}
