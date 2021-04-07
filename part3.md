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
