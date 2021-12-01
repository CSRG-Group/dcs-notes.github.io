---
layout: noteshome
title: Definitions Crib Sheet
description: Crib sheet of helpful things for the algorithms class test
math: true
---

## Definitions

- Partition of a graph $$G=(V,E)$$
- Cut of a graph $$G=(V,E)$$
  - A partition of the nodes of the graph into two non-empty subsets  $$S$$ and $$V \setminus S$
- Cutset of a graph $$G=(V,E)$$
  - The cutset of a cut $$S$$ is the set of edges with exactly one endpoint in $$S$
- Spanning tree of a graph $$G=(V,E)$$
  - A fully connected acyclic subgraph of $$G$$
  - Connected and $$\vert E \vert  = \vert V \vert - 1$$
  - Acyclic and $$\vert E\vert  = \vert V\vert - 1$$
  - Minimally connected subgraph of $$G$$ (removing any edge makes it disconnected)
  - Maximally acyclic subgraph of $$G$$ (adding any edge makes it cyclic)
  - Cayley's Theorem states there are $$n^{n-2}$$ spanning trees of any graph, so not brute forcable
- Minimum spanning tree of a graph $$G=(V,E)$
  - The spanning tree of $$G$$ with the minimum total cost of weights on edges included



## Problems and their algorithms

- Interval scheduling
  - Given a  set of jobs with start and finish time.<br>
    Select the largest number of jobs that dProblem definition
- Interval partitioning
  - Problem definition
  - Earliest start time first greedy
    - &nbsp;$$O(n)$$Problem definition
    - &nbsp;$$O(n)$$
- Shortest path in graph of non-negative edges
  - Problem definition
  - Djikstra's algorithm (greedy on first node discovered?)
    - Array implementation $$\Theta(n^2)$$, Binary heap implementation $$O(m \ log\ n)$$
- Minimum spanning trees
  - Problem definition
  - Proposed greedy algorithmProblem definition
  - Merge sort (divide and conquer)
    - &nbsp;$$O(n\ log\ n)$$
- Closest pair of points
  - Problem definition
  - Divide and conquer algorithm
    - &nbsp;$$O(n\ log\ n)$$
- Integer multiplicationProblem definition)
    - &nbsp;$$\Theta(n^{log_2\ 3})$$
- Weighted interval scheduling problem
  - Problem definition
  - Dynamic programming solution
    - &nbsp;$$O(n\ log\ n)$$Problem definition
- Integer Knapsack problem
  - Problem definition
  - Dynamic programming solution
    - &nbsp;$$\Theta(nW)$$
- Sequence alignment problem
  - Problem definition
  - Dynamic programming solution
    - &nbsp;$$\Theta(nm)$$
- Shortest path in graph including negative edges
  - Problem definition
  - Bellman-ford algorithm (dynamic programming solution)
    - &nbsp;$$\Theta(mn)$$


### List of NP-Complete problems

- Independent set problem
  - Problem definition
  - No tractable algorithm known to solve it
    - NP-Complete problem
- Vertex cover problem
  - Problem definition
  - No tractable algorithm known to solve it
    - NP-Complete problem
- Set cover problem
  - Problem definition
  - No tractable algorithm known to solve it
    - NP-Complete problem
- Satisfiability (SAT) problem
  - Problem definition
  - No tractable algorithm known to solve it
    - NP-Complete problem
- 3-SAT problem
  - Problem definition
  - No tractable algorithm known to solve it
    - NP-Complete problem
- Subset sum problem
  - Problem definition
  - No tractable algorithm known to solve it
    - NP-Complete problem
