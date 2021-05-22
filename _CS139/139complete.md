---
layout: combined
mod: CS139
title: CS139 One Page Notes
permalink: /CS139/opnotes
---




# CSS Introduction
CSS stands for Cascading Style Sheets

Intended to modify the appearance of HTML documents

# Placement of Styles
The code for the stylesheet can be placed in 3 possible locations.

## Inside Respective Tags
This method is often discouraged because it causes HTML code to be very messy and if you want to change the styling, you have to go to individual HTML tags.
`<h1 style ="color:blue"> content </h1>`

## In a Style Tag
Inside the `<head>` tag:
``` html
<style>
 h1 {color:blue;}
</style>
```
This method is used for certain styles.

## In a Separate File
The file containing the stylesheet is then linked in the `<head>` tag. This method is most commonly used.
`<link rel="stylesheet" href="styles.css">`


# Types of Stylesheet

There are 3 types of stylesheet

* Author created style sheets
* User created style sheets
* Browser style sheets

These are in decreasing importance the browser will always look for the most
immediate style sheet for any definition 

The browser will __Cascade__ onto the next style sheet up in the hierarchy if
one there is no definition for the current style sheet
 and will be applied in the following order 
1. Browser Default
2. External Stylesheet
3. internal stylesheet (`<head>`)
4. inline styling

# Syntax

CSS is formed from selectors and declarations.

| Name        | example               |
| ----------- | --------------------- |
| Selector    | `h1`                  |
| Declaration | `{color:blue;  ....}` |
| property    | `color:`              |
| value       | `blue;`               |

Example:
``` css
h1 {
    color:blue;
    font-size:12px;
}
```

# Box Model

Every element is made form boxes and contains
1. Content
2. Padding
3. Border
4. Margin

These can be use to adjust size and location .
using properties like `margin` and `border`

# Positioning

__Static__ is the default and positions boxes according to the normal flow

Other ways include __fixed__ and __floating__

# Selectors

There are 3 ways of specifying a html element

## Using the Tag Name
This will modify all tags of that type

`h1 {color:blue;}`

## Using a Class Selector
uses to modify just some elements uses `.`

`.large {color:blue;}`

## Using an Id
id is unique used to modify a single element

`#page_title {color:blue;}`

## Attribute Selectors

attribute selectors style HTML elements that contain an attribute
use `[]` to specify an attribute

| Selector | Matches                                                      |
| -------- | ------------------------------------------------------------ |
| `[]`     | A specific attribute                                         |
| `[=]`    | an attribute with a specific value                           |
| `[~=]`   | A specific attribute whose value matches at at least one of the words in a space delimited list of words |
| `[^=]`   | A specific attribute whose value begins with a specified value |
| `[*=]`   | A specific attribute whose value contains a substring        |
| `[$=]`   | A specific attribute whose value ends with a specified value |

Example:

`[title=main]` would match `<h1 title="main">`

`[title*=subtitle]` would match `<h1 title="first_subtitle">`

## Pseudo Selectors

A pseudo-element selector is recognized but does not explicitly point to an html element

    ::first-letter{}
    ::first-line{}
    ::selection{}

A pseudo-class selector targets a particular state or relationship

    a:link{}
    a:visited{}
    a:hover{}
    a:active{}

## Contextual Selectors
A contextual selector targets other tags within the document hierarchy

| Selector         | Matches                                                      | Example |
| ---------------- | ------------------------------------------------------------ | ------- |
| Descendant       | A specified element contained within another specified element | div p   |
| Child            | A specified element that is a direct child of the specified element | div>p   |
| Adjacent Sibling | A specified element that is the next sibling of the specified element | h3+p    |
| General Sibling  | A specified element that shares the same parent as the other specified element | h3~p    |

# Properties

There are hundreds of properties, some key ones you should know are:

| Property-type | Property                           |
| ------------- | ---------------------------------- |
| Fonts         | font                               |
| Fonts         | font-family                        |
| Fonts         | font-size                          |
| Fonts         | font-style                         |
| Fonts         | font-weight                        |
| Text          | letter-spacing                     |
| Text          | line-height                        |
| Text          | text-align                         |
| Text          | text-decoration                    |
| Text          | text-indent                        |
| Text color    | color                              |
| Background    | background                         |
| Background    | background-color                   |
| Background    | background-image                   |
| Background    | background-position                |
| Background    | background-repeat                  |
| Color         | opacity                            |
| Borders       | border                             |
| Borders       | border-color                       |
| Borders       | border-width                       |
| Borders       | border-style                       |
| Borders       | border-top , border-left .....     |
| Borders       | border-image                       |
| Borders       | border-radius                      |
| Borders       | box-shadow                         |
| Spacing       | padding                            |
| Spacing       | padding-bottom , padding-left .... |
| Spacing       | margin                             |
| Spacing       | margin-bottom, marin-left.....     |
| Sizing        | height                             |
| Sizing        | max-height                         |
| Sizing        | max-width                          |
| Sizing        | min-height                         |
| Sizing        | min-width                          |
| Sizing        | width                              |

Different properties take different values.
* Color properties can use RGB, hex, RGBa .. values
* Size based properties can use px, em , % , in , cm , pt

Know the different value types for the main properties

# Table Styling
## Table Borders
Borders around tables can increase readability

``` css
table, th, td {
  border: 1px solid black;
}
```
The border collapse property collapses the borders into a single line over 2 in parallel
``` css
table {
  border-collapse: collapse;
}
```
## Text Alignment
Text in Tabels can be aligned within the cells
``` css
td {
  text-align: center;
  text-align: left;
  text-align: right;
}
```

## Styling
Tables can be stripted usin `nth-child()`
``` css
tr:nth-child(even) {
    background-color: #f2f2f2;
}
```
color can be altered 
``` css
th {
  background-color: #4CAF50;
  color: white;
}
```



# HTML Introduction

Stands for HyperText Markup Language.

HTML is a __semantic__ language it describes the structure of the document and not the content.

# HTML Nesting Structure
## Parent 
A tag is a parent of another if it immediately encloses the tag.
## Child
A tag is a child of another if it is immediately enclosed by the tag.
## Ancestor
A tag is an ancestor if it is the parent or the parent of an ancestor of a tag.
## Descendant
A tag is an descendant if it is the child or the child of a descendant of a tag.
## Sibling
Two tags are siblings if they share a parent.

# Document Object Model
The HTML document object Model is a tree of the objects within a documet

starts with the document ant root element `<html>` includes all the tags in a structured tree to allow for navigation.

# Basic Syntax
HTML uses code tags for opening and closing to give information about the content inside, opening use `<>` and closing starts with a backslash `</>`

The tags can also contain attributes with additional information like the class or ids.

| Desc         | Code                        |
| ------------ | --------------------------- |
| Opening tag  | `<a href="www.google.com">` |
| element Name | `<a`                        |
| Attribute    | `href="www.google.com"`     |
| content      | `a search engine`           |
| closing tag  | `</a>`                      |

Example of a HTML tag: `<a href="www.google.com"> a search engine </a>`

## Empty Tags

Some tags have no content and so are empty, a closing tag is not needed.
`<meta charset="utf-8">`

# HTML Nesting
All closing tags should occur in the reverse order they were opened. e.g

`<h1> Share your <strong> Travels </strong><h1>`

is correct

`<h1> Share your <strong> Travels <h1></strong>`

is incorrect

# Character Entities
Some symbols need to be represented with special characters so they are formatted correctly.

| Entity    | Description         |
| --------- | ------------------- |
| `&nbsp;`  | non breakable space |
| `&lt;`    | &lt;                |
| `&gt;`    | &gt;                |
| `&copy;`  | &copy;              |
| `&trade;` | &trade;             |


# Block vs Inline
Some elements are blocks these start and end with a new line. Examples are:
* `<h1>`
* `<p>`
* `<ul>`
* `<table>`
* `<div>`

Other elements are inline and can normally be integrated into a line of text without breaking it up.
* `<a>`
* `<img>`
* `<span>`

# Validation
for validation visit 
[W3c](https://validator.w3.org/)
There is also a live html validation extension in VSCODE called: VS Code W3C Validation extention.

# Common Tags

## Doctypes (R)
Every HTML document has a doctype definition 
Variations of HTML, tells the browser what to expect.

`<!DOCTYPE html>`

## HTML (R)
Specifies content as html.

`<html> Content </html>`

## Head (R)
Typically contains information about the page title etc.

`<head>  </head>`

## Title
Title of the page shown in the browser tab.

`<title> Title of the page </title>`

## Meta / Text encoding
character encoding can be declared using the meta tag.

`<meta charset="utf-8">`

## Body (R)
contains the main page of information.

`<body> content </body>`

## Headings 
uses h1 through h6 in decreasing size.

* `<h1>Welcome to cs136</h1>`
* `<h2>Welcome to cs136</h2>`
* .....
* `<h6>Welcome to cs136</h6>`

## A (Links)
produces a link that whn clicking on the content redirects to another page
uses attribute href to specify page.

`<a href="www.google.com"> a search engine </a>`

href can link to external sites but can also link to within the page e.g `href="#top"` will move the page to a tag with id top.

## Img (Image)
Displays an image on the page.

Uses attribute src to specify location.

`alt` attribute is a description for software to interpret the image.

`<img src="file.gif" alt="file">`

## Strong
makes any content bold

`<strong> content </strong>`

## P
specifies a paragraph of text

`<p> paragraph </p>`

## Div (Division)
defines site structure

`<div> content </div>`

## Abbr (Abbreviation)
used to define an abbreviation 

`<abbr title="World Health Organization">WHO</abbr> was founded in 1948`

## Br break
a break similar to newline no content

`<br>`

## Code 
give content a code like look

`<code> this is code </code>`

## Em (emphasis)
provides emphasis usually italics

`<em> no </em>`

## Mark
highlights the content

`<mark> highlight </mark>`

## Small
makes text small

`<small> small text </small>`

## Span 
used to specify text for specific font and color changes

`the sky is <span style="color:blue;font-weight:bold">blue</span>`

## Lists

* ordered list `<ol>`
    * List item `<li>`
* Unordered list `<ul>`
    * List item `<li>`
* descriptive list `<dl>`
    * list terms `<dt>`
    * List descriptions `<dd>`


# Tables
Allows displaying data in rows and columns uses 3 tags.
* `<table> </table>`  overall table
* `<tr> </tr>` table row
* `<td> </td>` table data

example:
``` html
<table>
<tr>
    <td>Name</td>
    <td>Age </td>
<tr>
<tr>
    <td>Kate</td>
    <td>24 </td>
<tr>
<tr>
    <td>James</td>
    <td>35 </td>
<tr>
<tr>
    <td>John</td>
    <td>56 </td>
<tr>
```

Tables default to no lines. To include lines they should be specified in css.

## Modifying tables
### table header
using `<thead>` around the first `<tr>` specifies it as a header row
### table footer
using `<tfoot>` around the last `<tr>` specifies it as a footer row
### caption
Just inside the table a caption can be added using
`<caption> </caption>`

### rowspan

Data can cross multiple rows through the use of rowspan 

`<td rowspan="3"> Data </td>`

### column span
Data can cross multiple columns through the use of colspan 

`<td colspan="2"> Data </td>`

# HTML Forms

These are a way of gathering data form the user specified by `<form>` and providing them to the server
has attributes:
* action - what to do when the data is submitted
* method - The way the data is sent Get or Set
* accept-charset - The charset accepted by the form

`<form method ="post" action="auth.php"`
## Form Elements
A form element allows the user to add information to the form for submission there are several types

The element can also have a name attribute this can be used to reference the data the user entered

### Input
used to select data form the user can have many different types

* text - text input
* password - input only shows dots
* submit - a button the user can use to submit the form
* radio - a circular checkbox can only select one in a group ,grouped by the attribute `name`, need attribute `value`, use `checked` for the default

other types 
* color
* date
* datetime
* datetime-local
* email
* month
* number
* range
* search
* tel
* time
* url
* week
support is patchy and not uniform across browsers
#### Other Attributes

* value - the default value needed to be deleted before entering info 
* placeholder - the suggested value is a ghost value

`<input type="text", name="name">`

### Select
Allows the user to select from pre-chosen options uses option

``` html
<select name="location">
    <option> Choose a country</option>
    <option> France</option>
    <option> United Kingdom </option>
    <option> Germany </option>
</select>
```
in options

attribute `value` can be used but defaults to the content
attribute `selected` can be used to select the default 
## Accessibility
A label can be created with the attribute `for`, by making it equal to an element software can interpret it to aid in accessability for people with assistive tools.
``` html
<label for=first_name>First Name:</label>
<input type="text" name="fname" id="first_name">
```



# JavaScript Introduction

JavaScript is an interpreted programming language

 developed by Brendan Eich at Netscape in 1990s

 Formalized as ECMAScript language standard

 Mostly Client side but can be used server side

 ## Uses

Dynamically creating HTML

Changing existing html

Responding to user events

Validating input

Background upload of data

# Basic

JavaScript is written between `<script> </script>` tags in html

Alternatively can be written in an external file using

`<script src="myjs.js" type="text/javascript" charset="utf=8"></script>`

All statement lines end with a colon.

JavaScript is executed when the page loads

## Commands

`alert("");` Displays a popup to the user

`document.write("");` Writes content to the web page

`console.log(""):` Can add text to the hidden browser console

## Variables
Variables are loosely typed

Names must start with letters `$` or `_` and are case sensitive

created with `var` keyword

`Var x = 2;`

`var y = "Hello";`

## Data Types
* strings - text inside single or double quotes
* Numbers - both decimals and integers
* Boolean - true/false
* Arrays
* objects
* Null - Empty variable
* Undefined - unset variable
* Function

## Arrays

Arrays are 0 indexed

``` javaScript
var animals = new Array();
animals[0]="Dog";
animals[1]="Cat";
animals[3]=2;
```
Arrays can sore different object types

### Common Methods

* length - `animals.length`
* index  - `animals.indexOf("Cat")`

## Functions

a java script function can be created with the keyword `function`

```javascript
function Name(args){

}
```
can return a value using the `return` keyword

# Control Flow
## IF
```javaScript
if (course==`cs139`){
    alert("Web dev");
}else if (course == 'cs132'){
    alert("Not a Cult");
}else{
    alert("Something else");
}
```
## Switch
```Javascript
switch (course){
    case 'cs139':
        alert("Web dev");
        break;
    case 'cs132':
        alert("Not a Cult");
        break;
    default:
        alert("Something else");
}
```
## For Loop
``` javascript
var i;
for (i=0;i<10,i++){
    alert(i);
}
```
## While Loop
``` javascript
var x =0;
while (x<5){
    alert('hello');
    x++;
}
```

# Objects

Objects are a collection of properties similar to Key-value pairs.

`var person = {first_name:"Adam",last_name:"Chester"};`

As variables can be functions methods are handles the same way

Properties can be accessed using dot notation `person.first_name`

Properties can be created arbitrarily `person.age = 60`

## Constructor Function
JavaScript can create an object from a single function 

Uses the `this` keyword to reference object variables 

``` javascript
function Person(firstName,lastName,age){
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.age=age

    this.bio= function(){
        return this.firstName+" "+this.lastName+" is "+this.age+" years old";
        };
}

var person = new Person("John","Smith",60);
alert(person.bio());
```
## Classes
Full JavaScript object classes do exist but were not discussed in the videos.

# Navigating the DOM
JavaScript can manipulate the objects within the document object model

Number of ways to refer to a HTML element

* by ID `document.getElementById("");`
* by tag Name `document.getElementsByTagName("");`
* by the class `document.getElementsByClassName("");`

Changing the inner element:

`document.getElementById("").innerHTML="Changed it";`

Changing the attributes, in this example `src` is the image source attribute:

`document.getElementById("image").src="new.gif";`

Changing the style can be accessed with `style` then altering the style properties:

`document.getElementById("main").style.color="blue";`

other commands
* `<element>.parentNode`
* `document.createElement("")`
* `<element>.InsertBefore(newNode,ReferenceNode)`

elements can be stored in variables

```javascript
var heading = document.getElementById("heading");
heading.innerHTML="Changed it"
```

# Event Handling
one way to handle events is using attributes:

`<h1 onclick="this.innerHTML='changed'"> CLICK ME </h1>`

Function can be used for the onclick attribute

Can be added programmatically:

`document.getElementById("main").onclick = alert("hello");`

## Forms 

Forms have a special event handler called `onsubmit`
```javascript
function validateForm(){
    username = document.getElementById("Username").value
    if (username==null || username==""){
        alert("No username");
        return false;
    }
    return true
}
```
Can be used in the form with:

`<form onsubmit="return validateForm()" action="submit.php">`

# jQuery
JQuery is a framework to shorten document navigation and event handling
    
Attempts to standardize a lot commands across browsers

JQuery can be added in the same was as an external JavaScript program

`<script src="js/jquery-1.9.1.min.js" type="text/javascript" charset="utf=8"></script>`

jQuery uses the $ function
## Starting Scripts
Typically it is desirable for scripts to start after the while file has loaded
this can be achieved using the DOM ready event.

`$(document).ready(function(){...});`

When using the jQuery function a jQuery object is crated this wraps the HTML and provided it with additional functionality.

## Magical Objects
* `$('H1')` - all of the H1 elements on a a page
* `$("#header")` - element with id header
* `$('.title')` - elements with a class of title

### Many Items
There are also several ways of obtaining the first item of several
* `$('H1')[0]`
* `$('H1:first')`
* `$('H1').first()`
all get the first element

## Methods

* `html();` - gets the inner html of an object
* `html('HERE');` - sets the inner html of an object
* `append("More content");` - add content to the end of the element
* `prepend("More content");` - add content to the start of the element
* `remove();` - removes an element

Traversing
* `parent()`
* `children()`
* `siblings()`

Styling
* `addClass("newClass")`
* `removeClass("newClass")`
* `toggleclass("newClass")`
* `hasClass("newClass")`
* `height()`
* `width()`
* `css("background-color")` - gets the css values
* `css("background-color","green")` - sets the css values

I the html content has changed the jQuery variables must be refreshed by calling the jQuery function again

## JQuery Events
To bind events in jQuery
1. Give the element an ID
2. Tell jQuery that something should happen to the element
3. Give JQuery the code to run when the event occurs

Example
HTML
```HTML
<button id='hello'>Say hello</button>
```
JS
``` javascript
$(document).ready(function()){
    $("#hello").click(function(event)){
        alert("hello");
    });
});
```

There are many different Events

Keyboard
* focusIn - user clicks on the element
* focusOut - user leaves element
* keyDown 
* KeyUp
* keyPress - up/down combination

Mouse Events
* click
* dblClick
* hover
* mousedown/ mouseup
* mouseenter / mouseleave


There can be multiple handlers for a single event type

There is no guarantee about what order the events are called

### Event Binding
Events can only be bound when an element exists.

This can be fixed by creating an event listener that captures all squares

Uses JQuery's built in ON
``` javascript
$('#container').on("click",".square",function()){
    $this.css("background-color",generateColor());
});
```
This monitors the parent for events then checks the chid it check if it matches
no updated events are needed for newly created elements


## Event Bubbling
DOM elements are nested

When an event is triggered on an element is it is triggered on the parent
clicking on a paragraph also clicks the body

This can be stopped with `event.stopPropagation()` and is placed inside the function.

# Animation
JQuery can do simple animations

* `show()`
* `hide()`
* `fadeIn()`
* `fadeOut()`
* `fadeToggle()`
* `slideUp()`
* `slideDown()`

and more

# AJAX
Traditionally webpages were static. However now new data and information is needed from the server

Ajax Asynchronous JavaScript and XML is a collection of inter related web technologies that can sent and receive data form a server without a full refresh.

Data can be sent in the background the user can do other things 

Data can be returned  as XML

More likely to be JSON, JavaScript Object Notation

## Steps
1. An Event occurs
2. Crate an XMLHttpRequest object
3. Send HTTPRequest
4. Server receives and processes that data
5. Server sends a response to the browser
6. Browser receives response using JavaScript
7. Update page content

## Implementations

using the XMLHttpRequestObject which can be created using `XMLHttpRequest();`

The request can the be opened using `xmlhttp.open("method","url","asynchronous");`
* Method - typically GET or POST
* URL - the resource location
* asynchronous true/false

To send the data to the server
* `xmlhttp.send():` for GET requests
* `xmlhttp.send(string):` for POST requests

When the request is sent an `onreadystatechange` event is triggered

the `readyState` attribute holds the status of the event as an integer
0. request not initialized
1. Server connection established
2. Request received
3. Processing request
4. Request finished and response complete

The response can be accessed with tht following
* `responseText` - the response data as a string
* `responseXML` - the response data as XML

example:

``` javascript
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}

xmlhttp.open("GET","names.php?var=<DATA>",true);
xmlhttp.send();
```
## JQuery and AJAX

``` javascript
$.get("names.php?var=<DATA>", function(data){
    $("#myDiv").html(data);
});
```
another way

``` javaScript
$.ajax({
    url="/names.php",
    data: "{var:'<DATA>'}"
    success: updatePage();
});
```
* `url`
* `data` - json data to be passed to the server
* `success`- A function to call when the request completes





# PHP Introduction

PHP is a server side scripting language 

Stands for PHP hypertext programming (go and figure what that stands for)

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

| Specifier | Type    |
| --------- | ------- |
| %f        | float   |
| %s        | string  |
| %d        | decimal |

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
* Boolean 
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

| Operator | Name               |
| -------- | ------------------ |
| `+`      | Addition           |
| `-`      | Subtraction        |
| `*`      | Multiplication     |
| `/`      | Division           |
| `%`      | Modulus            |
| `++`     | Pre/Post increment |
| `--`     | Pre/Post decrement |

## Comparison Operators
| Operator | Name                  |
| -------- | --------------------- |
| `==`     | Equal                 |
| `===`    | Identical             |
| `!=`     | Not Equal             |
| `!===`   | Not identical         |
| `<`      | Less than             |
| `>`      | Greater than          |
| `<=`     | Less than or equal    |
| `>=`     | Greater than or equal |

Identical same value __and__ same type 5 is not identical to "5"

## Logical Operators

| Operator | Name |
| -------- | ---- |
| `&&`     | AND  |
| `||`     | OR   |
| `!`      | NOT  |

## Array Operators

| Operator          | Name      |
| ----------------- | --------- |
| `$arr1 +$arr2`    | Union     |
| `$arr1 == $arr2`  | Equal     |
| `$arr1 === $arr2` | Identical |

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
    $arg+=100;
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
two types of access stream access, will read a small portion at a time. All-in-Memory access can read the entire file to memory.

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
| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| $Globals  | Array For storing data that needs the superglobal scope      |
| $_Cookies | Array of cookie data passed via HTTP request                 |
| $_ENV     | Array of server environment data                             |
| $_FILES   | Array of files uploaded to the server                        |
| $_GET     | Array fo query string data passed to the server via the URL  |
| $_POST    | Array fo query string data passed to the server via the HTTP header |
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





# Database Theory

"Keep what changes abd what stays the same separate"

Keep structure and date separate

## SQL
Structures Query Language

interact with a relational database

## Relational Database
Data is linked to other data through the use of, unique id and links/ references

## Database Management
Databases need to be managed

Users, password access rights

Mostly beyond scope of this course

## NoSQL
Store data in Key value Pairs

Similar to accusative arrays

Fast retrieval through hash functions
Uses HAsh functions rather ehn 

## ACID Compliance
ensures transactions are robust
* atomicity - each transaction is a single unit
* consistency - only take the database from one valid state to another
* isolation - Transactions occurring in parallel are result in the same result as transactions in series
* durability - Once a transaction has occurs it will remain regardless of system failure


## Database Table

Place to store data of the same type

Columns are decides on creation

Rows are data that is entered

Unlimited number of rows are available but fixed number of columns.

## Links
### One to One
One record is associated with one and only one record.

* one person has one passport
### One to Many
One record points to many records.

* A User has many posts
* A post has one user

### Many to Many
Many records are related to many records.

* One student attends many courses
* One course is attend by many Students

## Identifiers
Each data row has an ID that can be used to reference the data.

## Schema
A script used to create a database from scratch, used to define tables.

The script may also contain default/ demo values

# Detailed Commands

## Data Types

* integer - whole Numbers
* real - decimal numbers
* text
* varchar (length)- fixed length text
* date
* datetime - date and time
* blob - binary data

### Data Modifiers
#### Auto increment
`id integer PRIMARY KEY`
when inserting values use NULL

## Table Operations
### Create Table
``` sql
CREATE TABLE <table name>(
    <column1> <Datatype>,
    <column2> <Datatype>,
    <column3> <Datatype>,
    <column4> <Datatype>,
);
```

### Delete Table
``` sql
DROP TABLE table1;
```

## Add Data
``` SQL
INSERT INTO table1 VALUES (value1,value2,value3,....);
```
## Updating Records
``` SQL
UPDATE table1 SET column1 = value1 WHERE column2=value2;

Multiple records
UPDATE table1 SET column1 = value1,column2 = value2 WHERE column3=value3;
```

## Deleting Records
``` SQL
DELETE FROM table1 WHERE <column1=value1;
```
## Find Data

``` SQL
SELECT column1,column2,.. FROM table1 WHERE column1=value1;
```
`*` is a wildcard can be used in place of fields for all fields

can add order 
``` SQL
ORDER BY column1,column2 ASC|DESC ;
```

Multiple Tables

``` SQL
Select * from table1,table2 where column1=value2 AND column1=table2.column2;
```





# History of the Internet

## Telephone and Circuit Switching

Circuit switching uses a physical connection for the duration of the connection, a dedicate line is needed for each connection.

## Packet Network

The information is slit up into small chunks and then sent across many different line the line switches between many different packets from deferent sources, allows many people to use a single line for data transmission.

## Internet vs World Wide Web

* Email
* The Word Wide Web
* Online Gaming
* File transfer
* and more

Are all part of the internet the worldwide web is mainly webpages, things you access with a browser.

# Early Web

## pre 1995

Tim Berners-Lee wrote the first web browser (WorldWideWeb), web editor and a separate web server

Static pages of text with inks between them (Hypermedia)

Invented 3 technologies

* Uniform Resource Locator (URL)
* Hypertext Markup Language (HTML)
* HyperText Transfer Protocol (HTTP)

# Web vs Desktop Applications

## Web advantages

* Accessible form any internet enabled computer
* Usable with different operating systems
* Easier to roll out program updates
* Fewer security issues with local storage

##  Web disadvantages
* Need an internet connection
* Data is transmitted over the internet
* Issues over storage licencing use od data
* Websites many not have identical appearance across browsers
* Restrictions to OS resources
* Possible interference form additional plugins



# Static Websites vs Dynamic Websites

## Static Websites

The user makes a page request the sever runs a script and returns the requested page to the user as fixed HTML.

## Dynamic Websites

__Processing occurs on the clients machine__

The user makes a page request the sever runs a script and returns the requested page to the user as HTML and JavaScript.

The JavaScript then may make additional requests to the server and updates
the web page accordingly.

# Client Server Model

## Client Server Model

The client requests data from a server that then then responds

## Peer to Peer

Devices are both requesting an serving data concurrently 

# Data Centres

## Servers

Server's can have many different uses

* Web
* Application
* Database
* Mail
* Media
* Authentication

## Support Hardware

Data centers contain hardware to support and maintain the servers:

* Server racks
* Backup servers
* Air conditioning
* Backup generators
* UPS (uninterruptible power supply (Batteries))

## Data Duplication

In data centers data is duplicated so that if a server breaks then another
server can take over and continue to provide the data

# The Internet

## Communication
The majority of data traves through wires and cables.

Undersea cables are the primary way for continental communication

Satellites and other communication methods may be used but this is generally rare.

## Data Locality
Generally the shortest path is used to obtain data if data is in the UK requests and information typically will not leave the country. If the data is in America then a request will be mad to America. The shortest path is not guaranteed as the internet is a web many different paths exist.

## Packets

Packet's are addressed and then routed to the correct location. Packets are transmitted across many computers on the way to the destination

## Routing

Routing involves checking if the destination is known to a computer and then directing the traffic in the correct location, if the location is not known then another computer higher up the chain is asked.

# Mobile Web applications

Phone and tablets have many constraints
* Lacks hover
* Lack processing power
* Lack screen sizes
* Variety of screen sizes

However rather than having a dedicated web app browser apps can be made 
to run in small browsers on the phone and websites can be converted over.

# GET
A get request is a more simple request with a combination of variables and values

`GET /process.php?title=Central+Park&where=United+States http/1.1`

this has the values in the query string of 
* `title=Central Park`
* `where=United States`

is from 
`<form action="get" action = "process.php">`

This is also found in the url box in browsers
`https://www.bbc.co.uk/search?q=cs139&page=1`

this has the values in the query string of 
* `q=cs1391`
* `page=1`

The query sting is limited to 2048 characters

Typically used to request specific data from the server
## Response
Responds with 3 sections
* __Header__ - status fo the request
* __Body__ - (optional) response to the request

Response codes

* __2##__ codes for successful response
* __3##__ redirection response
* __4##__ codes for client errors e.g bad request
* __5##__ codes for server errors

Common codes

* __200__ Ok
* __301__ Moved Permanently
* __304__ Not Modified
* __307__ Temporary redirect
* __400__ Bad request
* __401__ Unauthorized
* __404__ Not found
* __414__ Request URI too long
* __500__ InternalServer Error

# POST
This request is encoded within the header for the request the query string can can't be seen within the URL browser

Has a longer Data allowance

Typically used to send data to the server forms etc.



# Protocols
A communication Standard so that computers can transfer data and instructions accurately.


# Network Layers
There are 4 (in this course) Network layers each have different protocols and are responsible for parts of data transmission.
## Application Layer

Many protocols
* __HTTP__ Hypertext Transfer Protocol used for web communication
* __FTP__  File Transfer Protocol used for transferring files
* __POP/IMAP/SMTP__ Email protocols for transferring and storing email
* __DNS__ Domain name service for resolving domain names to IP addresses

### HTTP
An Application Protocol for hypermedia information

standard response request

Development by Internet Engineering Task Force (IETF) and World Wide Web Consortium (W3C)

## Transport Layer
Ensures Transmissions arrive in order an without error
* TCP
* UDP


## Internet Layer
Establishes connection, routing and addressing
* IPV4
* IPV6
An IP address is needed by every computer on the internet

### IPV4

Uses 4x8-bit numbers so 4,294,967,296 addresses
they are now gone.

> Reserved Addresses
> * 127.0.0.1 - LocalHost (the computer itself)
> * 192.168.\*.\* - Private Networks
> * 10.0.\*.\* - Private Networks
>
> There are other reserved addresses

#### NAT Network Address Translation
Used in part to overcome the shortage of IPV4 addresses

* A device connects to a router
* The router opens a port and 
* The router connects to the external resource
* Data is passed through the router to the device

The port number is added to the end of an Ip address
e.g `213.31.218.101:5001` is port `5001` at address `213.31.218.101`

A single IP address is need for the router all of the internal computers use 
one of the reserved addresses for private networks

### IPV6

Uses 8x16-bit numbers 340 undecillion numbers (a lot)
## Link Layer
Responsible for transmission of raw bits
*MAC


# Domain Name 
DNS Domain Name system acts an a contact list for servers

Translates Human readable Name to IP addresses

Hierarchical distributed naming system

The Domain Name is Linked to an IP address, e.g `www.google.com` would be given an ip address that can be used to communicate with the servers

can be broken down 

* `Server1.` -  Fourth level
* `www.`     - Third-Level
* `FunCode.` - Second Level
* `com`      - Top-Level Domain (TLD)

`Server1.www.FunCode.com`

A tree of domain Names are created.

Root Zone (TLD) is controlled by the Internet Assigned Numbers Authority (IANA)

Different registrars assign domain names beneath this

Registrars check with interNIC for the names

Domain names are case insensitive

## Resolving A Domain Name
Default Base

When connecting to a network the computer is given a DNS server (root)

When Resolving a domain name
* The computer asks the root server
* The root server provides the top level domain
* The top level domain which provides a sub domain server
* Repeat until the address is found

### Caching
The previous steps are extensive so DNS caching is used.
* The computer points to a caching server
* The caching server checks if it has the address in memory
    * If it does return the memory
    * If not perform the other steps
* Any requests are saved to memory for next time.

DNS records have a TTL (time to live) which dictates how ling they are valid for

# URL

Made form several steps
| Name         | Example         |
| ------------ | --------------- |
| Protocol     | http            |
| Domain       | www.FunCode.com |
| Path         | index.php       |
| Query String | page=17         |
| Fragment     | article         |

`http://www.FunCode.com/index.php?page=17#article`


`ftp://example.com/abc.txt` -> sends an FTP request on port 21
`http://example.com/abc.txt` -> sends an HTTP request on port 80

No guarantee of a response 

## Path 
    A request requests a file the path specifies the file
    
    / is the root folder for the webserver
    
    if a file is not specified one is usually selected usually index.html
    
    path is case sensitive

## Query String : 
[SEE GET](Theory3.html)

## Fragment

Requests a portion of a page.

Browser will usually jump to the location in the page



# Web Browsers

Web browsers interprets data into one in a recognized form

Converting HTML page and rendering as a readable web page

Each browser behaved differently and __loosely__ conform to standards

Each page makes multiple requests

Local caching can reduce load times

Most offer additional features, Search engine auto complete etc...

# Web Servers

Typically powerful computer to respond to HTTP requests.

Often running NGINX or Apache

Also contains
* Operating System (Linux, Windows....)
* Database Software (MySQL , MongoDB)
* Scripting Language (PHP, python..)

# State
HTTP is a state-less protocol , in a local process the computer only knowns about current memory and instructions

The Server treats every request as a completely new request

Many servers can be responding to many users making it hard to store data.

Rest is used to transfer the current state of the communication between the client and the server. Most common operations are GET and POST

## Solutions
there are 3 solutions to store state across requests

### Query Strings
limited to 2048 on a get Request
A simple store of variables and names

Typically used for requesting Data from a server

Can alow for more dynamic URLS by having a more unique query string that can 
be more easily interpreted

### Cookies

Data unique to the client is created by the server

The cookie is sent to the client when the first request is made

The client includes the cookie in subsequent requests

Cookies can expire - Server sets this

### Sessions

Store state like cookies but just for the time the user is active with the site



# Hashing Algorithms

* __md5__ - easily calculated but clashes have been found
* __sha1__ - (160 bits) easily calculated
* __Bcrypt__ - current best recommendation

Passwords are still susceptible to dictionary attacks

Passwords should be unique when stored

## Salt
a salt is a random value for each user and is included when checking the password. Can be stored alongside the password in the database.

* 11:11:23 + "Password" => asdfkjh67fasf69d8f6aadf4w8.....
* 22:21:23 + "Password" => flkafj948rj9fjsd9cnyrur94jrf....

harder to crack many passwords
only needed for SHA1 php `password_hash` adds salt automatically

# Redirect
When submitting a from the page should redirect to a confirmation page to prevent re entry , and prevent re-submit through refreshing the page. causing a double submit.

# Query Strings
Query strings can be modified by the user
and should be checked for validity nothing should be assumed 

known as sanitizing / validating input

# HTTPS

Https is a protocol for secure communication over a network, built on the SSL/TLS protocol.

the HTTP is encrypted but is not changed.

HTTPS should be used for all sensitive data.

Now all services opt for HTTPS and HTTP is rarely used.

## Operation

1. The client sends a list specifications to the server
    * what SSL/TLS version it is running
    * What ciphersuits it wants to use
    * What compression methods it wants to use
2. The server selects the highest SSL/TLS version and agrees on ciphersuits and compression
3. The server sends a certificate to the client which must
    * be trusted by the client explicitly
    * be signed by a party the client trusts
4. The server has also sends an asymmetric key continued with the certificate
5. The client and server setup symmetric key encryption
6. All communication is then encrypted
7. The server then verifies the MAC
### Public Key 
These are the keys that are used to encrypt data asymmetrically.
They are distributed with a certificate signed by a certificate authority.
### Certificate Authority
These are 3rd parties and the public keys are installed with OS/ browser establishing trust and sign certificates to verify identity.

Signatures can be compared with the public key to ensure identity.

Issuing a certificate is done when a domain registrant can prove they own the domain

## Drawbacks
Encryption algorithms can be computationally intensive

Dedicated and faster hardware generally now makes this negligible

## Man in the Middle
a machine sits in the middle and read the messages

even if keys are transmitted fake keys can be made can can be decrypted in the middle

By signing certificated fake keys cannot be made

# SQL Injection
Transmitting SQL strings to modify the database request

Consider the defaut request
`"SELECT * FROM users WHERE name ='"+UserName+"';"`

By adding ``or '1'=1` to a username entry box
the query becomes 

`"SELECT * FROM users WHERE name = '' or '1'=1;"`

this would return all users from the database

Other issues could be destroying databases or modifying entries.

## Prevention
The use of parameterized statements that has placeholder values where the data can be added later 

``` php
$stmt= $db->prepare("Select bar FORM foo WHERE id=;id");
$stmt->bindValue(";id",1,SQLITE3_INTEGER);
$result = $stmt-> execute();
```
This treats all data as data and never as instructions.

Alternatively `addslashes()` can be used to escape any characters but is not a preferred method

Other additional ensures can be database access management such as limits on deletion

# Session Sniffing
An attacker observers communication between a server and a victim , Cookies and session data could be reconstructed which could then be used to impersonate the victim.

# Session Fixation 
An attacker obtains a session ID form the server
The attacker then forces the session id of the victim to be identical to theirs
The victim logs on, the attacker can then use their session id

# XSS
Cross Site scripting, Injects client script into webpages

Accounts for 84% of all security Vulnerabilities documents by Symantec in 2007

Non-Persistent data is provided by a client and is used by a server without proper sanitization. The content is uploaded back to the page could be provided by clicking in a link like a GET request

consider 
```php
$name =$_GET['name'];
echo "Hi $name!";
```
the user gould be given a link with HTTP / javascript as name the javascript would then be run by the browser.

this should be avoided by filtering

`$name= filter_input(INPUT_GET,'name',FILTER_SANITIZE_STRING);`

and output should be escaped

```PHP
$name= filter_input(INPUT_GET,'name',FILTER_SANITIZE_STRING);
echo 'Hi '.htmlspecialchars($name,ENT_COMPAT,'UTF-8')
```

The recommendation is to store the data in as raw form as possible and only convert when it is time to output it.

## Persistent-XSS
When data is stored to a database then redisplayed later for a user, e.g a comment.

All data should be escaped.

# Directory traversal

A user many insert a path outside the web

Restrict access to only some directories (whitelisting)

Convert paths to absolute and ensure they are in the correct directory

# PHP-CGI Vulnerabilities

PHP-CGI  had the option to server the php source 

another option allows the setting of variables this could allow variable and variable manipulation this should be disable d in sever settings

## Other Configuration Advice
`allow_url_fopen` - indicates wether remote files can be downloaded
                    should be off
                    
`allow_url_include` - indicated wether scripts can include/ require remote files
turn off if not needed



## XML

Extensible MArkup language
Similar to HTML

Human and machine readable

emphasis's simplicity  generality and usability

Textual data format

RSS, Atom SOAP are all XML formatted

An XML Element is everything from the start tag to the end tag

XML element is everything form the start tot he end tag

No standard for names aside form the software creating and interpreting the data

* __Structure__ - Defining appropriate tag names
* __Content__ - The data contained within the structure


Element may contain
    Other Elements
    test
    attributes

an Example Food Menu:
``` XML
<menu>
    <food>
        <name> Pizza <name>
        <price currency="£"> 50.00 </price>
    </food>
    <food>
        <name> Pasta <name>
        <price currency="£"> 25.00 </price>
    </food>
    <drink>
        <name> Red Wine <name>
        <price currency="£"> 20.00 <price>
        <volume unit="cl"> 200 </volume>
    </drink>
</menu>
```
### Valid Names
* Can contain Letter, Numbers, and other characters
Names cannot
* Start with a number or punctuation
* Start with the letters XML (case insensitive)
* Cannot contain spaces

### Attributes
Attributes provide additional information about the data

They may contain metadata , such as software used to create the XML

Can be used to help parse the data

### Well Formed
XML is well formed if ti meets the following requirements
* The document contains only unicode characters
* None of the special characters appear (e.g < and &)
* Begin, end and empty tags are correctly nested
* Element tags are case-sensitive
* A single root element contains all the other elements


# JSON
Javascript Object Notation

XML can be too clunky needed creating and parsing 

JSON is smaller and can more easily be converted

JSON is less human readable than XML

Data amy or may not exit for example if there are no ratings for a product the
rating data may be empty under some structures an null under others is is important to check that the variables exist if this is the case.

## Data Types
* Number
* String
* Boolean
* Array
* Object (Collection of Key Value Pairs)
* null (empty)

## Syntax
* Data is in Key,value pairs
* Data is comma seperated
* `{ }` hold objects
* `[ ]` hold arrays
* Whitespace is not relevant can make it more readable

## Example
``` JSON
{
    "Food" : [
        {
            "Name" : "Pizza",
            "Price" : 50.00
        },
        {
            "Name" : "Pasta",
            "Price" : 25.00
        }
    ]
    ,
    "Drink" : [        
        {
            "Name" : "Red Wine",
            "Price" : 20.00,
            "volume" : 200
        }
    ]
}

```
## conversion

* `JSON.parse()` Create an object form a json string
* `JSON.stringify()` Create a json string from an object 



# Usability

Usability is Money

Users will have a poor experience and they won't use the site again 

Should consider usability for all users not just the developer 

## Rules of Interaction Design

* Understand the Computer - Limitations, capacities tools and platforms
* Understand People - Phycology, social aspects and human error
* Understand Human Error - Human Error is common

An unclear interface is often blamed on user error when it is actually designer error

User centered design
1. Put the user first
2. Keep the user in the centre
2. Remember the user at the end

# Software Development Lifecycle
1. Requirements capture
2. Design
3. implementation
4. Verification
5. Maintenance

## Requirements Capture 

### Elicitation
work with the stakeholder
Interviews and Questionnaires - ask users
Ethnography - observe users
Scenarios & stories - real life examples

### Types of Requirements
* Functional
    * A service provided by the system
    * What it should not do
* Non Functional
    * Constrains on the functions
    * can affect the whole system

### Specification
What the system does not how it does it

Describe using:
* Natural Language - easy for anyone
* Structured Language - pseudoscope
* graphical notation - paper prototypes
    * Cheap and easy to create
    * easy to edit
* Design language - Cant be used by everyone
* Mathematical specification - very precise

# Usability
* Learn-ability - How easy it to accomplish basic tasks on first encounter
* Efficiency - Once users have performed the design, how quicly can they perform tasks?
* Memorability - When users return to the interface how easily can they use it again
* Errors - How many, What are they , Are they recoverable
* Satisfaction - How pleasant is the design 

## Visibility
How easy is it for the user to recognize and use a control function. A more visible function is easier to use. Position of the controls and what they do is also important 

## Affordance
Properties of an object, what can be done with it.

When you first see something how do you know what to do with it?
* Text
* Icons
* Instructions

Don't make non-working buttons or things that don't look like buttons

## Constraints
Limiting the cations the user can take at any one time

Common is deactivating certain menu options by shading and restricting use

* __Physical__ - DVDs , USB, Keyboard : can only be pressed
* __Logical__ - The users understanding of how the world works and allows the user to deduce what happens next
* __Cultural__ - Cultural conventions: A red light means stop / warning almost anywhere it is shown in the western world but in China celebrates new year and brings good luck. This is a result of culture and fairly arbitrary not any form of logical process. 

## Feedback
Gives the user a response to an action and what has been accomplished could be
* __Visual__ - hourGlass , new page load
* __Auditory__ - Beep on mistake
* __Tactile__ - Keyboard , vibration
* __Verbal__ - Warnings or welcome messages

## Mapping 
Relationship between the controls and their effect

__Good__ - Steering Wheels, Slider Bars

__Poor__ - Taps: which side , Light switch: Which light?

## Consistency 
Similar operations for similar tasks

Cut and pase in the same menu
File Menu top left

Similar both within systems and cross systems / applications (Xbox controller and PlayStation are similar)

# Usability Heuristics
* __Visibility of System Status__ - Keep users informed of status by providing feedback e.g 1/10 
* __Match Between system and Real World__- Use user's language rather than systems terms
* __User Control and Freedom__ = Provide "escape routes" for users (undo)
* __Consistency and Standards__ - Avoid making users wonder if deferent terms mean the same thing (apply / save)
* __Error prevention__ - Prevent users form making errors (Do you want to save)
* __Recognition rather then recall__ - Make objects ,actions and objects visible
* __Flexibility and Efficiency of use__ - Provide accelerators that allow experts to do things faster
* __Aesthetic and Minimalist Design__ - Avoid irrelevant functions or information
* __Help users recognize, diagnose and recover from error__ - Use Plain language to describe the error. Be informative and non-technical
* __Help and Documentation__ - Provide information that is easily searched and provides solutions

# Accessibility and the Web
Inclusive practice of making websites usable for all abilities

Required by Equality Act 2010
* Meet level AA of the web content Accessibility Guidelines (WCAG 2.1)
* Otherwise: you could be sued for discrimination

The site should
* Programed using semantically meaningful HTML
* Has text equivalents for images
* Meaningful link names

## Needs
__Visual__ - Blindness, poor vision , colour Blindness
__Motor__ - Fine motor control , tremors, slowness
__Auditory__ - Deafness
__Seizures__ - Epilepsy form flashing lights
__Cognitive__ - Learning difficulties (dyslexia,dyscalculia) memory problems

## Examples
* Making images/ text enlargeable with functionality or browser CSS
* Underline Links - for colour blind people
* Make clickable areas large - Helps users with poor motor control

## Assistive Technologies
* __Screen Reading Software__ - Reads to the user with synthesized speech
* __Braille Terminals__ - Outputs text as Braille
* __Screen Magnification__
* __Speech Recognition__
* __Large TrackBalls__

## WCAG
Web content accessibility Guidelines (WCAG) are published by the Web Accessibility initiative 
WCAG 2.0 published in 2008 and became an ISO standard in 2012
WCAG 2.1 published in 2018

## Principles Behind the Quidlines
* __Perceivable__ - Information should pe presented to users in ways they can perceive
* __Operable__ - User interface components and navigation must be operable
* __Understandable__ - Information and the operation of user interface must be understandable 
* __Robust__ - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

# Evaluation and Testing

## Evaluation
* Gather Data about the usability of the design
    * what the user does
    * The characteristics of the user
    * The environment and the context where the evaluation will take place
    * The nature of the artefact being examined

Types of evaluation
* __Formative Evaluation__ - Evaluation of an existing product, Predictive evaluation
* __Summative Evaluation__ - Evaluation at the completion of a product

Evaluation should be done regularly and after each step in the product design development and testing.

## Analytical Evaluation
Include Keystroke Model
Measure
* k (Key-stroking)
* P (Pointing)
* H (Homing)
* D (Drawing)
* M (Mental timing of the operator)
* R (Response time fo the system)

## Observational Evaluation
* Observer users interacting with the system
* Users complete a et of predetermined tasks
* Users can be asked to "Think aloud" - give description of what they are doing and thinking about
* Their thoughts are analysed later
* Assess the extent of System functionality
* Assess the effect of the interface on the user
* Identify specific problems

## Usability Testing
* Introduce a list of tasks
* Watch Quietly
* Record behavior (take notes, recorded)

## Measuring Usability
* Ratio of successes to failures
* Time to compete a task
* Number of errors made
* Number fo times the user expresses frustration



# Three Tier Architecture

* Web Tier
    * Handles requests 
    * Serves static assets
    * (apache)
* Application tier
    * Application specific logic
    * (PHP C++ C# ...)
* Database Tier
    * File storage
    * (SQL MongoDB ...)


# Scaling
## Vertical Scaling
An older way of scaling or for small companies

If the older server is too small

Buy a bigger server

Fairly practical 
    * can fit 3TB of RAM in a 1u server
    * a Standard rack is 42u

### Advantages
* Can buy a small system now then expand later
* Minimizes immediate capital expenditure

### Disadvantages
* Whole machine needs to be replaced to scale up
* Replacing the machine leads to downtime
* Harder to scale down

## Horizontal Scaling
Separate the database to a separate computer

Multiple servers can be setup to communicate with the single database computer

Load cam be spread across the servers

Any requests are sorted by a __Load Balancer__ to ensure that all server are equally loaded

Load balancing algorithms 
* __Round Robin__ - requests sent to each server in turn
* __Weighted round robin__ - Request sent to each server in turn but also determined by a weighting for each server
* __Least active sessions__ - requests are sent to the most lightly loaded server
### Advantages
* The individual computers are cheaper
* Built in redundancy if a server breaks the others can continue
*  Easily add more servers

### Disadvantages
* Higher upfront costs
* More complex systems, More Maintenance needed

## Cloud Based Infrastructure
Cloud computing can allow users to rent servers

Servers can be leased by the hour

Software can monitor changes and boot up / shutdown servers to scale with demand

## Caches
Results of heavy computation can be cached

Calculations does nto need to be run again

## Message Queues
Applications hav long running tasks

Warning can take a long time

Applications can drop messages into the queue which are then processed by software which listen's to the queue


# Measuring Performance
There are different Metrics

* End to End response time
    * Time takes form issuing a request to receiving a response
    * measures the application as the user sees it
    * Needs to be done for each request type
    * use JMeter, Apache BEnchmark , siege
* Site Response time
    * Time taken for the server to process a request
* Request Throughput
    * number of requests processed by the server per second
* Test for concurrent users
    * A test on user capacity

__A system under load will perform differently to an idle system__

When specifying performance percentiles are used as targets.

    "95% of all requests should be processed in less than 5 seconds.
    The maximum acceptable processing time is 60 seconds"

Users expect a site ro be responsive.

A poor experience will cause page abandonment. 

## Throughput
How many responses a system can service per unit time

Range of requests

Simulate possible user actions

Each request represents a different proportion of application actions



# Mobile Sites

Large amount of mobile web traffic over the past few years

Different interface
* smaller screens
* Touch Based Interaction

Two techniques
* Responsive Web design
* Separate mobile platforms

## Responsive Web Design
using an advanced css feature is `media`

CAn be used to access the device
* Height/ width of Window
* Height/ width of device
* Orientation - landscape / portrait
* Resolution

`media` can be used
* In the CSS files
* To add different css files in the head element

Adding to the CSS file example

``` css
@media only screen and (max-device-width: 480px){
    div#Wrapper {
        width: 400px
    }
    #navigation {
        float: none;
        width: auto;
    }
}
```
These are applied only to screens smaller than 480px wide

These also override any other styles specified elsewhere

Easier then rewriting pages

## Separate Mobile Layout
Previously common not so anymore

Redirects can be done based on the browsers user agent based in the header

can access the user agent against `$_SERVER["HTTP_USER_AGENT"]`

however needs updating as new devices come out

* Pros
    * Easy to create fixed views
    * Hard to dynamically cater to all screen sizes
* Cons
    * Many not work if new devices are created
    * Can be a lot of work to double the number of pages
    * Two sets of pages need updating

# Best?
Each has its merits

Some content can work best with different designs



# Development

## Testing checklist

* Functional Testing
    * Test all pages for errors
    * Test all forms
        * Check the results
        * Check that validation is working correctly
* Usability Testing
    * Is navigation easy
    * Is the content correct
    * Links to help docs
* Compatibility Testing
    * Across browsers
        * Chrome
        * Firefox
        * Safari
        * ...
    * Mobile Devices
    * What happens on unsupported browsers?
* Performance Testing
    * How fast is the application?
    * Can the site be optimized?
        * Caching data/ assets
        * More Efficient queries
* Security Testing
    * SQL , XSS injection attacks
    * Update policy
    * Software stack, correct settings, updated software etc...

## Test Driven Development

Writing code to satisfy tests

Should know what your code need to do before it is written

Write the test before writing the code

* Red
    * Write a failing test, should stat what needs to happen
* Green
    * Code Meeds the test
* Refactor
    * Make the code safe, secure and beautiful

Run Test frequently 

Tests can be run automatically on submission to the central repository

# Modern Web
Not always written in PHP

Facebook use a PHP -> C++ compiler for performance reasons

PHP Frameworks can do the heavy lifting

Other language
* Ruby on rails
* Scala
* Play Framework

Many Technologies are combined to build a web application

## Ruby
* General purpose
* OOP and functional styles are supported
* Large software library
## Rails
Collection of libraries that work together
* __Active Record__ - Object relational mapping for database entities
* __ActiveResource__ - For web services
* __ActionMailer__ - Manages Email Functionality
* __ActionPack__ - Manages mapping URLs to correct applications

# Front end

some tips 
* Learn photoshop for simple mockups
* Learn ins/outs of Javascript
* Find out about browser inconsistencies

## Frameworks
* Javascript
    * Angular.js
    * React.js
    * Vue.js
* Other
    * Django (Python)
    * Flask  (Python)

## CSS
Css can be difficult

Sass extends css syntax to offer nested rules, named variables , mixins

This then compiles down to css

# Back End
tips
* Looks at you language / framework handles background jobs
* Look at cloud based storage
* Ensure you can use web services
* Work out how to do proper performance testing
* Learn about the software stack









# Deploying Applications

## Registering a Domain Name
* Make it memorable
* Shorter is better
* Most registrars charge £10 - £12 per year

## Server for Applications
* use a small computer you own
* Use a shard host with the domain registrar of Platform as a service
    * Advantages
        * Server is preconfigured
        * Simple to use
    * Disadvantages
        * Large cost as scale 
        * Limited control over software stack
        * May not be able to run certain messages e.g Message Queues
* Use a cloud based virtual server
    * Advantages
        * Can have fill control over the software stack
        * Cheap to run
    * Disadvantages
        * Security can be your problem
        * Limited Hardware
* Buy a server and find a data centre
    * Advantages
        * Free Hardware choice
        * Full software choice
    * Disadvantages
        * Security
        * Cost
* Build you own data centre
    * Disadvantages
        * Expensive

## Software Stack Choices
Database options include
* mySQL
* PostgreSQL

Many different versions __Don't use SQLite3__

Webserver Apache / nginx are both good choices

## Configuring the System
After the OS is installed the software stack can be installed form the source or with a package manager

1. Install apache `apt-get install apache2`
2. Setup the virtual `host file in /etc/apache2/sites-available/example.com`
3. Create the directories `/srv/www/example.com/public_html` and `logs`
4. Enable the sire `a2ensite example.com`
5. Reload apache `service apache reload`

Installing mysql

1. `apt-get install mysql-server`
2. Secure the basic installation `mysql_secure_installation`
3. Start a database session `mysql -u root -p`
4. Create a user for the application
5. Create a database for you application
6. Grant privileges for your application

Installing PHP

1. `apt-get install php8.0 php8.0-mysql`
2. restart apache `service apache2 reload`

Additional Software
1. __Imagemagik__ - Manipulating uploaded images
2. __sendmail__ - Acts as a mail server
3. __logrotate__ - To rotate the log files and delete old ones

## Updating the DNS
1. Got to the registrar and register the IP address with the Domain Name
2. Add a record for `www.` which points to the server
3. Save changes
4. It can take some time for any changes to propagate

## Securing the Server
As a minimum always
* Install `fail2ban` blocks ssh users form an IP for failed logins
* Configure the firewall to only accept SSH and HTTP(s) traffic
* Modify SSH to only accept key based logins from non designated IPs

## Maintenance
* Keep an eye on the server
* Need to install monitoring Software to alert you to issues
* Check logs on a daily basis
    * Setup an email script
* Monitor usage to ensure everyone can use the site
