---
layout: CS126
part: true
math: true
title: "Arrays and Lists"
---

## Arrays (ADT)

> Arrays are **indexable**, **fixed length**, sequence of variables of a **single type** (homogenous).
>
> - They are homogenous as it is otherwise much harder to calculate the memory address of the data to look up given an index.

This table is an overview of the time complexity of certain operations for an array.

| Methods/Operations   | Time | Reason                                                       |
| -------------------- | ---- | ------------------------------------------------------------ |
| `get(i)`, `set(i,e)` | O(1) | Indexable                                                    |
| `size()`             | O(1) | Arrays are of fixed size when created, they know their size. |
| `isEmpty()`          | O(n) | Has to check every index                                     |
| Insertion, Deletion  | O(n) | Fixed length – have to shift proceeding elements up or down to accommodate inserted/deleted element |
| Resizing the array   | O(n) | Fixed length – have to create a larger array, then copy contents over. |

The operations in `code` blocks are the **fundamental operations** of arrays.

### Implementation

Arrays can be **concretely** implemented by **allocating** a **contiguous section** of memory, with cells being indexable by memory location, as the data at an index can be found at 

$$

S + D \cdot I

$$

where $$S$$ is the pointer to the start of the array, $$D$$ is the size of the data type, and $$I$$ is the index.

## Lists (ADT)
> **Lists** are a finite sequence of ordered values, which may contain duplicates (more abstract than an array). A list is called homogenous if every element it contains is of the same type.

### Array based implementation

*Concrete implementation of lists*

> Arrays provide all the required properties, except being able to change size. To "grow" an array, we make a new array of a larger size, and copy all the data across to it.

To do this, we need to decide how large the new array should be. There are two strategies which are commonly used to do this:

- **Incremental strategy** – when the capacity is exceeded, grow it by a constant number of elements ***c***
  - Amortized (average) time of each push is &Omega;(n<sup>2</sup>)
  - Space grows linearly, so quite space efficient
- **Doubling strategy** – when the capacity is exceeded, double it
  - Amortized (average) time of each push is &Omega;(n)
  - Space grows exponentially, so less space efficient

Array based implementations have the fundamental operations

- size()
- isEmpty()
- get(i)
- set(i,e)
- add(i,e)
- remove(i)



## Positional lists (ADT)

> **Positional lists** are a “general abstraction of a sequence of elements with the ability to identify the location of an element, without indices” 
>
> *“Data Structures and Algorithms in Java”, Goodrich, Tamassia, Goldwasser*

A "position" is a marker within the list, which is unaffected by changes elsewhere. For example, insertion or deletion of other elements doesn't change it, the only time it changes is when it itself is deleted.

Fundamental operations
- addFirst(e)
- addLast(e)
- addBefore(p,e)
- addAfter(p,e)
- set(p,e)
- remove(p)

It is generally implemented as a [doubly linked list](#doubly-linked-lists).

## Linked lists (ADT)

> **Linked lists** are a collection of elements that can be accessed in a sequential way, meaning they are not indexable. [Additional resource.](https://lucasmagnum.medium.com/sidenotes-linked-list-abstract-data-type-and-data-structure-fd2f8276ab53)

This means they can more easily implement non-homogenous lists, as opposed to using arrays, as cells can be of different "sizes", so different data types requiring different amounts of data can be stored.

### Singly linked lists

*Concrete implementation of linked lists*

> **Singly linked lists** are a sequence of nodes, each of which stores both a value and a pointer to the next node in the sequence. There is a pointer to the first node in the sequence, and the final node in the sequence is a null pointer ∅

| Method/Operation                  | Time | Reason \| Description                                        |
| --------------------------------- | ---- | ------------------------------------------------------------ |
| `set(p,e)`, `addAfter(p,e)`, get, | O(n) | Need to go through the list from head until index.           |
| `addFirst(e)`                     | O(1) | Quick to add items to head because we have a pointer reference |
| `remove(p)` (Deletion), Insertion | O(n) | Similar to getting and `set`, but pointers are changed instead of values, either to bypass or include a new node in the sequence. |

Singly linked lists have the fundamental operations
- addFirst(e)

- addAfter(p,e)

- set(p,e)

- remove(p)

  

### Doubly Linked Lists

*Concrete implementation of positional lists and linked lists*

> **Doubly linked lists** are a sequence of nodes, each of which stores both a value and a pointer to both the **next** and the **previous** node in the sequence. At **each end** there are **special header** and **trailer nodes**, which are **just references** to the first and last nodes in the sequence

Similarly to singly linked lists, getting, setting, insertion, deletion all O(n) – need to iterate from start to end of the list to get to the position of the item.

Head and tail operations are O(1) – head and tail references (pointers) and the list can be traversed **both** forwards and backwards.

Fundamental operations (same as positional list as it is concrete implementation of it)

- addFirst(e)
- addLast(e)
- addBefore(p,e)
- addAfter(p,e)
- set(p,e)
- remove(p)