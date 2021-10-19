
> CS258 and this guide is based on PostgreSQL other versions may be different

> This page shows limited select commands

> This page provides links in the titles to the PostgreSQL documentation It is recommenced you visit for a deeper understanding of the commands

## Create

### [CREATE SCHEMA](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=1722)

<pre>CREATE SCHEMA <i>schema_name</i> [AUTHORIZATION <i>user_name</i>]</pre>

enters a new schema into the database, a schema contains tables if no schema is specified the public schema is used.

tables within a schema can be referenced with the dot operator 

CREATE TABLE _schema.table_ ....

if no schema is specified then `public` is used

<pre>
CREATE TABLE <i>table_name</i> (...) == CREATE TABLE <i>public.table_name</i> (...)
</pre>

**catalogue** named collection of schemas

### [CREATE TABLE](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=1738)

<pre>
CREATE TABLE <i>table_name</i> (
    <i>column_name</i> <i>data_type</i> <i>constraints</i>
    <i>column_name</i> <i>data_type</i> <i>constraints</i>
    <i>column_name</i> <i>data_type</i> <i>constraints</i>
    ...
)
</pre>

#### [CREATE VIEW](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=1792)

Can be used to create a virtual table that is the result of a query , the view is virtual and is run on every request

## [Constraints](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=98)

### [NOT NULL](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=101)

Specifies that data in a particular column must not be null

```
CREATE TABLE products(
    name text NOT NULL
)
```

### [CHECK](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=99)

A check consists of a boolean expression that must evaluate to true for the data to be valid

```
CREATE TABLE products(
    price numeric CHECK (price > 0)
)
```
the constraint can also be given a name this can help with error messages as the mae will be provided
```
CREATE TABLE products(
    price numeric CONSTRAINT positive_price CHECK (price > 0)
)
```

A check can also refer to multiple columns by adding it to the end of the table

```
CREATE TABLE products(
    price numeric CONSTRAINT positive_price CHECK (price > 0)
    discount_price numeric CONSTRAINT positive_price CHECK (discountPrice > 0)
    check( discount_price < price)
)
```

Check can oly be assumed to evaluate on update or delete so should only refer to items in the current row not other elements or table

### [PRIMARY KEY](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=103)

Assignees a column as a key. multiple can be used with `PRIMARY KEY (a,b)`

### [UNIQUE](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=101)

Ensures that data is unique among all the rows in the table. multiple can be used with `UNIQUE (a,b)`

### Foreign Key [REFERENCES](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=103)

Ensures that referential integrity is maintained between tables

```
CREATE TABLE orders(
    product_id integer REFERENCES products
)
```

can use multiple foreign keys with `FOREIGN KEY (b, c) REFERENCES other_table (c1, c2)`

a foreign key must reference a UNIQUE column or a primary KEY if no column is specified the primary key will be chosen

#### Referential Triggered Actions 

When a value that a foreign key is referencing is updated or deleted 

```
CREATE TABLE orders(
    product_id integer REFERENCES products ON DELETE CASCADE
)
```


Action | ON DELETE | ON UPDATE 
 - |- |- 
RESTRICT | prevents the deletion | prevents the update
CASCADE | any row(s) referencing deleted rows are also deleted | any row(s) referencing updated rows are changed to the new reference
SET NULL | sets the reference to null | sets the reference to null 
SET DEFAULT | Sets the reference to the default value | Sets the reference to the default value 

## DROP

**!! WARNING these commands can destroy large amounts of data**

## [DROP SCHEMA](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=1843)

Removes a schema from the database

```
DROP SCHEMA mystuff
```

## [DROP TABLE](https://www.postgresql.org/files/documentation/pdf/14/postgresql-14-A4.pdf#page=1849)

Removes a table from the database

```
DROP TABLE mytable
```


## Other

### Default

used to define a default value if none is provided

```
CREATE TABLE meal(
    drink text DEFAULT "water"
)
```