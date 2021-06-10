---
layout: CS141
part: true
title: Type Level Programming
---

## Kinds

> Just like how expressions have **types**, types have **kinds**.

```haskell
expression :: type -- type signature
type  :: kind      -- kind signature
Bool  :: *
Maybe :: * -> *
```

For example, the type `Bool` has kind `*` (star) because `Bool` has no parameters. On the other hand, `Maybe` is of kind `* -> *` (star to star), as we know that `Maybe` is a **type constructor** and has 1 parameter.

`* -> *` basically says that if you give this **kind** a type as an argument, then it gives back a type.

`[] :: * -> *` is another example – given a type `a` to the **list** type constructor and it will give `[a]` (a list of `a`). 

### Kinds = Better Code 

Kinds help us code instances better, as long as we understand it. 

```haskell
Monad :: (* -> *) -> Constraint
instance Monad Either where ... 
-- Error: Expected kind * -> * but Either has kind * -> * -> *
```

In this example, it is easy to see why we get an error, because `Monad` is a type class that takes a type of kind `* -> *` (basically a type constructor) and gives a `Constraint`. So giving it a type of kind `* -> * -> *` violates this constraint. 

You can think of type classes as a constraint constructor, although this isn’t a standard term so don’t use it!

### Finding the kind

In the Haskell repl, we have seen we can use `:t <VALUE>` to find the type of a given value or variable. Similarly, we can find the kind of a type using `:k <TYPE>`, and additionally reduce the type to a normal form with `:kind! <TYPE>`.

## Type promotion

Using Haskell language extensions, we are able to create our own **kinds** of types. This feature is not in Haskell by default, so we need to add a language extension to use it. We can use the Haskell extension `XDataKinds` in three ways:

1. Writing the following at the top of our source file, as *language pragma*:

   ```haskell
   {-# LANGUAGE XDataKinds #-}
   
   module Program where
   ```

2. Modifying the `.cabal` file for the entire target

   ```
   library
           ...
       default-extensions: DataKinds
   ```

3. With flags on the command line (requires specification every time)

   ```bash
   $ ghc Program.hs -XDataKinds
   ```


Usually we use Language Pragmas.

> **DataKinds** is the language extension that allows us to create our own **kinds**.

With `DataKinds` enabled, each data type we define not only introduces a type with some constructor but also introduces

- a new kind which has the same name as the data type
- additional data types – have the same name as the data constructors but preceded with a `'`.
  - These additional data types are of the new kind that is introduced.

**Example.** Here we are getting a **type-level** boolean of **kind** `Bool`.

```haskell
data Bool = True | False
  True  :: Bool -- type signature
  False :: Bool
-- With DataKinds enabled, the 'True and 'False data types are introduced
  'True  :: Bool -- kind signature (do not confuse with typings)
  'False :: Bool
```

To visualise this you can look at the table below. The right-most column is what the `DataKinds` language extension adds in addition to what happens normally when you define a type with `data`.

|                 |      Normally      | DataKinds Additions  |
| :-------------: | :----------------: | :------------------: |
| **Kind-Level**  |        `*`         |        `Bool`        |
| **Type-Level**  |       `Bool`       | `'True` and `'False` |
| **Value-level** | `True` and `False` |                      |
{:.centeredtable}

## GADTs

> **Generalised Algebraic Data Types** (GADTs) allow us to define **more expressive** data type definitions. The language extension is `GADTs`.

```haskell
-- ADT syntax
data Vector a = Nil | Cons a (Vector a)
  {- 
     Behind the scenes we get 
       Nil :: Vector a
       Cons :: a -> Vector a -> Vector a 
  -}
-- with GADT syntax
data Vector a where
  Nil  :: Vector a
  Cons :: a -> Vector a -> Vector a
```

Currently, the `head` function on `lists` will break if given an empty list. So we can fix that by returning a `Maybe` or `Either` type and then deal with the result in another function. 

But `GADTs` together with **another extension,** `XKindSignatures`, will allow us to define a `head` function for `Vector` that will reject an empty list at compile-time – removing the need for us to handle the results of `Maybe` or `Either`.

```haskell
data Vector (n :: Nat) a where
  Nil  :: Vector 'Zero
  Cons :: a -> Vector n a -> Vector ('Succ n) a
  
vhead :: Vector ('Succ n) a -> a
vhead (Cons x xs) = x

data Nat where         -- Behind the scenes we get 
  Zero :: Nat          --   'Zero :: Nat
  Succ :: Nat -> Nat   --   'Succ :: Nat -> Nat
```

In the new definition of `Vector` we have placed a specification on the 1st parameter `n`. `(n :: Nat)` essentially says that the type `n` has to be of **kind** `Nat`. And in the new definition of `Nil` and `Cons`, we are able to specify that `Nil` will only accept an element of type `Vector 'Zero` and `Cons` will always give a `Vector` 1 element larger. 

In this example, GADTs allow us to specify **more constrained** return types for data constructors.

### Singleton Types

> Types where there is a 1:1 correspondence between types and values. Essentially a particular singleton type will only ever have one value that is associated with it. 

From above we have seen that with `DataKinds` and `GADTs` we are able to encode information about the value of a certain element through its **type**. In specific cases, we may want to make use of this to define **singleton types**.

```haskell
data SNat (n :: Nat) where
  SZero :: SNat 'Zero
  SSucc :: SNat n -> SNat ('Succ n)
```

In this example, we are defining a singleton type for natural numbers. If we try to define `sone` or `stwo`, their types will be unique.

```haskell
sone :: SNat ('Succ 'Zero)
sone = SSucc SZero

stwo :: SNat ('Succ ('Succ 'Zero))
stwo :: SSucc sone
```

## Reification

> Reification is the process of **converting types to values**, typically using **type classes**.

There are a few ways to implement the instances for the type classes and one way (which is used in the lectures) is to use **proxy types**.

### Proxy Types

We don’t have types at runtime due to **type erasure**, so we can’t write a function that takes types as arguments in Haskell, even though we sometimes want to. 

> Functions only accept arguments whose types are of kind `*`. Proxy types are used to establish a link between types of other kinds and types of kind `*`, thus “carrying” types of other kinds into the scope of a function’s type.

**For example,** we might want to define a function

```haskell
fromNat :: forall (n :: Nat) => n -> Int
```

which takes a type-level natural number `n` of kind `Nat` as input and returns the corresponding `Int` value. However, **only** types of kind `*` have values at run-time in Haskell. Since there are **no values** of types of kind `Nat`, we cannot define a `fromNat` function of the given type.

> Proxy types provide a partial work around Haskell’s limitations **for cases where** knowing what type is given to a function as its “argument” at compile-time is sufficient.
>
> **TLDR.** A proxy type is a type of kind `k -> *` (where `k` can be specialised to the kind of whatever types you want to give to a function as argument). Only types of kind `*` have values, so we apply our proxy **type constructor** to some argument of kind `k` to get a type of kind `*` which then makes a suitable parameter for a function.

In the following **example**, we will show how this allows us to convert a type into a corresponding value. In other words, we show how to take information from the **type level** and convert it to information at the **value level** (reification).

```haskell
data NatProxy (n :: Nat) = MkProxy
```

Here, the `NatProxy` **type constructor** is of kind `Nat -> *`, meaning it takes some type `n` of kind `Nat` and gives back a type of kind `*` which has a value at run-time. `MkProxy` is the **data constructor** for `NatProxy` and is of type `NatProxy n`.

Now with our **proxy type**, we can define a `fromNat` function with a slightly modified type. Since `NatProxy :: Nat -> *`, `NatProxy n` is a valid parameter type for a function since it is of kind `*`. We use a type class to overload this `fromNat` function so that we can provide different implementations for it, depending on which type `n` is. For example, if `n` is `'Zero` we just define `fromNat` to return `0` as shown:

```haskell
class FromNat (n :: Nat) where
  fromNat :: NatProxy n -> Int

instance FromNat 'Zero where -- 'Zero is a type defined by Nat in GADT section
  -- fromNat :: NatProxy 'Zero -> Int
  fromNat _ = 0
```

**Next,** the instance for any other `n` requires us to constrain the `n` in the instance head to be an instance of `FromNat` so that we can define the instance for `'Succ n` **recursively**. The recursive call to `fromNat` is given `MkProxy` as argument, with an **explicit type annotation** instructing the compiler to choose the `fromNat` implementation for `n`. (Read the comments in the code snippet.)

```haskell
{-# LANGUAGE ScopedTypeVariables #-}
instance FromNat n => FromNat ('Succ n) where
  -- fromNat :: FromNat n => NatProxy ('Succ n) -> Int
  fromNat _ = 1 + fromNat (MkProxy :: NatProxy n)
  -- (MkProxy :: NatProxy n) essentially means the n in "NatProxy n" 
  -- is the same n as that in the instance head. 
  -- ScopedTypeVariables extension has to be enabled for this to work.
  
  vlength :: forall n a . FromNat n => Vector n a -> Int 
  vlength _ = fromNat (MkProxy :: NatProxy n)
  -- Here "forall n a" is required for ScopedTypeVariables to work correctly
```

Although we use proxy types to implement the reification process here, they are **independent techniques**. That is, proxy types have uses outside of reification and reification can be accomplished without proxy types, which is **not** covered in the module.

### Additional Example (Type Application)

<blockquote class="extra">
  <b>FYI.</b> This section is additional material and is not tested in the exams.
  I have included an example that Michael showed me, to illustrate how we may reify types without using proxy types. 
</blockquote>

Quoting Michael, 

*“I just typed straight into Slack, so it may not compile as is, but conceptually this [is how we would do it]”*

This example makes use of a few language extensions which are shown. 

```haskell
{-# LANGUAGE TypeApplication, AllowAmbiguousTypes, ScopedTypeVariables #-}
class FromNat (n :: Nat) where
   fromNat :: Int
   
instance FromNat Zero where
   fromNat = 0
   
instance FromNat n => FromNat (Succ n) where
   fromNat = 1 + fromNat @n
   
type Test = Succ (Succ Zero)

test :: Int
test = fromNat @Test
```

Here, `@` is type application which is used to explicitly supply an argument for a universal quantifier. Universal quantifiers are usually implicit in Haskell, but in some cases it is useful to make them explicit when writing down typings. In the case of `fromNat`, its type is as follows with the universal quantifiers made explicit:

```haskell
fromNat :: forall (n :: Nat) . FromNat n => Int
```

When we write `fromNat @Test` (last line), the `n` gets instantiated with `Test` and we get `FromNat Test => Int` as the type. Because `Test` expands to something that has an instance of `FromNat`, the constraint is satisfied and the compiler can pick the right implementation of `fromNat` to use, which is how the reification “works”.

> Type application can be used with other variables, for example `something`. As long as these have an instance of `FromNat` defined for them. So if we write `fromNat @something` then `n` will be instantiated with `something`. 

### Concluding Reification

Here, we have provided two examples of how we can reify types. You have seen how useful type classes  are as they allow us overload the `fromNat` function for different types of `n`. This **resolves** to the **correct instances** at **compile-time** so the **right implementation** of the function is **evaluated at runtime**.

## Type Families

*Language extension:* `TypeFamilies`

Type families are type-level functions and allow us to **perform computation** at the type-level. There are two main types of type families, **closed type families** and **associated (open) type families**. 

> **Associated (open) type families** are “attached” to **type classes** and is open to further extension when defining **instances**. 
>
> **Closed type families** are very much like “normal” functions in the sense that you “know” what kind of types the **type family** will deal with and the effect to be achieved, and you just define it as such.

### Closed Type Families

I think the best way to explain this is through an example. As you can see, the syntax for **type families** is different from anything we’ve seen before. The example below should be pretty self explanatory and you can see that the head of definition sort of resembles the type signature of a normal function, and the definition of the actual `Add` function is just pattern matching on the type of `Nat`. 

```haskell
{-# LANGUAGE TypeFamilies #-}
type family Add (n :: Nat) (m :: Nat) :: Nat where
  -- Add :: Nat -> Nat -> Nat
  Add 'Zero m = m
  Add ('Succ n) m = 'Succ (Add n m)
```

If we enable the `TypeOperators` language extension, we can use operators in our **type family** definition, which in turn allow us to use it very nicely in the `vappend` example below.

```haskell
{-# LANGUAGE TypeOperators #-}
type family (+) (n :: Nat) (m :: Nat) :: Nat where
-- or
type family (n :: Nat) + (m :: Nat) :: Nat where

vappend :: Vector n a -> Vector m a -> Vector (n + m) a
vappend Nil         ys = ys
vappend (Cons x xs) ys = Cons x (vappend xs ys)
```

#### How to test in REPL

We can get REPL to evaluate types for us by using the `:kind!` syntax. This evaluates the type to its normal form.

```haskell
Lecture> :kind! (+) 'Zero 'Zero
(+) 'Zero 'Zero :: Nat
= 'Zero
```

### Associated (Open) Type Families

> **Motivation for Associated Type Families.** Sometimes, when we define a certain type class, we want it to be as general as possible but because of certain constraint requirements for different instances of the type class, it is difficult without type families.

**Example.** Let’s say we want to define a **type class** `Collection` for various data structures like lists or trees etc.

```haskell
class Collection c where
  -- c :: * -> *
  empty  :: c a 
  insert :: a -> c a -> c a
  member :: a -> c a -> Bool -- Checks if `a` is part of a collection
```

Now when we try to define an instance of `Collection` for lists, we could try to implement it this way. However, we get a type error due to our usage of `elem`, which requires elements in the list to have the `Eq` constraint.

```haskell
instance Collection [] where
  empty       = []
  insert x xs = x : xs
  member x xs = x `elem` xs 
  -- however we get a type error:
  -- No instance for Eq a arising from use of elem
```

We could add an `Eq a` constraint onto the **type class** definition for member. However, this makes the `Collection` type class too **restrictive** for other data structures. Furthermore, we can’t predict what kind of data structures that other people will create, and `Collection` should be as **general** as possible. 

#### Associated type families to the rescue

Associated type families allow us to associate a **type family** with our **type class**. This allows to do “something” based on the instance of the type class which depends on the problem we are trying to solve.

> Regarding the example above, our goal is to have some way of placing constraints on the **type** of the elements contained inside `c`, so that our instances for the **type class** type checks.

So for any instance of collection, the `Elem` type family, given `c`, will return the type of elements in `c`. This establishes a relation between `c` and some type of kind `*`.

```haskell
class Collection c where
  type family Elem c :: *
  
  empty  :: c
  insert :: Elem c -> c -> c
  member :: Elem c -> c -> Bool
```

If we write down the specialised type signatures for `insert` and `member` for this instance of `Collection` for lists, we can see that the associated type family `Elem` tells the compiler that the `a` contained inside the list, is the same `a` that is used in the rest of the instance definition. We can now place an `Eq` constraint on `a` and everything type checks.

```haskell
instance Eq a => Collection [a] where 
  type Elem [a] = a -- this isn't a type alias; it's a type family instance.
  
  empty       = []
  -- insert :: Elem [a] -> [a] -> [a] (Specialised type signature)
  insert x xs = x : xs
  -- member :: Elem [a] -> [a] -> Bool
  member x xs = x `elem` xs
```

### Overloaded Lists

*Language Extension:* `OverloadedLists`

This is a neat language extension that allows us to use list notation for other data types as long as the data type has an instance of `IsList` defined for it.

```haskell
-- Without
poultree :: Tree String
poultree = Node Black
             (Node Black Leaf "Chicken" Leaf)
             "Duck"
             (Node Black Leaf "Goose" Leaf)
-- With
{-# LANGUAGE OverloadedLists #-}
poultree :: Tree String
poultree = ["Duck", "Goose", "Chicken"]
```

Below we show an example with the `Tree` data structure from one of the labs.

```haskell
-- IsList is defined in GHC.Exts
class IsList l where
  type family Item l :: *
  
  fromList  :: [Item l] -> l
  fromListN :: Int -> [Item l] -> l
  fromListN _ xs = fromList xs
  toList    :: l -> [Item l]
  
instance Ord a => IsList (L.Tree a) where
  type Item (L.Tree a) = a
  
  toList = L.toList
  fromList = foldr (flip L.insert) L.empty
```

