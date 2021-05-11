--- 
layout: CS126
part: true
math: true
title: "Graph Related Pseudocode"
---


# Depth First Search (DFS)
## DFS for a particular node: <br>

The following algorithm is pseudocode for Depth First Search - as displayed by the CS126 lectures

**Algorithm** $DFS(G, v)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp; **Input**  graph $G$ and start at vertex $v$ of $G$<br>
&nbsp;&nbsp;&nbsp;&nbsp; **Output** labeling of the edges of $G$ in the connected component of v as discovery edges and back edges 
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp; 
$setLabel(v, VISITED)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp; 
**for all** $e \in G.incidentEdges(v)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
**if** $getLabel(e) = UNEXPLORED$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$w \leftarrow opposite(v,e)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**if** $getLabel(w) = UNEXPLORED$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$setLabel(e, DISCOVERY)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$DFS(G, w)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**else** <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$setLabel(e,BACK)$ <br>
<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- **end if** <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**end if** <br>
&nbsp;&nbsp;&nbsp;&nbsp;
**end for**<br> -->

**END ALGORITHM**

<br>
<br><br>

## DFS for an entire graph: 
The following algorithm is pseudocode for Depth First Search - as displayed by the CS126 lectures, which is used to perform depth first search on the entire graph.
  
**Algorithm** $DFS(G)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp; **Input**  graph $G$ <br>
&nbsp;&nbsp;&nbsp;&nbsp; **Output** labelling of the edges of $G$ as discovery and back edges
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp; **for all** $u \in G.vertices()$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **$setLabel(u, UNEXPLORED)$** <br>
<!-- &nbsp;&nbsp;&nbsp;&nbsp;
**end for**<br> -->
&nbsp;&nbsp;&nbsp;&nbsp; **for all** $e \in G.edges()$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **$setLabel(e, UNEXPLORED)$** <br>
<!-- &nbsp;&nbsp;&nbsp;&nbsp;
**end for**<br> -->
&nbsp;&nbsp;&nbsp;&nbsp; **for all** $u \in G.vertices()$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **if $getLabel(u, UNEXPLORED)$** <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $DFS(G, v)$ <br>
<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**end if** <br>
&nbsp;&nbsp;&nbsp;&nbsp;
**end for**<br>
<br><br> -->
**END ALGORITHM**
<br>

**Algorithm** $DFS(G, v)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp; **Input**  graph $G$ and start at vertex $v$ of $G$<br>
&nbsp;&nbsp;&nbsp;&nbsp; **Output** labeling of the edges of $G$ in the connected component of v as discovery edges and back edges 
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp; 
$setLabel(v, VISITED)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp; 
**for all** $e \in G.incidentEdges(v)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
**if** $getLabel(e) = UNEXPLORED$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$w \leftarrow opposite(v,e)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**if** $getLabel(w) = UNEXPLORED$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$setLabel(e, DISCOVERY)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$DFS(G, w)$ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**else** <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
$setLabel(e,BACK)$ <br>
<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**end if** <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**end if** <br>
&nbsp;&nbsp;&nbsp;&nbsp;
**end for**<br> -->
**END ALGORITHM**
<br><br><br>

## Path Finding with DFS
By using an alteration of the depth first search algorithm, we can use it to find a path between two given vertices, using the **template method pattern**


**Algorithm** 

<br><br><br>
## Cycle Finding with DFS

<br><br><br>
# Breadth First Search (BFS) Pseudocode

