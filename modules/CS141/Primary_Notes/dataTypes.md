---
layout: notes
part: true
title: Data Types
---

## Data Type Definition

```haskell
data Bool = False | True
data Module = CS141 | CS256 | CS118 | CS132 ...
data Unit = Unit
not :: Bool -> Bool
not True  = False -- Pattern matching on constructors
not False = True  -- Constructors as values
```

This is the definition of the data type for `Bool`. “Bool” is the name of the type, and “False” and “True” are **data constructors.**

- We can pattern-match on data constructors
- We can use data constructors as values
- We can have as many number of data constructors as we want
- Name of the type is not the same as the data constructor (although we can name them the same)
- Data constructors can have parameters.

### Parametrised Data Constructors

We can add parameters to a data constructor by adding their types after the constructor’s name.

```haskell
data Shape = Rect Double Double
           | Circle Double
```

We can treat data constructors like a function.

```haskell
Rect   :: Double -> Double -> Shape
Circle :: Double -> Shape
```

## Recursive Data Types

```haskell
data Nat = Zero | Succ Nat
```

```haskell
data BinTree a = Leaf a | Node (BinTree a) (BinTree a)
```

## Type Aliases

We can define aliases for a certain type.

```haskell
type String = [Char]
type Memory = [(String, Int)] -- Recall coursework 2
type Predicate a = a -> Bool
```

## Derivable Type Classes

|                  Type Classes                  |   Extension needed    |
| :--------------------------------------------: | :-------------------: |
| `Eq`, `Ord`, `Enum`, `Bounded`, `Show`, `Read` |                       |
|               `Typeable`, `Data`               | `XDeriveDataTypeable` |
|                   `Generic`                    |   `XDeriveGeneric`    |
|                   `Functor`                    |   `XDeriveFunctor`    |
|                   `Foldable`                   |   `XDeriveFoldable`   |
|                 `Traversable`                  | `XDeriveTraversable`  |
