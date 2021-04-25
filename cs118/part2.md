<flex style="display:flex; justify-content: space-between;">
<a href="part1.html" title="Variables, Number Systems, and I/O">👈Prev</a>
<a href="index.html" title="CS118 Home">🏡CS118</a>
<a href="part3.html" title="Arrays, Methods, Scope, and Recursion">Next👉</a>
</flex>

# Conditional Statements

This part of the page covers the `if...else` statement, the ternary operator, and the `switch` statement.

## if, else, and ternary

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

Additionally, when explaining the semantics of an `if...else` statement, we can refer to the `{}` (curly brackets) as the **construct**. So we can say:

> If the **boolean expression**, `boolCond`, evaluates to true, then the body of the statement is executed, otherwise control passes to the next **program statement** after the **construct**.


## switch

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
      case GREEN:
        System.out.println("Colour is green");
      default:
        System.out.println("Default");
    }
  }
}
```

There are a few caveats to take away from this:
- `switch` statements are evaluated bottom to top
- If a `case` branch matches the `variable`, the expressions in that `case` will be evaluated.
- The `break` keyword is **optional**. This means that the `switch` statement will continue running top to bottom otherwise, even after satisfying a case. Think about if you would like this behaviour!
- The `default` statement is also **optional**; it is only evaluated if no cases match the variable expression.

Notably, if there is an **absence** of the `break` keyword and a specific `case` **value** has already matched the **variable**, the `switch` statement will continue running all the remaining *statements* inside each case without checking the **value** of the `case`.

For example, if the colour of our `Colour` enum above is `BLUE`, the output of the switch statement will be:

```
Colour is blue
Colour is green
Default
```

That is because, after `c` matches with the value `BLUE`, the `switch` statement continues executing all the remaining statements without checking the value `GREEN`. This can be avoided by using `break`.

## switch vs if-else
In most cases, deciding between using a `switch` or `if...else` statement depends on readability and maintainability. However, for a larger number of cases (5 or more), a `switch` statement is generally faster. This is because the compiler creates a "jump table" based on each of the `case` values. Essentially, these are special byte codes that tell the Java Virtual Machine (JVM) which path of execution to take depending on the **variable** expression. Conversely, the JVM checks the boolean expressions in `if-else` statements one at a time, from top to bottom. This is why when there are many cases, a `switch` statement will run faster than equivalent logic coded `if-else` statements.

The compiler is able to do this because the **values** in a `switch` statement are always constant values at compile time, and can be compared easily with the **variable** expression as they are the same type. For `if-else` statements, they are boolean expressions that may depend on an arbitrary number of variables and conditions and the compiler cannot assume that the values will be constant. 

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
