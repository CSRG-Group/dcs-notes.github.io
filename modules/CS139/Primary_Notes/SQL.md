---
layout: CS139
title: SQL
math: true
part: true
---
## Key Commands

## Database Theory
"Keep what changes abd what stays the same separate"

Keep structure and date separate

### SQL
Structures Query Language

interact with a relational database

### Relational Database
Data is linked to other data through the use of, unique id and links/ references

### Database Management
Databases need to be managed

Users, password access rights

Mostly beyond scope of this course

### NoSQL
Store data in Key value Pairs

Similar to accusative arrays

Fast retrieval through hash functions
Uses HAsh functions rather ehn 

### ACID Compliance
ensures transactions are robust
* atomicity - each transaction is a single unit
* consistency - only take the database from one valid state to another
* isolation - Transactions occurring in parallel are result in the same result as transactions in series
* durability - Once a transaction has occurs it will remain regardless of system failure


### Database Table

Place to store data of the same type

Columns are decides on creation

Rows are data that is entered

Unlimited number of rows are available but fixed number of columns.

### Links
#### One to One
One record is associated with one and only one record.

* one person has one passport
#### One to Many
One record points to many records.

* A User has many posts
* A post has one user

#### Many to Many
Many records are related to many records.

* One student attends many courses
* One course is attend by many Students

### Identifiers
Each data row has an ID that can be used to reference the data.

### Schema
A script used to create a database from scratch, used to define tables.

The script may also contain default/ demo values

## Detailed Commands

### Data Types

* integer - whole Numbers
* real - decimal numbers
* text
* varchar (length)- fixed length text
* date
* datetime - date and time
* blob - binary data

#### Data Modifiers
##### Auto increment
`id integer PRIMARY KEY`
when inserting values use NULL

### Table Operations
#### Create Table
``` sql
CREATE TABLE <table name>(
    <column1> <Datatype>,
    <column2> <Datatype>,
    <column3> <Datatype>,
    <column4> <Datatype>,
);
```

#### Delete Table
``` sql
DROP TABLE table1;
```

### Add Data
``` SQL
INSERT INTO table1 VALUES (value1,value2,value3,....);
```
### Updating Records
``` SQL
UPDATE table1 SET column1 = value1 WHERE column2=value2;

Multiple records
UPDATE table1 SET column1 = value1,column2 = value2 WHERE column3=value3;
```

### Deleting Records
``` SQL
DELETE FROM table1 WHERE <column1=value1;
```
### Find Data

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