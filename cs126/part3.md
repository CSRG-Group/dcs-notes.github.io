---
layout: CS126
part: true
math: true
title: "Recursive algorithms"
pre: part2
nex: part4
---

<br/>



# Definition, structure, and examples

- Recursion can be defined in various ways:
  - "When a method calls itself" (*Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser)
  - "A method which is expressed in terms of calls to simpler cases of itself, and a base case" (*crsg-guide*, Edmund Goodman)
    - It's a recursive reference, get it? :upside_down_face:
- Recursive functions contain two main components
  - Base cases
    - Simple input values where the return value is a known constant, so no recursive calls are made
    - These are required for a recursive function to finish evaluating, so there must be at least one
  - Recursive calls
    - Calls to the same recursive function, with a simpler input (since it must "move towards" the base case for it to ever finish evaluating)
- We can express binary search as a recursive function, with:
  - The input being a list,
  - The recursive call being the half of the list the search has been narrowed down to
  - The base cases being a single item, returning the index of that item if it is the item being searched for, or an indicator of absence if not
- We can visualise recursion by drawing diagrams of functions, with functions as boxes and arrows indicating calls and return values



# Types of recursion

- Linear recursion
  - Each functional call makes only one recursive call (there may be multiple different possible calls, but only one is selected), or none if it is a base case
- Binary/multiple recursion
  - Each functional call makes two/multiple recursive calls, unless it is a base case