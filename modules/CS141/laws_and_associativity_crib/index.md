---
layout: noteshome
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



## Making instances of functors and foldables

### Functors

To define an instance of a functor, we only need to define the `fmap` function

```haskell
instance Functor DataType where
	-- fmap :: Functor f => (a -> b) -> f a -> f b
```

The standard implementation of this for lists is:

```haskell
data List a
	= Cons a (List a)
	| Nil

instance Functor List where
	-- fmap f []     = []
	-- fmap f (x:xs) = f x : map f xs
	fmap f Nil         = Nil
	fmap f (Cons x xs) = Cons (f x) (fmap f xs)
```

The standard implementation of this for various trees is:

```haskell
data BinTree a
	= Leaf a
	| Node (BinTree a) a (BinTree a)

data RoseTree a
	= Leaf a
	| Node [RoseTree a]
	
data InlineRoseTree a
	= Node a [InlineRoseTree a]
	
instance Functor BinTree where
	fmap f (Leaf x)   = Leaf (f x)
	fmap f (Node l x r) = Node (fmap l) (f x) (fmap r) 
	
instance Functor RoseTree where
	fmap f (Leaf x)  = Leaf (f x)
	fmap f (Node ts) = Node (fmap (fmap f) ts)
	
instance Functor InlineRoseTree where
	fmap f (Node x ts) = Node (f x) (fmap (fmap f) ts)
	
```



### Foldables

To define an instance of a foldable, we only need to define one of the many types of folds (as all the others can be inferred from one implementation). It is common to pick `foldr` for simplicity and consistency.

```haskell
instance Foldable DataType where
	-- foldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
```

The standard implementation of this for lists is:

```haskell
data List a
	= Cons a (List a)
	| Nil

instance Foldable List where
	-- foldr _ v []     = v
	-- foldr f v (x:xs) = f x (foldr f v xs)
	foldr _ v Nil         = Nil
	foldr f v (Cons x xs) = f x (foldr f v xs)
```

The standard implementation of this for various trees is:

```haskell
data BinTree a
	= Leaf a
	| Node (BinTree a) a (BinTree a)

data RoseTree a
	= Leaf a
	| Node [RoseTree a]
	
data InlineRoseTree a
	= Node a [InlineRoseTree a]
	
instance Foldable BinTree where
	foldr f z (Leaf x) = f x z
	foldr f z (Node l x r) = foldr f (f x (foldr f z r)) l
	-- Or, considering it as a specialised case of a rose tree
	-- foldr f z (Node l r) = foldr (\x z’ -> foldr f z’ x) z [l, x, r]
	
instance Foldable RoseTree where
	foldr f z (Leaf x)  = f x z
	foldr f z (Node ns) = foldr (\x z’ -> foldr f z’ x) z ns
	
instance Foldable InlineRoseTree where
	foldr f z (Node x ts) = f x (foldr (\t r -> foldr f r t) z ts)
```

