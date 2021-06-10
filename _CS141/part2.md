---
layout: CS141
part: true
title: Lazy Evaluation & Recursion
---

## Evaluation Strategies

> **Evaluation strategies** determine the order in which we reduce expressions. An expression that can be reduced is called a **redex.**

### Strictness

> A programming language is **strict** if only strict functions (functions whose parameters must be evaluated completely before they may be called) may be defined by the user.

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

When `2-1` (from the 2nd last step) is **reduced** to `1`, it is the first time in the example that an expression is **reduced**. This only happens because the value of the redex `2-1` is needed for the case expression to continue.

### CBN vs CBV

| Call-by-value                                                | Call-by-name                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Reduce function arguments to normal forms before calling the function | Only reduce expressions when their value is needed           |
| We may evaluate arguments even if they are **never needed**. | We may end up reducing the same expression **over and over**. |

### Lazy evaluation

From above, we see that call-by-name and call-by-value each have its flaws.

> This is essentially **call-by-name + sharing**, where we avoid duplicate evaluation but also only ever evaluate expressions that are needed.

Lazy evaluation is the default evaluation strategy in Haskell. Since Haskell is a **non-strict programming language**, it can be strict if the **compiler** (the compiler does everything for us 🥳) thinks its better or if we force it to be strict with the `$!` operator.

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

This ensures that functions are always applied to either **values** or a **variable** defined in a `let` (or `where`) bound. This means that if a variable (e.g. `x0 = 2-1`) has to be evaluated, its RHS is evaluated (so `2-1=1`) and `x0` is updated with the value of the expression, so `x0 = 1`. Also see [dynamic closures](#dynamic-closures).

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

## Closures

> A structure in memory at runtime that represents a function and its environments (i.e scope).

We can think of it as an array of pointers 

- 1st pointer points to some code
- other pointers point to other closures.

**Example.**

```haskell
not :: Bool -> Bool
not True = False
not False = True
```

In memory, you have a particular memory location/address that stores a pointer to the code (we don’t have to worry about where the code is.)

- Every usage of `not` in the code is a pointer to this memory location.

> Functions in Haskell (and other functional programming languages) are first class values, which means they can be returned by other functions or given to functions as arguments (higher-order-functions).

**Example.**

```haskell
f :: Int -> a -> Int
f x = let g y = x + 5
      in g
```

In memory, we have a static closure of `f` as mentioned above for `not`

- Initially when the program is started, there is no closure for `g`. Only have closures for top-level definitions like `f` here when program starts.
- When we start evaluating `f`, every call to `f` will dynamically allocate a closure to `g` on the heap (this is only for that particular invocation of `f`)
  - This closure is comprised of a pointer to code for `g` and a pointer to `x`
  - The reason for this is because the body of `g` refers to `x`, which is a parameter of `f`.
  - Because `g` is defined within the scope of `f`, it has access to whatever is in scope of `f`, which `x` is.
- It doesn’t matter if the stack frame for `f` is removed because `g` still has a reference to what `x` **was**.

### Dynamic Closures

```haskell
length (take 2 (map even [1,2,3,4])) 
-- is translated into
let zs4 = 4 : []
    zs3 = 3 : zs4
    zs2 = 2 : zs3
    zs  = 1 : zs2
    ys  = map even zs
    xs  = take 2 ys
in length xs
-- by the compiler
```

When this expression gets evaluated at runtime, a closure is **dynamically allocated** for each of these “variables” (so `zs4`, `zs3`, … , `xs`).

- `length` is just a pointer to the static closure for the `length` function.
- `xs` is a pointer to the closure that is dynamically allocated for `xs` shown above.

## Recursive Functions

In C, Java, and most imperative languages, function calls push frames onto the stack which is where local variables are stored. Each recursive function call is evaluated before the final value is calculated. To illustrate take the `factorial` function as an example:

```C
int fac (int n) {
  if (n == 0) return 1;
  int r = fac(n - 1);
  return n * r;
}
```

In C, each value of `n-1` for each call to `fac` is evaluated before the multiplication of `n` and `r`, so we get something like this in the stack:

```haskell
-- The Stack
fac(0)  : int r = 1
...
fac(497): int r = 0
fac(498): int r = 0
fac(499): int r = 0
fac(500): int r = 0
```

Only when we get to the **base case** `n==0`, we get a value for `r` which is 1. Then the stack is popped and the next call to `fac` at the top will be evaluated until the initial call to `fac(500)`. If we defined this in Haskell, this would probably look like:

```haskell
fac :: Int -> Int 
fac 0 = 1
fac n = n * fac (n-1)
```

```haskell
   fac 500
=> 500 * fac (500-1)
=> 500 * fac 499
=> 500 * (499 * fac (499-1))
=> 500 * (499 * fac 498)
=> 500 * (499 * (498 * fac (498-1)))
	 ...
=> 500 * 499 * ... * fac 0
=> 500 * 499 * ... * 1 -- multiplication can finally be evaluated
=> multiplication is evaluated
```

This **naive way** of evaluating recursion builds up large expressions (with lots of closures) because **nothing forces** the expressions to get evaluated at intermediate steps. 

- The multiplication can never be reduced until the end because at **no** point do we have the **second argument** until we reach the base case. 
- Hence, **deep recursion** in imperative languages could cause your program to run out of memory, which is called a **stack overflow.**

<blockquote class="extra"><b>FYI.</b> There is a “trick” called <a href="https://en.wikipedia.org/wiki/Tail_call" >tail-call optimisation</a> that programming languages can use to prevent a stack overflow for certain kinds of recursive functions. 
  <br/><br/>In functional programming languages, tail call optimisation is often guaranteed by the language standard, as it allows tail recursion to use a similar amount of memory as a loop in an imperative language. If you are interested, read more <a href="https://www.codurance.com/publications/2017/12/05/on-tail-call-optimisation" >here</a>.</blockquote>


### Optimised Recursive Functions in Haskell

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

As you can see, `fac'` **forces** the evaluation of the first argument at **every step** by pattern-matching on it. While the second argument will build up into a long list of closures if is evaluated **lazily**, the difference with **naive recursion** is that it **can** be **forced** to be evaluated because all arguments are present for **multiplication**.

### Useful recursive functions

There are a number of recursive functions which are useful to be able to lookup to see the schema, or just to be able to reproduce in some contexts

#### Quick sort

```haskell
    quicksort :: (Ord a) => [a] -> [a]  
    quicksort [] = []  
    quicksort (x:xs) =   
        let smallerSorted = quicksort [a | a <- xs, a <= x]  
            biggerSorted = quicksort [a | a <- xs, a > x]  
        in  smallerSorted ++ [x] ++ biggerSorted  
```

Implementation taken from *Learn You a Haskell for Great Good! A Beginner's Guide, Lipovaca, Miran*

This can be expressed more neatly than merge sort, as due to the implementation of lists as linked lists, it is less efficient to split arrays in two in Haskell as is required for merge sort

