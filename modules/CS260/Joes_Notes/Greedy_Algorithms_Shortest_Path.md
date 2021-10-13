---
layout: notes
title: Greedy Algorithms Shortest Path
math: true
part: true
---


## Shortest path problems

### Single-Pair Shortest path problem
**Input**:
* A weighted graph/digraph
* A source node(start)
* A destination node(end)
**Output**:
* A shortest path through the graph from the source to the destination 

### Single-Source shortest path problem
* A weighted graph/digraph
* A source node(start)
**Output**:
* A set of shortest paths through the graph from the source to every node in the graph
* Can be represented as a tree with the source as the node


  
## Dijkstra's algorithm Greedy

Maintain a set of explored nodes $$S$$

let $$d[u]$$ be the length of a shortest $$s \rightarrow u$$ path

initialize $$S \leftarrow \{s\}$$ , $$d[u] \leftarrow 0$$

repeatedly:
* choose unexplored node $$v\notin S$$ that minimises $$\pi(v)$$ where:

$$
\pi(v) = \min_{e = (u,v):u \in S}

$$

* add $$v$$ to $$S$$ , $$d[v]\leftarrow \pi(v)$$
* prev[v] $$\leftarrow e$$

The shortest path can then be found by traversing from any point to the start by following prev

### Proof
Prove:
> For every node $$u \in S$$, $$d[u]$$ is the shortest path $$s \rightarrow u$$

strategy:
induction

base Case:

when $$\vert S \vert = 1$$ is easy as $$S = \{s\}$$, as $$s[s]=0$$ there is no shorter solution

Inductive case:

Assume is true for $$\vert S \vert \geq 1$$

Let $$v$$ be the next path added to $$S$$ and let $$(u,v)$$ be the edge

A shortest path $$s \rightarrow u$$ + $$L(u,v)$$ is a $$s \rightarrow v$$ path of length $$\pi(v)$$

Consider anther path $$P$$
* let $$e = (x,y)$$ be the first edge in $$P$$ that leaves $$S$$
  * so $$x \in S \land y \notin nS$$
* let $$P'$$ be the subpath of $$s \rightarrow x$$
* the length of $$P \geq \pi(v)$$ as soon as it reaches y
  
$$
L(P) \geq L(P')+ L(e) \geq d[x]+L(e) \geq \pi(y) \geq \pi(v)
$$

when L determines the length of a path or edge

## Dijkstra's algorithm Efficient
Efficient algorithm can be found by implementing some optimizations on the previous strategy.

### Optimization 1
For each unexplored node $$v \in S$$

Maintain $$\pi(v)$$ instead of computing form the definition

As elements are added to $$S$$ for some $$v\notin S , \pi(v)$$ can only decrease.

Suppose $$u$$ is added to $$S$$ if there is an edge $$e=(u,v)$$ leaving $$u$$

then:

$$
pi(v) \leftarrow \min {\pi(v), \pi(u)+L(e)}
$$
### Optimization 2

Use a min-optimized priority queue to chose an unexplored node that minimises $$\pi(v)$$

### Implementation

```Java
graph <- graph to search
s <- start node

dist <- array of distances
prev <- array of previous nodes

//initialize start values
pq = priorityQueue()
for each vertex in graph{
    dist[vertex] = INFINITY
    prev[vertex] = UNDEFINED
}
dist[s] = 0;
for each vertex in graph{
    pq.insert(s,dist[s]);
}
// calculate minimum path
while (pq.empty =false){
    u = pq.removeMin();
    for edge in graph.edgesFrom(u){
        v = edge.goingTo() 
        if (dist[v] > dist[u]+edge.weight){
            dist[v]=dist[u]+edge.weight
            pq.decreaseKey(v,dist[v])
            prev[v]=u
        }
    }

}
```

The shortest path for a node can be found by traversing prev from the node to the start

### Complexity
The time complexity fo the algorithm depends on the priority queue algorithm chosen and the ratio of edges to nodes.

For a dense graph $$ e $$ is $$ O(n^2)$$ (where $$e$$ is the number of edges and $$n$$ is the number of nodes) using an array bases implementation is optimal as `decreaseKey` is $$O(1)$$

For a sparse graph  $$ e $$ is $$ O(n)$$ then a heap based method is better as `removeMin` is $$O(n)$$

