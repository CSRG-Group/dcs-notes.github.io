---
layout: CS126
part: true
math: true
title: "Trees"
---


## Trees (ADT)
> **Trees** are "an abstract model of a hierarchical structure. A tree consists of nodes with a parent-child relation." 
>
> *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*

*If you want to pull request more stuff here, please do - but I'm not too sure how much more depth is needed*

| Fundamental Operation | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `size()`              | Size of tree – number of nodes                               |
| `isEmpty()`           | Returns `true` if the tree is empty.                         |
| `iterator()`          | Iterator for the tree                                        |
| `positions()`         | Return an iterable container of all nodes in the tree        |
| `root()`              | Returns root node                                            |
| `parent(p)`           | Returns parent of node ***p***                               |
| `children(p)`         | Returns an iterable container of the children of node ***p*** |
| `numChildren(p)`      | Returns the number of children of node ***p***               |
| `isInternal(p)`       | Returns `true` if node ***p*** is an **internal node** (node with at least 1 child) |
| `isExternal(p)`       | Returns `true` if node ***p*** is an **external node** (node with no children) |
| `isRoot(p)`           | Returns `true` if node ***p*** is a **root node** (node without parent) |

The methods for insertion, deletion, and searching are more complicated, and so are outlined in more detail in the binary search tree section

## Tree Traversals

There are various ways a tree can be traversed. Shown here is a figure of a binary tree. 

<img src="https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggVEQ7XG5cdEEgLS0tIEI7XG5cdEEgLS0tIEM7XG5cdEIgLS0tIEQ7XG5cdEIgLS0tIEU7IFxuXHRDIC0tLSBGO1xuXHRDIC0tLSBHO1xuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0" class="center"/>

**In-order (Left, Root, Right).** DBE A FCG

**Pre-order (Root, Left, Right).** A BDE CFG

**Post-order (Left, Right, Root).** DEB FGC A

**Breadth First/Level Order.** ABCDEFG

We will come back to breadth first traversal in a later topic (Breadth First Search). For now we will focus on the first 3.

### In-Order Traversal

For every node, we print the left child, the node itself, then the right child. Since this is a recursive function, if we start at a node ***n***, the algorithm will start from the left-most child **of the tree**, then that child’s parent then its sibling and on for the entire tree that the ***n*** is the **root** of.

```java
Function inOrder(n)
  if n != null
    inOrder(n.leftChild())
    Print n
    inOrder(n.rightChild())
```

Note that the above algorithm applies only to **binary trees**, for a more general form of in-order traversal, there will need to be an **additional** definition of what makes a node a “left child”. This can either be that left child nodes have a smaller value than the parent/root, or left children are just the first ***m*** number of nodes etc. 

### Pre-order traversal

Each node is printed before its descendants, and descendants are taking in ascending order
```java
Function preOrder(n)
  if n != null
    Print n
    For each child m of n
      preOrder(n)
```

### Post-order traversal

Each node is printed after its descendants, and descendants are taking in ascending order
```java
Function postOrder(n)
  if n != null
    For each child m of n
      postOrder(n)
    Print n
```

## Binary trees (ADT)

> **Binary trees** are a specialised tree where each node has at most two children, called left and right

| Fundamental Operations | Description                         |
| ---------------------- | ----------------------------------- |
| `left(p)`              | Returns left child of node ***p***  |
| `right(p)`             | Returns right child of node ***p*** |
| `sibling(p)`           | Returns sibling of node ***p***     |

### Properties

A binary tree with $$n$$ nodes, $$e$$ external nodes, $$i$$ internal nodes, and a height $$h$$ has the properties

1. $$e = i + 1$$
2. $$n = 2e - 1$$
3. $$h \leq i$$
4. $$h \leq \frac{(n-1)}{2}$$
5. $$e \leq 2^h$$
6. $$h \geq log_2 e$$
7. $$h \geq log_2 (n+1) - 1$$

As mentioned [earlier](#in-order-traversal), Binary Trees by definition have a **discrete middle node**, and inherently support **in-order traversal**.

### Implementations

There are two common concrete implementations of binary trees

- Linked structure
- Array based

### Linked structure

In the linked structure implementation, each node is an object which stores its value, references to its child nodes (and sometimes a reference to its parent), as shown in the diagram below:

<img src="./images/binaryTreeLinkedStructure.png" alt="binaryTreeLinkedStructure" class="center" />

Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*

This has a linear space complexity irrespective of the balance of the tree, and has a lookup time of $$O(log_2n)$$ for lookup operations.

### Array based

In the array based implementation, node values are stored in an array, and their children can be found at indices based on arithmetic operations of their own index

- $$index(root) = 0$$

- If $$l$$ is the left child of $$n$$, then $$index(l) = 2 \cdot index(n) + 1$$
- If $$r$$ is the right child of $$n$$, then $$index(r) = 2 \cdot index(n) + 2$$

This can be very inefficient for unbalanced trees, for example, a tree which is just a "line" of nodes would grow with $$O(2^n)$$ space, but it has a similarly good lookup time of $$O(log_2n)$$ 
