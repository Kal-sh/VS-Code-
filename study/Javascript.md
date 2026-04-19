# JavaScript

## **Introduction to JavaScript**

- short history
  - it was created by **Brendan Eich** at Netscape for their browser
  - it was named "Mocha" initially then to "LiveScript"
  - finally renamed to "JavaScript" to capitalize on the popularity of "java"
  - Sun Microsystems (which owned Java) had the "JavaScript" trademark
  - Netscape licensed the name from Sun
  - When Oracle acquired Sun in 2010, they inherited the trademark
  - **ECMAScript Naming**
    - To avoid trademark issues, the standardized language was named "ECMAScript"
    - "JavaScript" remains the popular brand name.

> `ES` the standard, `JS` the implementation, the actual programming language

- case-sensitive
- dynamically typed language
  - variables don't have fixed data type
- js interpretor performs automatic garbage collection

- **Comments**

  ```javascript
  // this is a single line Comment

  /*
  this is a multi-line comment
  this is a multi-line comment
  */
  ```

- **Identifiers**
  - they are names give to variables, functions and classes to provide labels
  - can't use emojis as identifiers
  - js supports **Unicode** characters
    - some software and hardware may not correctly process Unicode
    - its recommended to use **ASCII** letters for most part
  - **_Reserved keywords_** are words that are used by the js language
    - they can't be use as identifiers

- **Semicolons** (`;`)
  - it's used to explicitly mark the end of statement
  - but it's **_optional_**

- **Literals**
  - are data values that appear in the program

    ```javascript
    11; // number
    11.2; // float
    ("hello"); // string
    false; // Boolean
    null; // absence of object
    ```

> - Expression is a fragment of a code that produce a value
>   - its the smallest fragment of a statement

### **javascript types**

- **Primitive types**:
  - they are immutable values passed by value
  - stored on `stack`
  - **_numbers, stings, boolean, symbol, bigint_**
  - special js values(**_null and undefined_**)

    > null and undefined are the only values methods can't be invoked on

    ```javascript
    const name = "challa";
    let newName = name;

    newName = "abebe";
    console.log(name, newName); // challa abebe
    ```

- **Reference types:**
  - they are mutable collection of properties passed by reference
  - stored on the `heap`
  - **_object, array, function, date, map, set, errors, promise_**

    > **Objects** are unordered collection of named values

    ```javascript
    let person = {
      name: "aster",
    };
    let newPerson = person;
    newPerson.name = "beshadu";
    console.log(person, newPerson); // { name: "beshadu" } { name: "beshadu" }
    ```

## **Primitive Types**

### **Numbers**

- it's used to represent integers and real numbers
- represent numbers using 64-bit floating point format

  > - represent all integers between −9,007,199,254,740,992 (−2^53) and 9,007,199,254,740,992 (2^53)
  > - range between but not including -1.8e308 and 1.8e308

#### **Integer Literals**

- when a number appears directly in a js program, it's called a **_numeric literal_**
- js support base-10 and hexadecimal (base-16) integers
  - hexadecimal digits starts with 0x or 0X
  - followed by digits 0-9 or letters a(A)-f(F)

    ```javascript
    15; // base-10
    0xff; // 255, base-16
    0xff; // 255, BASE-16
    ```

- ES6 supports binary (base-2) or octal (base-8)
  - uses prefix 0b or 0o (0B or 0O)

    ```javascript
    0b10101; // 21, (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
    0o377; // 255: (3*64 + 7*8 + 7*1)

    let x;
    let n = 18;
    x = "0b" + n.toString(2); // "0b10010"
    x = "0x" + n.toString(8); // "0x22"
    x = "0o" + n.toString(16); // "0o12"
    ```

#### **Floating-point Literals**

- they have decimal point
- they can be represented using exponential notation
  - real number followed by the letter e (or E)
  - notation represent the real number multiplied by 10 to the power of the exponent

    ```javascript
    3.14;
    0.222;
    4.3e23; // 4.3*10^23
    24.25e-2; // 0.2425
    ```

- separators in numeric literals

  ```javascript
  let billion = 1_000_000_000;
  let fraction = 24.242_564_365;
  ```

#### **Arithmetic**

- operators `+, -, *, /, %, **`
- it also support more complex mathematical operations using the `Math` object
- executed left to right if same order precedence operators are next to each other

  > Arithmetic doesn't raise errors in case of overflow, underflow or division by zero

- **Overflow** occurs when the result of numeric operation is larger than the largest representable number, similar to the negative values, js will return minus or plus `Infinity`
- **Underflow** occurs when the result of numeric operation is closer to zero than the smallest representable number, js will return `0`
- **Division by zero** will return plus or minus `Infinity`
  - zero / zero or Infinity / Infinity will result `NaN`

    ```javascript
    1 - 2 + 3; // (1 - 2) + 3 = 2
    10 % 3; // 1
    0 / 0; // NaN
    5 / 0; // Infinity
    -2 / Infinity; // -0
    Infinity / Infinity; // NaN
    console.log(1.79e308); // 1.79 * 10^308
    console.log(1.8e308); // Infinity
    console.log(9e-323); // 9 * 10^-323
    console.log(2e-324); // 0
    Math.pow(52, 222); // Infinity
    Math.sqrt("hi"); // NaN
    Number.MAX_VALUE * 2;
    ```

#### **Binary Floating-point and Rounding errors**

- infinite real numbers but only a finite number of them are represented in js
- binary floating-point can't exactly represent commonly used fractions like 1/10, 1/100 and 1/1024
- js has representations that are as close as 0.1 but not exactly it

  ```javascript
  let x = 0.3 - 0.2;
  let y = 2 / 10 - 1 / 10;
  console.log(x === 0.1); // false
  console.log(x === y); // false
  ```

- `BigInt`
  - added in ES2020
  - represent 64-bit integers
  - can only represent integers
  - works just like regular arithmetic but it **_drops remainder and rounds down_**

    ````javascript
    console.log(10 / 3); // 3.3333333333
    console.log(10n / 3n); // 3n
    console.log(2.4 * 2n); // Uncaught TypeError: Cannot mix BigInt and other types
    ```
    ````

#### Dates and Times

- Dates are objects, but they also have a numeric representation as a **_timestamp_**
- month is zero based, meaning, January is at index 0

  ```javascript
  let timestamp = Date.now();
  let now = new Date();
  let month = now.getMonth();
  let ms = now.getTime();
  let iso = now.toISOString();
  console.log(timestamp);
  console.log(now);
  console.log(month);
  console.log(ms);
  console.log(iso);

  // modern way to get date
  let x = Intl.DateTimeFormat("en-GB").format(now);
  x = now.toLocaleString("default", { month: "long" });
  console.log(x);
  ```

#### Not a Number (NaN)

- NaN is a numeric value that represent an invalid or undefined number result
- most arithmetic operations with `undefined` or `NaN` will result `NaN`

  ```javascript
  0 / 0;
  "hello" - 2;
  "hello" / 2;
  "hello " + undefined; // hello undefined
  "hello" / undefined; // NaN
  5 + undefined;
  NaN + NaN;
  5 / NaN;
  Infinity / Infinity;
  Number("hello");
  parseInt("abc");
  Math.sqrt(-1);
  typeof NaN; // 'number'
  // NaN
  ```

### **Strings**

- Strings are sequences of unsigned **16-bit** values (2 bytes) enclosed in quotes
- uses UTF-16 encoding
- most commonly used Unicode characters can fit within 16-bits (Basic Multilingual Plane)
- Unicode characters that doesn't fit within a 16-bit will require additional 16-bit
  - those type of Unicode characters are called `Surrogate pair`

  - A codepoint is a unique number assigned to each character in the Unicode standard.
    - Characters fitting in 16 bits = codepoints U+0000 to U+FFFF
    - Characters beyond that = codepoints U+10000 and above, requires surrogate pair

      ```javascript
      let euro = "€"; // U+20AC
      let smile = "😄"; // U+1F604
      euro.length; // 1
      smile.length; // 2
      ```

#### String Literals

- enclosed in single or double quotes
- ES6 brings backticks ``
- original js required string literals to be written on a single line using concatenation (+)
  - since ES5 we can break them into multiple line using backlash (\)

- **Escape sequences** in string literals
  - `\n` represent newline
  - `\'` represent single quote (apostrophe)
  - `\\` represent backlash

#### Working with strings

- string concatenation
  - using `+` operator to add multiple strings together

        ```javascript
        let firstName = "abebe";
        let lastName = "challa";

    let age = 69;

        let fullName = firstName + " " + lastName;
        console.log(fullName); // abebe challa
        ```

- String comparison
  - strings can be compared using `===` or `!==` operators
    - they are equal if and only if they have exactly the same 16-bit values

      ```javascript
      console.log("hello" === "hello"); // true
      console.log("hello" === "Hello"); // false
      ```

- indexing

  ```javascript
  console.log(fullName[2]); // e
  ```

#### **String methods**

- string length

  ```javascript
  console.log(fullName.length); // 12
  ```

- to upper and lower case

  ```javascript
  console.log(fullName.toUpperCase()); // ABEBE CHALLA
  ```

- using `indexOf` method
  - Returns the position of the first occurrence of a substring.

    ```javascript
    let email = "abc@gmail.com";
    console.log(email.indexOf("@")); // 3
    ```

- using `lastIndexOf` method
  - Returns the last occurrence of a substring in the string.

    ```javascript
    console.log(email.lastIndexOf("a")); // 6
    console.log(email.lastIndexOf("n")); // -1 if it doesn't exist
    ```

- using `slice` method
  - Returns a section of a string.

    ```javascript
    console.log(email.slice(0, 3)); // abc
    ```

- using `substr` method
  - Gets a substring beginning at the specified location and having the specified length.

    ```javascript
    console.log(email.substr(2, 6)); // c@gmai
    ```

- using `replace` method
  - Replaces the first occurrence of a text in a string, using a regular expression or search string.

    ```javascript
    console.log(email.replace("a", "m")); // mbc@gmail.com
    ```

- template strings (string literals)
  - ES6 and later, string literals can be delimited with backticks
  - anything inside `${...}` is interpreted as javascript expression

    ```javascript
    let results = `${firstName} is ${age} years old.`;
    console.log(results); // abebe is 69 years old.
    ```

#### Pattern Matching

- js have a datatype called **regular expression** (**`RegExp`**) for matching pattern in strings
- text between pair of slashes constitutes a regular expression literal
  - the second slash in the pair can be followed by one or more letters to modify the meaning of the pattern

    ```javascript
    let text = "testing: 1, 2, 3";
    let pattern = /\d+/g;
    pattern.test(text); // true
    text.search(pattern); // 9
    text.match(pattern); // ["1", "2", "3"]
    text.replace(pattern, "#"); // "testing: #, #, #"
    text.split(/\D+/); // ["", "1", "2", "3"]
    ```

### **Boolean Values**

- represent `true` or `false`
- commonly used in js control structures

  ```javascript
  let email = "abc@gmail.com";
  console.log(email.includes("@")); // true
  console.log(email.includes("mola")); // false
  console.log("challa" < "Challa"); // false
  console.log("challa" < "hello"); // true

  // small letters are always bigger than any capital letter
  ```

- **Equality**
  - Loose equality (`==`)
    - performs type coercion

      ```javascript
      console.log(5 == 5); // true
      console.log(5 == "5"); // true
      console.log(5 != "5"); // false
      ```

  - Strict equality (`===`)
    - doesn't perform type coercion

      ```javascript
      console.log(5 === 5); // true
      console.log(5 === "5"); // false
      console.log(5 !== "5"); // true
      ```

  - AND operator (`&&`)
    - evaluate to truthy value if and only if both of its operands are truthy
    - evalutes to a falsy value otherwise
  - OR operator (`||`)
    - evaluate to to falsy if both of its operands are falsy
    - evalues to truthy if one of its operands are truthy

      ```javascript
      let x = 0;
      let y = 0;
      let z = 1;

      if ((x === 0 || y === 0) && !(z === 0)) {
        console.log("one of them is none zero");
      } else {
        console.log("all zero");
      } // one of them is none zero
      ```

### null and undefined

- **null** is usually used to indicate the absence of a value
  - set manually by the developer
  - `typeof` operator on null will return `object` type

    ```javascript
    let y = null;
    console.log(y, typeof y); // null 'object'

    5 + null; // 5
    5 * null; // 0
    5 / null; // Infinity
    null / null; // NaN
    ```

- **undefined** means the variable exists but hasn't been assigned a value exists
  - automatically assigned by javascript
  - `typeof` operator on undefined will return `undefined`

    ```javascript
    let x;
    console.log(x, typeof x); // undefined 'undefined'

    5 + undefined;
    5 / undefined;
    5 - undefined;
    // NaN
    ```

### **Symbols**

- Primitive type
- introduced in ES6 to serve as non-string property name
- Symbols aren't enumerable in for...in loops or Object.keys()
- called using `Symbol()` function
  - this function **_never returns the same value twice_**, even called with the same argument
  - it makes them safe to add property to an object without risk of name conflict
- `Symbol.iterator` can be used to iterate on object
- `Symbol.for()` takes string argument
  - return a Symbol value associated with the string you passed
  - will always **_return the same value_** when called with the same string

    ```javascript
    const a = Symbol("test");
    const b = Symbol("test");

    a.toString(); // "Symbol(test)"
    console.log(a === b); // false

    let s = Symbol.for("shared");
    let t = Symbol.for("shared");

    s === t; // => true
    s.toString(); // => "Symbol(shared)"
    Symbol.keyFor(t); // => "shared"
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
  console.log(Number("hello")); // NaN
  console.log(Boolean(0)); // false
  console.log(Boolean(4)); // true
  console.log(Boolean("0")); // true
  console.log(Boolean("")); // false

  // 0 is a falsy value but any positive number and a string with value is a truthy value
  ```

### **Type Coercion**

- it's when js automatically converts a value from one data type to another when performing an operation
- since it's a dynamically typed language, the js engine tries to make operations work even when data types are different
- also called **_Implicit type conversion_**

  > we can use methods on Primitive types because javascript temporarily converts Primitives to object types

  ```javascript
  const s = "hello";
  console.log(s.length); // 5

  // under the hood
  const s = new String("hello");
  ```

#### **Common types of Coercion**

- **String Coercion**
  - if one value is a string, js will convert the other into a string

    ```javascript
    let result = "4" + 2;
    let hello = "hello " + 2;
    console.log(result, typeof result); // 42 string
    console.log(hello, typeof hello); // hello 2 string

    // because `+` can perform string concatenation
    ```

- **Number Coercion**
  - Arithmetic operations force values to become numbers

    ```javascript
    let val;
    val = "5" - 2; // 3
    val = "5" * 2; // 10
    val = "5" / 2; // 2.5
    val = "10" / "2"; // 5
    val = "hello" / "2"; // NaN
    ```

- **Boolean Coercion**
  - booleans convert to numbers
  - `true` -> 1 and `false` -> 0

    ```javascript
    console.log(true + 1); // 2
    console.log(false + 1); // 1
    ```

## **Reference Types**

### **Global objects**

- They are built-in objects and values that are available everywhere in your code without importing or declaring them.
- in Node, the `global` object has a property named `global` with value global object
- in web browsers, the `Window` object serves as the global object for all js code
  - can use `window` property to refer to the global object
  - Window object also define globals that are specific to browsers and client-side js

> ES2020 finally defines `globalThis` as standard way to refer to global object

```javascript
console.log(globalThis);
```

### **Immutable Primitive Values and Mutable Object Reference**

- Primitive types are immutable
  - compared by value
  - it might be obvious for numbers and booleans
  - strings are like arrays of characters but we can't modify the characters at specified index
    - when we use string methods that appears to return a modified string, js is returning a new string value
    - two strings are equal if and only if they have the same set of characters in the same exact order

      ```javascript
      let s = "hello";
      // let s = new String("hello"); // how js creates strings as objects on back-end
      s.toUpperCase(); // 'HELLO'
      s; // 'hello'
      s[2] = "v"; // Cannot assign to read only property '2' of string 'hello'
      ```

- Reference type are mutable
  - objects are compared by reference
  - two objects are equal if and only if they refer to the same underlying object
    - two objects aren't equal even if they have the same properties and values
    - two arrays aren't equal even if they have the same elements in the same order
  - assigning an object (or array) to variable simply assigns the reference
    - doesn't create a new copy of the object
    - if we want to make a new copy of an object or array, must explicitly copy them
    - after ES6, we can copy arrays with `Array.from()`

      ```javascript
      let o = { x: 1 };
      let p = { x: 1 };
      o === p; // false

      let a = [];
      let b = [];
      a === b; // false

      let x = ["a", "b", "c"];
      let z = x;
      z[0] = 1; // 1
      x[0]; // 1
      x === z; // true

      let c = ["a", "b", "c"];
      let d = [];
      for (let i = 0; i < c.length; i++) {
        d[i] = c[i];
      }
      console.log(d); // [ "a", "b", "c" ]

      // ES6
      let e = Array.from(c); // [ "a", "b", "c" ]
      ```

### **Arrays**

> **Array** is a collection of multiple values stored in a single variable

- its values are ordered
- usually used to store related data
- accessed using index
  - index starts from `0`

#### **Array methods**

- using `join` method
  - adds all the elements of an array into a string, separated by the specified separator string.

    ```javascript
    let name = ["abebe", "challa", "tolosa"];
    console.log(name.join(",")); // abebe,challa,tolosa
    ```

- using `concat` method
  - Combines two or more arrays.
  - This method returns a new array without modifying any existing arrays.

    ```javascript
    let results = name.concat(["mulatu", "beshadu"]);
    console.log(results); // [ "abebe", "challa", "tolosa", "mulatu", "beshadu" ]
    ```

- using `push` method
  - appends new elements to the end of an array, and returns the new length of the array.
  - it **alters** the original array

    ```javascript
    console.log(name.push("aster")); // 4
    ```

- using `pop` method
  - removes the last element from an array and returns it.
  - it **alters** the original array
  - If the array is empty, `undefined` is returned and the array is not modified.

    ```javascript
    console.log(name.pop()); // aster
    ```

- using `unshift` method
  - appends an element to at the beginning of an array, and returns the length of the array
  - it **alters** the original array

    ```javascript
    console.log(name.unshift("beshadu")); // 4
    ```

- using `shift` method
  - removes the first element from an array and returns it
  - it **alters** the original array
  - If the array is empty, `undefined` is returned and the array is not modified.

    ```javascript
    console.log(name.shift()); // beshadu
    ```

- using `reverse` method
  - it reverse the array

    ```javascript
    console.log(name.reverse()); // [ "tolosa", "challa", "abebe" ]
    ```

- using `includes` method
  - checks if the array contains a specific value
  - returns **boolean** value

    ```javascript
    console.log(name.includes("beshadu")); // false
    ```

- using `slice` method
  - Returns a section of an array

    ```javascript
    console.log(name.slice(1, 3)); // [ "challa", "tolosa" ]
    ```

- using `splice` method
  - Removes elements from an array and, if necessary, inserts new elements in their place
  - returns the deleted elements.
  - `splice(start: number, deleteCount?: number): string[]`
  - `[start: number]` The zero-based location in the array from which to start removing elements.
  - `[deleteCount?: number]` The number of elements to remove.
    - Omitting this argument will remove all elements from the start
    - negative number, zero, undefined, or a type that can't be converted to an integer, the function will evaluate the argument as zero and not remove any elements.
  - modifies the original array

    ```javascript
    let x = [44, 14, 64, 75, 84, 36];
    let y = ["abebe", "challa", "aster"];
    y.splice(1, 0, "beshadu");
    console.log(x.splice(2, 4)); // [ 64, 75, 84, 36 ]
    console.log(y); // [ "abebe", "beshadu", "challa", "aster" ]
    ```

- using `forEach` method
  - used to loop through elements of an array and execute a function for each element
  - can't break or stop it early
  - can't return a new array

    ```javascript
    // Syntax
    array.forEach((element, index, array) => {
      console.log(element, index);
    });
    ```

    ```javascript
    const names = ["Abebe", "challa", "aster", "beshadu", "mola"];

    names.forEach((name) => console.log(name));

    names.forEach((name) => {
      if (name === "aster") return; // only skips this iteration, doesn't stop the loop
      console.log(name);
    });
    ```

- using `filter` method
  - create a new array containing only the elements that pass a certain condition

    ```javascript
    let result = names.filter((item) => item.length > 4);
    console.log(result);
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
      console.log("hello");
    }
    ```

- **function statement**
  - doesn't support `hoisting`

    ```javascript
    const greeting = function (name) {
      console.log(`hello ${name}`);
    };

    greeting("challa"); // hello challa
    ```

- parameters and arguments
  - name and time are local variables and can't be used outside the function

    ```javascript
    const speak = function (name = "ababe", time = "night") {
      console.log(`good ${time} ${name}`);
    };

    speak(); // good night ababe
    speak("challa"); // good night challa
    speak("aster", "day"); // good day aster
    ```

- returning a value

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

- call back function

  ```javascript
  const myFunc = (callBackFunc) => {
    let value = 50;
    callBackFunc(value);
  };

  myFunc((value) => {
    console.log(value + 2);
  }); // 52
  ```

## Control flow

- when we want to execute a piece of code overs and over
  - **for loops**

    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    } // 0 1 2 3 4
    ```

    ```javascript
    const socials = [
      "Twitter",
      "LinkedIn",
      "Facebook",
      "Instagram",
      "Telegram",
    ];

    for (let social of socials) {
      console.log(social);
    }
    ```

    ```javascript
    for (let i in socials) {
      console.log(socials[i]);
    }
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
    console.log("if loop works");
  } else if (i > 10) {
    console.log("looping");
  } else {
    console.log("last loop");
  } // last loop
  ```

- switch statement

  ```javascript
  let grade = "A";

  switch (grade) {
    case "A":
      console.log("the best");
      break;
    case "B":
      console.log("2nd best");
      break;
    default:
      console.log("damn");
      break;
  } // the best
  ```

## Document Object Model (DOM)

- it's a structured representation of the HTML document
