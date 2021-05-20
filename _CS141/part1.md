---
layout: CS141
part: true
title: "General Functional Programming"
---

## The Compiler

> Haskell is a statically typed functional programming language. This means that types are known at compile-time instead of run-time.

This allows the GHC compiler to help us write better programs. When our code is compiling

- It first goes through a parser that converts ASCII source code into data in memory.
- Then the GHC checks types and infers missing ones. 
- Types are then discarded after type checking, and the compiler will generate binaries. (Types are not available at runtime.)

## Currying

> The process of applying arguments to a function one by one. 

Currying allows us to partially apply functions, which is very useful to e.g. define new functions in terms of partially-applied functions:

```haskell
-- Lets say for some reason i want to add 5 to a lot of things
add = \x -> \y -> x + y
-- We can define addFive with just add
addFive = add 5 x
```

### Uncurry

Contrastingly, there is a function `uncurry` that converts a curried function and converts it into a function on pairs.

```haskell
uncurry :: (a -> b -> c) -> (a,b) -> c
```

What this does it to make it more like function in mathematics, where arguments are taken together. 

```haskell
f (a,b) = a + b 
	-- vs -- 
f = \a -> \b -> a + b
```

## List comprehension

The general syntax for list comprehension is

```haskell
[expression | generators-and-predicates]
```

> Variables introduced in the RHS of the list comprehension are in scope in the expression on the LHS. Additionally, variables from generators are in scope in later ones.

**Example.**

```haskell
[n*m | n <- [0..2], m <- [0..n]] 
=> [0*0,1*0,1*1,2*0,2*1,2*2] 
=  [0,0,1,0,2,4]
```

Here we have two generators, `m <- [0..n]` appears after `n <- [0..4]`. Hence, the `n` is in scope in the generator `m <- [0..n]`. Both `m` and `n` are also used in the expression, so they are in scope on the LHS.

## Type Classes

> **Type class constraints** are used to restrict type variables to only types which support the functions or operators specified by the type class.

```haskell
Num is a type class in the Standard Library
```

Like names of types, type class names must start with an upper-case character.

### Type Class Definitions

> In a **type class definition**, we define the **method typings** that an arbitrary type `a` **must implement** to be an **instance** of that type class.

**Example.**

```haskell
class Num a where
  (+) :: a -> a -> a
  (-) :: a -> a -> a
  abs :: a -> a
  ...
```

- `Num` is the name of the type class we are defining. 

- `a` is a type variable.
- The definitions are the **typing** of the **methods** that a `Num` must adhere to. 

### Type Instance

> When we **define an instance** of a type class, we have to **adhere** to the typing of the method(s) in the type class definition.

```haskell
class Show a where
  show :: a -> String
  
instance Show Bool where
  show True  = "True"
  show False = "False"
```

In a Haskell module, there are a bunch of definitions of expressions. If we have a definition for something – we can refer to it by its name in the program. The Haskell compiler works out the **typing** for each definition is – when we use it it checks if the type is compatible with the expression.

> Hence, we say that a **type class** brings **function typings** into scope.

```haskell
(+) :: Num a => a -> a -> a
(-) :: Num a => a -> a -> a
abs :: Num a => a -> a
```

- `Num a =>` is a type class constraint.

#### Constraints on instances

You can also place constraints on instances. 

**Example.** Let’s say we want to define an instance of `Show` for pairs.

```haskell
instance Show (a,b) where
  show (x,y) = ???
```

Because we are using polymorphic types `a` and `b`, we obviously can’t pattern match on all possible values. Hence, the best way to do this is to place constraints that say both `a` and `b` must be instances of `Show` themselves.

```haskell
instance (Show a, Show b) => Show (a,b) where
  show (x,y) = "(" ++ show x ++ "," ++ show y ++ ")"
```

### Superclass Constraints

> Sometimes, certain type classes have a **superclass constraint** stating that a type must also be an instance of a **superclass** to be an instance of the **current class.**

```haskell
class Eq a => Ord a where
  (<)  :: a -> a -> Bool
  (<=) :: a -> a -> Bool
  ...
```

- In order for `a` to be an instance of `Ord`, it must also be an instance of `Eq`.

As a result, an `Ord` constraint on a function implies an `Eq` constraint

```haskell
greaterOrEqual :: Ord a => a -> a -> Bool
greaterOrEqual x y = x > y || x == y
```

## Polymorphism

### Parametric polymorphism

> Allows us to reuse the same data structure for different types of elements. (Generics in Java)

**Example of Parametric Polymorphism in Haskell**

```haskell
-- The identity function works on elements of any type
id :: a -> a
id x = x
-- Same as head function, works on lists that contain any type
head :: [a] -> a
head (x:xs) = x
```

### Ad-hoc polymorphism

> A kind of polymorphism that is **open** to future extension.

In Haskell, **type class constraints** is called ad-hoc polymorphism as you can define a function that works with a **certain type class** `K`, but does not necessarily work with any type just yet. In the future, as long as you define an instance of `K` for an arbitrary type, this function will accept/work with this arbitrary type.

### Subtype polymorphism

A synonym of this is [dynamic polymorphism](https://csrg-group.github.io/dcs-notes.github.io/CS118/part5.html#dynamic-polymorphism) in Java.

## Associativity

> **Function** associativity binds the strongest.

|   Haskell   |        Maths        |
| :---------: | :-----------------: |
| `f x * g y` | *f(x) &times; g(y)* |

{:.centeredtable}

> Function **expressions** associates to the right.

```haskell
xor = \a -> \b -> (a || b) && not (a && b)
-- is the same as 
xor = \a -> (\b -> (a || b) && not (a && b))
```

> Function **application** associates to the left.

```haskell
xor True True
-- is the same as
(xor True) True
```

> Function **types** associates to the right.

```haskell
xor :: Bool -> Bool -> Bool
-- is the same as 
xor :: Bool -> (Bool -> Bool)
```
