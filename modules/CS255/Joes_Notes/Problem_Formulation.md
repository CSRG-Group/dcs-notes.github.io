
## Problem formulation
Given a specification of a solution, not an algorithm to follow

Agent has a a starting state and wants to get to the goal state

Many problems can ba abstracted into the problem of finding a path in a directed graph.

### Problem solving steps
* **Goal Formulation** Identify a desirable solution
* **Problem formulation** - identify the problem
* **Search** find the sequence of actions
* **Execution** Perform the actions

### types of Environment
* **Deterministic, Fully observable** 
   * The agent knows everything about the current state
   * The agent knows what state the environment will be in after any action
* **Deterministic, Partially observable** 
   * The agent has limited access to the current state
   * The agent can determine a set of states from a given action
   * Instead of actions on a single state the agent must manipulate sets fo states
* **Stochastic, partially Observable**
  * The agent has limited access to state
  * The agent does not know the effect of any action
  * Must use sensors to determine an effect
  * Search and executions are interwoven
* **Unknown state space**
  * Knowledge is learned
  * (not a priority in the module)
  
### State Space Problem
* Has a set of states $$S$$
* **Start states** A Subset of states where the agent can start
* **action function** Given a state and an action returns the new state
* **goal states** A subset of states that the agent targets
* A criterion that specifies the quality fo a solution

### Abstraction
The real world is complex and so abstraction is uses

**Abstract states** are a subset of real states

**Abstract operations** are a combination of real actions

**Abstract Solution** A set of paths between states that are applicable to the real world

### State space graph
A state space problem can be represented using a stat space graph

A state space graph consists of a set $$S$$ of $$N$$ nodes and a set of orders pairs $$A$$ representing arcs or edges

if $$<S_i,S_j> \in S$$ then $$S_i$$ is a neighbor to $$S_j$$ 

A path is a sequence of nodes $$<n_1,n_2,n_3....n_i>$$ such that $$<n_{i-1},n_i> \in S$$ 

Given a set of start and and nodes a solution is a path from a start node to an end node.

To solve these problems the ability to navigate a tree or graph is very useful.