---
layout: notes
title: Informed Search
math: true
part: true
---

Using information about the goal to inform our path choice.

## Heuristic
Extra information used to guide the path is called a heuristic

The **heuristic** $$h(n)$$ is th estimated minimum cost to get form a node to the goal node

Calculating $$h(n)$$ needs to be done efficiently

A $$h(n)$$ function is an underestimate if there is no path from the node $$n$$ to the goal with cost strictly less than $$h(n)$$

A heuristic is **admissible** if it is both:
* A non-negative function
* An underestimate of the actual cost

## Best First Search
We can use the heuristic to determine the order fo the stack representing the frontier.

Select the path that is closest to the goal node, according to the heuristic function.

Greedy best-first search selects a path on the frontier with the lowest heuristic value.

A priority queue is used as the frontier.

This algorithm can get stuck in loops.

### Complexity
Space: $$b^n$$ where b is the branching factor and n is the path length

Time: $$b^n$$

Not guaranteed to find a solution

It does nto always find te shortest path

## A* Search

A* search uses a combination os path cost and heuristic value to guess the length of a path too the goal if a particular node is chosen.

$$
f(p) = {cost}(p) + h(p)
$$

The frontier is a priority queue sorted by the $$f(p)$$ function

The node on the frontier with the lowest estimated cost from the start to the goal via such node is chosen.

A* search is admissable if:
* The branching factor is finite
* Arc costs are bounded above Zero
* the function $$h(n)$$ is non-negative and is an underestimate fo the shortest path of n to the goal node

### Proof
It can be shown that the A* algorithm is admissable.

Let $$P$$ be a path selected from the frontier to the goal node.

Suppose path $$P'$$ is on the frontier, because $$P$$ was selected before $$P'$$ and $$h(p) =0 $$
$$
cost(P) \leq cost(P') + h(P')
$$

Because h is an underestimate
$$
cost(P') + h(P') \leq cost(P'')
$$
For any path $$P''$$ that extends $$P'$$
So $$cost(P) \leq cost(P'')$$ for any path $$P''$$ to a goal

### Solution
>Theorem: A* will always find a solution fi there is one

The frontier always contains the initial part of a path to a goal

As A* runs the costs of the paths keeps increasing and will eventually exceed any finite number.

Admissability does nto guarantee that every node selected from the frontier is on an optimal path but that the first solution found wil be optimal even with graphs with cycles.

### Heuristics
The performance of the A* algorithm depends on the performance of the heuristic, given a path $$P$$ and a heuristic function $$h$$ and $$c$$ is the cost of the optimal solution the heuristic can fall into 3 categories.

$$
cost(p) + h(p) \lt c
$$(1)
$$
cost(p) + h(p) = c
$$(2)
$$
cost(p) + h(p) \gt c
$$(3)

A* expands all paths in the set $$\{cost(p) + h(p) \lt c\}$$

A* expands some paths in the set $$\{cost(p) + h(p) = c\}$$

Increasing the heuristic while keeping it admissable reduces the size of the sets. 

### Complexity
time: exponential in relative error of $$h*$$ Length of solution

space: Exponential keeps all nodes in memory

## Comparison
|Strategy|Frontier Selection|Complete|Halts| Space |
|-|-|-|-|-|
|Breadth-first| First node added| Yes | No | Exp|
| Depth-first | Last node added | No | No | Linear|
| Heuristic-depth-first | local min $$h(p)$$| No | No | Linear|
| Best-first | Global min $$h(p)$$| No | No | Linear|
| Lowest cost first| minimal cost | Yes | No | Exp|
| A*| minimal $$f(p)$$ | Yes | No | Exp|

* complete- Guaranteed to fins a solution if one exists.
* Halts - on a finite graph (maybe with cycles).
* Space as a function of the length of the current path.