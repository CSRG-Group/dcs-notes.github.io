<flex style="display:flex; justify-content: space-between;">
<a href="part3.html" title="Arrays, Methods, Scope, and Recursion">👈Prev</a>
<a href="index.html" title="CS118 Home">🏡CS118</a>
<a href="part5.html" title="Inheritance, Abstract Classes, and Interfaces">Next👉</a>
</flex>

# Object Oriented Programming (OOP)

Before this, we have been discussing the von Neumann type architecture of programming (Imperative programming). Now we will move on to OOP. Here I will assume that you know most of the practical stuff like how to create a class and what constructors, fields/properties, and methods are. We will focus more on the “theoretical” part of it like what an object or class is formally and what are the motivations for OOP.

## The 4 Pillars of OOP

Before we begin, I think it’ll be helpful to list out the 4 pillars of OOP. In this chapter, we will be going over **encapsulation**, while the last 3 will be discussed in further detail in the later few chapters/topics.

1. **Encapsulation**: Bundling data and operations that can be performed on that data together - leads to data hiding. This is done by using the *access modifiers* (public, protected, private). 
2. **Abstraction**: Exposing essential features, while hiding irrelevant detail
3. **Inheritance**: Creating new classes from existing ones, reducing programmer effort
4. **Polymorphism**: Using objects that can take many forms (different from Generics) - allows us to invoke operations from derived classes while using a base class reference at run-time. 

## Imperative vs OOP

In procedural (or imperative) programming, we convert program specifications to method-based code. We use this in the C programming language, or Pascal. Data and operations on the data are separated.

In OOP, we take procedural programming and we add some more functionality. The main difference is that our data and operations on the data are bundled together in a structured called an **Object**! This lets us define individual objects with their own **pre-set** data very easily (is possible in imperative programming but its a hassle and the code is long).

## Objects and Classes

Objects are made up of two main components: **properties** and **methods**. 

> The *properties* of an object store its **state** while the *methods* operate on this data and *change* its **state**.

When working with objects, the first thing to do is to create a *blueprint* of the object which we call the **Class**. The object itself will be a specific **instance** of this **class**. 

A **constructor** is a *special method* that is meant to set-up the object according to some rules (you can think of it as giving the **object** some starting properties). If you don’t write a constructor, Java will create a **default constructor** - it does not set any values to the object. We can also **overload** constructors. 

### Why constructors?

The main reason we use constructors is to define a starting value for some (or all) of the properties of a certain object as it is created. This is usually important when these properties are necessary for the object to “make-sense”. For example, defining a `Circle` object without a radius doesn’t really make sense, so it would be good to define a constructor so that all `Circle` objects that are created will always have a radius. We will not need constructors when the particular class does not require these properties to function as it is meant to such as for **static** classes. In fact, it would not make sense for **static** classes to have a constructor because they are not meant to have **instances**.

```java
// The class must be defined in a Circle.java file.
public class Circle {
    double radius;
    public Circle(double radius) { // Constructor
        this.radius = radius;
    }
    public double area() {...}
    public double circumference() {...}
}
```

### Memory

Objects require a small amount of contiguous memory to store all their properties. To create new **instances** of a class we use the `new` keyword. 

When we use the `==` on two variables, we are actually asking if the 2 variables are pointing to the same part of memory (in other words, whether the two variables are pointing to the same object). To check if objects have the same data/prop, you should know that we use the `equals()` method. 

## Encapsulation

You should be familiar with the `private`, `public`, and `protected` **access modifiers**. 

- **Public.** Can be accessed outside the class
- **Private.** Can only be accessed from within the class
- **Protected.** Can only be accessed from within the class and by subclasses (children classes). 
- **Package private.** Can only be accessed by other Objects in the same package. Java code is often arranged into packages.

Encapsulation is an idea that motivates **data-hiding**, where making data private and some methods public is known as **data-hiding**. 

> Encapsulation motivates *users* to use a class by its **external interface** (using public/protected methods). 

The implementation of the class can be done in whatever way the programmer wants, but the overall external functionality of the class still remains the same. Meaning if its meant to be a bank ATM, the underlying code can be different (and up to the programmers) but its functionality remains the same and users interact with it the same way. 

This also makes code **more maintainable** because if you change a particular way your class is implemented, such as changing a type from a `Int` to a `Long`, other programmers who use your class may have interacted with your public properties directly, instead of through a method. This would probably break their code - encapsulation avoids this. 

Hence, encapsulation encourages us to use **access modifiers** they help to

- Restrict access to some data and methods (or to control the access of the data in our objects). Unnecessary detail is hidden.
- The implementation can change without ruining dependant applications. Maintains a good interface between programmers.
- Boundaries of responsibility are clear.

### Interaction Interface (different from Java Interfaces)

We often refer to the public/protected methods that allow users to interact with our classes/objects as the interface that links users to your code. So **accessor** and **mutator** methods (getters and setters) which are very common in OOP are just some examples of methods that define the interface.

## `static` and `final`

If we want a variable or method to be shared between instances of a class, we use the `static` keyword. This is where that particular variable or method belongs to the entire class - not to any single instance. To use static variables or methods, we do not need to instantiate an instance of a class (aka create an object).

We use `static` mainly when it doesn’t make sense to define a particular method/variable for specific instances.

The `final` keyword is used to prefix variables that we want to be constant. A good example would be <img src="https://render.githubusercontent.com/render/math?math=\pi&mode=inline">! We will not be able to change the value of variables prefixed with `final` once they are assigned/instantiated with a **value**.

```java
public static final double PI = 3.1415926543;
```

