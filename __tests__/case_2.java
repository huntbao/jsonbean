package com.netease.test;

import java.util.List;

// User bean
public class User {
	// user id
	private String id;

	// user name
	private String name;

	// user age
	private Integer age = 10;

	// user privileges
	private List<String> privileges;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<String> getPrivileges() {
		return privileges;
	}

	public void setPrivileges(List<String> privileges) {
		this.privileges = privileges;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

}