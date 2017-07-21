# jsonbean
Extract datatypes from java bean files using [pegjs](http://pegjs.org/).

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
$ npm install -g pegjs
```

Then, for example, the browser global variable you wanted is `window.jsonbean`, run command as follows:

```bash
$ pegjs --format globals jsonbean.pegjs
```

You can run some tests defined in the `__tests__` directory by the command:

```bash
$ npm run test
```


## Example
Input java bean string:

```java
package com.example.test;

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