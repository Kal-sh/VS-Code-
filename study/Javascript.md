### **Numbers**
- Arthmetic 
  - operators  `+, -, *, /`
  - excuted left to right if same order precedence oprators are next to each other
  
  ```javascript
  1 - 2 + 3

  // (1 - 2) + 3
  ```

> - Expression is a fragment of a code that produce a value
>    - its the smallest fragment of a statement

- Logical operators



### **Strings**
- string concatenation

  ```javascript
  let firstName = 'abebe'
  let lastName = 'challa'
  let age = 69

  let fullName = firstName + ' ' + lastName
  console.log(fullName) // abebe challa
  ```

- indexing
  
  ```javascript
  console.log(fullName[2]) // e
  ```

- string length

  ```javascript
  console.log(fullName.length) // 12
  ```

>Function is a snippet of a code which perform a some kind of specific task
>Method is a function that is associated with a particular object or data type

- string methods
  - to upper and lower case 
    
    ```javascript
    console.log(fullName.toUpperCase()) // ABEBE CHALLA
    ```

  - using `indexOf` method
    - Returns the position of the first occurrence of a substring.
 
      ```javascript
      let email = 'abc@gmail.com'
      console.log(email.indexOf('@')) // 3
      ```

  - using `lastIndexOf` method
    - Returns the last occurrence of a substring in the string.
 
      ```javascript
      console.log(email.lastIndexOf('a')) // 6
      console.log(email.lastIndexOf('n')) // -1 if it doesn't exist
      ```

  - using `slice` method
    - Returns a section of a string.

      ```javascript
      console.log(email.slice(0, 3)) // abc
      ```

  - using `substr` method
    - Gets a substring beginning at the specified location and having the specified length.
    
      ```javascript
      console.log(email.substr(2,6)) // c@gmai
      ```
  
  - using `replace` method
    - Replaces the first occurrence of a text in a string, using a regular expression or search string.

      ```javascript
      console.log(email.replace("a", "m")) // mbc@gmail.com
      ```

  - template strings (string literals)
    
    ```javascript
    let results = `${firstName} is ${age} years old.`
    console.log(results) // abebe is 69 years old.
    ```

### **Numbers**
- NAN - not a number
  
  ```javascript
  console.log('john' - 2) // NaN
  ```

- Arrays
  - array methods
    - using `join` method
      - adds all the elements of an array into a string, separated by the specified separator string.
 
        ```javascript
        let name = ["abebe", "challa", "tolosa"]
        console.log(name.join(",")) // abebe,challa,tolosa
        ```

    - using `concat` method
      - Combines two or more arrays.
      - This method returns a new array without modifying any existing arrays.
        
        ```javascript
        let results = name.concat(['mulatu', 'beshadu'])
        console.log(results) // [ "abebe", "challa", "tolosa", "mulatu", "beshadu" ]
        ```

    - using `push` method
      - appends new elements to the end of an array, and returns the new length of the array.
      - it **alters** the original array
        
        ```javascript
        console.log(name.push('aster')) // 4
        ```

    - using `pop` method
      - removes the last element from an array and returns it.
      - it **alters** the original array
      - If the array is empty, undefined is returned and the array is not modified.

        ```javascript
        console.log(name.pop()) // aster
        ```

