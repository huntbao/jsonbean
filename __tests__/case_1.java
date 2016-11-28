package com.netease.test;

import java.util.List;

/*
 * User bean
 */
public class User {
	/*
	 * user id
	 */
	private String id = "test";

    // test ids
	private String[] ids = ["test1", "test2", "test3"];

    private String ids2[] = ["test1", "test2", "test3"]; // test ids2
	/*
	 * user name
	 */
	private String name;
	/*
	 * user age
	 */
	private Integer age = 10;

	// test ages
	private Integer[] ages = [1,2,3,4];

	/*
	 * user privileges
	 */
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