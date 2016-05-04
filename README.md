# jsonbean
extract datatypes from java bean

## Installation

Node.js:

```bash
$ npm install -g jsonbean
```

## Usage
```js
let beanStr = 'SOME JAVA BEAN';
let result = jsonbean.parse(beanStr);
```

## Example
Input:

```java
package com.netease.test;

import java.util.List;

/*
 * User bean
 */
public class User {
	/*
	 * user id
	 */
	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
```

Output:

```json
{
   "class": "User",
   "description": "User bean",
   "attributes": [
      {
         "name": "id",
         "type": "String",
         "isArray": false,
         "defaultValue": "",
         "description": "user id"
      }
   ]
}
```