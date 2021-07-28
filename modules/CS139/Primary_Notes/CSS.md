---
layout: CS139
title: CSS
math: true
part: true
contributors:
  - LoudShadow
  - Mat
---


## Introduction
CSS stands for Cascading Style Sheets

Intended to modify the appearance of HTML documents

## Placement of Styles
The code for the stylesheet can be placed in 3 possible locations.

### Inside Respective Tags
This method is often discouraged because it causes HTML code to be very messy and if you want to change the styling, you have to go to individual HTML tags.
`<h1 style ="color:blue"> content </h1>`

### In a Style Tag
Inside the `<head>` tag:
``` html
<style>
 h1 {color:blue;}
</style>
```
This method is used for certain styles.

### In a Separate File
The file containing the stylesheet is then linked in the `<head>` tag. This method is most commonly used.
`<link rel="stylesheet" href="styles.css">`


## Types of Stylesheet

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

## Syntax

CSS is formed from selectors and declarations.

Name | example
--|--
Selector | `h1`
Declaration | `{color:blue;  ....}`
property | `color:`
value | `blue;`

Example:
``` css
h1 {
    color:blue;
    font-size:12px;
}
```

## Box Model

Every element is made form boxes and contains
1. Content
2. Padding
3. Border
4. Margin

These can be use to adjust size and location .
using properties like `margin` and `border`

## Positioning

__Static__ is the default and positions boxes according to the normal flow

Other ways include __fixed__ and __floating__

## Selectors

There are 3 ways of specifying a html element

### Using the Tag Name
This will modify all tags of that type

`h1 {color:blue;}`

### Using a Class Selector
uses to modify just some elements uses `.`

`.large {color:blue;}`

### Using an Id
id is unique used to modify a single element

`#page_title {color:blue;}`

### Attribute Selectors

attribute selectors style HTML elements that contain an attribute
use `[]` to specify an attribute

Selector | Matches
--|--
`[]`| A specific attribute
`[=]`| an attribute with a specific value
`[~=]`| A specific attribute whose value matches at at least one of the words in a space delimited list of words
`[^=]`| A specific attribute whose value begins with a specified value
`[*=]`| A specific attribute whose value contains a substring
`[$=]`| A specific attribute whose value ends with a specified value

Example:

`[title=main]` would match `<h1 title="main">`

`[title*=subtitle]` would match `<h1 title="first_subtitle">`

### Pseudo Selectors

A pseudo-element selector is recognized but does not explicitly point to an html element

    ::first-letter{}
    ::first-line{}
    ::selection{}

A pseudo-class selector targets a particular state or relationship

    a:link{}
    a:visited{}
    a:hover{}
    a:active{}

### Contextual Selectors
A contextual selector targets other tags within the document hierarchy

Selector | Matches | Example
--|--|--
Descendant | A specified element contained within another specified element| div p
Child | A specified element that is a direct child of the specified element | div>p
Adjacent Sibling| A specified element that is the next sibling of the specified element | h3+p
General Sibling | A specified element that shares the same parent as the other specified element | h3~p

## Properties

There are hundreds of properties, some key ones you should know are:

Property-type | Property
--|--
Fonts| font
Fonts | font-family
Fonts | font-size
Fonts | font-style
Fonts | font-weight
Text | letter-spacing
Text | line-height
Text | text-align
Text | text-decoration
Text | text-indent
Text color | color
Background | background
Background | background-color
Background | background-image
Background | background-position
Background | background-repeat
Color | opacity
Borders | border
Borders | border-color
Borders | border-width
Borders | border-style
Borders | border-top , border-left .....
Borders | border-image
Borders | border-radius
Borders | box-shadow
Spacing | padding
Spacing | padding-bottom , padding-left ....
Spacing | margin
Spacing | margin-bottom, marin-left.....
Sizing | height
Sizing | max-height
Sizing | max-width
Sizing | min-height
Sizing | min-width
Sizing | width

Different properties take different values.
* Color properties can use RGB, hex, RGBa .. values
* Size based properties can use px, em , % , in , cm , pt

Know the different value types for the main properties

## Table Styling
### Table Borders
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
### Text Alignment
Text in Tabels can be aligned within the cells
``` css
td {
  text-align: center;
  text-align: left;
  text-align: right;
}
```

### Styling
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
