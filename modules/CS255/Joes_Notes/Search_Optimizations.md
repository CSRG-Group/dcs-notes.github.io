## Cycle Checking
The search encounters a node on a path that it has already encountered (the path traversed a cycle)

### Solution
Prune the path as it is not an optimal path so does not need to be explored

### Implementation
Keeping the nodes in the path in a hash table allows for checking in constant $$O(1)$$ time.

## Multiple Path Pruning
Two paths may meet at the same note, one taking a longer path anther a shorter one.

### Solutions
* If the expanding path is shorter it can be pruned
* Otherwise if the expanding path $$<s,..n>_1$$ is shorter than the current path $$<s,..n,..m>_2$$ for subpath $$<s,..n>_2$$ then
  * Employ a strategy to prevent this from happening
  * Remove all paths from the frontier that include subpath $$<s,..n>_2$$
  * Change the initial segment of the paths on the frontier to use the shorter path. All paths containing $$<s,..n>_2$$ has the subpath replaced with $$<s,..n>_1$$

### Implementation
Maintain a set of explored set (**closed list**) of nodes.

Initially the closed list is empty

When a path is selected if the endpoint in the closed list then a conflict has emerged otherwise add the endpoint to the closed list.

### Implementation with A*
Suppose path $$p'$$ to $$n'$$ was selected but there is a lower cost path to $$n'$$ Suppose this is via point $$p$$ on the frontier.

let path $$p$$ end at node $$n$$

by A* $$p'$$ was selected before $$p$$ i.e $$f(p')<f(p)$$

$$
cost(p') + h(p') \leq cost(p)+h(p)
$$
  
The path of $$n'$$ via $$p$$ is lower cost than via $$p'$$

$$
cost(p)+ cost(n,n') \lt cost(p')
$$
  
$$
cost(n,n') \lt cost(p')- cost(p) \leq h(p) -h(p') = h(n)-h(n')
$$

we can ensure that this does not occur if 

$$
\vert h(n) - h(n') \vert \leq cost(n,n')
$$ 

The heuristic is a **monotone restriction**

## Monotone Restriction
A heuristic function satisfies the monotone restriction if $$\vert h(m) - h(n) \vert \leq cost(m,n)$$ for every arc $$<m,n>$$

If h satisfies the monotone function is is consistent meaning $$h(m) \lt cost(m,n) + h(n)$$

A* with a consistent heuristic and multiple path pruning always finds the shortest path to a goal

## Direction of a Search

A search can be thought of as symmetric

Shortest path from start to end

equals

Shortest path from end to start

**Forward branching factor** number of arcs that are leaving ths node

**Backwards branching factor** number of arcs that are entering ths node

Search complexity is b^n so use forward is forward branching factor $$\lt$$ backwards branching factor.

However when a graph is dynamically constructed the backwards graph may not be available.

## Bi-directional Search
Search backwards from the goal and the start simultaneously

This can be effective since $$2b^{k/2} \lt b^k$$

Implementation can vary however one strategy is to do a breath first stack to generate a rangd of targets then to do anther strategy like depth first to find the most optimal strategy.

## Island Driven Search

This process expands on the idea of multiple hops to many hops between islands.

Find a set of m islands between the start and end.

There are m smaller problems $$mb^k/m \lt b^k$$

There are issues to overcome:
* Identifying island can be difficult
* Hard to guarantee optimality

## Dynamic Programming

For statically stored graphs, build a table of dist(n) the actual distance form node n to a gaol

This can be build backwards from the goal:

This can be used locally to determine what to do

There are two main problems
* It requires enough space
* The dist function needs to be recomputed for each goal

## Bounded Depth-first search

A bounded depth first search takes a bound (cost or depth) and does nto exceed paths that exceed the bound
* Explores part of the search graph
* Uses space linear in the depth of the Search
  
### Iterative-deepening search
* start with a bound b=0
* Do a bounded depth-first search with bound b
* If a solution is found return that solution
* Otherwise, increment b and repeat
  
Finds the same first solution as breadth first search.

As is based on depth first uses linear space.

Iterative deepening has an overhead of $$(\frac{b}{b-1}) *$$ cost of expanding nodes at depth $$k$$.

When $$b=2$$ there is an overhead factor of $$2$$ when $$b=3$$ there is an overhead of $$1.5$$ as b gets higher, the overhead factor reduces. 

### Depth-first Branch-and-Bound

Combines depth-first search with heuristic information and finds the optimal solution.

Most useful when there are multiple solutions and we want an optimal one.

Uses the space of depth-first search.

let bound be the lowest-cost path found to a goal.

If the search encounters a path p where $$cost(p)+h(p) \geq bound$$ the path can be pruned.

If a non - pruned path to the goal is found then bound can be set to $$cost(p)$$ and p is set to the best solution. 

#### Initializing Bound
* Bound can be initialized to $$\infty$$
* Bound can be set to an estimate of the optimal path cost
* After depth-first search terminates either
  * A solution was found
  * No solution was found and no path was pruned
  * No solution was found and a Path was pruned

Can be combined with iterative deepening to increase the bound until either a solution is found or to show there is no solution