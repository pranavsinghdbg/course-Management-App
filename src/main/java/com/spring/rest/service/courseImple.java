package com.spring.rest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.rest.dao.dao;
import com.spring.rest.entities.course;

@Service
public class courseImple implements services {


	
	@Autowired
	private dao coursedao;
	
	public courseImple() {
	}

	@Override
	public  List<course> getCourses() {
		 List<course> list = this.coursedao.findAll();
		 
//		 for(course c : list) {
//			 c.setDiscription("newdescription");
//		 }
		 return list;
	}

	@Override
	public course getCourse(long courseId) {
		return coursedao.findById(courseId);
	}

	@Override
	public void addCourse(course course) {
		coursedao.save(course);
	}

	@Override
	public void update(course course) {
		coursedao.save(course);
	}

	@Override
	public void deleateCourseByCourse(course course) {
		// TODO Auto-generated method stub
		coursedao.delete(course);
	}

	@Override
	public void deleteById(long courseId) {
		// TODO Auto-generated method stub
		coursedao.deleteById(courseId);
	}

	
	

}
