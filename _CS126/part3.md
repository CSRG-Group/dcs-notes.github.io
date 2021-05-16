---
layout: CS126
part: true
math: true
title: "Recursive algorithms"
---

## Definition

Recursion can be defined in various ways:

> “When a method calls itself” 
>
> – *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*
>
> “A method which is expressed in terms of calls to simpler cases of itself, and a base case”
>
> – *CSRG, Edmund Goodman* (It’s a recursive reference, get it?) 🙃

## Structure

Recursive functions tend to include two main components:

1. Base cases
2. Recursive calls

**Base cases** tend to be simple input values where the return value is a known constant, so no recursive calls are made. They are **required** for a recursive function **to finish evaluating**, so there must be **at least** one

**Recursive calls** are ones to the same recursive function making the call, with a simpler input (since it must "**move towards**" the base case for it to ever finish evaluating)

We can visualise recursion by drawing diagrams of functions, with functions as boxes and arrows indicating calls and return values. This is fairly self-explanatory.

## Examples

We can often express many functions both iteratively and recursively, such as a **binary search**, which can be implemented recursively with:
- The input being a list,
- The recursive call being the half of the list the search has been narrowed down to
- The base cases being a single item, returning the index of that item if it is the item being searched for, or an indicator of absence if not

See the page on general algorithms for the [pseudocode for a recursive binary search](https://csrg-group.github.io/dcs-notes.github.io/CS126/part12.html#recursive-algorithm)

## Types of recursion

**Linear recursion.** Each functional call makes only one recursive call (there may be multiple different possible calls, but only one is selected), or none if it is a base case.

**Binary and multiple recursion.** Each functional call makes two or multiple recursive calls, unless it is a base case.
