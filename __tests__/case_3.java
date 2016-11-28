package com.netease.test;

import java.util.List;

// User bean
public class User {

	private String id; // user id


	private String name; // user name
    //user age


	private Integer age = 10; // this one will be overriden by the 'user age'

    //user privileges
	private List<String> privileges; /* this one wouldn't appear */

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

