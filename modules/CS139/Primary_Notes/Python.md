---

layout: notes

title: Python

part: true

---

  *These notes will not cover everything Python has to offer or go into intricate detail of how python works under the hood, the purpose is to cover the basics and anything else which you may need to know to make use of Flask.*
  
## Introduction

Python is a high-level interpreted language. 

In the context of web development it is mostly used for server-side programming. Many popular web frameworks such as Django and Flask are Python-based.

Python was designed by [Guido van Rossum](https://en.wikipedia.org/wiki/Guido_van_Rossum "Guido van Rossum") with the purpose of allowing programmers to do more in fewer lines of code.

## Basic

Python files use the py extensions, for example: `test.py`

Unlike with many other popular programming languages like Java or C, statements in python do **not** end with a semicolon `;`

Curly brackets are also **not** used. Instead, scope (Part of the code in which a specific variable or method can be accessed) is denoted through the use of indentation. This means that whitespace in python is also considered code, it does not get removed before interpretation/compilation.

Outputting to the console is handled using the `print()` function.

### Variables

Python is a dynamically typed language hence variable types are not declared in code.

Python also does not have any way to declare a variable without also initialising it hence a variable is created when a value is assigned to it `a = 5`


Valid variable names must
    * Start with a letter or the underscore character
    * **Not** start with a number
    * Only contain alpha-numeric characters and underscores

Constants (variables that won't change) should be all uppercase. This isn't required however it is common practice among programmers.

Once a variable is created, you are able to change its value even if it's of a different *type*

```
a = 5
a = 10
a = "hello"
a = True
```

### Data types

As stated previously, the types of variables in python are not declared however values that you assign to variables do have a type nevertheless 

* Integers: 1, -200, 1123123123123123123123123123123
* Complex numbers: 2+3j, -1+1j, 2.5-2.5j (Notice that a j is used as opposed to an i to denote imaginary)
* Floating point numbers: 1.0, -11.27, 999.9
* Strings: "hello world", "1", 'hello world', '1', "", "'quote'", '"quote"'
* Boolean: True, False

#### Strings

Concatenation:
```
a = "hello"
b = "world"
c = a + " " + b
```

Formatting: 

Python 3.6 added f-strings which provide an easy readable way of formatting strings. In order to format a string you must prefix it with `f` or `F` and add any variables or expressions that you want to include in the string within `{}`.

Examples:

```
moduleCode = 139
moduleName = "Web Development Technologies"
print(f"Module name: {moduleName}. Module Code: {moduleCode}")
```

```
daysInAWeek = 7
weeksInAYear = 52
print(f"Days in a year: {daysInAWeek * weeksInAYear}")
```

#### Casting

You may cast a value of one type to a different type through the use of casting functions which are usually named after the type that they cast to.

Examples:
`a = int("1") #Cast from string to integer`
`b = str(2.5) #Cast from float to string`

*Be wary when casting to boolean from a string as anything apart from the empty string will be parsed as True hence bool("False") evaluates to True*


### Operators 

#### Arithmetic Operators
* `+` : Addition and string concatenation
* `-` : Subtraction
* `/` : Division
* `%` : Modulus (Finding the remainder of division)
* `**` : Exponentation
* `//` : Integer division (floor division)

#### Comparison Operators
* `==` : Equality
* `!=` : Inequality
* `>` : Greater than
* `<` : Less than
* `>=` : Greater than or equal to
* `<=` : Less than or equal to

#### Assignment Operators

Any of the arithmetic operators can be combined with `=` to combine the operation with assignment. For example, `a += 5` is equivalent to the expression `a = a + 5`

### Lists

Python does not have built-in support for arrays. Lists are used instead, they differ from arrays as they are dynamic (hence their size can change at runtime) and can store data of different types. **Lists are zero-indexed**.

Initialisation: 
```
aList = []
bList = [1,2,3,4,5,6,7,8,9,10]
cList = ["hello", 1.0, True, 20]
```
List access:
```
bList[0] #Used to access the first element which is 1
bList[4] #Used to access the fith element which is 5
bList[-1] #Used to access the last element which is 10
```

#### Multi-dimensional lists

A list can be an element of another list which allows you to create lists of multiple dimensions:
```
twoDList = [[1,2,3,4],[5,6,7,8],[9,10]]
```

List access is very similar except now two values are used to access an element, the first is the index of the first list and the second is the index of the inner list:
```
twoDList[0][3] #This will return the fourth element of the first list element which is 4.
```
Python includes many useful list functions that handle basic operations such as appending, removing and sorting. You can find out more in the official [documentation](https://docs.python.org/3/tutorial/datastructures.html)

### Tuples

Tuples are similar to lists in the sense that they store a collection of elements however they also adhere to the following restrictions:
    * Elements stored in a tuple must all be of the same type
    * Once a tuple is created, it cannot be changed (hence it is immutable)

A tuple is created using `()` and accessed using an index just like with a list
```
testTuple = (1,2,3,4,5,6,7,8,9)
testTuple[1] #returns the second element which is 2
testTuple[1] = 5 #ERROR: This code will not run as tuples are immutable
```

### Dictionaries

Dictionaries are used to store key:value pairs. You can think of them as a list however instead of using an index to access an element you use a key which can be of almost any type. A dictionary is created using `{}`. The keys do not all have to be of the same type however in practice they almost always are.

```
testDictionary = {"key1" : "value1", "key2" : "value2", "key3" : "value3"}
testDictionary["key1"] #This code will return the value associated with "key1" which is "value1"

unusualDictionary = {"key1" : "value1", 1 : "value2", 0.5: 1} #Also a valid dictionary in python
```

## Conditional Statements
**Pay close attention to the indentation used, in python whitespace counts as syntax hence using incorrect indentation will prevent your code from running**
### If
```
if condition1:
    print("Condition 1 true")
elif condition2:
    print("Condition 2 true")
else:
    print("Neither condition 1 or condition 2 are true")
```

### Match
Since the release of Python 3.10, match statements can be used to control execution flow. They are very similar to switch statements in other languages.

```
match dataToMatch:
    case pattern1:
        print("dataToMatch is equal to pattern1")
    case pattern2:
        print("dataToMatch is equal to pattern2")
    case pattern3:
        print("dataToMatch is equal to pattern3")
    case _:
        print("The _ wildcard is used to execute code when none of the other patterns match")
```

## Iteration

### For
The for loop in python can iterate over any object which is considered iterable (this includes lists, dictionaries and tuples). 

```
for x in iterable:
    #action
```

To iterate over a range of values use the range function
```
for x in range(0,10): #generates a range between 0 and 9 inclusive
    #action
```

### While
```
while condition:
    #action
```

## Functions
Functions in python are defined using the `def` keyword. There is no need to declare a return type and any parameters are defined within `()`

```
def testFunction(arg1, arg2, arg3):
    return "returning this string"
```

You can pass default value to functions using `=` which will be used if not argument is passed to the function call

```
def testFunction2(arg1="default"):
    print(arg1)
```

You can call a function in code by referencing its name and passing any required arguments in `()`

```
result = testFunction(1, 2, "third argument")
```

This is all you really need to know for the module however there is a lot more to defining functions such as argument lists and passing functions as arguments. You can find read about this in the [official python documentation](https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions)

### Function wrappers
Function wrappers (also known as function decorators) allow you to add functionality to existing functions. A function wrapper starts with the `@` symbol. For this module, all you need to know is that they exist as you will be using them in Flask however you won't need to define your own function wrappers.


## Object-oriented Programming
*This section will cover the very basics of OOP in python which is all that is required for the module, check the [official python documentation](https://docs.python.org/3/tutorial/classes.html) for more.*

The `self` keyword is used in code to refer to the current class instance. In **other** languages the `this` keyword is often used instead.

Attributes and methods of an instance are accessed using `.`

Creating a class definition:
```
class className:

    classVar = "this will stay the same among all class instances"

    def __init__(self, value1): #The constructor must be called __init__
        self.attribute1 = value1
        #Other initialisation is done here
    
    def method1(self):
        pass
```

Creating an instance of a class and accessing attributes:
```
instance1 = className("value1")
instance2 = className("value2")
instance3 = className("value3")

instance1.attribute1 #This will return "value1"
instance2.attribute1 #This will return "value"

instance1.classVar
instance2.classVar #Both of these calls return the same value as classVar is a class variable
                   #hence stays the same across instances

instance1.method1() #Methods are also accessed using dot notation
```




