<flex style="display:flex; justify-content: space-between;">
<a href="part5.html" title="Abstract Classes and Inheritance">👈Prev</a>
<a href="index.html" title="CS118 Home">🏡CS118</a>
<a href="part7.html" title="Generics">Next👉</a>
</flex>

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

## Checked and unchecked exceptions

Now that we are familiar with `try-catch` statements, we can delve into the difference between checked and unchecked exceptions, and how they must be handled. 

### Checked exceptions (`throws`)
A checked exception is any exception that **must be checked at compile-time**. For example, you may want to use the `BufferedReader` class to open a file and read the first line, but there are two possible exceptions that could be thrown:
1. The file does not exist, and would throw a `FileNotFound` exception.
2. There could be an error when reading a line, which would throw an `IOException` exception.

Both of these exceptions are checked and must be 'caught or declared to be thrown'. Here is an example of code that does not compile due to not checking these exceptions:

```java
someMethod() {
   BufferedReader read = new BufferedReader(new FileReader("maybeFile.txt"));
   String line;
   while ((line = read.readLine()) != null) {
      System.out.println("Found line: " + line);   
   }
}
```
You have two options when it comes to handling checked errors:
- Surround the two statements in a try-catch block
- Re-throw the exception using the `throws` keyword

It is almost always better to use the latter option, unless you have a penchant for adding many `try-catch` statements into your code.

#### Using `throws`
In the example above, the `FileNotFound` exception is a subclass of the `IOException` exception. If you _cast_ (🥁) your mind back to the superclass and subclass scenario, this means we only need to catch the `IOException`, and could maybe query the exception object specifically. The `throws` keyword can be added in the method signature and will handle this for us; we can therefore fix the above code as follows:

```java
someCompilableMethod() throws IOException {
   BufferedReader read = new BufferedReader(new FileReader("maybeFile.txt"));
   String line;
   while ((line = read.readLine()) != null) {
      System.out.println("Found line: " + line);   
   }
}
```

### Unchecked exceptions

These are any exceptions that do not need to be checked at compile time 'if they can be thrown by the execution of the method or the constructor and propogate outside the method or constructor boundary'. In English, this means that exceptions that are subclasses of `Error` and `RuntimeException`- for example, trying to divide by 0 will throw the `ArithmeticException`. It does not make sense to _have_ to catch this at compile time, but you can choose to check and handle it in a graceful manner. A final way to decide between which type of exception to use is this (from the Java documents):

_"If a client can reasonably be expected to recover from an exception, make it a checked exception. If a client cannot do anything to recover from the exception, make it an unchecked exception"_.

## Writing your own exceptions

As stated before, any Exception is just a class that extends the Exception class. Therefore, if you are writing your own exceptions, you should **choose the most specific** exception that **encapsulates your Exception**, and then **extend this**. 

If however you are extending an _unchecked exception_, then you should extend a `RuntimeException`. (Use the criteria above to decide which exception to extend). It is typical for you to add messages and perhaps chain other exceptions together in any custom exceptions- this can be used to **add detail to previous exceptions**.

It is at this point that we can revert to using `if...else` statements to decide when to `throw` (**not `throws`**) our new exception- for example, imagine if you wanted to use a method to raise a number to a certain power, as long as this index was positive:

```java
int index = -1;
if (index > 0) {
   raisePower(5, index);
} else {
   // This may or may not be an existing exception- pretend that we've just created it now, and that it extends from an Exception that also takes a debug message to be printed.
   throw new NegativeExponentException("You asked for a negative exponent: " + index);
}
```

## Chaining exceptions

There are four constructors for most `Exception` classes:
- Default constructor, no parameters
- Constructor which allows for an error String
- Two constructors which have space for another `Throwable` class, which allows you to chain exceptions together.

You can use the built-in `Throwable` member methods to find out more about the exception, which will allow you to chain together information and/or exceptions specifically based on the cause of the run-time error. [This page](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html) contains the documentation for the `Throwable` class. You can use that page to check through the methods that you think are relevant to your code in particular, rather than them all being listed here.
