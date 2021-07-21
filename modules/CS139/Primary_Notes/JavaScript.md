---
layout: CS139
title: JavaScript
math: true
part: true
pre: PHP
nex: SQL
---
## Introduction

Javascript is an interpreted programming language

 developed by Brendan Eich at Netscape in 1990s

 Formalized as ECMAScript language standard

 Mostly Client side but can be used server side

### Uses

Dynamically creating HTML

Changing existing html

Responding to user events

Validating input

Background upload of data

## Basic

Javascript is written between `<script> </script>` tags in html

Alternatively can be written in an external file using

`<script src="myjs.js" type="text/javascript" charset="utf=8"></script>`

All statement lines end with a colon.

Javascript is executed when the page loads

### Commands

`alert("");` Displays a popup to the user

`document.write("");` Writes content to the web page

`console.log(""):` Can add text to the hidden browser console

### Variables
Variables are loosely typed

Names must start with letters `$` or `_` and are case sensitive

created with `var` keyword

`Var x = 2;`

`var y = "Hello";`

### DataTypes
* strings - text inside single or double quotes
* Numbers - both decimals and integers
* Boolean - true/false
* Arrays
* objects
* Null - Empty variable
* Undefined - unset variable
* Function

### Arrays

Arrays are 0 indexed

``` javaScript
var animals = new Array();
animals[0]="Dog";
animals[1]="Cat";
animals[3]=2;
```
Arrays can sore different object types

#### Common Methods

* length - `animals.length`
* index  - `animals.indexOf("Cat")`

### Functions

a java script function can be created with the keyword `function`

```javascript
function Name(args){

}
```
can return a value using the `return` keyword

## Control Flow
### IF
```javaScript
if (course==`cs139`){
    alert("Web dev");
}else if (course == 'cs132'){
    alert("Not a Cult");
}else{
    alert("Something else");
}
```
### Switch
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
### For Loop
``` javascript
var i;
for (i=0;i<10,i++){
    alert(i);
}
```
### While Loop
``` javascript
var x =0;
while (x<5){
    alert('hello');
    x++;
}
```

## Objects

Objects are a collection of properties similar to Key-value pairs.

`var person = {first_name:"Adam",last_name:"Chester"};`

As variables can be functions methods are handles the same way

Properties can be accessed using dot notation `person.first_name`

Properties can be created arbitrarily `person.age = 60`

### Constructor Function
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
### Classes
Full javascript object classes do exist but were not discussed in the videos.

## Navigating the DOM
Javascript can manipulate the objects within the document object model

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

## Event Handling
one way to handle events is using attributes:

`<h1 onclick="this.innerHTML='changed'"> CLICK ME </h1>`

Function can be used for the onclick attribute

Can be aded programmatically:

`document.getElementById("main").onclick = alert("hello");`

### Forms 

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

## jQuery
JQuery is a framework to shorten document navigation and event handling
    
Attempts to standardize a lot commands across browsers

JQuery can be added in the same was as an external javaScript program

`<script src="js/jquery-1.9.1.min.js" type="text/javascript" charset="utf=8"></script>`

jQuery uses the $ function
### Starting Scripts
Typically it is desirable for scripts to start after the while file has loaded
this can be achieved using the DOM ready event.

`$(document).ready(function(){...});`

When using the jQuery function a jQuery object is crated this wraps the HTML and provided it with additional functionality.

### Magical Objects
* `$('H1')` - all of the H1 elements on a a page
* `$("#header")` - element with id header
* `$('.title')` - elements with a class of title

#### Many Items
There are also several ways fo obtainging the first itme of sevveral
* `$('H1')[0]`
* `$('H1:first')`
* `$('H1').first()`
all get the first element

### Methods

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

### JQuery Events
To bind events in jQuery
1. Give the element an ID
2. Tell jQuery that something should happen to the element
3. Give JQuery the code ot run when the event occurs

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

#### Event Binding
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


### Event Bubbling
DOM elements are nested

When an event is triggered on an element is it is triggered on the parent
clicking on a paragraph also clicks the body

This can be stopped with `event.stopPropagation()` and is placed inside the function.

## Animation
JQuery can do simple animations

* `show()`
* `hide()`
* `fadeIn()`
* `fadeOut()`
* `fadeToggle()`
* `slideUp()`
* `slideDown()`

and more

## AJAX
Traditionally webpages were static. However now new data and information is needed from the server

Ajax Asynchronous JavaScript and XML is a collection of inter related web technologies that can sent and receive data form a server without a full refresh.

Data can be sent in the background the user can do other things 

Data can be returned  as XML

More likely to bs JSON, Javascript Object Notation

### Steps
1. An Event occurs
2. Crate an XMLHttpRequest object
3. Send HTTPRequest
4. Server receives and processes that data
5. Server sends a response to the browser
6. Browser receives response using javascript
7. Update page content

### Implementations

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
### JQuery and AJAX

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
