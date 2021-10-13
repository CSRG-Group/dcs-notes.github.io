---
layout: notes
title: Uninformed Search
math: true
part: true
---


Getting from a to b on a simple directed graph with no prior knowledge

following an informed search through a graph can simulate th exploration fo the state space
## Tree Search


### Algorithm
The exploration of an uninformed tree search tends follows the following algorithm.

```Java
node <- Root or starting node
goal <- a target goal
frontier <- some data store


frontier.add(node)
while (items in frontier){
    current= frontier.RemoveTop()
    if (current==goal){
        return current
    }
    for (neighbor of current){
        frontier.push(neighbor)
    }
}
return none <- no solutions found
```

* **node** An element in a graph, continuing a parent and actions needed to reach its children
* **frontier** the nodes currently explored the type of data structure depends on the algorithm


## Graph Search

With tree search state space with loops give rises to repeated states that cause inefficiencies.

Graph search is a practical way of exploring a state space that can account to such repetitions.

Rather than holding nodes in the frontier a graph search instead holds the path of nodes needed to reach the current point in the frontier.

```Java
node <- Root or starting node
goal <- a target goal
frontier <- some data store


frontier.add([node])
while (items in frontier){
    current= frontier.RemoveTop()
    if (current[last]==goal){
        return current
    }
    for (neighbor of current[last]){
        current.add(neighbor)
        frontier.push(current)
    }
}
return none <- no solutions found
```
## Analysis

An algorithm can be judged by different metrics

* **Completeness** can the solution be found
* **optimality** does the solution find the solution with the least cost
* **Complexity**
   * Judged by several factors
     * **b** Maximum branch factor 
     * **d** Depth of least cost
     * **m** maximum depth can be infinite
   * **time complexity** how does the time taken scale
   * **space complexity** how many nodes in memory

## Breath first
A **queue** is used for the frontier data store

Prioritizes expanding horizontally over expanding vertically

#### Complexity
* **completeness** will always find a solution if b is finite

* **time** $$1 + b + b^2 +b^3 +...+ b^d = O(b^d) $$
* **space** $$1 + b + b^2 +b^3 +...+ b^d = O(b^d) $$

* **Optimal** Yes if cost is a function of depth, not optimal in general

Space complexity is the biggest issue with this type of search

## Depth first
A **stack** is used for the frontier data store
Prioritizes expanding vertically over expanding horizontally

#### Complexity
* **completeness** Fails with infinite depth or loops
  * can be modified to avoid loops

* **time** $$1 + b + b^2 +b^3 +...+ b^d = O(b^d) $$
* **space** $$1 + b + b^2 +b^3 +...+ b^d = O(bm) $$

* **Optimal** No

Not optimal but cuts down on space complexity a lot

## Lowest Cost First
A **priority queue** is used for the frontier data store where the key is the cost of the path.

The **cost** of a path is the current is the sum of the cost of each of it's arcs.

The path of least cost is chosen first from the frontier to expand.

When arc costs are equal simply produces a breath first search.

## Comparison
|Strategy|Frontier Selection|Complete|Halts| Space |
|-|-|-|-|-|
|Breadth-first| First node added| Yes | No | Exp|
| Depth-first | Last node added | No | No | Linear|
| Lowest cost first| minimal cost | Yes | No | Exp|

* complete- Guaranteed to fins a solution if one exists.
* Halts - on a finite graph (maybe with cycles).
* Space as a function of the length of the current path.