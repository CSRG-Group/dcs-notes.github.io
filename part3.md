# Arrays, Methods, Scope, and Recursion

## Arrays
There are several key points to revise when it comes to answering questions about arrays:
- They are **monomorphic lists**- this means you can only store one type of data in it.
- Implementation wise, arrays are allocated on the heap in the JVM. These are contiguous blocks of memory, which means you can access elements by index. This is known as **random access**.
- You cannot create **arrays of generic types**. This means that you cannot create an array in Java if you do not yet know what type it stores- you can however store arrays of objects, as long as it is determined at compile-time. Therefore, in an exam, **do not create a generic array**. You are better off using a built-in collection such as an `ArrayList`.
- You cannot access elements of an array using pointer syntax, unlike in C. Not that anyone would attempt this when writing code in an exam, nor in practice for Java, but do not attempt it otherwise.

To create an array, you can either use array syntax, or the `new` keyword. Keep in mind that you should use the `new` keyword when you want to **allocate memory as you declare the array**.

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

It is also crucial to remember that **the size of an array is fixed**. If you want to resize an array, you'll need to copy across your data from the first array into a **new array variable**, and then reassign the array. The JVM (Java Virtual Machine) will use garbage collection to automagically delete the original array that is no longer in use- unlike languages like C where you must manually clean up the memory.

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

ICYMI, the `length` property, which is a part of all arrays in Java, was used to know when to stop iterating.

### Multi-dimensional arrays
It is also possible to create multi-dimensional arrays; one must simply add another set of square brackets after the first set.

```java
// Initialising a 2D array
int[][] twoDArray = new int[20][20];

// Populating a 2D array
int[][] twoDArrayTwo = { 
                           { 1, 2, 3 },
                           { 4, 5, 6 },
                           { 7, 8, 9 }
                       };

// Assigning to a 2D array
twoDArrayTwo[0][0] = 1;
twoDArrayTwo[0][1] = 2;
twoDArrayTwo[0][2] = 3;
```

It is crucial to keep in mind that **this is not a matrix**. Although you can easily interpret this as a matrix, there is no table being constructed here- it is an array, where each element is also an array type. It would be much better to think of this as a list of vectors, which although would form a matrix, is not a special type like an array is. 

If you have an **irregularly sized array**, where the length of the rows are not equal to the length of the columns, you must create the **outer array first** and then create each of the inner arrays.

```java
// This 2D-array has only initialised the outer array. The inner array is simply set to null.
int[][] arrayOfInts = new int[10][];

// This creates arrays of increasing size, for each of the 10 elements in the outer array.
for (int i = 0; i < arrayOfInts.length; i++) {
  arrayOfInts[i] = new int[i];
}
```
