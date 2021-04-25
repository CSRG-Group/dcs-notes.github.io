<flex style="display:flex; justify-content: space-between;">
<a href="part2.html" title="Conditional Statements">👈Prev</a>
<a href="index.html" title="CS118 Home">🏡CS118</a>
<a href="part4.html" title="Object Oriented Programming">Next👉</a>
</flex>


# Arrays, Methods, Scope, and Recursion

## Arrays
There are several key points to revise when it comes to answering questions about arrays:
- They are **monomorphic lists**- this means you can only store one type of data in it.
- Implementation wise, arrays are allocated on the heap in the JVM. These are contiguous blocks of memory, which means you can access elements by index. This is known as **random access**.
- You cannot create **arrays of generic types**. This means that you cannot create an array in Java if you do not yet know what type it stores- you can however store arrays of objects, as long as it is determined at compile-time. Therefore, in an exam, **do not create a generic array**. You are better off using a built-in collection such as an `ArrayList`.
- You cannot access elements of an array using pointer syntax, unlike in C. Not that anyone would attempt this when writing code in an exam, nor in practice for Java, but do not attempt it otherwise.

When arrays are **declared** (the name and type are defined), its value will be initialised to the special value `null`. This simply means that no value is assigned to the array **yet**, and Java knows that we want *some* contiguous block of memory to store some values, but this block of memory hasn't been assigned yet.

To **initialise** an array, you can either use array syntax, or the `new` keyword. The `new` keyword essentially reserves a contiguous block of memory. Because arrays have fixed sizes once they are initialised, we also have to state/define the size of the array when we initialise it.

``` java
// Declaring an array of type int
int[] declaredArray;

// Also a valid declaration, where the [] goes after the variable name
int postfixSquareBracketsArray[];

// These are both set to null- we haven't actually reserved (allocated) any memory for them.

// This is how we allocate memory with the new keyword- notice how we've allocated in the same line.
int[] allocatedArray = new int[10]; // We allocated space for 10 integers. This size is not in bytes!

// This is one way to declare an array and populate it at the same time.
int[] populatedArray = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
```

Since **the size of an array is fixed**, if you want to resize an array, you'll need to copy across your data from the first array into a **new array variable**, and then reassign the array. 

The JVM (Java Virtual Machine) will use garbage collection to automagically delete the original array that is no longer in use- unlike languages like C where you must manually clean up the memory.

#### Example: Resizing an array

``` java
// Our first array of five integers
int[] smallArray = { 1, 2, 3, 4, 5};

// If we wanted to add two more integers, we wouldn't be able to do this.
smallArray[5] = 6; // This would fail, as the array is out of bounds! Remember that indexing begins at 0.

// We instead should create a new array of the size we want.
int[] largerArray = new int[7];

// We now need to copy the elements from the original array.
// Cast your mind back to bounded and unbounded repetition.
for (int i = 0; i < smallArray.length; i++) {
  largerArray[i] = smallArray[i];
}

// We can now add new data to largerArray. You could continue by reassigning the variable names.
smallArray = largeArray; // This should replace the data pointed to by smallArray with the data in largeArray.
                         // Now, you can access the 6th and 7th elements of smallArray. Don't try this in C.
```

ICYMI, the `length` property, which is a part of all arrays in Java, was used to know when to stop iterating. There is a much neater and quicker way of copying across an array, found in the [`arraycopy`](https://docs.oracle.com/javase/7/docs/api/java/lang/System.html) method in the `System` class.

### Multi-dimensional arrays
It is also possible to create multi-dimensional arrays; one must simply add another set of square brackets after the first set.

```java
// 1st pair of square brackets refer to the "outer" array and the
// 2nd pair refers to the "inner" array. 
int[][] twoDArray = new int[20][20];

// Populating a 2D array
int[][] twoDArrayTwo = { 
                           { 1, 2, 3 }, // The first element of the outer array
                           { 4, 5, 6 }, // The second element of the outer array
                           { 7, 8, 9 }  // The third element of the outer array
                       };

// Assigning to a 2D array
twoDArrayTwo[0][0] = 1;
twoDArrayTwo[0][1] = 2;
twoDArrayTwo[0][2] = 3;
```

It is crucial to keep in mind that **this is not a matrix**. Although you can easily interpret this as a matrix, there is no table being constructed here - it is an array, where each element is also an array type. It would be much better to think of this as a list of vectors, which although would form a matrix, is not a special type like an array is. 

#### Irregular array sizes

If you have an **irregularly sized array**, where the length of the rows are not equal to the length of the columns, you must create the **outer array first** and then create each of the inner arrays.

```java
// This 2D-array has only initialised the outer array. The inner array is simply set to null.
int[][] arrayOfInts = new int[10][];

// This creates arrays of increasing size, for each of the 10 elements in the outer array.
for (int i = 0; i < arrayOfInts.length; i++) {
  arrayOfInts[i] = new int[i];
}
```

## Methods

The `main` method is a special method that is the **entry point** for a Java application.

All methods have a _signature_ that defines the access privilege, the return type, the name, and its parameters. 

| Component | Access privilege |Return type | Name | List of function parameters |
|-----------|-------------------|-------------|------|-----------------------------|
| Definition | Who can access this method from outside the class? | What type does this method return? | What should the name be? | Which arguments can be provided and used by the method? |
| Options | `public`, `private`, `protected`.<br>Private means that no other classes can call this method from instances of this class, and `protected` means that only children of the class can call this function. | Any object or primitive type, and `void` for no return. | An ASCII string. | This can be left empty- if you provide arguments, they are in the form `[type] nameOfArgument`. If this is a list, they are comma separated.|
| Example | `public static` - <br>this can be accessed from outside the class by the compiler, or any other classes. | `void`<br>The main function returns no type. | `main`<br>A special compiler-recognised name that signifies the main entry point. | `(String[] args)` The main method takes an array of strings as an argument. |

### Function overloading

If you have more than one method of the **same name, but different parameter lists**, this is known as **overloading**. The compiler will recognise which method you've called based on the parameters you've given it.

```java
// Two methods with the same name, and return type, but different parameters
// If the static keyword scares you, don't worry about it for now.
public static int integerMethod(int a) { return a; }
public static int integerMethod() { return 0; }

public static void main(String[] args) {
  System.out.println("The parameter method: " + integerMethod(5)); // Will print "5";
  System.out.println("The non-parameter method: " + integerMethod()); // Will print "0";
}
```

## Scope

Scope refers to how long a variable is relevant for, and when it becomes relevant. 

As an analogy, imagine if you just moved into a new house and there's no furniture. If you tried to sit down on a specific chair, you wouldn't be able to- there's no chair in the room. You hop onto IKEA / Amazon, and order a chair, and it arrives in the room. The chair is _now in scope_. You can now sit on that chair in particular.

Let's say that you decide not to put the chair away once you're done. You'd rather keep it in the room you're in, and you decide to do this for all the furniture you ever need- you never throw anything away. Your room, just like your computer memory, would soon fill up. Therefore, you realise you should throw some old chairs out- this is throwing the chair _out of scope_. You cannot sit on that chair anymore as you've just thrown it out!

In Java, we have the same analogy, roughly speaking. Our 'room' is defined between any pair of curly braces: `{ }`. Once you reach the end of the curly braces, any variables in there go out of scope. Take a look at this code example:

```java
public class Room {
  // Creating a Door object. This will survive until the very last closing brace.
  public Door doorObject;
  
  {
    // We are creating a chair in this scope.
    Chair myChair = new Chair(); // Chair object enters scope. Remember, an object is an instance of a class.
    doChairThings(myChair);
    shut(doorObject); // The doorObject is still in scope, as we have not left its closing braces yet.
  } // The myChair variable is no longer in scope once we leave these braces.
  
  {
    // We can create another chair here
    Chair myChair = new Chair(); // This chair object is not the same as the previous one!
    smash(myChair); // We won't be smashing the other chair, as the other one is out of scope- there is no 'other'.
  }
  
  doChairThings(myChair); // This will fail, as there's no more 'myChair' in scope.
  
  slamDoor(doorObject); // This will work fine, as the doorObject is still in scope.
  
} // The doorObject also goes out of scope here.
```

## Passing by value and passing by reference

When we pass variables to a method, sometimes these variables are passed by value - meaning the value of the variable is passed into the method (not the actual variable itself). Other times, the variables are passed by reference - the memory location of the variable is passed into the method. 

```java
public void randomMethod(int p) {...}
```

### Passing by value
Only the 8 primitive types are passed by value - and this is always the case. This means that the **value** of the variable is **cloned** in memory and assigned to the corresponding parameter **name** of the method (e.g. `p` in the example above). 

Any changes to the variable within the method's scope do not affect the original variable - it only affects the **cloned** value. If you want to change the value of the original variable you need to  _assign_ a new value to the **original** variable, e.g. `p++` which increments the value of `p`.

### Passing by reference
Objects and arrays are passed by **reference**. Because objects can be very large and often contain many fields, the **memory address** of the variable is passed to a method (not cloned like primitives). This means changes made inside a method will directly induce changes in the original variable. Therefore, think carefully if you are attempting to **copy a variable** into a new one. (An example of this was when we copied an array previously into a larger one).

## Recursion
A recursive function is any function that **calls itself**. There are common applications for this when calculating a Fibonacci number, or a factorial of a number. All recursive functions are made up of the following two components:
- Base case(s). These can be seen as values that are returned when an upper or lower limit(s) is reached. These cases can also be thought of as the **terminating** conditions for a recursive method (what condition must be fulfilled to stop the recursion). 
- Recursive call(s). These are specific calls to the function again. Remember to use the `return` keyword before a recursive call so that you eventually return the series of computations.

#### Example: factorial
```
f(x) = 1              if x = 0          ==> This is the base case
f(x) = x * f(x - 1)   if x > 0          ==> This is the recursive call
```

If you are implementing this in any language, you can make the distinction between a base case and a recursive call by using a simple `if...else` statement or a `switch` statement. You must remember to `return` the result of either.
