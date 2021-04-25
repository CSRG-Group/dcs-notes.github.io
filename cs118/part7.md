<flex style="display:flex; justify-content: space-between;">
<a href="part6.html" title="Error Handling and Exceptions">👈Prev</a>
<a href="index.html" title="CS118 Home">🏡CS118</a>
</flex>

# Generics and the Java Class Library

By this point, you're most likely familiar with how to create your own classes, how to create subclasses, and how you can use abstract classes and interfaces to broadly define behaviour. 

Using **generics** in your code makes it **safer** and **more reusable**, notably it allows

1. stronger type checking at compile-time. 
2. elimination of type casts
3. implementation of generic algorithms tailored to different types. 

The key implication of this is that you are less likely to encounter run-time errors because you can you catch type related errors at *compile-time*.

Take the following example, where we load a `Stack` which one _type_ of object, and try to read this object as another type:

```java
// Creating a new stack, it simply holds data of type 'Object'
Stack stack = new Stack(); 
// String is a subclass of Object and this operation passses
stack.push("hello"); 
// We are attempting to cast the String object to an Integer Object
// this isn't possible at runtime.
Integer n = (Integer) stack.pop(); 
```
Note how when we created the `Stack` object, we didn't specify what type it would hold- this was defined in the `Stack` class itself. This meant there wasn't necessarily a restriction on whether we decided to store a `String` or an `Integer` first. 

Imagine if we had done the following- we create a new subclass of `Stack` that will only store `String` objects in an array, so we cannot store any other type. Our code would look like this:
```java
// We create a new type of Stack that only stores Strings
StringStack stringStack = new StringStack(); 
// We can push a String onto the StringStack as the class specifies this type.
stringStack.push("hello");
// StringStack specifically returns a String from the top of the stack
// this cast would fail at compile time, ideally, as the compiler should 
// know that this is a mismatched type.
Integer n = (Integer) stringStack.pop();
```

It would be incredibly tedious to have to create a new type of `Stack` class every time we wanted a different data type to be stored. Luckily, Java enables this behaviour through the use of generics- our code could look roughly like this:
```java
Stack<String> stringStack = new Stack<String>();
Stack<Integer> intStack = new Stack<Integer>();

stringStack.push("hello"); // This passes
intStack.push(5); // This also passes

intStack.pop(); // This returns an integer by default
stringStack.pop() // This returns a string by default
```

## Thinking of Generics
There are two ways I like to think of generics in Java:
- A screwdriver which has swappable heads, and when you create an object, it's like choosing the correct head for the screw.
- Defining a generic in a class is like creating a placeholder which you will fill in later when you instantiate the object.

It therefore goes without saying that you cannot create an object of a class which uses generics without providing which type you'd like to use! In accordance with the analogy above, it would be akin to not putting a head on the screwdriver.

## Implementing Generics
Now that you're convinced of their usefulness, here's how you would create a class that utilises generics (the example we'll go for is a `Box` that stores only one type): <a id="genref">$\;$</a>

```java
// Within this class, we will refer to this generic object as 'E'. This 
// can be used like a type - imagine it as a synonym for whatever type 
// you're going to put into the box.'E' is decided on by Java conventions
// - it is not enforced by the compiler
public class GenericBox<E> {
  private E item; // A private member of type E
  
  // We take an element 'e' of type E, and set the item field to this.
  public GenericBox(E e) {
    this.item = e;
  }
  
  public void set(E e) {
    this.item = e;
  }
  
  public E get() {
    return this.item; // item has type E and hence can be returned.
  }
}
```

Now, when we instantiate the object, we can decide what types to fill it with at runtime:
```java
GenericBox<String> stringBox = new GenericBox<String>("A string in a box");
GenericBox<Integer> intBox = new GenericBox<Integer>(42);

stringBox.get(); // Will return "A string in a box" in a String object.
intBox.get();    // Will return 42 in an integer object.
```

You can use multiple generics at the same time- just put the types in a comma-separated list within the diamond brackets:
```java
public class TwoTypes<E, F, G> { ... }
```
You can also enforce a **specific restriction** for each type - what if you wanted to only store objects that can be compared to one another?
```java
public class ComparedObjectsOnly<E extends Comparable<E>> { ... }
```

In this example, the `Comparable` class constraint is extended by all objects that can be compared to one another using -1, 0, or 1. This also means you can store your own kinds of comparable objects as a generic - it isn't limited to build-in classes such as `String` or `Integer`. It is important to note that **you cannot use primitives with generics**.

As mentioned earlier, there is a convention that exists when deciding which symbols to use for generics:
- `E` for Element
- `K` for Key
- `N` for Number
- `T` for Type
- `V` for Value

Some of these will make more sense when you cast your mind back to CS126, and where each of those ideas are used for various data structures.

## Generic Methods

When defining some methods, it might be useful to write generic method that only operate of particular types. For example, lets say you have a `compare` method as shown below:

```java
public static boolean compare(Pair p1, Pair p2) {
    return p1.getKey().equals(p2.getKey()) && 
           p2.getValue().equals(p2.getValue());
}
```

With this definition the following code will be valid even though the `Pair` object might contain types that do not match:

```java
Pair<Integer, String> t1 = new Pair<>(3,"bleh");
Pair<String, String>  t2 = new Pair<>("hi","bye");
compare(t1,t2); // Valid even though it doesn't make sense!
```

Hence, to specify the generic types that the `compare` method will take as parameters, we can define the `compare` method like this:

```java
public static <K,V> boolean compare(Pair<K,V> p1, Pair<K,V> p2) {
    // compare...
}
```

Now when we try to compare `Pair` objects that contain mismatched types, a compile-time error will appear.

Do note that we won’t have to specify the generics in the method **if** the generics that you want to refer to in the parameters of the method are already defined at the class-level, like it is in the first line of the `GenericBox` class defined <a href="#genref">above</a>. 

## The Java Class Library

The original lecture for this content spent some time going over the [Java Class Library](https://docs.oracle.com/javase/7/docs/api/) I felt it would be improper to include lengthy descriptions here, as there is no way to really define what is useful or not. It is up to you to search through the documentation and decide what you find interesting - for a first start, check out the [`util`](https://docs.oracle.com/javase/7/docs/api/) documentation and try and find some classes you recognise, such as `Stack` or `Iterator`. 

Going through the documentation in this safe space means you can pick up valuable skills on how to read a specification when your IDE does not have any suggestions.

# Concluding notes from the author

This abruptly brings us to the end of the modular CS118 revision notes! 🎉🎉 Thank you to everyone who submitted content, and remember to contact someone (or submit a pull request) if you spot any errors or would like to make a contribution for any modules, listed or otherwise. I hope by this point, there will be some answers to the questions posed on the CS118 landing page.

Thank you once again for this community effort.



