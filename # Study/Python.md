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

> Variable Naming Rule
> - Must start with letter or underscore ( _ )
> - Can consist of letters, numbers, and underscores
> - Avoid using Reserved keywords
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
- Here are a few examples of Python expressions:
  1.  **Arithmetic Expressions**
    - Used for mathematical operations.
        
      ```python
      a + b
      x - y
      5 * 4
      10 / 2
      ```
        
     **Operators**: `+`, `-`, `*`, `/`, `//`, `%`, `**`
    
  2. **Relational / Comparison Expressions**
    - Used to compare values. They return a **Boolean** (`True` or `False`).
        
       ```python
       x > y
       a == b
       5 != 3
       ```
        
     **Operators**: `>`, `<`, `>=`, `≤`, `==`, `!=`
        
  3. **Logical Expressions**
    - Used to combine or invert Boolean values.
        
      ```python
      x > 5 and y < 10
      not a == b
      True or False
      ```
        
     **Operators**: `and`, `or`, `not`
    
  4. **Bit-wise Expressions**
    - Work at the bit level, mostly used for low-level tasks.
        
      ```python
      a & b
      a | b
      a ^ b
      a << 2
      a >> 1
      ```
        
     **Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`
    
  5. **Assignment Expressions (Walrus Operator)**
    - Introduced in Python 3.8. Assigns and returns a value in the same expression.
        
      ```python
      if (n := len(my_list)) > 5:
          print(f"List has {n} items")
      ```
    
  6. **Conditional Expressions (Ternary Operator)**
    - A one-line `if-else`.
        
      ```python
      result = "Even" if x % 2 == 0 else "Odd"
      ```
    
  7. **Lambda Expressions**
    - Anonymous (inline) function expressions.
        
      ```python
      square = lambda x: x ** 2
      ```
    
  8. **List/Set/Dict Comprehension Expressions**
    - Compact syntax to generate collections.
        
      ```python
      squares = [x**2 for x in range(10)]
      evens = {x for x in range(10) if x % 2 == 0}
      ```
    
  9. **Generator Expressions**
    - Like list comprehensions, but use lazy evaluation.
        
      ```python
      gen = (x**2 for x in range(1000000))
      ```
    
  10. **String Expressions**
    - Combine or manipulate strings.
        
      ```python
      "Hello, " + name
      "Python" * 3
      ```
        

### **Statements**

- **Statements** are instructions or actions that are executed by the Python interpreter. They are used to control the flow of a program and perform specific tasks. Unlike expressions that produce a value, statements are usually used to perform actions or make decisions.
- Here are some examples of Python statements:
  1. Assignment Statement: It assigns a value to a variable. 
        
    ```python
    x = 5
     ```
        
  2. Conditional Statement: It allows the program to make decisions based on certain conditions. 
        
    ```python
    if x > 10:
        print("x is greater than 10")
    else:
        print("x is not greater than 10")
    ```
        
  3. Looping Statement: It allows the program to repeat a set of instructions until a specific condition is met. 
        
    ```python
    for i in range(5):
        print(i)
    ```
        
  4. Function Definition Statement: It defines a new function that can be called later in the program. 
        
    ```python
    def add_numbers(a, b):
        return a + b
    ```
        
- Statements can be combined and arranged in a sequence to create complex programs. They help in controlling the flow of execution and performing different tasks in a program.

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
    

### List

- it’s used to store a collection of items in a particular order.
- we use `[]` to indicate list

