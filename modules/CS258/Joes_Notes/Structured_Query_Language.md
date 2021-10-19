SQL or Structured query Language is a high lever **declarative language**

Using SQL the DBMS can be told what to do ant it will find the optimal ways to perform the request

SQL is both a
* Data definition Language
* Data manipulation Language

Formal definition to SQL terms
 Relational | SQL 
-|-
relation | Table
Tuple | Row
Attribute | Columns

Standards have evolved over time and there are now many different standards. SQL but operate against the chosen DBMS to the standard will be defined form that.

> CS258 and this guide will focus on PostgreSQl

## DataTypes

Data Types are used to describe the domain and provide information on how to interpret attributes. SQL has many different data types the full list ofr PostgreSQL can be found [here](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=179) (p.179)

| Name | Description |
|-|-|
integer | standard integer  ~$$ \plusmn 2^{32}$$ *|
bigint  | Large range integer ~ $$\plusmn 2^{63}$$ * |
numeric | near exact number $$131072$$ digits before decimal $$16383$$ digits after |
char(n) | Fixed length character
varchar(n)| Variable length character with limit
text | Variable unlimited length
boolean | true or false
real | implementation of IEEE 754

<small>* approximate for exact specification see the documentation</small>

ANSI data types are a standard and may DBMS will recognize ANSI data types 

## Comparison Operators
sql uses the standard comparison operators

operator | Desc
-|-
= | Equal to
\> | Greater than 
< | Less than 
\>= | Greater than or equal to
<=  | Less than or equal to
<> | Not equal to

Will return TRUE, FALSE or UNKNOWN

UNKNOWN is returned when a comparison os performed with a NULL value

use 

`IS NULL` and `IS NOT NULL` when comparing NULL values

## Logical Operators

operator | desc
-|-
AND | logical and
OR | logical or
NOT | logical not

## Pattern Matching
https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=281

Sql has simple sting pattern matching using the keywords `LIKE` and `NOT LIKE`

pattern | desc
-|-
_ | a single character
% | a sequence of 0 or more characters
'C' | A single character c

if selecting a literal `%` or `_` a `\` can be used ans an escape character

`ILIKE` can be used in postgresQL to make the match case insensitive

### SIMILAR TO
this command is available to use with regular expressions