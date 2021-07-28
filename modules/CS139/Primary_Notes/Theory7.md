---
layout: CS139
title: XML and JSON
math: true
part: true
pre: Theory6
nex: Theory8
---


### XML
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
#### Valid Names
* Can contain Letter, Numbers, and other characters
Names cannot
* Start with a number or punctuation
* Start with the letters XML (case insensitive)
* Cannot contain spaces

#### Attributes
Attributes provide additional information about the data

They may contain metadata , such as software used to create the XML

Can be used to help parse the data

#### Well Formed
XML is well formed if ti meets the following requirements
* The document contains only unicode characters
* None of the special characters appear (e.g < and &)
* Begin, end and empty tags are correctly nested
* Element tags are case-sensitive
* A single root element contains all the other elements


## JSON
Javascript Object Notation

XML can be too clunky needed creating and parsing 

JSON is smaller and can more easily be converted

JSON is less human readable than XML

Data amy or may not exit for example if there are no ratings for a product the
rating data may be empty under some structures an null under others is is important to check that the variables exist if this is the case.

### Data Types
* Number
* String
* Boolean
* Array
* Object (Collection of Key Value Pairs)
* null (empty)

### Syntax
* Data is in Key,value pairs
* Data is comma seperated
* `{ }` hold objects
* `[ ]` hold arrays
* Whitespace is not relevant can make it more readable

### Example
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
### conversion

* `JSON.parse()` Create an object form a json string
* `JSON.stringify()` Create a json string from an object 
 