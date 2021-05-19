---
layout: CS141
title: Crib Sheet
---

## Functor Laws

A type `f` is a functor if there is a function

```haskell
fmap :: (a -> b) -> f a -> f b
```

and the following laws hold for it:

 ```haskell
 fmap id = id
 fmap (f . g) = fmap f. fmap g
 ```

> These laws imply that a data structure’s “shape” does not change when we use `fmap` - we are just operating/changing the elements inside the data structure.

## Applicative Laws

In Haskell, a type `f` is an applicative functor if there are functions `pure` and `<*>`

```haskell
class Functor f => Applicative f where
	pure  :: a -> f a
	(<*>) :: f (a -> b) -> f a -> f b
```

and the following laws apply for them:

```haskell
             pure id <*> x = x
         pure f <*> pure x = pure (f x)
              m <*> pure y = pure ($ y) <*> m
pure (.) <*> x <*> y <*> z = x <*> (y <*> z)
```

## Monad Laws

In Haskell, a type `m` is a monad if there are functions `return` and `>>=`

```haskell
class Monad m where
  (>>=)  :: m a -> (a -> m b) -> m b
  return ::   a -> m a
```

and the following laws apply for them:

```haskell
-- Left Identity
return x >>= f = f x
-- Right Identity
m >>= return = m
-- Associativity
(m >>= f) >>= g = m >>= (\x -> f x >>= g)
```

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

