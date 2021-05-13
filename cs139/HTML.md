---
layout: CS139
title: HTML
math: true
part: true
nex: CSS
---

# Introduction
Stands for HyperText Markup Language.

HTML is a __semantic__ language it describes the structure of the document and not the content.

# HTML Nesting structure
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

Desc| Code
----|-------
Opening tag | `<a href="www.google.com">`
element Name| `<a`
Attribute   | `href="www.google.com"`
content     | `a search engine`
closing tag | `</a>`

Example of a HTML tag: `<a href="www.google.com"> a search engine </a>`

## Empty tags

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

Entity | Description
---|---
`&nbsp;` | non breakable space
`&lt;`|&lt;
`&gt;`|&gt;
`&copy;`| &copy;
`&trade;`| &trade;


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
## Form elements
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
#### other attributes

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