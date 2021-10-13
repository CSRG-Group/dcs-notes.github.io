---
layout: notes
title: Relational Data Model
math: true
part: true
---
## Informal definition
* **Relation** is a table of values made from 
  * A set of rows, the data elements in each row represents certain facts that correspond to a real-world entity or relationship.
  * Each column Represents a particular characteristic or attributes
    * Gives meaning to the data
* **Key of a relation**
  * Each row must me uniquely identifiable, the key of the row does this
  * Sometimes row-id or sequential numbers are assigned as keys 
* **Relational Database Model**
  * Based on tables, table name and attribute (name,type) pairs
  * **Formulating Queries**
    * Specify the table name and attribute of interest
    * Specify constraints (predicates) needed to be satisfied for data to be of interest


## Formal Definition

### Schema
also the description of a relation
    * With **Attributes** of $$A_1$$,$$A_2$$...,$$A_n$$
    * where **R** is the name of the relation
    * is denoted by R($$A_1$$,$$A_2$$...,$$A_n$$)

### Domain
The set of all possible values that a particular attribute could be.
* A domain may be re-used for several attributes
* Typically contains ranged and/or format
* The domain of *name* could be the set fo all strings of length 2 to 25


### tuple of a relation
An ordered set of values
* represented using (<..>)
* Each value is within the a defined domain
* A relation is an unordered set of such tuples

### Relation State
The set of tuples currently in the relation
* Is a subset of all the cartesian product of the domains of it's attributes

### **Relation instance** 
A set of tuples for a relation schema
* Denoted by **r(R)**
### Short hand
given R($$A_1$$,$$A_2$$...,$$A_n$$)
* **Relation Schema**: R($$A_1$$,$$A_2$$...,$$A_n$$)
* **Relation Name**: R
* **Relation Attributes**: $$A_1$$,$$A_2$$...,$$A_n$$
* **r(R)**: {$$t_1$$,$$t_2$$...,$$t_n$$} 
  * is a specific state of a relation with a set of tuples
  * r(R) $$\subset$$ dom($$A_1$$) $$x$$ dom($$A_2$$) ... dom($$A_n$$)
* **$$t_i$$**: <$$v_1$$,$$v_2$$...,$$v_n$$>

### Other Terminology

### Database
A collection of relations
### Database Schema
A set of all relation schemas in the database

### Intension
* Schema
### Extension
* Values /data
### Metadata
* Schema
* Other key info about the relations

## Informal to formal
* **Table** = **Relation**
* **Column Headers** = **Attributes**
* **Row** = **Tuple**
* **Table Elements** = **Relation instance** 

## SQL

Sql is built on **Bags** not sets a back is a set that can have multiple of the same value e.g

`SELECT fname FROM users WHERE Sname = "Smith"`
will return many instances of John