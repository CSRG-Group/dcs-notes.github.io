---
layout: CS141
part: true
title: Higher order functions
---



Higher order functions are functions which operate on other functions, either taking another function as a parameter, or returning one as a result

The process of currying, discussed earlier, is a higher order function, as a function takes a parameter, and returns another functioned, specialised by that parameter



## Sections

Sections are partial applications of infix operators. If you give only one argument to an infix operator, it returns a function of the "missing" side of the operation, for example, if the left side of the infix exponent is given, a function taking the exponent as the parameter is returned, but if the right side is given, the function takes the base as parameter. This is written as:

```haskell
> (^2)
\x -> x ^ 2

> (2^)
\x -> 2 ^ x
```





## Examples of higher order functions

### Map

A function that takes a list and a function, and returns a new list, with every element in the old one having had the function applied to it

```haskell
map :: (a -> b) -> [a] -> [b]  
map _ [] = []  
map f (x:xs) = f x : map f xs  
```



### Filter

A function that takes a list and a predicate (a function which indicates the truth value of its parameter), and returns the list containing only the true values in the original list

```haskell
filter :: (a -> Bool) -> [a] -> [a]  
filter _ [] = []  
filter p (x:xs)   
    | p x       = x : filter p xs  
    | otherwise = filter p xs  
```

#### Quicksort using filter

We can neatly write sorting algorithms using this, such as quicksort (with the pivot being picked as the middle in this case)

```haskell
quicksort :: (Ord a) => [a] -> [a]    
quicksort [] = []    
quicksort (x:xs) =     
    let smallerSorted = quicksort (filter (<=x) xs)  
        biggerSorted = quicksort (filter (>x) xs)   
    in  smallerSorted ++ [x] ++ biggerSorted  
```



### Folds

Folds are a class of function which repeatedly reduce a list, having an accumulator value, and a function which takes values from the list elementwise, and combines them into the accumulator. It is described in a [stack overflow answer](https://stackoverflow.com/a/25150003) as:

```
In:
    initial value
    way to combine stuff with initial value
    collection
Out:
    combined stuff
```

There are two common implementations, `foldl`, and `foldr`, which start by applying the function to the first and last elements respectively. These two folds have different properties, and there is an additional type `foldl'`, which strengthens the properties of `foldl`

- `foldr` generates the entire expression before evaluation, with `foldr f z [1,2,3]` evaluating to `f 1 (f 2 (f 3 z))`

  For example  `foldr (+) [1..1000]` evaluates as `1 + (2 + (3 + (...)))`. As the chain of operations doesn't contain a **redex** (reducible expression) until the entire chain is built, the entire expression must be generated before it can be evaluated. This means it will cause stack overflows on large lists.~

  If the combination function is able to produce part of the result independent of the recursive case, so the rest of the result is never demanded, the recursion will stop, allowing use on infinite lists

- `foldl` applies the function as it goes along, with `foldl f z [1,2,3]` evaluating to `f (f (f z 1) 2) 3`

  For example `foldl (+) [1..1000]` evaluates as `(((0 + 1) + 2) + 3) + ...`. This seems like it would reduce as is goes along, as each bracket is its own redex, but due to Haskell's lazy evaluation, it doesn't, so it still causes stack overflows on large lists.

  It can never handle infinite lists, and will always recurse forever if they are given

- `foldl'` is a modification of `foldl` which forces Haskell to evaluate each redex as it goes, despite lazy evaluation, allowing avoiding stack overflows for large lists, but inherently sacrificing the other benefits of lazy evaluation

[Additional source](https://wiki.haskell.org/Foldr_Foldl_Foldl%27) [Additional source](https://wiki.haskell.org/Foldr_Foldl_Foldl%27)

Example code:

```haskell
initialAccumulator :: a
combinationFunction :: a -> a -> a

foo :: [a] -> a
foo xs = foldr (\accumulator x -> combinationFunction accumulator x) initialAccumulator xs
```



### Function composition

A function which chains the output of one function into the input of the other

```haskell
(.) :: (b -> c) -> (a -> b) -> a -> c
(.) f g x = f (g x)
```

We can then use this to write code more neatly with fewer brackets, for example, the following statments are equivalent:

```haskell
f (g (h x))
f . g . h x
```

