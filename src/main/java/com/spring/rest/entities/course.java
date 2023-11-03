package com.spring.rest.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class course {
	
	@Id
	private long id;
	private String title;
//	@JsonProperty("decription")
	private String discription;

	public course() {
		super();
	}

	public course(long id, String title, String discription) {
		super();
		this.id = id;
		this.title = title;
		this.discription = discription;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	@Override
	public String toString() {
		return "course [id=" + id + ", title=" + title + ", discription=" + discription + "]";
	}
}
