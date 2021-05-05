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
    - Hash table based implementation
      - $$O(1)$$ lookup and insertion time
      - $$O(k \cdot n)$$ space complexity (still linear with number of items, but larger by a big constant factor)
  
  
  
- Hash tables **(Concrete)**

  - Time efficient implementation of the Map abstract data type

  - To look up keys in $$O(1)$$ time, we want essentially want to be able to index an array of them, but the space of keys are far too large to conceivably keep one element in the array for each key

  - Hash functions

    - We use a "hash function" to reduce the size of the keyspace, so we can used the hashed outputs of keys for indices in the array storing the map
    - A hash function $h : keys \rightarrow indices$ maps keys of a given type to integers in a fixed interval $[0, N-1]$ where $N$ is the size of the array to store the items in

    - Modern implementations of hash functions are very complicated, and often involve two phases, first mapping keys to integers, then reducing the range of those integers, but simpler ones exist, for example $h(x) =  x\ MOD\ N$
      - We try to pick $N$ such that there are fewer collisions - numbers with few factors are better

  - Collisions are when two different keys are mapped to the same index by the hash function. Since we cannot store duplicate keys unambiguously in a map, we need a protocol to resolve this. Common approaches are

    - Separate chaining

      - Each index in the array can contain a reference to a linked list. Whenever a key is mapped to that index, the key-value pair is added to the linked-list. If there are duplicates, we iterate over the chain till we find the key, or reach the end
        ![separateChaining](C:\Users\egood\Desktop\dcs-notes.github.io\cs126\separateChaining.png)

        Diagram from: *Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser

      - This has the drawback of requiring additional memory space for each linked list

    - Linear probing

      - When colliding items are placed in different cells in the table, it is called "open addressing"
      - Linear probing handles collisions by placing the colliding item in the next available table cell, wrapping around if necessary
      - As with the linked list, searching is done by iterating over the next cells, stopping when the item is found, or an empty cell in the table is reached
      - This has the drawback of colliding items "lumping together", which can cause many items needed to be iterated over in a probe
      - To remove an item, we cannot just set it to null again, as that would mean it stops probing, even though there might be subsequent elements. Instead, we replace it with a "DEFUNCT" element, which is just skipped over when probing

    - Double hashing

      - When a collision occurs, the key is re-hashed with a new hash function
        - Sometimes $$[h(k) + i \cdot f(k)]\ MOD\ N$$ where $h$ and $f$ are hashing functions, and $i \in \Z$ is used
        - As before, there are many implementations of the hash function, but $f(k)= q-k\ MOD\ q \quad | \quad q<N, q \in primes$
      - Searching is similar to linear probing, but when iterating we look at the hash value for each $i$, rather than just the next index in the table
      - This helps avoid the issue of colliding items "lumping together" as in linear probing

  - Resizing a hash table

    - As with arrays, we create a new table of a larger size, then iterate over every index in the table, and apply the standard add operation to add it to the new one (re-hashing)

  - Performance of hash tables

    - The load factor of a hash table is the ratio of the number of items it contains to the capacity of the array $$\alpha = \frac{n}{N}$$
      - If this approaches $1$, the table becomes inefficient, so we often re-size the table whenever it exceeds a certain value, e.g. $0.75$
    - Time complexity of insertion/lookup
      - $$\Theta(1)$$ best case
      - $$O(n)$$ worst case
      - "Expected" number of probes with open addressing is $$\frac{1}{1-\alpha}$$
    - In practice, hash tables are a very efficient implementation of maps assuming the load factor is not very close to $$1$$



- Sets **(ADT)**
  - "A set is an unordered collection of elements, without duplicates that typically supports efficient membership tests" *Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser
  - Fundamental operations
    - add(e), remove(e), contains(e), size(e), isEmpty(e)
  - Set operations
    - union(s1, s2), intersection(s1, s2), difference(s1, s2)
  - Two concrete implementations
    - Can be implemented with a linked list (for efficient resizing, and needn't be indexable) storing the elements
      - Need to iterate over each element in the list to lookup items, $O(n)$ time complexity
      - Fairly small space complexity
    - Can be implemented like a hash-table, but using only keys, not key-value pairs, in "hash-sets"
      - Fast $O(1)$ lookups
      - Large space complexity

- Trees **(ADT)**

  - "A tree is an abstract model of a hierarchical structure" *Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser

  - Fundamental methods

    - size(), isEmpty(), root(), parent(n), children(n), numChildren(n)

  - Traversals

    - Pre-order traversal

      - Each node is printed before its descendants, and descendants are taking in ascending order

        ```
        Let n <- the root node of the graph
        
        Function preOrder(n)
        	Print n
        	For each child m of n
        		preOrder(n)
        ```

    - Post-order traversal

      - Each node is printed after its descendants, and descendants are taking in ascending order

        ```
        Let n <- the root node of the graph
        
        Function preOrder(n)
        	For each child m of n
        		preOrder(n)
        	Print n
        ```

  - Binary trees **(ADT)**

    - A specialised tree where each node has at most two children, called left and right

    - A binary search tree with $n$ nodes, $e$ external nodes, $i$ internal nodes, and a height $h$ has the properties

      - $e = i + 1$
      - $n = 2e - 1$
      - $h \leq i$
      - $h \leq \frac{(n-1)}{2}$
      - $e \leq 2^h$
      - $h \geq log_2 e$
      - $h \geq log_2 (n+1) - 1$

    - Binary trees support an additional type of traversal, in-order, as they have a discrete middle node

      ```
      Let n <- the root node of the graph
      
      Function preOrder(n)
      	Print left child of n
      	Print n
      	Print right child of n
      ```

  - Linked structure implementation **(Concrete)**

    - Each node is an object which stores its value, references to its child nodes (and sometimes a reference to its parent)

    - A diagram of such an implementation for a binary tree
      ![binaryTreeLinkedStructure](C:\Users\egood\Desktop\dcs-notes.github.io\cs126\binaryTreeLinkedStructure.png)

      *Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser

    - This is a linear space implementation, and has lookup time of $O(log_2n)$ for binary trees, and logarithmic time for general trees

  - Array based implementation of *binary* trees **(Concrete)**

    - Node values are stored in an array, and their children can be found at indices based on arithmetic operations of their own index
      - $index(root) = 0$
      - If $l$ is the left child of $n$, then $index(l) = 2 \cdot index(n) + 1$
      - If $r$ is the right child of $n$, then $index(r) = 2 \cdot index(n) + 2$
    - This can be very inefficient for unbalanced trees, for example, a tree which is just a "line" of nodes would grow with $O(2^n)$ space, and has lookup time of $O(log_2n)$ 



- Priority queues **(ADT)**
- Heaps **(ADT)**
- Skip lists **(ADT)**
- Self-balancing trees **(ADT)**
- Graphs **(ADT)**







## Analysis of algorithms



## Recursive algorithms



## General algorithms

### Insertion sort

### Merge sort

### Other

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

    
