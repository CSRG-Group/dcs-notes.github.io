<flex style="display:flex; justify-content: space-between;">
<a href="part4.html" title="Object Oriented Programming">👈Prev</a>
<a href="index.html" title="CS118 Home">🏡CS118</a>
<a href="part6.html" title="Error Handling & Exceptions">Next👉</a>
</flex>

# Inheritance, Abstract Classes, and Interfaces

_A huge thank you to **Justin Tan** for contributing this post._

## Inheritance

Just like how we inherit certain traits from our parents, *subclasses* (children classes) inherit **all** methods and fields from their *superclass* (parent class) at first. After which, we can override or add features to the subclass. This is how we would do it in Java:

```java
// Parent class
public class Food {
    public void eat() {
        System.out.println("This tastes amazing!");
    }
}
// Child/subclass
public class Cake extends Food {}
```

In this case, `Cake` inherits the `eat()` method from the `Food` class even though we don’t specify it in the `Cake` class. That means we can call the `eat()` method from the `Cake` class like this:

```java
public static main(String[] args) {
    Cake chocolate = new Cake();
    chocolate.eat(); // This is valid!
}
```

Because we haven’t specified anything in the `Cake` class yet the output we get is still:

```
This tastes amazing!
```

Now, if we want to override this method we can do something like this:

```java
public class Cake extends Food {
    @Override
    public void eat() {
        System.out.println("This cake tastes amazing!");
    }
}
```

If we call the `eat()` method from the `chocolate` now we will get

```
This cake tastes amazing!
```

#### The `@Override` annotation

Before overriding the method in the `Cake` example, we write `@Override`, which is called a "method annotation". This indicates to the compiler that method overriding is occurring. This is not required to compile, but it comes with the benefits of:

- Readability, as it is clear when method overriding is occurring
- Error checking, as the compiler produces a warning if overriding is not occurring, indicating the programmer is not doing what they are intending to

More information is available [here](https://stackoverflow.com/questions/94361/when-do-you-use-javas-override-annotation-and-why), [here](https://stackoverflow.com/questions/4822954/do-we-really-need-override-and-so-on-when-code-java), and [here](https://beginnersbook.com/2014/07/override-annotation-in-java/).

### Why inheritance?

You probably already know this, but inheritance means that we can reduce repeated code. Another reason to use inheritance is so that **run-time polymorphism** is possible! We will discuss this in further detail below but essentially it allows us to define a general method for a superclass but do something specific to it depending on the eventual subclass that we have no knowledge of at compile time.

### The `super` and `this` keyword

The `this` keyword is used to refer to the current instance of the class. In a similar way, the `super` keyword is used to refer to the superclass of the current instance.

### `super` in the subclass constructor

The superclass’s constructor should be the first thing that you call when defining the subclass constructor - especially if there are parameters that the `super` constructor must take. Otherwise, Java will call the default (no argument) `super ` constructor `super()` - and if it is meant to take parameters you will get a compile-time error.

If your subclass happens to have 2 constructors then one of them should call the other constructor with `this()` and the other should have `super()` in it.

### Method overriding

From the example on the `Cake` class above, you have seen how we can override a method from a superclass. How about if we just want to extend the method but we don’t want to change anything in the super method? That’s right, we can call the `super` method in the subclass method:

```java
// Cake class
public void eat() {
    super.eat();
    System.out.println("Wow I love cake!");
}
```

The output we get is:

```
This tastes amazing!
Wow I love cake!
```

But what if a certain superclass method is *private*? We won’t be able to access them from the subclass. However, this is where the ***protected*** keyword comes in handy, as subclasses can access the *protected* properties in the superclass. So lets say our `Food` class has a `name` field now and a setter to set the `name`.

```java
public class Food {
    ...
    private String name;
    public void setName(String name) {
        this.name = name;
    }
    public void getName() {
        return this.name;
    }
}
```

If we define `name` as *private* then the following code will give an error:

```java
public class Cake extends Food {
    ...
    @Override
    public void eat() {
        System.out.println("This " + super.name + " tastes amazing!");
    }
}
```

We would have to use the getter method `getName()` to get the String value of the `name` field in `Food`. However, it is **valid** if we set *private* to *protected*.

## Polymorphism

### Static Polymorphism

**Static polymorphism** is essentially method overloading. It is polymorphism because the name of the method can represent different methods and how Java understands which method to call is based on the **type** and/or **number** of parameters!

It is called **static** because when we compile code, Java will be able to decide at compile-time which method will be called based on the parameters provided.

```java
// Static polymorphism/Method overloading
public static void main(String[] args) {
    hi();
    hi("cake")
}
// Here we are overloading by number of arguments
public void hi() { 
        System.out.println("Hi!");
}

public void hi(String name) {
    System.out.println("Hi " + name + "!");
}
```

```
Hi!
Hi cake!
```

### Dynamic Polymorphism

On the other hand, **Dynamic Polymorphism** is run-time polymorphism - Java will determine what class to treat a specific object when the program is executed.

Lets look an example before elaborating. Adding on to our previous two classes `Food` and `Cake`, lets introduce two new classes `Apple` and `Hungryboi`:

```java
public class Food {
    public void eat() {
        System.out.println("This tastes amazing!");
    }
}

public class Cake extends Food {
    @Override
    public void eat() {
        System.out.println("This cake tastes amazing!");
    }
}

public class Apple extends Food {
    @Override
    public void eat() {
        System.out.println("This apple tastes amazing!");
    }
}
// Hungryboi digests a Food object x which calls x.eat()
public class Hungryboi {
    public void digest(Food x) {
        x.eat();
    }
}
```

And now if we do this:

```java
public static void main(String[] args) {
    Hungryboi me    = new Hungryboi();
    Food somefood   = new Food();
    Food redApple   = new Apple();
    Food cheeseCake = new Cake();
    Object random   = new Cake();
  
    // Remember that the digest method calls the eat method
    // in the Food, Apple, and Cake class
    me.digest(somefood); 
    me.digest(redApple);
    me.digest(cheeseCake);
    // Print out the results of the instanceof operator 
    System.out.println(random instanceof Food);
    System.out.println(random instanceof Cake);
    System.out.println(random instanceof Apple);
    System.out.println(random instanceof Hungryboi);
    System.out.println(cheeseCake instanceof Apple);
    System.out.println(cheeseCake instanceof Food);
}
```

Our output is (you can check it yourself by copying the code):

```
This tastes amazing!
This apple tastes amazing!
This cake tastes amazing!  
true
true
false
false
false
true
```

The reason why line 2 and line 3 show the output for the `Apple` and `Cake` class respectively is because even though they are declared as a `Food` type, Java resolves their types at run-time. Java is able to tell that one is the `Apple` subclass, and the other is the `Cake` subclass, and it calls the appropriate subclass methods.

This **only** works because the `Food` class also has the `eat()` method defined. If we wanted to use a method that is only defined in the `Cake` class, then we would have to cast `cheeseCake` to a `Cake`.

```java
public class Cake extends Food {
    @Override
    public void eat() {
        System.out.println("This cake tastes amazing!");
    }
    public void admire() {
        System.out.println("This cake looks amazing!")
    }
}
```

```java
public static void main(String[] args) {
    Food cheeseCake = new Cake();
    cheeseCake.eat();
    cheeseCake.admire(); // Does not work will produce compile-time error
    // The error message will probably be:
    // "The method admire() is undefined for the type Food"
    ((Cake) cheeseCake).admire(); // Works
}
```

#### Something to note:

If you’re on Java SE 15 or newer and try this line of code below - you will get an error.

```java
System.out.println(cheeseCake instanceof Hungryboi)
```

That’s because at compile-time, Java knows casting fails so `instanceof ` comparison will fail as well and it tries to warn you to save you time. Click [here](https://stackoverflow.com/questions/2551337/instanceof-incompatible-conditional-operand-types) for a better explanation.

## Quick Recap

### Static vs Dynamic Polymorphism

**Static polymorphism** has to deal with polymorphism at compile-time. This usually refers to method overloading where a single method name can refer to a range of methods that differ by either the **type** of their parameters or the **number** of parameters they have. The Java compiler identifies this at compile-time and it is converted into byte-code for the JVM (Java Virtual Machine) to interpret, which then converts the byte-code to the native machine code and executes the program.

**Dynamic polymorphism** refers to polymorphism at run-time, this is because the JVM decides which method is to be called only at run-time. At compile-time, calling a method is considered by its reference type (e.g. `Food somefood` is of type food where `somefood` is the reference). At run-time, the specific method that is called will be decided by the type of the object that the reference is pointing to/holding (e.g. `Food somefood = new Cake()`, so the methods that will be called will be from the `Cake` class). Here we say that it is resolved at run-time because the compiler does not know if the method has been overridden or not ([N. Joshi, 2019](https://dzone.com/articles/how-does-jvm-handle-polymorphism-method-overloadin#logical-way:~:text=considered from the reference type. But,object which the reference is holding.)).

### Method overloading vs overriding

Two methods are **overloaded** when they have the same name but different types/number of arguments (essentially their list of arguments must look different). Other than that, overloaded methods can return different types, do different things or throw different exceptions. Method overloading can happen in the same class or in subclasses.

A method from a subclass **overrides** a method from a superclass when it has the same name and same type and number of arguments. There are a set of rules that the subclass method must abide to such as having the same return type, must have the same or less restrictive access modifier, and must not throw new or broader checked exceptions. Method overriding can only happen to inherited methods, which imply that it can only happen between subclasses and their superclass(es).

Check out [this](https://dzone.com/articles/everything-about-method-overloading-vs-method-overriding) article by Naresh Joshi for a more in-depth explanation.

## Abstract Classes

If we recall, the motivation behind inheritance is to reduce repeated code and to allow for run-time polymorphism. By now you should realise that each subclass becomes more specific than its superclass, and eventually superclasses become so general that they seem abstract. We can call these general classes **abstract classes**.

### Properties of abstract classes

Firstly, abstract classes **cannot** be instantiated. The reason is that they are meant to capture common properties and behaviours at an abstract level and are meant to be **extended** (or inherited from) to make a subclass that is more specific. Therefore, there should not be a need to instantiate abstract classes.

In fact, it would not make sense to instantiate/define and instance of an abstract class because of **abstract methods**. These are methods that would not make sense for the abstract class to define but makes sense for its **subclasses** to define. **Abstract classes** can contain a mix of **abstract methods** and **concrete methods**.

Lets give an example:

Suppose that we want define an abstract **Food** class for an online supermarket. (I tried to come up with a better example... :pensive: )

```java
public abstract class Food {
    // Protein, carbs, and fats in grams
    private double protein;
    private double carbs;
    private double fats;
    // Return total amount of calories in a Food (Concrete method)
    public double calories() {
        return protein x 4.0 + carbs x 4.0 + fats x 9.0;
	}
    // Abstract methods
   	public abstract String description();
    public abstract double price();
}
```

Here we have defined the **calories** method for the abstract **Food** class. This is a concrete method because all kinds of food will always have a certain amount of *protein*, *carbohyrdates*, and *fat* which will always be 4,4, and 9 calories per gram. Therefore, it makes sense to define a concrete method for all kinds of **Food** (Remember that any subclasses will inherit this method from **Food**).

Next, there are the abstract methods for **description** and **price**. Since every kind of ingredient/type of food that will be sold at the supermarket is going to be different it doesn’t make sense to define a concrete method for all **Food**.

However, we know that we want to have a description and price for each item and hence we define these 2 abstract methods for all kinds of **Food**. This makes it compulsory for subclasses to have a specific and concrete definition of these **abstract methods**. This is useful when using **Generics** because any class that extends the abstract **Food** class is guaranteed to have a definition for **description** and **price**.

Just in case there’s confusion: Inheriting from an abstract class is the same as any normal classes.

```java
public class NewYorkCheeseCake extends Food {...}
```

## Interfaces

Now that you have an idea of what an **abstract class** is, what its properties are, and what it is kind of used for, interfaces become really easy to understand. Just think of interfaces as the most abstract class in a hierarchy of classes. This is where there are no **concrete methods** at all and all methods are **abstract**.

Here is how we define an interface:

```java
public interface Hi {...}
```

and this is how we *implement* an interface (I sincerely apologise for my lack of creativity :sob:)

```java
public class Hi2 implements Hi {...}
```

### Properties of interfaces

As mentioned earlier, interfaces have no **concrete methods** and all methods are **abstract**.

Just like abstract classes, interfaces **cannot be instantiated**.

Additionally, interfaces can **only** contain:

1. Fields which are *public static final* and if not specified are defaulted to this
2. Methods which are not defined/implemented. (They must be left “empty” like abstract methods but they shouldn’t be declared with the keyword **abstract**!)

```java
public interface Hi {
    int var1 = 1;
    public static final int var2 = 2;
    public void method1();
    public int method2(int a, int b);
    public boolean method3(int a, Test b);
    ...
}
```

## Multiple inheritance

While Java doesn’t allow multiple inheritance (meaning that we can’t extend from two different superclasses - only 1 superclass per subclass!), Java allows you to implement multiple inheritance because interfaces just require a class that implements it to define a particular method - there is no “inheritance” of a particular definition of a method.

### Why interfaces?

This all seems pretty useless doesn’t it? If we aren’t defining anything concrete, why bother with interfaces at all? (That’s what I thought too until I was enlightened 🤯).

*We bother because interfaces are used to **encapsulate** a small subset of functionality/a property.*

#### What does that mean?

Interfaces allow us to give **concrete classes** a certain functionality/property that perhaps isn’t appropriate to define in a subclass-superclass class hierarchy. Lets give an example to explain:

Suppose we have the class hierarchy as shown below, where Animal, Striped, and Plain are abstract classes and the last level of classes are concrete.

<img src="..\media\ClassDiagram.png" alt="Class Hierarchy Diagram" style="zoom:40%;display:block;margin-left:auto;margin-right:auto;" />

Suppose now that we want to be able to compare the number of stripes that an animal has. So that we can easily do something like

```java
Tiger bob = new Tiger();
Zebra tom = new Zebra();
bob.compare(tom);
```

```java
bob has more stripes than tom
```

To do this we can implement the **Comparable** interface (Its in `Java.util`) in the **Striped** class and define the `compareTo()` method for the **Striped** class.

```java
public abstract Striped extends Animal implements Comparable<Striped> {
    private Integer stripes;
    public String nickname;
    public Integer getNoOfStripes() {
        return this.stripes;
    }
    // Custom compareTo method
    @Override
    public int compareTo(Striped animal) {
        int comp = this.stripes.compare(animal.getNoOfStripes());
        if (comp == -1)
            System.out.println(this.nickname + " has more stripes than " + animal.nickname);
        else if (comp == 0)
            System.out.println("They have the same number of stripes");
        else
            System.out.println(this.nickname + " has fewer stripes than " + animal.nickname);
        return comp;
    }
}
```

Now any **Animal** that is **Striped** as well can be compared with each other based on the number of stripes that they have. This may allow additional functionality such as sorting striped animals by the number of stripes they have.
