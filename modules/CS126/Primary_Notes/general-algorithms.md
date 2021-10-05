---
layout: notes
part: true
math: true
title: "General Algorithms"
---

## Searching data structures

### Linear search

```java
Let arr <- the array to search
Let k <- the item to search for
Let n <- 0

While n is smaller than the length of arr
	If k is equal to arr[n]
		Stop, since the item is found
	Increment n
Stop, since the item is not in the array
```

### Binary search

This binary search algorithm is used for searching an array, and will return the index of the item in the array else -1.

```{java}
Let arr <- the array to search
Let k <- the item to search for
if !(arr.isSorted())
	arr.mergeSort()
binarySearch(arr, k, int lowerBound, upperBound)
	middle <- (lowerBound + upperBound) / 2
	if upperBound < lowerBound
		return - 1
	if k == arr[middle]
    		return middle
	else if k < arr[middle]
    		return binarySearch(arr, k, lowerBound, middle -1)
    	else 
        	return binarySearch(arr, k, middle + 1, upperBound)
      
```

#### Iterative algorithm

```java
Let arr <- the array to search
Let k <- the item to search for
Let l <- 0
Let r <- the size of arr - 1
Let m <- (l+r) / 2

While l != r
	If k is equal to arr[n]
		Stop, since the item is found
	Else if k is less than arr[n]
		r <- m - 1
		m <- (l+r) / 2
	Else (if k is greater than arr[n])
		l <- m
		m <- (l+r) / 2
Stop, since the item is not in the array
```

#### Recursive algorithm

```java
Let arr <- the array to search
Let k <- the item to search for

Function binarySearch(arr, k)
	Let l <- 0
    Let r <- the size of arr - 1
    Let m <- (l+r) / 2
    If l == m
    	Stop, since the item is not in the array
    Else if k is equal to arr[n]
		Stop, since the item is found
	Else if k is less than arr[n]
		binarySearch(arr[l:m], k)
	Else (if k is greater than arr[n])
		binarySearch(arr[m:r], k)
```



## Sorting data structures

### Insertion sort

```java
Let P <- a priority queue using an sorted array implementation
Let arr <- the array to sort
Let arr' <- the sorted array
For each i in arr
	Enqueue i to P
While P is not empty
	Let i <- Dequeue from P
	Append i to arr'
```

### Selection sort

```java
Let P <- a priority queue using an unsorted array implementation
Let arr <- the array to sort
Let arr' <- the sorted array
For each i in arr
	Enqueue i to P
While P is not empty
	Let i <- Dequeue from P
	Append i to arr'
```

### Heap sort

```java
Let P <- a priority queue using a heap based implementation
Let arr <- the array to sort
Let arr' <- the sorted array
For each i in arr
	Enqueue i to P
While P is not empty
	Let i <- Dequeue from P
	Append i to arr'
```

### Merge sort

```java
Let arr <- the array to sort

Function mergeSort(arr)
	If arr contains only one element
		Return arr
    Let lArr, rArr <- arr split into two even halves
    Return merge(
    	mergeSort(lArr),
    	mergeSort(rArr)
    )
    
Function merge(arr1, arr2)
	Let arr' <- an empty array large enough to fit both arr1 and arr2 in
	Let n1, n2 <- 0
	While neither arr1 nor arr2 are empty
		If arr1[n1] = arr2[n2]
			Append arr1[n1] and arr2[n2] to arr'
			Increment n1 and n2
		Else if arr1[n1] < arr2[n2]
			Append arr1[n1] to arr'
			Increment n1
		Else (if arr1[n1] > arr2[n2])
			Append arr2[n2] to arr'
			Increment n2
	For each element in arr1 from n1 to its last element
		Append arr1[n1] to arr'
	For each element in arr2 from n2 to its last element
		Append arr2[n2] to arr'
	Return arr'
```




## Reversing data structures
### Reversing a stack

Push all the items in array to the stack, then pop all the items off the stack into the new reversed array
```java
Let S <- the stack to reverse
Let S' <- an empty stack (the output)
For each item in S
	Pop the head off S into s
	Push s to the head of S'
```

### Reversing a linked list

Iterate over the linked list from the head, and for each element in the list to reverse, set the item as the predecessor of the head in the new reversed list
```java
Let L <- the linked list to reverse
Let L' <- an empty linked list (the output)
For each item in S
	Let l <- the first item in the linked list
	Delete the first item in the linked list
	Add l as the head of L'
```



## Set operations

### Generic merging

Taking the union of two sets, in linear time:
```java
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



## Graph algorithms

### Depth-first search

```java
DFS(G, v)
	setLabel(v, VISITED)
	for each (Edge e : G.incidentEdges(v))
        	if getLabel(e) = UNEXPLORED
			w = opposite(v,e)  	
            		if getLabel(w) = UNEXPLORED
                		setLabel(e, DISCOVERY)
                		DFS(G,w)
            		else 
               			setLabel(e, BACK)
```



#### DFS for an entire graph:

The following algorithm is pseudocode for Depth First Search - as displayed by the CS126 lectures, which is used to perform depth first search on the entire graph.

```java
// For the entire graph
DFS(G)
    	for each (Vertex u : G.vertices())
        	setLabel(u, UNEXPLORED)
    	for each (Edge e : G.edges())
        	setLabel(e, UNEXPLORED)
    	for each (Vertex u : G.vertices())
        	if getLabel(u, UNEXPLORED)
            		DFS(G, u)
            
// For each vertex individually      
DFS(G, v)
	setLabel(v, VISITED)
	for each (Edge e : G.incidentEdges(v))
        	if getLabel(e) = UNEXPLORED
			w = opposite(v,e)  	
            		if getLabel(w) = UNEXPLORED
                		setLabel(e, DISCOVERY)
                		DFS(G,w)
            		else 
               			setLabel(e, BACK)
```




#### Path Finding with DFS

By using an alteration of the depth first search algorithm, we can use it to find a path between two given vertices, using the **template method pattern**
where **S** is an initially empty stack
```java
pathDFS(G, v, z)
    	setLabel(v, VISITED)
   	S.push(v)
    	if v = z
        	return S.elements()
    	for each (Edge e : G.incidentEdges(v))
        	if getLbel(e) = UNEXPLORED
            		w = opposite(v,e)
            		if getLabel(w) = UNEXPLORED
                		setLabel(e, DISCOVERY)
                		S.push(e)
                		pathDFS(G,w,z)
                		S.pop(e)
           		else 
                		setLabel(e, BACK)
		S.pop(v)
```



#### Cycle Finding with DFS

The algorithm for DFS can be adapted slightly in order to find a simply cycle back to the start node.

```java	
cycleDFS(G, v)
   	setLabel(v, VISITED)
    	S.push(v)
    	for each (Edge e : G.incidentEdges(v))
        	if getLabel(e) = UNEXPLORED
            		w = opposite(v, e)
            		S.push(e)
            		if getLabel(w) = UNEXPLORED
                		setLabel(e, DISCOVERY)
                		cycleDFS(G, w)
               			S.pop(e)
           		 else 
               			T = new empty Stack
                		repeat
                			o = S.pop
                			T.push(o)
                		until o = w
                		return T.elements()
	S.pop(v)
```

#### Topological ordering using DFS


```java	
topologicalDFS(G)
    	z = G.getVertices()
    	for each (Vertex u : G.vertices)
        	setLabel(u, UNEXPLORED)
    	for each (Vertex v : G.vertices)
        	if getLabel(v) = UNEXPLORED
            		topologicalDFS(G, v)


topologicalDFS(G, v)
	setLabel(v, VISITED)
    	for each (Edge e : outgoingEdges(v))
        	w = opposite(v, e)
        	if getLabel(w) = UNEXPLORED	
            		topologicalDFS(G, w)
        	else
            		Label v with topological number n
        	n = n - 1
```





### Breadth-first search

```java
Algorithm BFS(G)
  Input: graph G
  Output: Labelling of edges and partition of the vertices of G
  for all u in G.vertices()
    setLabel(u, "unexplored")
  for all e in G.edges()
    setLabel(e, "unexplored")
  for all v in G.vertices()
    if getLabel(v) == "unexplored"
      BFS(G,v)
      
Algorithm BGS(G,s)
  L0 <- new empty sequence
  L0.addLast(s)
  setLabel(s, "visited")
  while !L0.isEmpty()
    Lnext <- new empty sequence
    for all v in L0.elements()
      for all e in G.incidentEdges(v)
        if getLabel(e) = "unexplored"
          w <- opposite(v,e)
          if getLabel(w) = "unexplored"
            setLabel(e, "discovery")
            setLabel(w, "visited")
            Lnext.addLast(w)
          else
            setLabel(e, "cross")
    L0 <- Lnext // Set L0 to Lnext so while loop won't stop
```



### Directed graphs

```java
Algorithm FloydWarshall(G)
  Input: digraph G
  Output: transitive closure G* of G
  i <- 1
  for all v in G.vertices()
    denote v as vi
    i <- i + 1
  G_0 <- G
  for k <- 1 to n do
    G_k <- G_(k-1)
    for i <- 1 to n(i != k) do
      for j <- 1 to n(j != k) do
        if G_(k-1).areAdjacent(vi,vk) & G_(k-1).areAdjacent(vk,vj)
          if !G_(k-1).areAdjacent(vi,vj)
            G_k.insertDirectedEdge(vi,vj,k)
  return G_n
```



## Miscellaneous

### Computing spans

The span of an array is the maximum number of consecutive elements less than a value at an index which precede it
This can be calculated in linear time by

```java
Let X <- the array to find spans of
Let S <- a stack of all the indices in X
Let i be the current index
Pop indices from the stack until we find index j such that X[i] < X[j]
Set S[i] <- i-j
Push i to the stack
```

### Fibonacci
The Fibonacci numbers can be calculated in various ways, each of which have varying efficiency, from very inefficient in exponential time, to efficient in linear time

### Exponential time

```java
Function fibonacci(k)
	If k = 0
		Return 0
	Else if k = 1
		Return k
	Else
		Return fibonacci(k-1) + fibonacci(k-2)
```

This is very inefficient, running in $$O(2^n)$$ time, since it re-calculates calls to `fibonacci(k)` for some `k` many times, instead of using the same result every time it is needed

#### Linear time

```java
//Returns the tuple (f_k, f_k-1)
Function fibonacci(k)
	If k = 1
		Return (k, 0)
	Else
		Let i,j <- fibonacci(k - 1)
		Return (i-j, i)
```
