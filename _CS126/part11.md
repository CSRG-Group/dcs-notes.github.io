---
layout: CS126
part: true
math: true
title: "Graphs"
---



# Graphs

## Graphs as a mathematical concept

- Defined the same as in CS130
- A pair $$G = (V, E)$$ were $$V$$ is a set of vertices, and $$E$$ is an unordered collection of pairs of vertices, called edges, for example: $$G = (\{a, b, c\}, [(a,b), (b,c), (c,a)])$$
- Directed and undirected graphs
  - In undirected graphs, the edge pair indicates that both vertices are connected to each other
  - In directed graphs, the edge pair indicates that the first vertex is connected to the second, but not vice versa
- Terminology
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
- Graph properties
  - The sum of the degrees of the vertices in an undirected graph is an even number
    - Handshaking theorem - every edge must connect two vertices, so sum of degrees is twice the number of edges, which must be even
  - An undirected graph with no self loops nor parallel edges, with number of edges $$m$$ and number of vertices $$n$$ fulfils the property $$m \leq \frac{n \cdot (n-1)}{2}$$
    - Pigeonhole principle - every vertex can connect to at most $$n-1$$ vertices (all the rest of the vertices in the graph), then sum this for $$n$$ vertices
    - Fully connected graphs fulfil the property $$m = \frac{n \cdot (n-1)}{2}$$



## Graphs as an ADT

- A collection of vertex and edge objects

- Graphs have a large number of fundamental operations, to the extent it is unnecessary to enumerate them here, but they are essentially just accessor and mutator and count methods on the vertices and edges

- There are three main concrete implementations of the graph ADT

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
> &nbsp;&nbsp;&nbsp;&nbsp; **Input**  graph $$G$$ and start at vertex $$v$$ of $$G$$
> &nbsp;&nbsp;&nbsp;&nbsp; **Output** labeling of the edges of $$G$$ in the connected component of v as discovery edges and back edges 
> &nbsp;&nbsp;&nbsp;&nbsp; 
> $$setLabel(v, VISITED)$$
> &nbsp;&nbsp;&nbsp;&nbsp; 
> **for all** $$e \in G.incidentEdges(v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
> **if** $$getLabel(e) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$w \leftarrow opposite(v,e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(w) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e, DISCOVERY)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$DFS(G, w)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **else**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e,BACK)$$
> **END ALGORITHM**



### DFS for an entire graph: 
The following algorithm is pseudocode for Depth First Search - as displayed by the CS126 lectures, which is used to perform depth first search on the entire graph.

> **Algorithm** $$DFS(G)$$
> &nbsp;&nbsp;&nbsp;&nbsp; **Input**  graph $$G$$
> &nbsp;&nbsp;&nbsp;&nbsp; **Output** labelling of the edges of $$G$$ as discovery and back edges
> &nbsp;&nbsp;&nbsp;&nbsp; **for all** $$u \in G.vertices()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **$$setLabel(u, UNEXPLORED)$$**
> &nbsp;&nbsp;&nbsp;&nbsp; **for all** $$e \in G.edges()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **$$setLabel(e, UNEXPLORED)$$**
> &nbsp;&nbsp;&nbsp;&nbsp; **for all** $$u \in G.vertices()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **if $$getLabel(u, UNEXPLORED)$$**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $$DFS(G, v)$$
> **END ALGORITHM**
>
> **Algorithm** $$DFS(G, v)$$
> &nbsp;&nbsp;&nbsp;&nbsp; **Input**  graph $$G$$ and start at vertex $$v$$ of $$G$$
> &nbsp;&nbsp;&nbsp;&nbsp; **Output** labeling of the edges of $$G$$ in the connected component of v as discovery edges and back edges 
> &nbsp;&nbsp;&nbsp;&nbsp; 
> $$setLabel(v, VISITED)$$
> &nbsp;&nbsp;&nbsp;&nbsp; 
> **for all** $$e \in G.incidentEdges(v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
> **if** $$getLabel(e) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$w \leftarrow opposite(v,e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(w) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e, DISCOVERY)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$DFS(G, w)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **else**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e,BACK)$$
> **END ALGORITHM**



### Path Finding with DFS

By using an alteration of the depth first search algorithm, we can use it to find a path between two given vertices, using the **template method pattern**

> **Algorithm**
> $$pathDFS(G,v,z)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(v, VISITED)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$S.push(v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$v=z$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **return** $$S.elements()$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$e \in G.incidentEdges(v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(e) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$w \leftarrow opposite(v,e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(w) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e,DISCORVERY)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$S.push(e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$pathDFS(G,w,z)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$S.pop(e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **else**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e, BACK)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$S.pop(v)$$
> **END ALGORITHM**





### Cycle Finding with DFS

The algorithm for DFS can be adapted slightly in order to find a simply cycle back to the start node.

> **Algorithm** $$cycleDFS(G,v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(v,VISITED)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$S.push(v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$e \in G.incidentEdges(v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(e) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$w \leftarrow opposite(v,e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$S.push(e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(w)= UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$setLabel(e,DISCOVERY)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$cycleDFS(G,w)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$S.pop(e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **else**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **T** $$\leftarrow$$ new empty stack
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **repeat**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$o \leftarrow S.pop()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$T.push(o)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **until** $$o=w$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **return** $$T.elements()$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$S.pop(v)$$
> **END ALGORITHM**



# Breadth-first search

> **Algorithm** $$BFS(G)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **Input** graph $$G$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **Output** labeling of the edges and partition of the vertices of G
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$e \in G.vertices()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(u, UNEXPLORED)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$e \in G.edges()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e, UNEXPLORED)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$v \in G.vertices()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(v) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$BFS(G,v)$$
> **END ALGORITHM**



> **Algorithm** $$BFS(G, s)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$L_0 \leftarrow$$ new empty sequence
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$L_0 .addLast(s)$$ 
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(s, VISITED)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$i \leftarrow 0$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **while** $$¬L_i .isEmpty()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$L_i+1 \leftarrow$$ new empty sequence
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$v\in L_i .elements()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$e \in G.incidentEdges(v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(e) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$w \leftarrow opposite(v,e)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(w) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e) = (e, DISCOVERY)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(w,VISITED)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$L_i+1 .addLast(w)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **else**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(e,CROSS)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$i \leftarrow i + 1$$
> **END ALGORITHM**




# Directed graphs

> **Algorithm** $$FloydWarshall(G)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **Input** digraph $$G$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **Output** transitive closure $$G^*$$ of $$G$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$i \leftarrow 1$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$v \in G.vertices()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> denote $$v$$ as $$v_i$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$i \leftarrow i + 1$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$G_0 \leftarrow G$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for** $$k \leftarrow 1$$ **to** $$n$$ **do**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$G_k \leftarrow G_{k-1}$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **for** $$i\leftarrow 1$$ **to** $$n(i\neq k)$$ **do**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **for** $$j \leftarrow 1$$ **to** $$n(j\neq i, k)$$ **do**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$G_{k-1}.areAdjacent(v_i,v_k)$$  $$\&$$ $$G_{k-1}.areAdjacent(v_k,v_j)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$¬G_{k-1}.areAdjacent(v_i,v_j)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$G_k.insertDirectedEdge(v_i,v_j,k)$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **return** $$G_n$$
> **END ALGORITHM**



### Topological ordering using DFS

> **Algorithm** $$topologicalDFS(G)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **Input** dag $$G$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **Output** topotlogical ordering of G
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$n \leftarrow G.numVertices()$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$u\in G.vertices()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(,UNEXPLORED)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$v\in G.vertices()$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(v) = UNEXPLORED$$
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$topologicalDFS(G,v)$$
> **END ALGORITHM**



> **Algorithm** $$topologicalDFS(G,v)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **Input** graph $$G$$ and start a vertex $$v$$ of $$G$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **Output** labeling of the vertices of G in the connected component of $$v$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> $$setLabel(v, VISITED)$$
> &nbsp;&nbsp;&nbsp;&nbsp;
> **for all** $$e\in G.outEdges(v)$$ 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$w\in opposite(v,e)$$ // Outgoing edges
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **if** $$getLabel(w) = UNEXPLORED$$ 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$topologicalDFS(G,w)$$ // $$e$$ is a discovery edge
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> **else**
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> Label $$v$$ with topological number $$n$$ // $$e$$ is a forward or cross edge
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> $$n\leftarrow n - 1$$
> **END ALGORITHM**