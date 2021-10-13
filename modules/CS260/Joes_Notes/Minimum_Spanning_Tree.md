---
layout: notes
title: Minimum Spanning Tree
math: true
---



## Spanning Tree
A spanning tree fo a graph is a subgraph fot he graph that is both acyclic and connected

### Properties
if $$H=(V,T)$$ is a subgraph of undirected graph $$G=(V,E)$$ then the following are equivalent
* H is a spanning tree of G
* H is connected and hs $$\vert V \vert -1$$ edges
* H is acyclic and hs $$\vert V \vert -1$$ edges
* H is minimally connected, removing any edge disconnects it
* H is maximally acyclic, adding an edge creates a cycle

### Minimum Spanning Tree
Given a weighted connected undirected graph a minimum spanning tree is one there the total sum of it's edges weights are minimized.

## Cuts and Cutset

> Def Cut: A partition of nodes into two non-empty subsets of $$S$$ and  $$V \setminus S$$

> Def Cutset: The cutset of a cut S is the ste of edges with exactly one endpoint in S

### Proposition
A Cycle and a cutset intersect on an even number of edges

If cycle C is within cut S or outside then the intersection is empty and even

If a node on the Cycle is outside S and the cycle enters S then the cycle must leave, this can be repeated but results in an intersection of even size.

## Fundamental Cycle

let $$H=(V,T)$$ be a spanning tree of $$G(V,E)$$

For any edge $$e \in E \notin T : (V,T\cup {e})$$ contains a cycle $$C$$

For any edge $$f\in C :  (v,(T\cup{e})\setminus{f})$$ is a spanning tree

if $$C_e \leq C_f$$ then $$(V,T)$$ is not a minimum spanning tree.

## Fundamental Cut Set
let $$H=(V,T)$$ be a spanning tree of $$G(V,E)$$

for any edge $$f \in T : (V,T\setminus{f})$$ has two connected components

Let $$D$$ denote the cutset between the two components

For any edge $$e \in D : (V,(T\setminus{f})\cup{e})$$ is a spanning tree 

if $$C_e \leq C_f$$ then $$(V,T)$$ is not a minimum spanning tree.

## Greedy Algorithms

### The Red Rule
let $$C$$ be a cycle with no red edges

Select an uncolored edge of $$C$$ of max cost and color it red.

### The Blue Rule
let $$D$$ be a cutset with no blue edges

select an uncolored edge of $$D$$ of min cost and color it blue

### Algorithm
Apply the red and blue rules nondeterministically until all edges are blue or red

The blue edges form a minimum spanning tree

Note: We can stop when n-1 edges are colored blue.

## Proof
### Step 1
> Color Invariant: There exists a MST $$(V,T')$$ containing every blue edge and no red edge

#### Induction On Blue Rule
Base Case: No edges colored $$\implies$$ Every MST satisfies invariant

##### Inductive Step:

Suppose the color invariant is true before the blue rule

Let $$D$$ be a chosen cutset, let $$f \in D$$ be a blue edge

If $$f \in T'$$ then $$T'$$ still satisfies the invariant

Otherwise: Consider fundament cycle $$C$$ by adding $$f$$ to $$T'$$

let $$e \in C$$ be another edge in $$D$$

we can show $$e$$is uncolored and $$C_e \geq C_f$$
* as $$e \in T' \implies e$$ is not red
* as blue rule $$\implies e$$ not blue $$C_e \geq C_f$$

Thus $$(T' \cup {f})\setminus {e}$$ satisfies the invariant

#### Induction on Red Rule
Base Case: No edges colored $$\implies$$ Every MST satisfies invariant

Suppose the color invariant is true before the red rule

let $$C$$ be the chosen cycle and let $$e$$ be the edge colored red

If $$e \notin T'$$ then the $$T'$$ still satisfies the invariant 

Otherwise: Consider the fundamental cutset $$D$$ by deleting $$e$$ form $$T'$$

let $$f \in D$$ be an edge in $$C$$

we can show $$f$$ is uncolored and $$C_e \geq C_f$$
* as $$f \notin T' \implies f$$ is not blue
* as red rule $$\implies f$$ not red and $$C_e \geq C_f$$

Thus $$(T' \cup {f})\setminus {e}$$ satisfies the invariant

### Step 2

> Theorem: The algorithm terminates

Show that a uncolored edge or any other uncolored ede can be colored red or blue.

Select uncolored edge $$e$$

The blue edges form a forrest
#### Case 1
Both endpoints of $$e$$ are in the same blue tree
* Apply red rule to the cycle formed by adidng $$e$$ to the forrest 
* Coloring $$e$$ red

#### Case 2
Both endpoints of $$e$$ are in different blue trees
* Apply blue rule to the cutset introduces by either of the two blue trees
* Some uncolored line in the cutset will be colored

## Prim's Algorithm

### Algorithm
initialize $$S = {s}$$ for any node $$s$$

let $$T = \emptyset$$

repeat $$n-1$$ times
* Add to $$T$$ a minimum cost edge with exactly one endpoint in $$S$$
* Add the other endpoint to $$S$$

### Proof
> Theorem: Prim's algorithms computes a MST

Assume all vertices in $$S$$ are connected by a blue edges

All vertices in cutset $$C$$ of $$S$$ are nto colored can apply blue rule by coloring cheapest edge in $$C$$ blue

### Complexity
Prims algorithm can run in $$O(m\log n)$$ time

### Pseudocode

```Java
graph <- graph to find MST

S <- empty set
T <- empty set

dist <- current known distances

//initialize start values
pq = priorityQueue()
for each vertex in graph{
    dist[vertex] = INFINITY
    prev[vertex] = UNDEFINED
}
S.add( arbitrary node from graph)
dist[s] = 0;
for each vertex in graph{
    pq.insert(s,dist[s]);
}
// calculate minimum path
while (pq.empty =false){
    u = pq.removeMin();
    S.add(u)
    for edge (u,v) where v not in S{
        if (edge.length < dist[v]){
            dist[v]=edge.weight
            pq.decreaseKey(v,dist[v])
            prev[v]=edge
        }
    }
}
```

## Kruskal's Algorithms
Consider edges in acceding order of coset
* Add to the tree unless it would form a cycle

### Proof
Theorem: kruskal's algorithm computes an MST

select edge $$e$$

Case 1: both end points of e in the same blue tree
* Color e by applying red rule to unique cycle
Case 2: both endpoints of e in different blue trees
* Color e blue by applying blue rule to cutset defined by either tree

### Complexity
Kruskal's algorithm can run in $$O(m \log m)$$

### Pseudocode
Using union-find data structure to dynamically maintain connected components

```java
edges <- edges in the graph
vertices <- vertices in the graph
T <- empty set

Sort edges by cost
uf=UnionFind()

for vertex of vertices{
    uf.makeSet(vertex)
}
for edge of edges{
    if (uf.getSet(edge.start)!=uf.getSet(edge.end)){
        T.add(edge)
        uf.union(u,v)
    }
}
return T
```

## Reverse-delete algorithm
Start with all edges in T

Sort into descending order

Delete edge form T unless it would disconnect T

### Proof
Theorem the reverse-delete algorithm

Case 1: removing edge does not disconnects $$T$$
* apply red rule to the cycle the line becomes red
Case 2: removing edge disconnects $$T$$
* apply blue rule to cutset $$D$$ introduced by either component

### Complexity
Can be done in $$O(m \log n (\log \log n)^3)$$