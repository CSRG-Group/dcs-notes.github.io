---
layout: CS141
part: true
math: true
title: "Equational Reasoning in Haskell"
---

## Intro

Functions in Haskell are pure – they have no side-effects and their results only depend on their arguments. Because of that we are able to easily prove formal properties about our functions.

> We can’t use equational reasoning on impure functions, because their results may depend on values other than the arguments, thereby rendering any properties we prove invalid. 

## Techniques

### Direct proof

The steps for performing a direct proof are:

1. Write down the types of all of the variables
2. Write down the definitions of all of the relevant functions
3. Repeatedly apply internal steps to get from the LHS to the RHS
   - It is often worth working from both sides in towards the middle



The are only a small number of internal steps that can be made in a direct proof:

- Function application or unapplication
- Applying a known assumption
- Eta-conversion
- Variable renaming (alpha equivalence)
  - Mostly don't use this, as there are strict rules around it



#### Function application and unapplication

Consider the function definition:

```haskell
double :: Int -> Int
double x = x + x
```

This can also be viewed as a property when reasoning about functions, allowing us to exchange the statement `double x` freely with `x + x`. This can be written as:

```
	double x
= {function application}
	x + x
= {function unapplication}
	double x
```

##### Non-overlapping pattern matching

The following function definition is fairly common-place:

```haskell
isZero :: Int -> Bool
isZero 0 = True
isZero n = False
```

However, we cannot take the second statement `isZero n = False` in isolation when using function application/unapplication, as it is dependent on not hitting the pattern match above it, checking that it isn't zero

Hence, it is often convenient to re-write function without implicit precedence from pattern matching, as such:

```haskell
isZero :: Int -> Bool
isZero n
	| n == 0	= True
	| n /= 0	= False
```

##### Case analysis

This leads us onto case analysis, were we can apply values to a function based on the case it will take. For example, consider the function:

```haskell
not :: Bool -> Bool
not False	= True
not True	= False
```

We can then apply cases to simplify expressions, as follows:

```
	not (not False)
= {application to the inner `not`}
	not True
= {application to the `not`}
	False
```

#### Applying an assumption

If an assumption, e.g. a function definition or inductive hypothesis fits the pattern of a part of the proof, it can be re-written with it - this is fairly self-explanatory

#### Eta-conversion

Eta conversion is the "adding or dropping of abstraction over a function" [source](https://wiki.haskell.org/Eta_conversion).

This means that we can say the following are equivalent:

- ```haskell
  \x -> abs x
  ```

- ```haskell
  abs
  ```



### Induction

The steps for performing a proof by induction are:

1. Select the variable to perform induction on. This may be the most used one, or the one which is used equally on both sides

2. Write out the proposition in terms of the variable to perform induction on, and with any other variables being arbitrary fixed constants of a given type

3. Prove the **base case**

   1. This is normally a direct proof. However, there is sometimes an additional nested inductive proof

4. Prove the **inductive step**

   1. Write out the inductive hypothesis

   2. Use the inductive hypothesis in the proof of the inductive step. Commonly, the operations are in the following order:

      1. Function application
      2. Apply inductive hypothesis
      3. Function unapplication

      However, there is sometimes an additional nested inductive proof

5. State the conclusion that the proposition is true by induction



## Examples

### Direct proof

#### Reversing a singleton list

Consider the function to reverse a list:

``` haskell
reverse :: [a] -> [a]
reverse [] 	   = []
reverse (x:xs) = reverse xs ++ [x]
```

We can then directly prove that the reverse of a singleton list is itself

```
	reverse [x]
= {Using list notation}
	reverse (x : [])
= {function application of `reverse`}
	reverse [] ++ [x]
= {function application of `reverse`}
	[] ++ [x]
= {function application of `++`}
	[x]
```

### Proof by induction

#### Addition on recursively defined numbers

Consider the definition of the natural numbers, and the function to add them:

```haskell
-- Data type for natural numbers
data Nat = Zero
		 | Succ Nat
		 
-- Addition function
add :: Nat -> Nat -> Nath
add Zero m	   = m
add (Succ n) m = Succ (add n m)
```



##### Adding zero results in no change

Proving the statement that:

```
For all
	n :: Nat
	
add n Zero = n
```



Let P(`n`) be the proposition that `n` + `Zero` = `n`

First, consider the **base case** P(`Zero`), which is `add Zero Zero = Zero`

```
	add Zero Zero						(LHS)
= {function application of `add`}
	Zero								(RHS)
```

Next, consider the **inductive step**, showing `P(n)` $$\implies$$`P(Succ n)`. This means that the inductive hypothesis is `add n Zero = n`. Hence, we want to prove `add (Succ n) Zero = Succ n`, which is done as follows:

```
	add (Succ n) Zero					(LHS)
= {function application on `add`}
	Succ (add n Zero)
= {inductive hypothesis}
	Succ n								(RHS)
```

By the principle of induction, since the base case P(`Zero`) and the inductive step P(`n`) $$\implies$$ P(`Succ n`) are proven, the proposition is proven for all values of `n`



##### Associativity of natural numbers

Proving the statement that:

```
For all
	x :: Nat,
	y :: Nat,
	z :: Nat
	
add x (add y z) =  add (add x y) z
```

There are three variables, and we want to show it is true for all values of all of them, but we can't easily do induction on all of them. Since `x` is the first parameter in one of the two `add` functions on both sides, it is likely a good item to pick for induction.



Let P(`x`) be the proposition that `add x (add y z) =  add (add x y) z` for some fixed `y` and `z`

First, consider the **base case** P(`Zero`), which is `add Zero (add y z) = add (add Zero y) z`

```
	add Zero (add y z)						(LHS)
= {function application on `add`}
	add y z
= {function unapplication on `add`}
	add (add Zero y) z						(RHS)
```

Next, consider the **inductive step**, showing `P(n)` $$\implies$$`P(Succ n)`. This means that the inductive hypothesis is `add x (add y z) = add (add x y) z`. Hence, we want to prove `add (Succ x) (add y z) =  add (add (Succ x) y) z`, which is done as follows:

```
	add (Succ x) (add y z)					(LHS)
= {function application on outer `add`}
	Succ (add x (add y z))
= {inductive hypothesis}
	Succ (add (add x y)) z
= {function unapplication on outer `add`}
	add (Succ (add x y)) z
= {function unapplication on inner `add`}
	add (add (Succ x) y) z					(RHS)
```

By the principle of induction, since the base case P(`Zero`) and the inductive step P(`x`) $$\implies$$ P(`Succ x`) are proven, the statement is proven for all `x`, and fixed arbitrary values of `y` and `z`.

This is sufficient to prove the whole statement, as `y` and `z` are fixed on both the RHS and the LHS.



#### Induction on lists

Consider the definition on lists, and the cons operation:

```haskell
-- Data type for the list
data List a = Empty
			| Cons a (List a)

-- Cons operation on the list
data [] a = []
		  | (:) a [a]
```



##### Proving map fusion

Proving the statement that:

```
For all
	f :: b -> c
	g :: a -> b
	xs :: [a]
	
map f (map g xs) == map (f . g) xs
```

We take the following function definitions as assumptions:

```haskell
map :: (a -> b) -> [a] -> [b]
map f []	 = []
map f (x:xs) = f x : map f xs

(.) :: (b -> c) -> (a -> b) -> a -> c
(.) f g x = f (g x)
```

We need to know what `xs` is to evaluate this statement, so we use induction on `xs`



Let P(`xs`) be the proposition that `map f (map g xs) = map (f . g) xs` for all `xs`, and some fixed `f` and `g`

First, consider the **base case** P(`[]`), which is`map f (map g []) = map (f . g) []`

```
	map f (map g [])						(LHS)
= {function application on `map`}
	map f []
= {function application on `map`}
	[]
= {function unapplication on `map`}
	map (f . g) []							(RHS)
```

Next, consider the **inductive step**, showing `P(xs)` $$\implies$$`P(x : xs)`. This means that the inductive hypothesis is `map f (map g xs) = map (f . g) xs`. Hence, we want to prove `map f (map g (x:xs)) = map (f . g) (x:xs)`, which is done as follows:

```
	map f (map g (x:xs))
= {function application on `map`}
	map f (g x : map g xs)
= {function application on `map`}
	f (g x) : map f (map g xs)
= {inductive hypothesis}
	f (g x) : map (f . g) xs
= {function unapplication on `(.)`}
	(f . g) x : map (f . g) xs
= {function unapplication on `map`}
	map (f . g) (x:xs)
```

