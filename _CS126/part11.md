---
layout: CS126
part: true
math: true
title: "Graphs"
pre: part10
nex: part12
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

    ![edgeListGraph](C:\Users\egood\Desktop\dcs-notes.github.io\cs126\images\edgeListGraph.png)

  - Adjacency list

    - Array containing a all of the nodes, each of which have a pointer to a list of the other nodes they connect to

    ![adjacencyListGraph](C:\Users\egood\Desktop\dcs-notes.github.io\cs126\images\adjacencyListGraph.png)

  - Adjacency matrix

    - 2D array acts a lookup table for whether vertices have an edge connecting them
    - Square matrix, with each dimension being the number of vertices in the graph
    - Undirected graphs are symmetrical along the leading diagonal

    ![adjacencyMatrixGraph](C:\Users\egood\Desktop\dcs-notes.github.io\cs126\images\adjacencyMatrixGraph.png)





# Depth-first search



# Breadth-first search



# Directed graphs