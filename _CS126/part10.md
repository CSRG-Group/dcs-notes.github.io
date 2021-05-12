---
layout: CS126
part: true
math: true
title: "Binary search and self-balancing trees"
---



# Binary search trees

- Binary search trees used as a concrete implementation of ordered maps, with items being stored in the tree ordered by their key

  - Search tables are another concrete implementation of ordered maps, but instead use a sorted sequence, normally an array, which is searchable with binary search in $$O(log\ n)$$, but requires $$O(n)$$ for insertion and removal. This means they are only effective for either small maps, or cases where there are few insertions and deletions

- Supports nearest neighbour queries, finding next highest and next lowest items

- Properties of binary search trees

  - External nodes store no items
  - All left children of any internal node have a smaller key than their parent node
  - All right children of any internal node have a larger key than their parent node
  - In-order traversals yield a sequence of the keys in ascending order

- Searching

  - Start at the root, and recursively proceed down the appropriate subtrees until the key or an external node is found

    ```
    Function Search(n, k)
    	If n is an external node
    		Return that the key is not in the tree
    	Else if the key being searched for is less than the value of the current node
    		Return Search called on the left child of n, and the same k
    	Else if the key being searched for is greater than the value of the current node
    		Return Search called on the right child of n, and the same k
    	Else (the key is equal to the one being search for)
    		Return that the key is in the tree
    
    Let r <- the root node of the tree to search
    Let k <- the key to search for
    Search(r, k)
    ```

- Insertion

  - Perform the searching operation, but when an external node is found, instead of returning that the key is not present, set that internal node as the key to insert, and give it two external child nodes

- Deletion

  - If the node has no internal children
    - Replace it with an external key
  - If the node has only one internal child
    - Overwrite it with that child
    - Discard the previous position of the child and its children,
    - Add two external nodes to it
  - If the node has two internal children
    - Find the node that immediately follows it in an in-order traversal
    - Overwrite it with that node
    - Set that node to be external, and discard its left child, which must itself be an external node

- Performance

  - In all cases, the space complexity is $$O(n)$$
  - The time complexity for searching, inserting and deleting is dependent on the height of the tree
    - If the tree is balanced, then the height is $$log\ n$$, so the time for these operations is $$O(log\ n)$$
    - In the worst case, the tree can be totally unbalanced, just a straight line of internal nodes, in which case the height is $$n$$, so the time for these operations is $$O(n)$$



# AVL trees

- AVL trees are a concrete implementation of self-balancing binary search tree

  - Insertion and deletion operations re-arrange the tree to ensure it remains balanced
  - Named after its creators, Adelson-Velsky and Landis
  - Other self-balancing binary search trees exist, such as red-black trees, but this is a common approach to implementing such an ADT

- Requirements to be a self-balancing binary search tree

  - Each node has at most two child nodes
  - For every internal node in the tree, the heights of the child subtrees can differ by at most one

- These requirements ensure that the maximum height to store $$n$$ keys is $$log\ n$$, which can be proved by induction

- Searching is approached as it is in a normal binary search tree


  *incomplete*

- Tri-node restructuring

- Re-balancing VS restructuring

- Insertion

- Deletion
  
- Performance

  - In all cases, the space complexity is $$O(n)$$
  - Searching takes $$O(log\ n)$$ time
  - Insertion and deletion are also $$O(log\ n)$$, as searching for the element is $$O(log\ n)$$, and then restructuring the tree to maintain the balance property is also $$O(log\ n)$$