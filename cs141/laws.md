# Functor Laws

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

# Applicative Laws

```haskell
class Functor f => Applicative f where
	pure  :: a -> f a
	(<*>) :: f (a -> b) -> f a -> f b
```

```haskell
             pure id <*> x = x
         pure f <*> pure x = pure (f x)
              m <*> pure y = pure ($ y) <*> m
pure (.) <*> x <*> y <*> z = x <*> (y <*> z)
```

# Monad Laws

