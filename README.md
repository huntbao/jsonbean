# jsonbean
extract datatypes from java bean files.

## Installation

Node.js:

```bash
$ npm install jsonbean --save
```

## Usage
```js
let jsonbean = require('jsonbean')
let beanStr = 'SOME JAVA BEAN String'
let result = jsonbean.parse(beanStr)
```

If you want to use it in browser, download `src/jsonbean.pegjs`, use `pegjs` to compile it. 

First, you should install pegjs:

```bash
$ npm install -g jsonbean
```

Then, for example, browser global variable is `window.jsonbean`, run command as follows:

```bash
$ pegjs -e window.jsonbean jsonbean.pegjs
```


## Example
Input java bean string:

```java
package com.example.test;

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

Output json:

```json
{
   "name": "User",
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