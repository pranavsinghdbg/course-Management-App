package com.spring.rest.controller;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.rest.entities.course;
import com.spring.rest.service.services;

import jakarta.websocket.server.PathParam;

@CrossOrigin
@RestController
public class controller {

	@Autowired
	private services service;

	//getting all course
	@GetMapping("/courses") 
	public ResponseEntity<List<course>> getCourses(){
		
		List<course> list = this.service.getCourses();
		
		if(list.size()==0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(list));
	}
	
	//getting course
	@GetMapping("/courses/{couserId}")
	public ResponseEntity<course> getCourse(@PathVariable("couserId") String courseId) {
		
		try{
			course obj = this.service.getCourse(Long.parseLong(courseId));
			return ResponseEntity.of(Optional.of(obj));
		}catch(Exception e){
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); 
		}
	}
	
	//adding course
	@PostMapping("/courses")
	public ResponseEntity<?> addCourse(@RequestBody course course) {
		try {
			this.service.addCourse(course);
			return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	//updating
	@PutMapping("/courses")
	public ResponseEntity<Void> updateCourse(@RequestBody course course) {
		try {
			this.service.addCourse(course);
			return ResponseEntity.status(HttpStatus.CREATED).build();
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
	//deleting course
	@DeleteMapping("/courses")
	public ResponseEntity<Void> deleateCourse(@RequestBody course Course){
		try {
			this.service.deleateCourseByCourse(Course);
			return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		}catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
	//deleting by id
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<course> deletingById(@PathVariable("courseId") String courseId){
		course courseObj = this.service.getCourse(Long.parseLong(courseId));
		if(courseObj==null) {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).build();
		}
		//deleting course from data base
		this.service.deleteById(Long.parseLong(courseId));
		return ResponseEntity.of(Optional.of(courseObj));
	}
}



