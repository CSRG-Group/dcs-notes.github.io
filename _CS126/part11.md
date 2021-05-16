---
layout: CS126
part: true
math: true
title: "Graphs"
---



# Graphs

## Graphs as a mathematical concept

**Graphs** are defined as a pair $$G = (V, E)$$ were $$V$$ is a set of vertices, and $$E$$ is an unordered collection of pairs of vertices, called edges, for example: $$G = (\{a, b, c\}, [(a,b), (b,c), (c,a)])$$

Directed and undirected graphs
- In undirected graphs, the edge pair indicates that both vertices are connected to each other

- In directed graphs, the edge pair indicates that the first vertex is connected to the second, but not vice versa

  

### Terminology

- Adjacent vertices - vertices with an edge between them
- Edges incident on a vertex - edges which both connect to the same vertex
- End vertices/endpoints - the two vertices in the pair that an edge connects to
- Degree of a vertex - the number of edges that connect to a pair
- Parallel edges - two edges both connecting the same nodes (reason why edges are an unordered collection, not a set)
- Self-loop - an edge whose vertices are both the same
- Path - a sequence of alternating vertices and edges, starting and ending in a vertex
- Simple paths - paths containing no repeating vertices (hence are acyclic)
- Cycle - a path starting and ending at the same vertex
- Acyclic - a graph containing no cycles
- Simple cycle - a path where the only repeated vertex is the starting/ending one
- Length (of a path of cycle) - the number of edges in the path/cycle
- Tree - a connected acyclic graph

### Graph properties

1. The sum of the degrees of the vertices in an undirected graph is an even number
   - Handshaking theorem - every edge must connect two vertices, so sum of degrees is twice the number of edges, which must be even

2. An undirected graph with no self loops nor parallel edges, with number of edges $$m$$ and number of vertices $$n$$ fulfils the property $$m \leq \frac{n \cdot (n-1)}{2}$$

   - The first vertex can connect to $$n-1$$ vertices (all vertices bar itself), then the second can connect to $$n-2$$ (all the vertices bar itself and the first vertex, which it is already connected to), and so on, giving the sum $$1+2+...+n$$ , which is known to be $$\frac{n \cdot (n-1)}{2}$$

   - Fully connected graphs fulfil the property $$m = \frac{n \cdot (n-1)}{2}$$



## Graphs as an ADT

**Graphs** are a "collection of vertex and edge objects"

They have a large number of fundamental operations, to the extent it is unnecessary to enumerate them here, but they are essentially just accessor and mutator and count methods on the vertices and edges

There are three main concrete implementations of the graph ADT

- Edge list

  - One list of vertices
  - One list of edges, each of which contain references to their endpoint vertices

  ![edgeListGraph](images\edgeListGraph.png)

  Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*

- Adjacency list

  - Array containing a all of the nodes, each of which have a pointer to a list of the other nodes they connect to

  ![adjacencyListGraph](images\adjacencyListGraph.png)

  Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*

- Adjacency matrix

  - 2D array acts a lookup table for whether vertices have an edge connecting them
  - Square matrix, with each dimension being the number of vertices in the graph
  - Undirected graphs are symmetrical along the leading diagonal

  ![adjacencyMatrixGraph](images\adjacencyMatrixGraph.png)
  
  Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*



## More terminology

### Subgraphs

A subgraph of the graph $$G$$ fulfils the two properties:

- Its vertices are a subset of the vertices of $$G$$

- Its edges are a subset of the edges of $$G$$

A spanning subgraph contains all of the vertices in $$G$$. This then gives rise to spanning trees, which are spanning subgraphs which are connected and acyclic

# Depth-first search

Depth-first search is a technique to traverse graphs. It takes $$O(n + m)$$ time to search a graph of $$n$$ vertices and $$m$$ edges.

Informally, it can be described as always proceeding to its first adjacency, then backtracking when it reaches a vertex with no adjacencies which it has not explored already

> **Algorithm** $$DFS(G, v)$$
> 		**Input**  graph $$G$$ and start at vertex $$v$$ of $$G$$
> 		**Output** labeling of the edges of $$G$$ in the connected component of v as discovery edges and back edges
> 		$$setLabel(v, VISITED)$$
> 		**for all** $$e \in G.incidentEdges(v)$$
> 		    **if** $$getLabel(e) = UNEXPLORED$$
> 		 		   $$w \leftarrow opposite(v,e)$$
> 		 		   **if** $$getLabel(w) = UNEXPLORED$$
> 		 		 		  $$setLabel(e, DISCOVERY)$$
> 		 		 		  $$DFS(G, w)$$
> 		 		   **else**
> 		 		 		  $$setLabel(e,BACK)$$
> **END ALGORITHM**

![dfsExample](\images\dfsExample.png)

Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*



It has the following properties

- It visits all vertices and edges in any connected component of a graph
- The discovery edges form a spanning tree of any graph it traverses

It can be used for path-finding by performing the traversal until the target node is found, then backtracking along the discovery edges to find the reverse of the path

It can be used to identify cycles, as if it ever finds an adjacency to a vertex which it has already explored, (a back edge), the graph must contain a cycle

# Breadth-first search

Breadth-first search is a technique to traverse graphs. It takes $$O(n + m)$$ time to search a graph of $$n$$ vertices and $$m$$ edges.

Informally, it can be described as exploring every one of its adjacencies, then proceeding to the first adjacency, then backtracking when it reaches a vertex with no adjacencies which it has not explored already

> **Algorithm** $$BFS(G)$$
> 		**Input** graph $$G$$
> 		**Output** labeling of the edges and partition of the vertices of G
> 		**for all** $$e \in G.vertices()$$
> 		    $$setLabel(u, UNEXPLORED)$$
> 		**for all** $$e \in G.edges()$$
> 		    $$setLabel(e, UNEXPLORED)$$
> 		**for all** $$v \in G.vertices()$$
> 		    **if** $$getLabel(v) = UNEXPLORED$$
> 		 		   $$BFS(G,v)$$
> **END ALGORITHM**

![bfsExample](\images\bfsExample.png)

Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*



It has the following properties

- It visits all vertices and edges in any connected component of a graph
- The discovery edges form a spanning tree of any graph it traverses
- The path between any two vertices in the spanning tree of discovery edges it creates is the shortest path between them in the graph

It can be used for path-finding by performing the traversal until the target node is found, then backtracking along the discovery edges to find the reverse of the path

It can be used to identify cycles, as if it ever finds an adjacency to a vertex which it has already explored, (a back edge), the graph must contain a cycle

# Directed graphs

Directed graphs (digraphs) are graphs where every edge is directed. It can be applied to dependency and scheduling problems. When representing it in concrete implementations, we tend to keep in and out edges separately

It has the following properties:

- If a simple directed graph has $$m$$ edges and $n$ vertices, then $$m \leq n \cdot (n-1)$$, since every vertex can connect to every other vertex bar itself

There is more terminology specifically about digraphs:

- One vertex is said to be reachable from the other if there exists a directed path from the other to it

- A digraph is said to be strongly connected if each vertex is reachable from every other vertex
  - We can identify strong connectivity by running DFS or BFS, and seeing if the vertex is ever reached in the traversal. This has a running time of $$O(n+m)$$
  - It is also possible to create maximal subgraphs with every vertex being reachable in $$O(n+m)$$ time, but this is more involved

## Transitive closure

The transitive closure provides reachability information about a digraph

Given a digraph $$G$$, the transitive closure of $$G$$ is the digraph $$G*$$ such that

- $$G*$$ has the same vertices as $$G$$
- If $$G$$ has a directed path from $$u$$ to $$v$$, and $$u \neq v$$, then $$G*$$ has a directed edge from $$u$$ to $$v$$

Informally, this means that every pair of vertices with a path between them is adjacent

![transitiveClosure](\images\transitiveClosure.png)

Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*



We can naively compute this by performing DFS for each vertex in graph to identify every reachable edge from it, then setting edges between them. However, this is very slow, being $$O(n \cdot (n+m))$$ time.



Instead, we can use the Floyd-Warshall algorithm, which is a dynamic programming solution:

![floydWarshall](\images\floydWarshall.png)

Image source: *Data Structures and Algorithms in Java, Goodrich, Tamassia, Goldwasser*



We build up from $$1$$ to $$k$$, starting with the base case of the initial graph, which only has the initial adjacencies. We then add edges between any included nodes with path length two between them.

With each iteration, we introduce a new node considered in the temporary graph, and ensure that all edges within this temporary graph are transitively closed.

Since at the end of every step, every node is transitively closed, when all nodes are included, the entire graph is transitively closed



> **Algorithm** $$FloydWarshall(G)$$
> 		**Input** digraph $$G$$
> 		**Output** transitive closure $$G^*$$ of $$G$$
> 		$$i \leftarrow 1$$
> 		**for all** $$v \in G.vertices()$$
> 		    denote $$v$$ as $$v_i$$
> 		    $$i \leftarrow i + 1$$
> 		$$G_0 \leftarrow G$$
> 		**for** $$k \leftarrow 1$$ **to** $$n$$ **do**
> 		    $$G_k \leftarrow G_{k-1}$$
> 		 		   **for** $$i\leftarrow 1$$ **to** $$n(i\neq k)$$ **do**
> 		 		 		  **for** $$j \leftarrow 1$$ **to** $$n(j\neq i, k)$$ **do**
> 		 		 		 		 **if** $$G_{k-1}.areAdjacent(v_i,v_k)$$  $$\&$$ $$G_{k-1}.areAdjacent(v_k,v_j)$$
> 		 		 		 		 		**if** $$¬G_{k-1}.areAdjacent(v_i,v_j)$$
> 		 		 		 		 		    $$G_k.insertDirectedEdge(v_i,v_j,k)$$
> 		    **return** $$G_n$$
> **END ALGORITHM**

Running time is $$O(n^3)$$, which is better than $$O(n \cdot (n+m))$$ for non-sparse graphs (often graphs have many more edges than nodes)

## Topological ordering

A graph has a topological ordering if it is directed and acyclic

- Having cycles would informally be self-dependencies
- This can be done in $$O(m+n)$$ time using DFS

Topological ordering means the same thing as a total relation in CS130, if the graph is considered as a set of relations
