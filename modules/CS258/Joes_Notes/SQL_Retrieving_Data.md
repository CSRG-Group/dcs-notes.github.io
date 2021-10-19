> CS258 and this guide is based on PostgreSQL other versions may be different

> This page shows limited select commands

> This page provides links in the titles to the PostgreSQL documentation It is recommenced you visit for a deeper understanding of the commands

## Data duplication

SQL Databases allow tables to contain duplicates of tuples. known as **Multi-set** or **bag** semantics

This has some advantages for checking for duplicates of a particular column e.g counting the number fo people who live at a particular address. It is also computationally expensive to remove duplicates and so should only ber done if required.

SQL query results are also tables



## [SELECT](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=1927)

Select is one of the only commands used to retrieve data from a database and has a lot of additional commands and extensions to define a full selection.

### Basic

<pre>
SELECT <<i>attribute1</i>,<i>attribute2</i>, ...> FROM <<i>table</i>> WHERE (<i>condition</i>)
</pre>


### Attributes
These are the attributes to select form the table when filtered by the where clause

If using multiple tables `table.attribute` can be used to specify witch table the attribute comes from]

If there are several attributes with a similar or the came name then aliasing can be used with `AS`
```
SELECT shop AS Teashop FROM teas
```
Mathematical expressions can also be used with name aliasing
```
SELECT price*1.38 AS PriceInDollars FROM teas
```

the character `*` can be used to select all the attributes 

### Table

Name aliasing can also be used with tables
```
SELECT s.studentID FROM students AS s
```

### WHERE

where is used to filter the table to produces a reduces output and operates on standard SQL condition statements
```
SELECT studentID FROM students WHERE yearOfStudy = 2 
```

```
SELECT tea as expensiveTea FROM teas WHERE price > 4.5
```

### ORDER BY
this allows an order to be applied to the output of an SQL result

<pre>
ORDER BY <i>expression</i> [ASC | DESC]
</pre>

```
SELECT tea as expensiveTea FROM teas ORDER BY price DESC
```

### DISTINCT | ALL

It can be desirable to only have unique items in a query result adding `DISTINCT` removes any duplicates

```
SELECT DISTINCT address FROM customers
```