# Conditional Statements

This part of the page covers the `if...else` statement, the ternary operator, and the `switch` statement.

## `if...else` recap
### The ternary operator

There isn't a significant amount of content beyond the basic `if...else` statement; something you may have missed however is the **ternary operator**. This is a shorthand for the `if...else` statement and looks like this:

```java

// Our boolean condition
Boolean boolCond = false;
int value = 0;

// Your standard if-else
if (boolCond) {
  value = valueIfTrue;
} else {
  value = valueIfFalse;
}

// Using a ternary operator to achieve the exact same goal
value = (boolCond) ? (valueIfTrue) : (valueIfFalse);
```

You may be pleased to know that the ternary operator can be nested; this is basically only useful for code-golf, however.

### `switch` statements

A `switch` statement is a way to simplify the `if...else` statement whilst also providing some additional control over how each `case` can be handled. First, the basic syntax:
``` java
switch (variable) {
  case VALUE1: // Statements here if variable == VALUE1
    break; // Do not continue executing!
  case VALUE2: // Statements here if variable == VALUE2
    break; // Do not continue executing!
  default: // Statements here if neither case has been satisfied; however you can leave this blank.
}
```

The eagle-eyed amongst you will notice that each case is matched on an **equality** basis- not using `equals()` or `compareTo()`. Therefore, **switch cases only work for the following primitives:**
- int
- short
- byte
- char

Switch statements will also work on enumerated types (enums), `String`s, and objects that wrap the corresponding primitives:
- Character
- Byte
- Short
- Integer

An example of a switch on a enum:

```java
public class Main{
  enum Colour{RED,GREEN,BLUE}

  public static void main(String[] args) {
    Colour c = Colour.RED;
    switch (c){
      case RED:
        System.out.println("Colour is red");
        break;
      case BLUE:
        System.out.println("Colour is blue");
        break;
      case GREEN:
        System.out.println("Colour is green");
        break;
    }
  }
}
```

There are a few caveats to take away from this:
- `switch` statements are evaluated bottom to top
- If a `case` branch matches the `variable`, the expressions in that `case` will be evaluated.
- The `break` keyword is **optional**. This means that the `switch` statement will continue running top to bottom otherwise, even after satisfying a case. Think about if you would like this behaviour!
- The `default` statement is also **optional**; it is only evaluated if no cases match the variable expression.

# Iterative statements

Whilst you are most likely familiar with `while` and `for` loops, it is important to understand the **terminology** that seperates the two. A `while` loop is **unbounded** repetition whilst a `for` loop is **bounded**; you cannot compile code which does not have a terminating condition.

## Bounded repetition

#### Bounded repetition criteria
We use bounded repetition when we know all of the following:
- Where to start
- Where to end
- What iterative step to take at each repetition

The Java `for` statement is structured with `for (initialisation; booleanCondition; iteration) { statement(s); }`. Keep in mind that the sky is the limit when it comes to either of these three components; you do not always have to use `i++` to iterate a list in forward direction.

## Unbounded repetition

We can use this when we are **unsure of how many times** we want to repeat something. There is no Java police to enforce which repetition you use, but I would keep in mind how tidy your code is. Moreover, if you find yourself iterating in a while loop, make sure you understand the differences between postfix and prefix operators.

## `do...while` statements

This is for when you want to execute the loop body **before checking the expression**; this means that **the body will always be ran once**. After the first initialisation, a `do...while` statement will only execute the code inside the `do` whilst the `while` condition evaluates to `true`. You may want to use this when _generating random numbers, and then checking if these satisfy a condition..._ 🤖

## Return of the `break` keyword

You can use the `break` keyword at any point inside a `do...while`, `while`, or `for` statement to halt looping within that scope. For example, this code would stop iterating once a certain limit has been reached:

``` java
for (int i = 1; i < 15; i++) {
  if (i % 5 == 0) 
    break; // The code would stop looping at i = 5;
}
```
