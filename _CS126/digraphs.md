---
layout: CS126
part: true
math: true
title: "Directed Graphs"
---

## Directed graphs

> Directed graphs (digraphs) are graphs where **every edge** is directed. Edge $$(a,b)$$ goes from $$a$$ to $$b$$, but not the other way around.
>
> It can be applied to dependency and scheduling problems. When representing it in concrete implementations, we tend to keep in and out edges separately

### Properties

If a **simple** directed graph has $$m$$ edges and $n$ vertices, then $$m \leq n \cdot (n-1)$$, since every vertex can connect to every other vertex bar itself

There is more terminology specifically about digraphs:

- One vertex is said to be **reachable** from the other if there **exists a directed path** from the other to it
- A digraph is said to be **strongly connected** if **each vertex is reachable** from every other vertex

### Strong Connectivity Algorithm

We can identify strong connectivity by running DFS on a chosen vertex $$v$$ in $$G$$ and $$G’$$, where $$G’$$ is $$G$$ but with the directed edges **reversed**.

- Firstly, we perform DFS from $$v$$ in $$G$$. If there is a vertex $$u$$ **not visited**, then $$G$$ is **not** strongly connected. Otherwise, it shows that there exists a path from $$v$$ to every other vertex.
- Next we perform DFS from $$v$$ in $$G’$$. Again, if there is a vertex $$u$$ not visited it is not strongly connected. Otherwise, it shows that there exists a path from every other vertex to $$v$$. 
- If both DFS show that there is no such vertex $$u$$, then $$G$$ is strongly connected.

This has a running time of $$O(n+m)$$.

It is also possible to create maximal subgraphs with every vertex being reachable in $$O(n+m)$$ time, but this is more involved.

## Transitive closure

> Given a digraph $$G$$, the transitive closure of $$G$$ is the digraph $$G^*$$ such that
>
> -  $$G^*$$ has the same vertices as $$G$$
>
> - If $$G$$ has a directed path from $$u$$ to $$v$$, and $$u \neq v$$, then $$G^*$$ has a directed edge from $$u$$ to $$v$$
>
> The transitive closure provides reachability information about a digraph

Informally, this means that every pair of vertices with a path between them is adjacent

<img src=".\images\transitiveClosure.png" alt="transitiveClosure" class="center" style="zoom:50%;" />

Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*

We can naively compute this by performing DFS for each vertex in graph to identify every reachable edge from it, then setting edges between them. However, this is very slow, being $$O(n \cdot (n+m))$$ time.

Instead, we can use the **Floyd-Warshall algorithm**, which is a dynamic programming solution

### Floyd-Warshall Algorithm

<img src=".\images\floydWarshall.png" alt="floydWarshall" class="center" />

Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*

We build up from $$1$$ to $$k$$, starting with the base case of the initial graph, which only has the initial adjacencies. We then add edges between any included nodes with path length two between them.

With each iteration, we introduce a new node considered in the temporary graph, and ensure that all edges within this temporary graph are transitively closed.

Since at the end of every step, every node is transitively closed, when all nodes are included, the entire graph is transitively closed.

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

#### Speed Analysis

Running time is $$O(n^3)$$ if we assume that the `areAdjacent` method takes $$O(1)$$ time. We know that this depends on the implementation of the graph $$G$$. 

If, the **adjacency matrix** structure is used then it will be $$O(1)$$ which is better than $$O(n \cdot (n+m))$$ for non-sparse graphs (often graphs have many more edges than nodes).

## Topological ordering

A graph has a topological ordering if it is directed and acyclic

- Having cycles would informally be self-dependencies
- This can be done in $$O(m+n)$$ time using DFS

Topological ordering means the same thing as a total relation in CS130, if the graph is considered as a set of relations