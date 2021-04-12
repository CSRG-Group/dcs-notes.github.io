# Error Handling and Exceptions

The original delivery of this content loosely introduced what an exception was, then demonstrated the `try-catch` statement, before explaining more about exceptions, and _then_ demonstrating the `try-catch-finally` statement, before delivering more theory. As a result, I have opted to deliver as much theory as possible at the beginning, before diving into any code examples. If you are looking for the `try-catch` statement and its variant, then this can be found at the bottom of the page.

## What are exceptions?

According to [official Oracle documentation](https://docs.oracle.com/javase/tutorial/essential/exceptions/definition.html#:~:text=Definition%3A%20An%20exception%20is%20an,off%20to%20the%20runtime%20system.&text=This%20block%20of%20code%20is%20called%20an%20exception%20handler.), an **exception** is an **event**, which occurs during the **execution** of a program, that disrupts the normal flow of the program's instructions.

Technically speaking, it is useful to know how an exception can arise and how the JVM creates and handles these when your code is running:
1. An error occurs in your method at run-time (for example, you try to access the 10th index of a 9-wide array).
2. The method creates an **exception object** and hands this off to the runtime system. This object contains important information:
   1. The type of error
   2. The state of the program when the error occurred
3. Creating an exception object and handing it to the runtime system is known as **throwing an exception**.

This is an alternative to traditional error-handling techniques, such as performing range-checks (with an `if...else` statement) every time you want to access an element from an array. As your code grows and you create more classes and objects, exceptions are a much more elegant way of stopping any run-time errors from occuring.

You will have noticed that these are exception _objects_, which means they are instances of classes. There are [many different Java exception classes](https://programming.guide/java/list-of-java-exceptions.html) from a range of packages, and as you will see shortly, you can choose which type of exception you want to handle based on the specific object the exception takes the form of.

## `Exception` classes vs. `Error` classes

In Java, the `Throwable` class is a superclass of both the `Exception` and the `Error` classes. There is an important distinction to make between the two (Java specification):
1. An `Error` is a subclass of `Throwable` that indicates a serious problem that a reasonable application _should not try_ to catch.
2. The `Exception` class and its subclasses are a form of `Throwable` that indicates conditions that a resonable application _might want_ to catch.
  
Moreover, there are two forms of `Exception`:
- Checked exceptions
- Unchecked exceptions

## How do you use exceptions? (The `try-catch` statement)
In order to make your code throw exceptions, you must use a `try-catch` statement. They take the following form:

```java
try {
  // Code that could generate an exception
  object.somethingPossiblyNotOkay();
} catch (BadExceptionClass e) {
  // Code to handle the event you come across a BadExceptionClass specifically.
} catch (AnotherVeryBadExceptionClass e) {
  // Code to handle the event you come across an AnotherVeryBadExceptionClass specifically.
} finally { // This is an optional block.
  // Code that will ALWAYS be executed at the end.
  // This is executed even if there are return statements in the previous code blocks.
  // You may want to use this to close / tidy up any resources.
}
```
How does this work?
1. The code in the `try` block is executed, and the JVM will see if an exception is thrown.
2. If an exception of class `BadExceptionClass` is thrown, then the code in the first `catch` block will be executed. This works vice-versa for any specific exceptions that you catch with a `catch` block- similar to a `switch` statement.
3. You can query the specific exception with the use of a variable- in this instance, you could use the `e` symbol to perform operations on the exception that was caught.
4. If an **optional** `finally` block exists, the code in this block will always be executed. This is ideally used to **tidy up any residual resources**, such as `Scanner` objects.

If you code doesn't cause any runtime errors, then none of the code in the `catch` blocks will be executed. Moreover, if a non-matching exception is thrown, the JVM will resort to any default error handling.

## Exceptions and inheritance

It is important to note that since exceptions are based on classes, the order in which a superclass exception and a subclass exception is caught has significant implications on your code. Specifically, if the **first `catch` block is a superclass** of another `catch` block, then **the subclass `catch` block will never be executed**

