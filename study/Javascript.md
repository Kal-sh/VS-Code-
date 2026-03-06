> - Expression is a fragment of a code that produce a value
>   - its the smallest fragment of a statement

### **Numbers**

- Arithmetic
  - operators `+, -, *, /`
  - executed left to right if same order precedence operators are next to each other

    ```javascript
    1 - 2 + 3;

    // (1 - 2) + 3
    ```

- Logical operators

- NAN - not a number

  ```javascript
  console.log('john' - 2); // NaN
  ```

### **Strings**

- string concatenation

  ```javascript
  let firstName = 'abebe';
  let lastName = 'challa';
  let age = 69;

  let fullName = firstName + ' ' + lastName;
  console.log(fullName); // abebe challa
  ```

- indexing

  ```javascript
  console.log(fullName[2]); // e
  ```

- string length

  ```javascript
  console.log(fullName.length); // 12
  ```

- **string methods**
  - to upper and lower case

    ```javascript
    console.log(fullName.toUpperCase()); // ABEBE CHALLA
    ```

  - using `indexOf` method
    - Returns the position of the first occurrence of a substring.

      ```javascript
      let email = 'abc@gmail.com';
      console.log(email.indexOf('@')); // 3
      ```

  - using `lastIndexOf` method
    - Returns the last occurrence of a substring in the string.

      ```javascript
      console.log(email.lastIndexOf('a')); // 6
      console.log(email.lastIndexOf('n')); // -1 if it doesn't exist
      ```

  - using `slice` method
    - Returns a section of a string.

      ```javascript
      console.log(email.slice(0, 3)); // abc
      ```

  - using `substr` method
    - Gets a substring beginning at the specinfied location and having the specified length.

      ```javascript
      console.log(email.substr(2, 6)); // c@gmai
      ```

  - using `replace` method
    - Replaces the first occurrence of a text in a string, using a regular expression or search string.

      ```javascript
      console.log(email.replace('a', 'm')); // mbc@gmail.com
      ```

  - template strings (string literals)

    ```javascript
    let results = `${firstName} is ${age} years old.`;
    console.log(results); // abebe is 69 years old.
    ```

### **Arrays**

- array methods
  - using `join` method
    - adds all the elements of an array into a string, separated by the specified separator string.

      ```javascript
      let name = ['abebe', 'challa', 'tolosa'];
      console.log(name.join(',')); // abebe,challa,tolosa
      ```

  - using `concat` method
    - Combines two or more arrays.
    - This method returns a new array without modifying any existing arrays.

      ```javascript
      let results = name.concat(['mulatu', 'beshadu']);
      console.log(results); // [ "abebe", "challa", "tolosa", "mulatu", "beshadu" ]
      ```

  - using `push` method
    - appends new elements to the end of an array, and returns the new length of the array.
    - it **alters** the original array

      ```javascript
      console.log(name.push('aster')); // 4
      ```

  - using `pop` method
    - removes the last element from an array and returns it.
    - it **alters** the original array
    - If the array is empty, undefined is returned and the array is not modified.

      ```javascript
      console.log(name.pop()); // aster
      ```

### **Booleans**

- a true or false value

  ```javascript
  let email = 'abc@gmail.com';
  console.log(email.includes('@')); // true
  console.log(email.includes('mola')); // false
  console.log('challa' < 'Challa'); // false
  console.log('challa' < 'hello'); // true

  // capital letter are small latters always are bigger than any capital letter
  ```

- comparison
  - loose comparison uses `==`
    - does type conversion

      ```javascript
      console.log(5 == 5); // true
      console.log(5 == '5'); // true
      console.log(5 != '5'); // false
      ```

  - strict comparison uses `===`
    - doesn't do type conversion

      ```javascript
      console.log(5 === 5); // true
      console.log(5 === '5'); // false
      console.log(5 !== '5'); // true
      ```

### **Type conversion**

- changing data type of a value from one to another
- **explicit** type conversion is when we tell it to actually change the type
- **implicit** type conversion is when js changes the type of a value by it self

  ```javascript
  let age = 25;
  console.log(typeof age); // number
  let strAge = String(age);
  console.log(typeof strAge); // string
  console.log(Number('hello')); // NaN
  console.log(Boolean(0)); // false
  console.log(Boolean(4)); // true
  console.log(Boolean('0')); // true
  console.log(Boolean('')); // false

  // 0 is a falsey value but any positive number and a string with value is a truthy value
  ```

### Control flow

- when we want to execute a piece of code overs and over
  - **for loops**

    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    } // 0 1 2 3 4
    ```

  - **while loops**

    ```javascript
    let i = 0;
    while (i < 5) {
      console.log(i);
      i++;
    } // 0 1 2 3 4
    ```

  - **do while loops**
    - will run atleast once even if the condition is true or false

      ```javascript
      let i = 7;
      do {
        console.log(i);
        i++;
      } while (i < 5); // 7
      ```

  - **if else statement**

    ```javascript
    let i = 0;
    if (i > 5) {
      console.log('if loop works');
    } else if (i > 10) {
      console.log('looping');
    } else {
      console.log('last loop');
    } // last loop
    ```

  - switch statement

    ```javascript
    let grade = 'A';

    switch (grade) {
      case 'A':
        console.log('the best');
        break;
      case 'B':
        console.log('2nd best');
        break;
      default:
        console.log('damn');
        break;
    } // the best
    ```

### Functions

> **Function** is a snippet of a code which perform a some kind of specific task
> **Method** is a function that is associated with a particular object or data type

- **function declaration**
  - js moves function declarations to the top of the current scope by default before code execution
  - so even if we put the function call before the declaration it will still work
  - this property is called `hoisting`

    ```javascript
    hello(); // hello

    function hello() {
      console.log('hello');
    }
    ```

- **function statement**
  - doesn't support `hoisting`

    ```javascript
    const greeting = function (name) {
      console.log(`hello ${name}`);
    };

    greeting('challa'); // hello challa
    ```

- parameters and arguments
  - name and time are local variables and can't be used outside the function

    ```javascript
    const speak = function (name = 'ababe', time = 'night') {
      console.log(`good ${time} ${name}`);
    };

    speak(); // good night ababe
    speak('challa'); // good night challa
    speak('aster', 'day'); // good day aster
    ```

- returing a value

  ```javascript
  const calcArea = function (radius) {
    return 3.14 * radius ** 2;
  };

  let area = calcArea(5);
  console.log(area); // 78.5
  ```

- arrow function

  ```javascript
  const calcArea = (radius) => {
    return 3.14 * radius ** 2;
  };

  // const calcArea = (radius) => 3.14 * radius ** 2; // short hand version of the above function

  let area = calcArea(4);
  console.log(area); // 50.24
  ```
