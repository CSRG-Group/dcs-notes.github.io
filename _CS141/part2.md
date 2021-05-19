---
layout: CS141
part: true
title: Recursive & Higher-Order Functions
---

## Evaluation Strategies

> **Evaluation strategies** determine the order in which we reduce expressions. An expression that can be reduced is called a **redex.**

### Strictness

> A programming language is **strict** if the arguments of a function are evaluated before the function is called.

### Call-by-value

> A **strict evaluation strategy** where all function arguments are reduced to normal forms (values) and then passed as such to the function.

**Example.**

```haskell
fac' :: Int -> Int -> Int
fac' 0 m = m
fac' n m = fac' (n-1) (n*m)
```

```haskell
   fac 2
=> fac' 2 1
=> fac' (2-1) (2*1)
=> fac' (1) (2*1)
=> fac' 1 2
=> fac' (1-1) (1*2)
   ...
```

### Call-by-name

> A **non-strict evaluation strategy** where expressions are given to functions as arguments are not reduced before the function call is made. 
>
> Expressions are only reduced when their value is **needed**.

**When is a value needed?**

A case expression is the only thing that enforces the evaluation of a particular expression (we’re only evaluating something if its in a case expression). We **need the value** of an expression when we **cannot proceed** with the case expression **until we reduce** the expression.

```haskell
fac' :: Int -> Int -> Int
fac' 0 m = m
fac' n m = fac' (n-1) (n*m)
```

```haskell
   fac 2
=> fac' 2 1
=> case 2 of
     0 -> 1
     _ -> fac' (2-1) (2*1)
=> fac' (2-1) (2*1)
=> case 2-1 of
     0 -> 2*1
     _ -> fac' ((2-1)-1) ((2-1)*(2*1))
=> case 1 of
     0 -> 2*1
     _ -> fac' ((2-1)-1) ((2-1)*(2*1))
```

In **call-by-name**, the 2nd last `=>` to the last `=>` is the only time an expression was evaluated, as the value of the redex `2-1` was needed to continue.

### CBN vs CBV

| Call-by-value                                                | Call-by-name                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Reduce function arguments to normal forms before calling the function | Only reduce expressions when their value is needed           |
| We may evaluate arguments even if they are **never needed**. | We may end up reducing the same expression **over and over**. |

Both have flaws. Haskell’s fix is to use **lazy evaluation.**

### Lazy evaluation

> This is essentially **call-by-name + sharing**, where we avoid duplicate evaluation but also only ever evaluate expressions that are needed.

Lazy evaluation is the default evaluation strategy in Haskell, sometimes it can be strict, if the **compiler** (the compiler does everything for us 🥳) thinks its better. 

#### Sharing

This is the technique that helps us avoid duplicate evaluation.

> Sharing turns arguments to function into local definitions. 

```haskell
                              fac' n m = case n of
fac' n m = case n of            0 -> m
  0 -> m                 ==>    _ -> let x = n - 1
  _ -> fac' (n-1) (n*m)                  y = n * m
                                     in fac' x y
```

This ensures that functions are always applied to either **values** or a **variable** defined in a `let` (or `where`) bound. This means that if a variable (e.g. `x0 = 2-1`) has to be evaluated, its RHS is evaluated (so `2-1=1`) and `x0` is updated with the value of the expression, so `x0 = 1`. 

```haskell
   fac 2
=> fac' 2 1
=> case 2 of
     0 -> 1
     _ -> let x0 = 2-1
              y0 = 2*1
          in fac' x0 y0
=> let x0 = 2-1
       y0 = 2*1
   in fac' x0 y0
=> let x0 = 2-1
       y0 = 2*1
   in case x0 of             -- x0 has to be evaluated as its value is
        0 -> y0              -- needed for the case expression to continue
        _ -> let x1 = x0-1
                 y1 = x0*y0
             in fac' x1 y1
=> let x0 = 1                -- x0 has been updated with the result of 
       y0 = 2*1              -- evaluating RHS
   in case x0 of
        0 -> y0
        _ -> let x1 = x0-1
                 y1 = x0*y0
             in fac' x1 y1
=> let x0 = 1                
       y0 = 2*1               
   in case 1 of             -- x0 can now be replaced by 1
        0 -> y0
        _ -> let x1 = x0-1
                 y1 = x0*y0
             in fac' x1 y1
```

When we refer to `x0` again, we have access to its evaluated value (because we evaluated it before) and there will be **no need** to evaluate it again and again, all while using **call-by-name.**

#### Lazy evaluation Walk-through

> Given the following expression, show how it is evaluated with lazy evaluation (do not skip steps).

```haskell
length (take 2 (map even [1,2,3,4]))
```

When tackling this kind of question it is helpful to refer to the definitions of the functions that are used. These are usually specified/given to you/made by you in an earlier question, otherwise its difficult to evaluate it properly without knowing the exact definition.

Here the definitions we use are.

```haskell
length :: [a] -> Int
length []     = 0
length (x:xs) = 1 + length xs

take :: Int -> [a] -> [a]
take 0 _     = []
take n []    = []
take n (x:xs) = x : take (n-1) xs

map :: (a -> b) -> [a] -> [b]
map f []     = []
map f (x:xs) = f x : map f xs
```

**Answer.**

```haskell
   length (take 2 (map even [1,2,3,4]))
=> length (take 2 (even 1 : map even [2,3,4]))
=> length (even 1 : take (2-1) (map even [2,3,4]))
=> 1 + length (take (2-1) (map even [2,3,4]))
=> 1 + length (take 1 (map even [2,3,4]))
=> 1 + length (take 1 (even 2 : map even [3,4]))
=> 1 + length (even 2 : take (1-1) (map even [3,4]))
=> 1 + (1 + length (take (1-1) (map even [3,4])))
=> 1 + (1 + length (take 0 (map even [3,4]))) 
=> 1 + (1 + length [])
=> 1 + (1 + 0)
=> 1 + 1
=> 2
```

Questions may ask about call-by-value and call-by-name too, so know this topic well.

## Optimised Recursive Functions

In C, Java, and most imperative languages, function calls push frames onto the stack which is where local variables are stored. Each recursive function call is evaluated before the final value is calculated. To illustrate take the `factorial` function as an example:

```haskell
fac :: Int -> Int 
fac 0 = 1
fac n = n * fac (n-1)
```

In C, each value of `n-1` for each call to `fac` is evaluated before, the multiplication of `n` and `fac(n-1)`, so we get some thing like:

```haskell
   fac 500
=> 500 * fac (500-1)
=> 500 * fac 499
=> 500 * (499 * fac (499-1))
=> 500 * (499 * fac 498)
=> 500 * (499 * (498 * fac (498-1)))
	 ...
=> 500 * 499 * ... * fac 0
=> 500 * 499 * ... * 1
=> multiplication is evaluated
```

And because of that we have 500 frames on the stack for each call to `fac`. Hence, **deep recursion** in imperative languages could cause your program to run out of memory, which is called a **stack overflow.**

The Haskell compiler optimises this for us by recreating the function we call (i.e `fac`) with another function that has an **accumulating parameter**.

```haskell
-- Here m is the accumulating parameter
fac' :: Int -> Int -> Int
fac' 0 m = m
fac' n m = fac' (n-1) (n*m)
-- fac is then rewritten with fac'
fac :: Int -> Int
fac n = fac' n 1
```

What this does is that the result of earlier calls to `fac` is evaluated and “accumulates” in the second argument `m`

```haskell
   fac 500
=> fac' 500 1
=> fac' (500-1) (500*1) -- 500-1 needs to be evaluated to continue
=> case x0 of           -- Since x0 = 500 - 1 and needs to be evaluated
     0 -> y0
     _ -> fac' x1 y1
   where x0 = 500 - 1
         y0 = 500*1
         x1 = x0 - 1
         y1 = x0 * y0
=> case x0 of           
     0 -> y0
     _ -> fac' x1 y1
   where x0 = 499       -- We evaluate 500 - 1 = 499, and x0 is updated with 
         y0 = 500*1     -- this new value, and now the case expression can
         x1 = x0 - 1    -- proceed
         y1 = x0 * y0
=> fac' (499-1) (499*500*1) -- This continues for (499-1), (498-1) ...
=> fac' (498-1) (498*(499*(500*1)))
   ...
```

As you can see, the compiler prevents long expressions (you saw from earlier) that will take up many frames on the stack. 

## Higher Order Functions

