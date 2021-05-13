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

   - Pigeonhole principle - every vertex can connect to at most $$n-1$$ vertices (all the rest of the vertices in the graph), then sum this for $$n$$ vertices

   - Fully connected graphs fulfil the property $$m = \frac{n \cdot (n-1)}{2}$$



## Graphs as an ADT

**Graphs** are a "collection of vertex and edge objects"

They have a large number of fundamental operations, to the extent it is unnecessary to enumerate them here, but they are essentially just accessor and mutator and count methods on the vertices and edges

There are three main concrete implementations of the graph ADT

- Edge list

  - One list of vertices
  - One list of edges, each of which contain references to their endpoint vertices

  ![edgeListGraph](images\edgeListGraph.png)

- Adjacency list

  - Array containing a all of the nodes, each of which have a pointer to a list of the other nodes they connect to

  ![adjacencyListGraph](images\adjacencyListGraph.png)

- Adjacency matrix

  - 2D array acts a lookup table for whether vertices have an edge connecting them
  - Square matrix, with each dimension being the number of vertices in the graph
  - Undirected graphs are symmetrical along the leading diagonal

  ![adjacencyMatrixGraph](images\adjacencyMatrixGraph.png)





# Depth-first search

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



## DFS for an entire graph:
The following algorithm is pseudocode for Depth First Search - as displayed by the CS126 lectures, which is used to perform depth first search on the entire graph.

> **Algorithm** $$DFS(G)$$
> 		**Input** graph $$G$$
> 		**Output** labelling of the edges of $$G$$ as discovery and back edges
> 		**for all** $$u \in G.vertices()$$
> 		    **$$setLabel(u, UNEXPLORED)$$**
> 		**for all** $$e \in G.edges()$$
> 		    **$$setLabel(e, UNEXPLORED)$$**
> 		**for all** $$u \in G.vertices()$$
> 		    **if $$getLabel(u, UNEXPLORED)$$**
> 		 		   $$DFS(G, v)$$
> **END ALGORITHM**

Along with starting at a given vertex:

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



## Path Finding with DFS

By using an alteration of the depth first search algorithm, we can use it to find a path between two given vertices, using the **template method pattern**

> **Algorithm**
> $$pathDFS(G,v,z)$$
> 		$$setLabel(v, VISITED)$$
> 		$$S.push(v)$$
> 		**if** $$v=z$$
> 		    **return** $$S.elements()$$
> 		**for all** $$e \in G.incidentEdges(v)$$
> 		    **if** $$getLabel(e) = UNEXPLORED$$
> 		 		   $$w \leftarrow opposite(v,e)$$
> 		 		   **if** $$getLabel(w) = UNEXPLORED$$
> 		 		 		  $$setLabel(e,DISCORVERY)$$
> 		 		 		  $$S.push(e)$$
> 		 		 		  $$pathDFS(G,w,z)$$
> 		 		 		  $$S.pop(e)$$
> 		 		   **else**
> 		 		 		  $$setLabel(e, BACK)$$
> 		    $$S.pop(v)$$
> **END ALGORITHM**



## Cycle Finding with DFS

The algorithm for DFS can be adapted slightly in order to find a simply cycle back to the start node.

> **Algorithm** $$cycleDFS(G,v)$$
> 		$$setLabel(v,VISITED)$$
> 		$$S.push(v)$$
> 		**for all** $$e \in G.incidentEdges(v)$$
> 		    **if** $$getLabel(e) = UNEXPLORED$$
> 		 		   $$w \leftarrow opposite(v,e)$$
> 		 		   $$S.push(e)$$
> 		 		   **if** $$getLabel(w)= UNEXPLORED$$
> 		 		 		  **if** $$setLabel(e,DISCOVERY)$$
> 		 		 		  $$cycleDFS(G,w)$$
> 		 		 		  $$S.pop(e)$$
> 		 		   **else**
> 		 		 		  **T** $$\leftarrow$$ new empty stack
> 		 		 		  **repeat**
> 		 		 		 		 $$o \leftarrow S.pop()$$
> 		 		 		 		 $$T.push(o)$$
> 		 		 		  **until** $$o=w$$
> 		 		 		  **return** $$T.elements()$$
> 		$$S.pop(v)$$
> **END ALGORITHM**


## Topological ordering using DFS

> **Algorithm** $$topologicalDFS(G)$$
> 		**Input** dag $$G$$
> 		**Output** topotlogical ordering of G
> 		$$n \leftarrow G.numVertices()$$
> 		**for all** $$u\in G.vertices()$$
> 		    $$setLabel(,UNEXPLORED)$$
> 		**for all** $$v\in G.vertices()$$
> 		    **if** $$getLabel(v) = UNEXPLORED$$
> 		 		   $$topologicalDFS(G,v)$$
> **END ALGORITHM**


> **Algorithm** $$topologicalDFS(G,v)$$
> 		**Input** graph $$G$$ and start a vertex $$v$$ of $$G$$
> 		**Output** labeling of the vertices of G in the connected component of $$v$$
> 		$$setLabel(v, VISITED)$$
> 		**for all** $$e\in G.outEdges(v)$$
> 		    $$w\in opposite(v,e)$$ // Outgoing edges
> 		    **if** $$getLabel(w) = UNEXPLORED$$
> 		 		   $$topologicalDFS(G,w)$$ // $$e$$ is a discovery edge
> 		    **else**
> 		 		   Label $$v$$ with topological number $$n$$ // $$e$$ is a forward or cross edge
> 		    $$n\leftarrow n - 1$$
> **END ALGORITHM**



# Breadth-first search

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



> **Algorithm** $$BFS(G, s)$$
> 		$$L_0 \leftarrow$$ new empty sequence
> 		$$L_0 .addLast(s)$$
> 		$$setLabel(s, VISITED)$$
> 		$$i \leftarrow 0$$
> 		**while** $$¬L_i .isEmpty()$$
> 		    $$L_i+1 \leftarrow$$ new empty sequence
> 		    **for all** $$v\in L_i .elements()$$
> 		 		   **for all** $$e \in G.incidentEdges(v)$$
> 		 		 		  **if** $$getLabel(e) = UNEXPLORED$$
> 		 		 		 		 $$w \leftarrow opposite(v,e)$$
> 		 		 		 		 **if** $$getLabel(w) = UNEXPLORED$$
> 		 		 		 		 		$$setLabel(e) = (e, DISCOVERY)$$
> 		 		 		 		 		$$setLabel(w,VISITED)$$
> 		 		 		 		 		$$L_i+1 .addLast(w)$$
> 		 		 		 		 **else**
> 		 		 		 		 		$$setLabel(e,CROSS)$$
> 		    $$i \leftarrow i + 1$$
> **END ALGORITHM**




# Directed graphs

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
