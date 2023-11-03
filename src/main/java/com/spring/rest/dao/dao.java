package com.spring.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.rest.entities.course;

public interface dao extends JpaRepository<course, Long> {
	
	public course findById(long id);
}
