<a style="float:left" href="part3.html" title="Arrays, Methods, Scope, and Recursion">👈Prev</a>
<a style="float:right" href="part5.html" title="Inheritance, Abstract Classes, and Interfaces">Next👉</a>

# Object Oriented Programming (OOP)

Before this, we have been discussing the von Neumann type architecture of programming (Imperative programming). Now we will move on to OOP. 

## Imperative vs OOP

In procedural (or imperative) programming, we convert program specifications to method-based code. We use this in the C programming language, or Pascal. Data and operations on the data are separated.

In OOP, we take procedural programming and we add some more functionality. The main difference is that our data and operations on the data are bundled together in a structured called an **Object**! This lets us define individual objects with their own **pre-set** data very easily (is possible in imperative programming but its a hassle and the code is long).

## Objects and Classes

Objects are made up of two main components: **properties** and **behaviours**. 

Consider a circle object :red_circle:

- Properties (data): Radius
- Behaviours (operations): Calculate the area, circumference, diameter, etc.

The properties of an object store its **state** while the methods operate on this data and change this **state**.

When working with objects, the first thing to do is to create a *blueprint* of the object which we call the **Class**. The object itself will be a specific **instance** of this **class**. 

```java
// The class must be defined in a Circle.java file.
public class Circle {
    double radius;
    public double area() {...}
    public double circumference() {...}
}
```

## The 4 Pillars of OOP

This is a summary of the 4 main sub-topics that we will cover in this chapter/part.

1. **Encapsulation**: Bundling data and operations that can be performed on that data together - leads to data hiding. This is done by using the *access modifiers* (public, protected, private). 
2. **Abstraction**: Exposing essential features, while hiding irrelevant detail
3. **Inheritance**: Creating new classes from existing ones, reducing programmer effort
4. **Polymorphism**: Using objects that can take many forms (different from Generics) - allows us to invoke operations from derived classes while using a base class reference at run-time. 



