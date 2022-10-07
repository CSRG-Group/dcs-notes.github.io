---
layout: notes
title: Database Basics
math: true
part: true
---

## Data
Data is typically stores on
* non-volatile memory
* Decentralized servers (cloud)

Data has two flavours
* Structured
  * tables with predefined columns
* Unstructured
  * text Docs, images , videos
* semi-structures
  * XML, JSON , webpages(maybe)
  
Databases are designed for structured data.

Unstructured data may be linked and then retrieved on request

## Data Modeling
Defines the data space

considering the:
* Data items to be stored
* What are the data attributes
* What are the relationships
* Any attributes of the relationships
  
A data model can be developed

## Database Management Systems ( DBMS )
Pieces of software to manage the data they will typically
* Manage the data
* Access the data
* Store the data
* Manage access controls
* Ensure the integrity of the data

Can be viewed of as  "black box" there is little need to know what happens internally just what goes in and what will come out.

### Manage the data
The DBMS will attempt to mange the data to ensure easy retrieval and insertion
* Create indexes to speed up data requests
* Find the best way to execute a query
* Find the best way to perform relational row operations

### Data integrity
The DBMS needs to ensure that the data remains internally consistent with
* Attempts at unauthorized changes
* Changes and update to teh data
* Failures, program crashes, power outages hardware failure
* Concurrent changes happening at the same time  

## Schema
The conceptual schema is a layout of the logical DB,
* Shows entities, data types, relations.constraints.
* Hides The physical layout, how it the data stored, where is the data 