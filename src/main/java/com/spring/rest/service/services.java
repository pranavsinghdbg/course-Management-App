package com.spring.rest.service;

import java.util.List;

import com.spring.rest.entities.course;

public interface services {
	public List<course> getCourses();

	public course getCourse(long courseId);

	public void addCourse(course course);

	public void update(course course);
	
	public void deleateCourseByCourse(course course);
	
	public void deleteById(long courseId);
}
