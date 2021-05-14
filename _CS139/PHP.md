---
layout: CS139
title: PHP
part: true
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

## Simple Commands

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

### NUll Coalescing Operator
`??` can be used to assign a value if a variable is null
`$username= $GET_["username"]??default`

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

# Data Types
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

### Associative Array
Creation:

`$courses=("CS139"=>"Web Dev","CS132"=>"Not A Cult","CS133"=>"Professional Skills");`

You can also do Representation:

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
gh-pages
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

## If

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

## Switch
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
## Array Iteration
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

## Pass by Reference
Adding an `&` in front passes by reference, a variable
change in a function is reflected outside the function scope
```php
function add(&$arg){
    arg+=100;
}
```

## Global
Global scoped variables can be included in functions with global

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


# PHP From Another File
Php can insert the contents of another file

`require <script.php>`, script stops if file can't be found

`include <script.php>`, script attempts to continue if file cant be found

also

`include_once` , `require_once`

Elements such as header or nav bar only need to be made once then can be copied over

# Objects and Classes
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
All object variables need to be specified through `$this->`

## Call Methods
To call a method 
`$object->method(<args>)`

## Constructor
The constructor function is always  `__construct()`

Objects can be created through the `new` keyword

`$James= new Person();`
## Access Modifier
* public
* private 
* protected

can all be used to define access these should replace the `var` keyword or put in front of a function 

## Inheritance
`class Admin extends User`

parent class method id called by 

`parent::method();`


# Cookies
Cookies can be added with the `setcookie()` function
``` php
$expiry = time()+60*60*24*7;
$name="Username";
$value="James";
setcookie($name,$value,$expiry);
```
cookies can be fetched using `$_COOKIE[value]`
``` php
if (isset($_COOKIE["Username"])){
    echo $_COOKIE["Username"];
}
```

# Sessions
To create a session use `session_start()` this must occur
at the start of the file

can be used with `$_SESSION[]`

set with `$_SESSION['Key'] = $value;`

and retrieve with  `$value =$_SESSION['Key'];`

values can be checked with `isset($_SESSION['Key'])`

`session_destroy()` can be used for logging out and removing all values

example to check if a user is logged in

``` php
<?php
session_start();
if (isset($_SESSION['UserID'])){
    // show page content here
}
else{
    header(`location:HomePage.php`);
}
?>
```

# Password Hashing
Passwords should be hashed for storing to ensure security the hashes can be created with `password_hash()`
and verified with `password_verify($password,$hashedPassword)`

``` php
if (isset($_POST['username']) && isset($_POST['password'])){
    $password = $_POST['password'];
    $hashedPassword = getHashedPassword($_POST['username']);
    if (password_verify($password ,$hashedPassword)){
        header(`location:restrictedPage.php`);
    }else{
        header(`location:HomePage.php`);
    }
}else{
    header(`location:HomePage.php`);
}
```

# Login Verification
It is important to verify that a user is logged in before they can access a page

``` php
<?php
require `access.php`;
require_login();
?>
```
can be put at the top of pages to check if the user is logged in.

inside access.php:
``` php
<?php
function require_login(){
    if (!isset($_SESSION['id'])){
        header("Location:index.php");
        exit();
    }
}
?>
```
if `$_SESSION['id']` is set when the user logs in this will prevent users
from accessing pages unless they have logged in
# SQL
first a database connection must be established

`$db =  new SQLite3('database.db');`

the database can then be queried

`$db->exec(<SQL>)` for result less queries

`$db->query(<SQL>)` which returns a result

handing a query result

``` php
$result = $db->query("SELECT * FROM Users");

while ($row = $result->fetchArray()){
    echo $row['username'];
}
```

# Serialization
can be used for storing objects and complex data as a string
`$string = serialize($object);`

the text can then be un-serialized 
`$object= unserialize($string);`

# Reading and Writing Files
two types oif access stream access, will read a small portion at a time. All-in-Memory access can read the entire file to memory.

## Stream Access
similar to 'C'

* `fopen()` - opens the file
* `fgets()` - gets a portion of the file
* `fclose()`- closes the file

## In-memory Access

* `file()` Reads the entire file and returns an array of each line in the file
* `file_get_contents()` Read the entire file and return a string
* `file_put_contents()` Writes the contents of a string variable to a file

# Errors
3 types of errors
* Expected Errors - typing in the wrong name 
* Warnings - thing to warn the user about, start before end dates
* Fatal Errors - things that stop the process, should still be recoverable

## Reporting
error reporting can be done with 
``` php
error_reporting(E_ALL);
ini_set("display_errors",1);
```

# Superglobals
Name | Description
--|--
$Globals | Array For storing data that needs the superglobal scope
$_Cookies | Array of cookie data passed via HTTP request
$_ENV | Array of server environment data
$_FILES | Array of files uploaded to the server
$_GET | Array fo query string data passed to the server via the URL
$_POST | Array fo query string data passed to the server via the HTTP header
$_REQUEST | Array containing the contents of $_GET, $_POST, $_COOKIES
$_SESSION | Array containing session data
$_SERVER | Array containing information about the request and the server


`$_SERVER["HTTP_REFERRER"]` information about where the user came from

`$_FILES` used with post requests HTTP should have a file input type for a form
* `$_FILES["File1"]["name"]` - anme fo the file
* `$_FILES["File1"]["type"]` - e.g img.png
* `$_FILES["File1"]["tmp_name"]` where is was upladed to
* `$_FILES["File1"]["error"]` "UPLOAD_ERR_OK" if no error
* `$_FILES["File1"]["size"]` in bytes

then 
`move_uploaded_file($tmp_file,$new_file);`
