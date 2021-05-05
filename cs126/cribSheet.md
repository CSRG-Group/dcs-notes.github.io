# CS126 Crib Sheet - Edmund Goodman

[toc]

## Terminology

- An abstract data type (ADT) is a defined in terms of its behaviour and interface
  - "In computing, an abstract data type (ADT) is a mathematical model for a certain class of data structures that have similar behavior" [source](https://stackoverflow.com/a/6539322)
- Concrete implementations of abstract data types describe how they are physically implemented in program code



## Data structures

- Arrays **(ADT)**

  - Indexable fixed length sequence of variables of the type, stored contiguously in memory
  - To get/set a value at an index in the array, directly look at the data at a memory address
    - $O(1)$ operation
  - To insert/delete an element, all the proceeding elements in the array need to be "shuffled up/down" to accommodate it
    - $O(n)$ operation
  - To resize the array, a new, larger contiguous block of memory needs to be allocated, then all the data copied into that
    - $O(n)$ operation
  - Fundamental operations
    - size(), isEmpty(), get(i), set(i,e)



- Lists **(ADT)**
  - "An ordered collection of items" [source](http://pages.cs.wisc.edu/~cs400/readings/Lists/), which can change to any arbitrary size, and is indexable
  - A list is called homogenous if it is all of the same type
  - Array based implementation  **(Concrete)**
    - Arrays provide all the required properties, except being able to change size. To "grow" an array, we make a new array of a larger size, and copy all the data across to it.
    - Need to decide how large the new array should be
      - Incremental strategy - when the capacity is exceeded, grow it by a constant number of elements $c$
        - Amortized (average) time of each push is $$\Omega(n^2)$$
        - Space grows linearly, so quite space efficient
      - Doubling strategy - when the capacity is exceeded, double it
        - Amortized (average) time of each push is $$\Omega(n)$$
        - Space grows exponentially, so less space efficient
  - Fundamental operations
    - size(), isEmpty(), get(i), set(i,e), add(i,e), remove(i)



- Positional lists **(ADT)**
  - "General abstraction of a sequence of elements with the ability to identify the location of an element, without indices" (*Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser)
  - A "position" is a marker within the list, which is unaffected by changes elsewhere
    - Insertion/deletion of other elements doesn't change it, the only time it changes is when it itself is deleted
  - Fundamental operations
    - addFirst(e), addLast(e), addBefore(p,e), addAfter(p,e), set(p,e), remove(p)
  - Generally implemented as a doubly linked list



- Linked lists **(ADT)**
  - A collection of elements that can be accessed in a sequential way (not indexable)
  - Can more easily implement non-homogenous lists, as opposed to using arrays
  - Singly linked lists **(Concrete)**
    - A sequence of nodes, each of which stores both a value and a pointer to the next node in the sequence. There is a pointer to the first node in the sequence, and the final node in the sequence is a null pointer $$\empty$$
    - To get/set a value at an arbitrary index in the array, need to iterate over the list from the head until the index is reached
      - $O(n)$ operation
    - Insertion/deletion to an arbitrary index is similar to getting/setting, but pointers are changed instead of values, either to bypass or include a new node in the sequence
      - $O(n)$ operation
    - Operations on the head of the list are $O(1)$ operations
    - The list can only be traversed forwards
    - Fundamental operations
      - addFirst(e), addAfter(p,e), set(p,e), remove(p)
  - Doubly linked lists **(Concrete)**
    - A sequence of nodes, each of which stores both a value and a pointer to both the next and the previous node in the sequence. At each end there are special header and trailer nodes, which are just references to the first and last nodes in the sequence
    - As with singly linked lists, getting/setting and insertion/deletion are $O(n)$ operations, needing to iterate from the start or the end of the list to get to the index
    - Operations on **both** the head and the tail of the list are $O(1)$ operations
    - The list can be traversed **both** forwards and backwards
    - Fundamental operations (same as positional list, as it is a concrete implementation of it)
      - addFirst(e), addLast(e), addBefore(p,e), addAfter(p,e), set(p,e), remove(p)
  - [Additional resource](https://lucasmagnum.medium.com/sidenotes-linked-list-abstract-data-type-and-data-structure-fd2f8276ab53)



- Stacks **(ADT)**

  - A "Last in, first out" (LIFO) data structure - both insertions and deletions occur at the front of the stack
  - Two fundamental operations
    - push(e), pop(e), size(), isEmpty()
  - Edge case of popping from an empty stack, normally either returns null or throws an error
  - Array based implementation  **(Concrete)**
    - Index of head stored, and incremented/decremented on pushing/popping operations
    - $$O(n)$$ space complexity
    - $$O(1)$$ time complexity of fundamental operations



- Queues **(ADT)**

  - A "First in, first out" (FIFO) data structure - insertions occur at the rear and removals at the front of the queue
  - Fundamental operations
    - enqueue(e), dequeue(e), size(), isEmpty()
  - Edge case of dequeuing from an empty queue, normally either returns null or throws an error
  - Array based implementation **(Concrete)**
    - Uses and array with data wrapping around as it is added and removed. Both the index of the head $$f$$ **and** the size of the queue $$s$$ need to be stored
    - The rear of the queue (index to next insert to) is $$(f + s)\ MOD\ N$$, with $$N$$ as the array size
      ![queueArrayImplementation](C:\Users\egood\Desktop\dcs-notes.github.io\cs126\queueArrayImplementation.png)
    - $$O(n)$$ space complexity
    - $$O(1)$$ time complexity of fundamental operations



- Maps **(ADT)**

  - "Searchable collection of key-value entries" (*Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser)
  - Duplicate keys cannot exist
  - Fundamental operations
    - contains(e), get(e), put(e), remove(e), size(), isEmpty() *sometimes additional operations for getting lists of all keys or all values*
  - Two concrete implementations
    - List based implementation
      - $$O(n)$$ lookup and insertion (need to check for duplicates) time
      - $$O(n)$$ space complexity
    - Hash-map based implementation
      - $$O(1)$$ lookup and insertion time
      - $$O(k \cdot n)$$ space complexity (still linear with number of items, but larger by a big constant factor)
  
  
  
- Hash tables **(Concrete)**

- Sets **(ADT)**

- Priority queues **(ADT)**

- Heaps **(ADT)**

- Skip lists **(ADT)**

- Binary search trees **(ADT)**

- Self-balancing trees **(ADT)**

- Graphs **(ADT)**







## Analysis of algorithms



## Recursive algorithms



## General algorithms

### Insertion sort

### Merge sort

### Other

- Reversing an array using a stack, by pushing all the items in array to the stack, then popping all the items off the stack into the new reversed array

- Reversing a linked list, by iterating over the linked list from the head, and for each element in the list to reverse, setting the item as the predecessor of the head in the new reversed list

- Computing spans

  - The span of an array is the maximum number of consecutive elements less than a value at an index which precede it

    This can be calculated in linear time by

    ```
    Let X <- the array to find spans of
    Let S <- a stack of indices
    Let i be the current index
    Pop indices from the stack until we find index j such that X[i] < X[j]
    Set S[i] <- i-j
    Push i to the stack
    ```

    
