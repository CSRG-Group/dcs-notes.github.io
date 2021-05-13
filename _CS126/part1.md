---
layout: CS126
part: true
math: true
title: "Arrays and Lists"
---


# Arrays (ADT)
- Indexable fixed length sequence of variables of the type, stored contiguously
  in memory
- To get/set a value at an index in the array, directly look at the data at a
  memory address
  - $$O(1)$$ operation
- To insert/delete an element, all the proceeding elements in the array need to
  be "shuffled up/down" to accommodate it
  - $$O(n)$$ operation
- To resize the array, a new, larger contiguous block of memory needs to be
  allocated, then all the data copied into that
  - $$O(n)$$ operation
- Fundamental operations
  - size(), isEmpty(), get(i), set(i,e)


# Lists (ADT)
- A list is called homogenous if it is all of the same type
- Array based implementation  **(Concrete)**
  - Arrays provide all the required properties, except being able to change
    size. To "grow" an array, we make a new array of a larger size, and copy all
    the data across to it.
  - Need to decide how large the new array should be
    - Incremental strategy - when the capacity is exceeded, grow it by a
      constant number of elements $$c$$
      - Amortized (average) time of each push is $$\Omega(n^2)$$
      - Space grows linearly, so quite space efficient
    - Doubling strategy - when the capacity is exceeded, double it
      - Amortized (average) time of each push is $$\Omega(n)$$
      - Space grows exponentially, so less space efficient
- Fundamental operations
  - size(), isEmpty(), get(i), set(i,e), add(i,e), remove(i)


## Positional lists (ADT)
- "General abstraction of a sequence of elements with the ability to identify
  the location of an element, without indices" (*Data Structures and Algorithms
  in Java*, Goodrich, Tamassia, Goldwasser)
- A "position" is a marker within the list, which is unaffected by changes
  elsewhere
  - Insertion/deletion of other elements doesn't change it, the only time it
    changes is when it itself is deleted
- Fundamental operations
  - addFirst(e), addLast(e), addBefore(p,e), addAfter(p,e), set(p,e), remove(p)
- Generally implemented as a doubly linked list


## Linked lists (ADT)
- A collection of elements that can be accessed in a sequential way (not
  indexable)
- Can more easily implement non-homogenous lists, as opposed to using arrays
- [Additional
  resource](https://lucasmagnum.medium.com/sidenotes-linked-list-abstract-data-type-and-data-structure-fd2f8276ab53)

### Singly linked lists (Concrete implementation)
- A sequence of nodes, each of which stores both a value and a pointer to the
  next node in the sequence. There is a pointer to the first node in the
  sequence, and the final node in the sequence is a null pointer $$\emptyset$$
- To get/set a value at an arbitrary index in the array, need to iterate over
  the list from the head until the index is reached
  - $$O(n)$$ operation
- Insertion/deletion to an arbitrary index is similar to getting/setting, but
  pointers are changed instead of values, either to bypass or include a new node
  in the sequence
  - $$O(n)$$ operation
- Operations on the head of the list are $$O(1)$$ operations
- The list can only be traversed forwards
- Fundamental operations
  - addFirst(e), addAfter(p,e), set(p,e), remove(p)

### Doubly linked lists (Concrete implementation)
- - A sequence of nodes, each of which stores both a value and a pointer to both
    the next and the previous node in the sequence. At each end there are
    special header and trailer nodes, which are just references to the first and
    last nodes in the sequence
  - As with singly linked lists, getting/setting and insertion/deletion are
    $$O(n)$$ operations, needing to iterate from the start or the end of the list
    to get to the index
  - Operations on **both** the head and the tail of the list are $$O(1)$$
    operations
  - The list can be traversed **both** forwards and backwards
  - Fundamental operations (same as positional list, as it is a concrete
    implementation of it)
    - addFirst(e), addLast(e), addBefore(p,e), addAfter(p,e), set(p,e),
      remove(p)
