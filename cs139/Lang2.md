---
layout: CS132
title: CSS
math: true
part: true
---


# Introduction
Stands for Cascading Style Sheets

Intended to modify the appearance of HTML documents

# location of styles
on an html page a style can be in 3 locations

## in the tag (discouraged)
`<h1 style ="color:blue"> content </h1>`

## In a special style tag
in `<head>`:
``` html
<style>
 h1 {color:blue;}
</style>
```
## in a separate file
linked in head
`<link rel="stylesheet" href="styles.css">`


# Types of stylesheet

There are 3 types of stylesheet

* Author created style sheets
* User created style sheets
* Browser style sheets

these are in decreasing importance the browser will always look for the most
immediate style sheet for any definition 

The browser will __Cascade__ onto the next style sheet up in the hierarchy if
one there is no definition for the current style sheet
 and will be applied in the following order 
1. Browser Default
2. External Stylesheet
3. internal stylesheet (`<head>`)
4. inline styling
# syntax

css is formed from Selectors and decelerations

Name | example
--|--
Selector | `h1`
Declaration | `{color:blue;  ....}`
property | `color:`
value | `blue;`

together:
``` css
h1 {
    color:blue;
    font-size:12px;
}
```

# box model

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

## using the tag name
This will modify all tags of that type

`h1 {color:blue;}`

## using a class selector
uses to modify just some elements uses `.`

`.large {color:blue;}`

## using an id
id is unique used to modify a single element

`#page_title {color:blue;}`

## attribute selectors

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

e.g

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

Selector | matches | Example
--|--|--
Descendant | A specified element contained within another specified element| div p
Child | A specified element that is a direct child of the specified element | div>p
Adjacent Sibling| A specified element that is the next sibling of the specified element | h3+p
General Sibling | A specified element that shares the same parent as the other specified element | h3~p

# properties

There are hundreds of properties a few key ones:

Property-type | Property
--|--
fonts| font
fonts | font-family
fonts|font-size
fonts|font-style
fonts|font-weight
text| letter-spacing
text| line-height
text| text-align
text| text-decoration
text|text-indent
color and bg| background
color and bg| background-color
color and bg| background-image
color and bg| background-position
color and bg| background-repeat
color and bg| box-shadow
color and bg| color
color and bg| opacity
borders | border
borders | border-color
borders | border-width
borders | border-style
borders | border-top , border-left .....
borders | border-image
borders | border-radius
spacing | padding
spacing | padding-bottom , padding-left ....
spacing | margin
spacing | margin-bottom, marin-left.....
sizing | height
sizing | max-height
sizing | max-width
sizing | min-height
sizing | min-width
sizing | width


    different properties take different values

    colors use RGB, hex, RGBa .. 
    Sizes use px, em , % , in , cm , pt



# Table styling
    TO DO
    