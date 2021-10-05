---
layout: notes
part: true
math: true
title: "General Functional Programming"
---

## Imperative vs Functional

| Imperative                                     | Functional                                                   |
| ---------------------------------------------- | ------------------------------------------------------------ |
| Mutation of state                              | Reduction of expressions                                     |
| Tell the computer how you want to do something | Tell the computer what you want to compute and let it work out how to do it |
| Statements executed in order specified         | Sub-expressions can often be evaluated in an arbitrary order |
| Loops                                          | Recursion                                                    |

## The Compiler

> Haskell is a statically typed functional programming language. This means that types are known at compile-time instead of run-time.

This allows the GHC compiler to help us write better programs. When our code is compiling

- It first goes through a parser that converts ASCII source code into data in memory.
- Then the GHC checks types and infers missing ones. 
- Types are then **erased** after the type checking phase, and the compiler will generate binaries for the CPU to be able to run the program. (Types are not available at runtime – this is **type erasure**)



## Expressions and definitions

Haskell evaluates programs by "reducing" expressions to a "normal" (simplest) form in a lazy manner. This is when a complicated statement has the rules defined by the language and the rest of the program applied to it to reduce its complexity, as it is a declarative language, for example `2+2` would be reduced to `4` by applying the definition of the `+` function.

Definitions are when expressions are assigned to named variables, so they can be referenced elsewhere without having to be defined again inline



## Anonymous functions

The `\` is used to resemble the Lambda character from Lambda calculus, and it denotes a function without a name, which is just a transformation on an argument. For example, a function to multiply a parameter by two can be written as:

```haskell
\x -> x * 2
```

All functions in Haskell are actually just anonymous functions, which are assigned to variables, as functions are treated as first class objects, but for simplicity and neatness, we needn't define them this way in code, we can instead use syntactic sugar

## Syntactic sugar for functions

Haskell syntax can be verbose if they are written using only anonymous nomenclature, so there is "syntactic sugar", which can be used to simplify how things are written, for example, the following statements are equivalent

Function definitions can be expressed in various ways. Internally, they are allocating anonymous functions names, but syntactic sugar can be used to make this prettier. For example, the following two functions are equivalent:

```{haskell}
x = \a -> a + 1
x a = a + 1
```



## Currying

> The process of converting a function which takes multiple arguments into a sequence of functions, each of which take one argument

In Haskell, we fundamentally only create functions which apply an operation to a single input value, and generate a single output value.

We can make functions which look like they take multiple arguments by having a function which takes a parameter, and returns another function, which is specialised based on that parameter. Then, the second (or nth) parameter can be applied to this returned function, yielding the final value.

For example, to write a function to add two numbers, we can say:

```haskell
add :: Int -> Int -> Int
add = \x -> \y -> x + y
```

When this is evaluated, the first parameter would "specialise" the function, giving:

```haskell
(add 5) :: Int -> Int
add 5 = \x -> x + 5
```

So we can see when the first parameter is evaluated, another function is returned, which can then be evaluated with the next parameter. Then, with the second parameter, it just resolves to a single value:

```haskell
(add 5 6) :: Int
add 5 6 = 6 + 5
```

This process is called "partial application", as each parameter is "partially applied" to the function

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



## Conditionals

In function definitions, we often want to be able to write conditional statements. For example, if we want to implement the "not" boolean operator, we might say "if the argument is True, then False, otherwise, True". This can be written in Haskell in a number of ways:

- If..then..else statements

  ```{haskell}
  not' = \x -> if True
                  then False
                  else True
  ```

  This can then be re-written using syntactic sugar to an in-line expression

  ```{haskell}
  not' x = if True then False else True
  ```

  It is worth noting that if an if..then..else statement returns a boolean value, we should always try to replace it with just a simple expression, for example, `if x==5 then True else False` should be written as `x==5`.

- Guards, which similarly act like syntactic sugar for conditional expressions

  ```{haskell}
  min x y | x < y		= x
          | otherwise	= y
  ```

- Case statements

  ```{haskell}
  not' = \x -> case x of
                  True -> False
                  False -> True
  ```



## Lists

In Haskell, the list data type is implemented as a linked list. This effects how they should be used efficiently, for example, indexing inefficient, but looking at the first item is very efficient

Lists are homogenous, meaning all elements must have the same data type. As a result of this, the type of a list is the polymorphic type signature `[] :: [a]`, since they can store any type, but each element must have the same type

Lists are almost always written with their syntactic sugar, but they are in fact constructed by prepending elements to an empty list

```{haskell}
x = [1,2,3]
x = 3 : (2 : (1 : []))
```

The `:` or "cons" is used as an infix operator to prepend elements to the list, building it up from an empty list

- This relates to how list data type is implemented as a linked list, as it encodes the fact that items are added as the head of the linked list sequentially
- The type of the "cons" operator is `(:) :: a -> [a] -> [a]`, as it takes an element to prepend, and a list containing the same type, and returns a list of that type



## Ranges

Ranges are a way of generating lists, rather than having to explicitly enumerate them. Haskell can handle ranges for many data types, and will infer patterns from them. For example

```{haskell}
> [1..4]
[1,2,3,4]
> ['a'..'c']
['a','b','c']
> [1,3..10]
[1,3,5,7,9]
```

The last example shows the way the compiler can infer patterns - it is effective, but can only handle fairly simple patterns.

Since Haskell is lazily evaluated, it can store ranges of infinite length, and the data will only be used as it is needed

```{haskell}
> [0..]
[0,1,2,3,4,5,...]		-- takes infinite time to print all numbers out
> take 3 [0..]
[0,1,2]					-- takes finite time to pull numbers off the front of an infinite array
```



## List comprehensions

List comprehensions are a further way to generate lists, and offer a greater ability to select and filter the data. They have the general form:

```{text}
[expression | generator(s) (predicate)]
```



They have a large number of variations, including:

- Expressions can be applied to the values being iterated over

  ```{haskell}
  [even n | n <- [0..5]]
  => [True,False,True,False,True,False]
  ```

- Multiple generators can be used

  ```{haskell}
  [n * m | n <- [0..2], m <- [0..2]]
  => [0,0,0, 0,1,2, 0,2,3]
  ```

  where every `m` is iterated over for each `n`

- Variables to the left are in scope of those to the right, so the following is also valid

  ```{haskell}
  [n * m | n <- [0..2], m <- [0..n]]
  => [0,0,1,0,2,4]
  ```

- The left hand side of a generator can be pattern matched on

  ```{haskell}
  [x | (x:xs) <- [[1,2,3], [4,5,6,7]]]
  => [1,4]
  ```

- Finally, predicates can be used along with generators to select whether a value being iterated over should be included in the list

  ```{haskell}
  [x | x <- [0..5], even x]=> [0,2,4]
  ```




## Type Classes

> **Type class constraints** are used to restrict type variables to only types which support the functions or operators specified by the type class.
>
> `Num` is a type class in the Standard Library

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

|   Haskell   |        Maths         |
| :---------: | :------------------: |
| `f x * g y` | $$f(x) \times g(y)$$ |

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
