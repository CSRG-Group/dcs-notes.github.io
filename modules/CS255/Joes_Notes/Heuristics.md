---
layout: notes
title: Heuristics
math: true
part: true
---


The choice of a heuristic to choose can have a large impact in the efficiency and running time of the search.

## Characterizing Heuristics

>Def: If an A* tree-search expands N nodes and solution depth is d, then the **effective branching factor** b*, is the branching factor a uniform tree of depth d would have to contain N nodes.

$$
N = 1 + b* + (b*)^2 + .. + (b*)^d 
$$

It is desirable to obtain a branching factor as close to one as possible, a smaller branching factor allows a larger problem to be solved.

We can estimate b* experimentally and it is usually consistent when performed over multiple runs.

If the branching factor of one heuristic is smaller then it should be used.

More specifically if 

$$
h_1(n) \geq h_2(n) \forall n
$$

then $$h_1$$ **dominates** $$h_2$$

A* expands all nodes with $$f(n) <f*$$ where $$f*$$ is the cost of the optimal path.
All nodes with $$h(n)\lt f*=g(n)$$  expanded

An admissable heuristic with higher values is better.

The computation for the heuristic should be taken into account as well.

## Deriving heuristics
### Relaxed problems
Admissible heuristics can be derived from a relaxed problem.

A relaxed problem is obtained by reducing the restrictions on operations.

e.g
* Get from the start node to the end node by traversing the graph
* Get from the start node to the end node

If there are several heuristics and none dominate then the maximum heuristic from the set may be chosen for any given value of $$n$$, more formally:

$$
h(n) = max(h_1(n) , h_2(n) ...)
$$

### Pattern Databases
Store exact solution costs for each possible sub problem instance.

Heuristic $$h_{DB}$$ = cost of solution ot corresponding subproblem.

Construct database by searching backwards from goal.

### Other approaches

* Statistical approaches
  * Gather probable heuristics from training problems
  * e.g if $$95%$$ of all cases $$cost(n,goal)$$ is 20 then $$n(n)=20$$
  * Not admissable but still likely to expand less 
* Select Features of a state to contribute to the heuristic
  * e.g For Chess number/ type of pieces left
  * Can use learning to determine weighting