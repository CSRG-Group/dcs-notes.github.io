---
layout: CS126
part: true
math: true
title: "Priority queues"
---


## Priority queues (ADT)

> **Priority queues** are (unsurprisingly) similar to queues, but items are sorted in order of a property "priority", the assigned priorities specify which element leaves first (is dequeued). Unlike maps, multiple elements can have the same priority. 

These priorities, usually called keys, must form a total order relation, for example $$x \leq y$$. We often use comparators on keys to form this total order relation.

| Fundamental Operations | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `enqueue(k,v)`         | Insert an entry with key ***k*** and value ***v*** into the queue, where ***k*** determines its position in the queue. |
| `dequeue()`            | Element with the highest priority is removed from the queue. |
| `size()`               | Size of priority queue                                       |
| `isEmpty()`            | Returns `true` if priority queue is empty                    |
| `first()`              | Returns the element with the highest priority – does not remove it. |

*Note.* The names of these operations/methods can differ, it is important to understand their function and purpose to draw the link with concrete implementations.

## Implementations

There are three common concrete implementations:
- Unsorted list based
- Sorted list
- Heap based

For both list based implementations, a positional/linked list should be used (for unsorted, doubly linked is needed), since we want to be able to grow the list, but don't need to be able to index it

### Unsorted list based

To enqueue an item, we just add it to the end of the list, in $$O(1)$$ time.

To dequeue an item, we have to traverse the entire list to find the smallest item, taking $$O(n)$$ time

### Sorted list based

To enqueue an item, we have to traverse the list to find where to put it, taking $$O(n)$$ time (but we normally wouldn't need to traverse the entire list, unlike dequeuing in the unsorted implementation, which also must)

To dequeue an item, we just take it from the front of the list, in $$O(1)$$ time

### Heap based

This is covered in the section on heaps

## Comparators

> **Comparators** are used to "encapsulate[...] the action of comparing two objects from a given total order" 
>
> *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*s

The comparator is an object external to the keys being compared, not a property of the keys. See the 118 notes for a more full description.

In this context, comparators would be used to provide the total ordering on objects inserted to the priority queue.

## Sorting with list based priority queues

We can sort a set of items by enqueueing them one by one, using the priority as the total ordering to sort by, and then dequeuing them into a list will result in them being sorted.

When the unsorted concrete implementation is used, this encodes "**selection sort**". The steps taken in the sort are:

1. Enqueue all $$n$$ elements, each taking $$O(1)$$ time into the priority queue, taking $$O(n)$$ time
2. Dequeue all the elements into sorted order, with the total calls taking $$O(n) + O(n-1) + ... + O(1)$$ which is $$O(n^2)$$ time. Hence, the **total time complexity** is $$O(n^2)$$

When the sorted concrete implementation is used, this encodes "**insertion sort**". The steps taken in the sort are:

1. Enqueue $$n$$ elements, with the total calls taking $$O(1) + O(2) + ... + O(n)$$, which is $$O(n^2)$$ time
2. Dequeue all $$n$$ items, each taking $$O(1)$$, taking $$O(n)$$ time. Hence, the **total time complexity** is $$O(n^2)$$

