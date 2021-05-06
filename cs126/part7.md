---
layout: 126/CS126
part: true
math: true
title: "Priority queues"
prev: part6.html
nextt: part8.html
---

<br/>

* TOC
{:toc}

# Priority queues (ADT)

- Similar to queues, items are sorted in order of a property "priority", then FIFO across elements of the same "priority" (unlike maps, multiple elements can have the same priority)
  - Fundamental operations
    - enqueue(e, p), dequeue(), size(), isEmpty()
  - The priorities, sometimes called keys, must form a total order relation, for example $$x \leq y$$. We often use comparators on keys to form this total order relation
  - Comparators **(ADT)**
    - "Encapsulates the action of comparing two objects from a given total order" *Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser
    - The comparator is external to the keys being compared
  - Various concrete implementations
    - Unsorted list based **(Concrete)**
      - To enqueue an item, we just add it to the end of the list, in $$O(1)$$ time
      - to dequeue an item, we have to traverse the entire list to find the smallest item, taking $$O(n)$$ time
    - Sorted list **(Concrete)**
      - To enqueue an item, we have to traverse the list to find where to put it, taking $$O(n)$$ time (but we normally wouldn't need to traverse the entire list, unlike dequeuing in the unsorted implementation, which also must)
      - To dequeue an item, we just take it from the front of the list, in $$O(1)$$ time
    - For both, a positional/linked list should be used (for unsorted, doubly linked is needed)  since we want to be able to grow the list, but don't need to be able to index it
    - Heap based **(Concrete)**
  - Sorting with list based priority queues
    - We can sort a set of items by enqueueing them one by one, using the priority as the total ordering to sort by, and then dequeuing them into a list will result in them being sorted
    - When the unsorted concrete implementation is used, this encodes "selection sort"
      - The steps taken in the sort are:
        1. Enqueue all $$n$$ elements, each taking $$O(1)$$ time into the priority queue, taking $$O(n)$$ time
        2. Dequeue all the elements into sorted order, with the total calls taking $$O(n) + O(n-1) + ... + O(1)$$, which is $$O(n^2)$$ time
        Hence, the total time complexity is $$O(n^2)$$
    - When the unsorted concrete implementation is used, this encodes "insertion sort"
      - The steps taken in the sort are:
        1. Enqueue $$n$$ elements, with the total calls taking $$O(1) + O(2) + ... + O(n)$$, which is $$O(n^2)$$ time
        2. Dequeue all $$n$$ items, each taking $$O(1)$$, taking $$O(n)$$ time
        Hence, the total time complexity is $$O(n^2)$$
