# Python

Created: May 19, 2023 4:03 PM
Last Edited: January 22, 2026 8:52 PM

# Introduction to Python

## **What is python script?**

- Python is a high-level, general purpose programming language known for its readability, simplicity, and versatility
- A Python script is a file containing a sequence of Python code instructions that can be executed by the Python interpreter.
- It was created by **Guido van Rossum** in **1991**
- Python scripts typically have a `.py` file extension and can be run from the command line or within an integrated development environment (IDE).

## **Variables, Expressions, and Statements**

### **Variables**

- It’s a named place in the memory where a programmer can store a data and later retrieve the data using variable “`name`”

> - **Variable Naming Rule**
>   - Must start with letter or underscore ( \_ )
>   - Can consist of letters, numbers, and underscores
>   - Avoid using reserved keywords

- typically uses “snake_case”
  - Recommended to use descriptive names that reflect the purpose or content of the variable.
  - Case Sensitive

    ```python
    variable_name = "Abebe"
    ```

### **Constants**

- They are variables whose values remain unchanged throughout the execution of a program
- Typically used to store fixed values that should not be modified
- By convention, their names are written in **UPPERCASE** Letters
- Python does not have built-in method for constants
  - so it's more of a naming convention to indicate that variables should not be changed

    ```python
    FIRST_NAME = "Mulatu"
    ```

### **Expressions**

- **Expressions** are combinations of values, variables, and operators that the python interpreter can evaluate to produce a **result**.
- They are used to perform computations and represent relationships between different entities in your code.
- Can be used inside larger statements like assignments, conditions, loops, etc.
- Here are a few examples of Python expressions
  - **Arithmetic Expressions**
    - Used for mathematical operations
    - **Operators**: `+`, `-`, `*`, `/`, `//`, `%`, `**`

      ```python
      a + b
      x - y
      5 * 4
      10 / 2
      ```

  - **Relational / Comparison Expressions**
    - Used to compare values. They return a **Boolean** (`True` or `False`)
    - **Operators**: `>`, `<`, `>=`, `≤`, `==`, `!=`

      ```python
      x > y
      a == b
      5 != 3
      ```

  - **Logical Expressions**
    - Used to combine or invert Boolean values
    - **Operators**: `and`, `or`, `not`

      ```python
      x > 5 and y < 10
      not a == b
      True or False
      ```

  - **Bit-wise Expressions**
    - Work at the bit level, mostly used for low-level tasks
    - **Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`

      ```python
      a & b
      a | b
      a ^ b
      a << 2
      a >> 1
      ```

  - **Assignment Expressions (Walrus Operator)**
    - Introduced in Python 3.8. Assigns and returns a value in the same expression

      ```python
      if (n := len(my_list)) > 5:
          print(f"List has {n} items")
      ```

  - **Conditional Expressions (Ternary Operator)**
    - A one-line `if-else`.

      ```python
      result = "Even" if x % 2 == 0 else "Odd"
      ```

  - **Lambda Expressions**
    - Anonymous (inline) function expressions

      ```python
      square = lambda x: x ** 2
      ```

  - **List/Set/Dict Comprehension Expressions**
    - Compact syntax to generate collections

      ```python
      squares = [x**2 for x in range(10)]
      evens = {x for x in range(10) if x % 2 == 0}
      ```

  - **Generator Expressions**
    - Like list comprehensions, but use lazy evaluation

      ```python
      gen = (x**2 for x in range(1000000))
      ```

  - **String Expressions**
    - Combine or manipulate strings

      ```python
      "Hello, " + name
      "Python" * 3
      ```

### **Statements**

- **Statements** are instructions or actions that are executed by the Python interpreter
- they can be combined and arranged in a sequence to create complex programs.
- they help in controlling the flow of execution and performing different tasks in a program
- Unlike expressions that produce a value
- statements are usually used to perform actions or make decisions
- Here are some examples of Python statements:
  - Assignment Statement: It assigns a value to a variable

    ```python
    x = 5
    ```

  - Conditional Statement: It allows the program to make decisions based on certain conditions

    ```python
    if x > 10:
        print("x is greater than 10")
    else:
        print("x is not greater than 10")
    ```

  - Looping Statement: It allows the program to repeat a set of instructions until a specific condition is met

    ```python
    for i in range(5):
        print(i)
    ```

  - Function Definition Statement: It defines a new function that can be called later in the program

    ```python
    def add_numbers(a, b):
        return a + b
    ```

### **Strings**

- A string is a series of characters inside a quotation marks.
- It can be single or double quotes.

  ```python
  message = "Hello World"
  ```

- To escape the quotes, use the backslash ( `\` ).

  ```python
  message = 'It\'s also a valid string'
  ```

- Creating multi-line strings

  ```python
  help_message = '''
  Usage: mysql command
     -h hostname
     -d database name
     -u username
     -p password
  '''

  print(help_message)
  ```

- f-strings

  ```python
  name = "Aster"
  print(f'hello, {name}')
  ```

- formatting
  - f-string come with python 3.6 before that we use to use `format()` method

    ```python
    first_name = "abebe"
    last_name = "challa"
    full_name = "{} {}".format(first_name, last_name)
    ```

- String Concatenation
  - when string literals are placed next to each other, Python automatically concatenates them into one string.

    ```python
    greeting = 'Good ' 'Morning'
    print(greeting)
    ```

  - Use ( `+` ) to concatenate two or more strings

    ```python
    greeting = 'Good '
    time = 'Afternoon'
    greeting += time + '!'
    print(greeting)

    # Good Afternoon!
    ```

- Accessing string elements
  - accessing string elements using index
  - index start from zero

    ```python
    py_str = 'python string'
    py_str[0] # p
    py_str[-1] # g
    ```

- Length of a string
  - use the `len()` function.

    ```python
    py_str = 'python string'
    print(len(py_str)) # 13
    ```

- String slicing
  - It allows us to get a sub-string from a string.
    - **start**: The index where the slice begins (inclusive).
    - **stop**: The index where the slice ends (exclusive).
    - **step**: The interval between each index in the slice (optional).

      ```python
      string[start:stop:step]
      ```

  - Basic slicing

    ```python
    py_str = 'python string'
    print(py_str[0:2]) # py
    ```

  - Omitting indices

    ```python
    print(py_str[2:]) # thon string
    print(py_str[:6]) # python
    ```

  - Using negative indices
    - they allow us to slice from the end of the string

      ```python
      print(py_str[-6:-1]) # strin
      ```

  - Slicing using steps
    - specify a step value to skip characters

      ```python
      print(py_str[::2]) # pto tig
      ```

  - Indices beyond its length
    - starting index for the slice is beyond the actual length of the string, leading Python to return an empty result without any errors.

      ```python
      print(py_str[100:]) #
      ```

- Changing case
  - capitalize the first letter of each word using the method `title()`

    ```python
    name = "abebe challa"
    print(name.title()) # Abebe Challa
    ```

  - uppercase

    ```python
    print(name.upper()) # ABEBE CHALLA
    ```

  - lowercase

    ```python
    name = "Abebe Challa"
    print(name.lower()) # abebe challa
    ```

- remove white space
  - from left `lstrip()`
  - from right `rstrip()`
  - from both `strip()`

    ```python
    word = " python "
    word.lstrip() # 'python '
    word.rstrip() # ' python'
    word.strip() # 'python'
    ```

### **List**

- it’s used to store a collection of items in a particular order.
- we use `[]` to indicate list
- can access any element in a list using `index`

  ```python
  name = ["abebe", "challa", 3, True]
  print(name[1].title()) # Challa
  ```

- modifying elements in a list

  ```python
  name[0] = "Aster"
  print(name) # ['Aster', 'challa', 3, True]
  ```

- adding an element to a list
  - adding an element to end of a list

    ```python
    name.append("car")
    print(name) # ['Aster', 'challa', 3, True, 'car']
    ```

  - inserting an elements into a list

    ```python
    name.insert(1, False)
    print(name) # ['Aster', False, 'challa', 3, True, 'car']
    ```

- removing an element from a list
  - using a `del` statements

    ```python
    del name[0]
    print(name) # [False, 'challa', 3, True, 'car']
    ```

  - using the `pop()` method
    - it removes the last item in a list

      ```python
      name.pop() # 'car'
      print(name) # [False, 'challa', 3, True]
      ```

    - popping items from any position in a list

      ```python
      name.pop(0) # False
      print(name) # ['challa', 3, True]
      ```

  - removing an item by value

    ```python
    name.remove(3)
    print(name) # ['challa', True]
    ```

- organizing a list

  > Sorting list alphabetically can be complicated when all the values are not lowercase
  - sorting a list **permanently** with `sort()` method

    ```python
    cars = ["bmw", "audi", "toyota", "subaru"]
    cars.sort()
    print(cars) # ['audi', 'bmw', 'subaru', 'toyota']
    ```

    - can also sort the list in reverse alphabetically

      ```python
      cars.sort(reverse=True)
      print(cars) # ['toyota', 'subaru'. 'bmw', 'audi']
      ```

  - sorting list **temporarily** using `sorted()` function

    ```python
    cars = ["bmw", "audi", "toyota", "subaru"]
    print(sorted(cars)) # ['audi', 'bmw', 'subaru', 'toyota']
    print(cars) # ['bmw', 'audi', 'toyota', 'subaru']
    ```

    - sort in reverse

      ```python
      print(sorted(cars, reverse=True)) # ['toyota', 'subaru'. 'bmw', 'audi']
      ```

  - printing a list in a reverse order using `reverse()` method
    - this will arrange the list in reverse chronologically
    - it changes the order of the list **permanently**

      ```python
      cars = ["bmw", "audi", "toyota", "subaru"]
      cars.reverse()
      print(cars) # ['subaru', 'toyota'.'audi', 'bmw']
      ```

  - can use `len()` function to find the length of a list

    ```python
    len(cars) # 4
    ```

### **Working with list**

- Main types of python errors
  - **Syntax Errors**
    - when the python code violates the language grammatical rules
    - the interpreter can't parse the code, so it stops execution before running

      ```python
      print("this is an error)

      # SyntaxError: unterminated string literal
      ```

  - **Type Errors**
    - operations on incompatible types

      ```python
      2 + "3"

      # TypeError: unsupported operand type for +: 'int' and 'str'
      ```

  - **Value Error**
    - correct type but wrong value

      ```python
      int("abc")

      # ValueError: invalid literal for int() with base 10: 'abc'
      ```

  - **Index Error**
    - trying to access invalid index range

      ```python
      cars = ["bmw", "audi", "toyota", "subaru"]
      print(cars[4])

      # IndexError: list index out of range
      ```

  - **Indentation Error**
    - incorrect code indentation

      ```python
      cars = ["bmw", "audi", "toyota", "subaru"]
        print(cars)

      # IndentationError: unexpected indent
      ```

  - **Logical Error**
    - valid python syntax but the code doesn't produce the expected result

      ```python
      cars = ["bmw", "audi", "toyota", "subaru"]
      for i in cars:
          print(f"list of cars {i.title()}")
      print(f"{i.title()} is a car.")

      # the second print only uses the 1st index but not others in the list
      ```

- Looping through a list

  ```python
  cars = ["bmw", "audi", "toyota", "subaru"]
  for i in cars:
      print(i) # bmw audi toyota subaru
  ```

- **Making numerical list**
  - using `range()` function
    - **range(start, end, skip)**
    - it up to the end value but not including it

      ```python
      for i in range(1,5):
          print(i) # 1 2 3 4

      # can also use range(5) and it will print 0 to 4
      ```

  - using range() to make list of numbers
    - wrapping it inside `list()` function

      ```python
      numbers = list(range(2, 11, 2))
      print(numbers) # [2, 4, 6, 8, 10]
      ```

  - simple statistics with a list of numbers

    ```python
    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    min(digits) # 0
    max(digits) # 9
    sum(digits) # 45
    ```

  - list comprehensions
    - creating lists by applying expressions to iterable objects in a single line.

      ```python
      squares = [i**2 for i in range(1, 11)]
      print(squares) # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
      ```

  -
