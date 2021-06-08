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

> **Base cases** tend to be simple input values where the return value is a known constant, so no recursive calls are made. They are **required** for a recursive function **to finish evaluating**, so there must be **at least** one
>
> **Recursive calls** are ones to the same recursive function making the call, with a simpler input (since it must "**move towards**" the base case for it to ever finish evaluating)

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

## Divide and Conquer

> A **design pattern** that enables efficient problem solving. It consists of the following 3 steps:
>
> 1. **Divide:** Divide input data into 2 or more disjoint subsets **unless** the input size is smaller than a certain threshold – if it is smaller then solve the problem directly using a straightforward method and return the solution obtained.
> 2. **Conquer:** Recursively solve the **subproblems** associated with each subset.
> 3. **Combine:** Take the solutions to the **subproblems** and **merge** them into a solution to the original problem.

This design pattern is widely used in algorithms like **merge sort** and **quick sort**.
