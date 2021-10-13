---
layout: notes
title: Relational Database Constraints
math: true
part: true
---


Constraints determine the permissible states of relation instances

Explicit schema based constraints
* Key constraints
* Entity integrity constraints
* Referential integrity constraints

There are other domain constraints
* Type
* Maximum , minimum
* is NULL allowed

Constraints are typically at relation creation or with the `CREATE TABLE` statement in sql
## SuperKey
The super key of a relation R is a subset SK of R such that:
* in any valid state of r(R)
  * for an distinct tuples in r(R) $$t_1$$,$$t_2$$
    * t1\[SK\] $$\neq$$  t2\[SK\]
  
### Minimal SuperKEy
Any key is a **minimal** superKey or **candidate** key, if the removal of any of the attributes would result in the key not being a superKey.

If the relation hs several candidate keys one will be chosen arbitrarily to be the primary key

## Entity Integrity Constraint
The primary key cannot be null of any tuple

Any other attribute of R may or may not have null values and can be specified at the table creation.

## Referential Integrity
covers cross table relationships, a table may be linked to another table, by using a foreign key (FK) to reference a primary key (PK) in another table.

The domain of the foreign key in R1 that references R2 is the set of primary keys in r(R2) $$ \cup $$ {NULL}.

alternatively:
* if $$ t_i $$ in R1 references $$ t_j $$ in R2
* then $$t_i$$\[FK\] = $$t_j$$\[PK\]
* OR $$t_i$$\[FK\] is NULL 

## Updating with Constraints
The values in a relation instance can change on update so with each update checks are made to ensure that the update conforms to the constraints

If the update does nto meet the constraints the DBMS can:
* Reject the update and return an error.
* Inform the user fo the database.
* Attempt to perform correcting updates.

### Insert
When adding new tuples to the database any of the constraint could be violated.
#### Domain
One of the attributes may not be in the attribute domain
#### Key
The value of the key attribute(s) may already exist in another tuple
#### Referential integrity
A foreign key in the tuple may refer to a primary key value that does not exist
#### Entity integrity 
The primary key may not be NULL for any of it's attributes

### Update
#### Domain
One of the attributes may not be in the attribute domain
#### Key
Changing the key attribute(s) may mean it already exist in another tuple
#### Referential integrity
A new foreign key in the tuple may refer to a primary key value that does not exist

Changing the primary key may mean a foreign key is no-longer pointint to it
#### Entity integrity 
The primary key may not be changed to NULL

### Delete
#### Referential integrity
Removing the primary key may mean a foreign key is pointing to an instance that does not exist

## Functional Dependencies
A formal tool that allows derivation of good DB designs. 
### Definition
Assume
* X,Y,Z are attributes
* A,B,C are single attributes
* notation ABC = {A,B,C}

Then
* x $$\rArr$$ Y
* If the values of Y depends on the values of X
* If two tuples of the attribute agree on a value of X then they must agree on a value of y
* t1[X]=t2[X] $$\Arr$$ t1[Y]=t2[Y]