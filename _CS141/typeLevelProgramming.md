---
layout: CS141
part: true
title: Type-level Programming
---



## Kinds

Kinds are "types of types". The kind `*` represents all types, and `* -> *` represents all type constructors which must have one type applied as an argument before they can make a type themselves. For example, `Maybe` is of kind `* -> *`, as it is parameterised over a type, so must have one type applied as an argument to it to be constructed

In the Haskell repl, we have seen we can use `:t <VALUE>` to find the type of a given value or variable. Similarly, we can find the kind of a type using `:k <TYPE>`, and additionally reduce the type to a normal form with `:kind! <TYPE>`.

## Type promotion





### Enabling language extensions

This feature is not in Haskell, by default, so we need to add a language extension to use it. We can use the Haskell extension `XDataKinds` in three ways:

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



## Generalised Algebraic Data Types



## Type families



