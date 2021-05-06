---
layout: 126/CS126
part: true
math: true
title: "General algorithms"
prev: part11.html
---

<br/>

# Table of contents
* TOC
{:toc}

# Sorting data structures

## Insertion sort
## Selection sort
## Heap sort
## Merge sort


# Reversing data structures
- Reversing an array using a stack
  - Push all the items in array to the stack, then pop all the items off the stack into the new reversed array
    ```
    Let S <- the stack to reverse
    Let S' <- an empty stack (the output)
    For each item in S
    	Pop the head off S into s
    	Push s to the head of S'
    ```
- Reversing a linked list
  - Iterate over the linked list from the head, and for each element in the list to reverse, set the item as the predecessor of the head in the new reversed list
    ```
    Let L <- the linked list to reverse
    Let L' <- an empty linked list (the output)
    For each item in S
    	Let l <- the first item in the linked list
    	Delete the first item in the linked list
    	Add l as the head of L'
    ```



# Set operations
- Generic merging
  - Taking the union of two sets, in linear time:
    ```
    Let A, B <- The lists to merge
    Let S <- an empty list (the output)
    While neither A nor B are empty
    	Let a, b <- The first elements of A and B respectively
    	If a < b
    		Add a to the end of S
    		Remove a from A
    	Else if b < a
    		Add b to the end of S
    		Remove b from B
    	Else (hence a=b)
    		Add a to the end of S (both are equal, so it doesn't matter which)
    		Remove a and b from A and B respectively
    (Cleaning up the other list when one is empty)
    While A is not empty
    	Add all the items left in A to the end of S
    While B is not empty
    	Add all the items left in B to the end of S
    ```



# Misc
- Computing spans
  - The span of an array is the maximum number of consecutive elements less than a value at an index which precede it
    This can be calculated in linear time by
    ```
    Let X <- the array to find spans of
    Let S <- a stack of all the indices in X
    Let i be the current index
    Pop indices from the stack until we find index j such that X[i] < X[j]
    Set S[i] <- i-j
    Push i to the stack
    ```
