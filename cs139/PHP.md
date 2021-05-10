---
layout: CS139
title: PHP
part: true
pre: Lang3
nex: Lang4
---

# Introductions

PHP is a server side scripting language 

Stands for PHP hypertext programing (go and figure what that stands for)

Released in 1995

Has some issues:

* 30% of vulnerabilities are related to PHP
* Sloppy code leads to errors.

PHP is run on the server side can collect data from:
* databases
* web services
* files
* email
* other software

# Basic
the file name needs to be changes from `.html` to `.php`

all php code must be written inside `<?php` and `?>`

all php statements end with a semicolon

comments are:
* `//single line`
* `/* multi-line */`

## simple commands

`echo` inserts the output into the larger html page including any tags

`echo <p><strong> Hello </strong></p>`

### print f
`print f` produces formatted statements form variables

`printf("String",variables)`

``` php
$product= box;
$weight = 1.756723;
printf("the %s is %.2f kilos",$product,$weight);
```

Specifier | Type
--|--
%f | float
%s | string
%d | decimal

[more here](https://www.php.net/manual/en/function.printf.php)

# Variables
* Variable prefixed with $
* must start with letter or `_`
* only contain alphanumerical characters and `_`
* No spaces
* case sensitive
* Dynamically typed

``` php 
$a = 3;
$b = 4;
echo $a+$b;
```

## constants
Use `define()`
``` php
define("PI",3.141592653);
$pi=PI;
```

# Data types
Scalar types
* integer
* float / double (these are the same)
* boolean 
* string

Compound Types
* Array
* Object

## Strings
 need double quotes

concatenation uses `.`
can use `.=` for append

``` php
$a = "Hello"
$b = "World"

$c = $a." ".$b
$a .= " "
$a .= $a

--
$a -> Hello World
$c -> Hello World
```

## Arrays
Two types 
* Numeric Array
* Associative array

### Numeric Array

Creation:
`$courses=("CS139","CS132","CS133");`

You can also do:

``` php
$courses[0]="CS139";
$courses[1]="CS132";
$courses[2]="CS133";
```
### Associative array
Creation:

`$courses=("CS139"=>"Web Dev","CS132"=>"Not A Cult","CS133"=>"Professional Skills");`

alternatively
ata Representation
# Operators

## Arithmetic Operators

Operator | Name
--|--
`+` | Addition
`-` | Subtraction
`*` | Multiplication
`/` | Division
`%` | Modulus
`++` | Pre/Post increment
`--` | Pre/Post decrement

## Comparison Operators
Operator | Name
--|--
`==` | Equal
`===` | Identical
`!=` | Not Equal
`!===` | Not identical
`<` | Less than
`>` | Greater than
`<=` | Less than or equal
`>=` | Greater than or equal

Identical same value __and__ same type 5 is not identical to "5"

## Logical Operators

Operator | Name
--|--
`&&` | AND
`||` |OR
`!` | NOT

## Array Operators

Operator | Name
--|--
`$arr1 +$arr2` | Union
`$arr1 == $arr2` | Equal
`$arr1 === $arr2` | Identical

# Branching

## IF

similar to Java
``` php
if ($course == "CS139") {
    echo "Web Dev";
} elseif ($course =="CS132"){
    echo "not a cult";
} else{
    echo "Not Web Dev and not not a cult";
}
```
can use `:` instead of {}

## switch
``` php
switch($course){
    case "CS139":
        echo "Web Dev";
    break;
    case "CS132":
        echo "not a cult";
    break;
    default:
        echo "Not Web Dev and not not a cult";
}
```
only judges by equality by if they are identical.

# Looping
## For loop
``` php
for ($x=0; $x <=10; $x++){
    echo "$x <br>";
}
```
## While Loop
``` php
$x=0;
while ($x<=10){
    echo "$x <br>";
    $x++;
}
```
## do while loop
``` php
$i=0;
do {
    echo "$x <br>";
    $x++;
} while ($x<=10);
```
## array iteration
iterate over an array obtaining the value at each location
``` php
foreach($array as $item){
    echo $item;
}
```
for associative arrays
```php
foreach($array as $key => $value){
    echo $key."is".value;
}
```

# Function
Functions that have a return value can also (optionally) have a a return type
``` php
function FunctionName ($arg1,$arg2):string{
    return $arg1.$arg2;
}
```

## pass by reference
adding an `&` in front passes by reference
change in a function is reflected outside the function scope
```php
function add(&$arg){
    arg+=100;
}
```

## global
global scoped variables can be included in functions with global

SHOULD BE AVOIDED

``` php
$a ="a";
$b ="b";
function findAB(){
    global $a,$b
    echo $a.$b
}

```

# HTML Forms
In PHP the data is converted from the requests to associative arrays.
Post requests are `$_POST` get requests are `$_GET`


# PHP from another file
Php can insert the contents of another file

`require <script.php>`, script stops if file can't be found

`include <script.php>`, script attempts to continue if file cant be found

also

`include_once` , `require_once`

Elements such as header or nav bar only need to be made once then can be copied over

# Objects and classes
```php

class Person{
    var $name;
    function get_name(){
        return $this->name;
    }
    function set_name($new _name){
        $this->name=$new_name;
    }
}
```
all object variables need to be specified through `$this->`

## Call methods
to call a method 
`$object->method(<args>)`

## Constructor
the constructor function is always  `__construct()`

## Access Modifier
* public
* private 
* protected

can all be used to define access these should replace the `var` keyword or put in front of a function 

## Inheritance
`class Admin extends User`

parent class method id called by 

`parent::method();`

