---
layout: CS141
part: true
title: Functors, Applicatives, Monads
---

## Functor Factory

> A type is a **functor** if it can represent a “context” for values of some arbitrary type that we **can apply functions** to.

```haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b
data Maybe a = Nothing | Just a
instance Functor Maybe where
```

**Pro Tip.** When writing down the instance of a type class like `functor` here, always write down the **specialised type signatures** of the function we’re defining first 

```haskell 
-- fmap :: (a -> b) -> Maybe a -> Maybe b
fmap f Nothing = Nothing
fmap f (Just x)  = Just $ f x
```

```haskell
data Tree a = Leaf a | Node (Tree a) (Tree a)
instance Functor Tree where 
  -- fmap :: (a -> b) -> Tree a -> Tree b
  fmap f (Leaf x)   = Leaf (f x)
  fmap f (Node l r) = Node (fmap f l) (fmap f r)
```

### Functor Laws

A type `f` is a functor if there is a function

```haskell
fmap :: (a -> b) -> f a -> f b
```

and the following laws apply for it:

 ```haskell
fmap id = id
fmap (f . g) = fmap f. fmap g
 ```

> These laws imply that a data structure’s “shape” does not change when we use `fmap` - we are just operating/changing the elements inside the data structure.

##  Applicative Academy

> A type is an **applicative** functor if its values represent some form of context that we **can lift function application** into.

```haskell
class Functor f => Applicative f where
  pure :: a -> f a
  (<*>) :: f (a -> b) -> f a -> f b
  
data Maybe a = Nothing | Just a
instance Applicative Maybe where
  -- pure :: a -> Maybe a
  pure x = Just x
  -- (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
  (Just f) <*> (Just x) = Just (f x)
  _        <*> _        = Nothing
```

Suppose that f is a function with two parameters e.g.

```haskell
f :: a -> b -> c
f <$> x <*> y
= fmap f x <*> y
= pure f <*> x <*> y
```

### Applicative Laws

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

### Left and Right Apply

```haskell
(<*) :: Applicative f => f a -> f b -> f a
x <* y = const <$> x <*> y
(*>) :: Applicative f => f a -> f b -> f a
x *> y = flip const <$> x <*> y
```

### Limitations of Applicatives

Applicative effects cannot depend on the result of the previous computation, which is why we have **monads**.

Consider the example of looking up the grandmother of a person from a dictionary which maps people to their mothers. This dictionary can be represented as a value of type `[(String, String)]` and we can then use the `lookup :: Eq a => a -> [(a,b)] -> Maybe b` function from the standard library to retrieve the name of the mother of a given person:

```haskell
grandmother :: String -> [(String, String)] -> Maybe String
grandmother x dict = do
  mother <- lookup x dict
  lookup mother dict
```

If there is no mapping for a person’s name to their mother, then `Nothing` is returned. Therefore, to look up a person’s grandmother, we first need to look up their mother’s name and then the name of their mother’s mother.

## Writer Type

```haskell
data Writer w a = MkWriter (a,w)
```

The writer type is a good example of a **functor** that is **not** an **applicative functor**. 

```haskell
instance Functor (Writer w) where
  fmap f (MkWriter (x,o)) = MkWriter (f x, o)
```

It cannot be an applicative functor because we need to be able to write an instance for `pure`. Looking at the typing for `pure`, we can see that we need to use the `MkWriter` constructor, which expects a pair of type `(a,w)` as argument. While we have a value of type `a` that can be given to `pure` as argument, we do not have a value for `w`. 

```haskell
pure :: a -> Writer w a
```

Hence, since it is not possible to write a suitable definition, the `Writer` type is not an **applicative functor**. Even if we find some way to write a definition, it will not obey the relevant applicative laws.

## State Type

`State` has two parameters and therefore is a of kind `* -> * -> *`. From type signature of `St`, we can see that we are storing functions that produces pairs. 

```haskell
data State s a = St (s -> (a,s))
St :: (s -> (a,s)) -> State s a

runState :: State s a -> s -> (a,s)
runState (St m) = m
```

A value of type `State s a` represents a **computation** that accepts and initial state of type `s` and uses it to produce a result of type `a` and a resulting state of type `s`. 

> The main idea behind this is that by combining values of type `State` in some way, we could automatically propagate state throughout a program in a way that appears **as if** the state was mutable.

## Monad Merry-Go-Round

> A type is a **monad** if its value represent some form of context that permits us to apply a function to all the elements in one context, producing one new context each which **can then** all **be joined** together into one final context.

```haskell
class Applicative m => Monad m where
(>>=) :: m a -> (a -> m b) -> m b

data Maybe a = Nothing | Just a
instance Monad Maybe where 
  -- (>>=) :: Maybe a -> (a -> m b) -> m b
  (Just x) >>= f = f x
  Nothing  >>= f = Nothing
```

You can also characterise a monad with the `join` function.

```haskell
join :: Monad m => m (m a) -> m a
join mm = mm >>= id

(>>=) :: Monad m => m a -> (a -> m b) -> m b
m >>= f = join (fmap f m)
```

In theory, either function characterises a monad and can be used to define the other function. Haskell’s `Monad` type class requires us to define `>>=`, while `join` is defined in terms of `>>=`

### Monad Laws

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

### Additional resources

The following chapters in *Learn You a Haskell for Great Good! A Beginner's Guide, Lipovaca, Miran* cover functors, applicative functors and monads in gratuitous detail:

- [The functor typeclass](http://learnyouahaskell.com/making-our-own-types-and-typeclasses#the-functor-typeclass)
- [Functors, applicative functors, and monoids](http://learnyouahaskell.com/functors-applicative-functors-and-monoids)
- [A fistful of monads](http://learnyouahaskell.com/a-fistful-of-monads)
- [For a few monads more](http://learnyouahaskell.com/for-a-few-monads-more)

However, a simpler more intuitive description of them (which does skim over some points), is available here:

- [Functors, applicatives and monads in pictures](https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)
