---
layout: notes
title: Rational Agents
math: true
part: true
---

## Rational Agents

In a rational agent a `goal` can be specified by some performance metric.

A rational agent will choose the the actions that maximizes the expected value.

### Inputs to an agent

* **Abilities** A set of actions that the agent can perform
* **Goal** What is the agent trying to achieve
* **Prior Knowledge**  What sis the agent kno when it came into being
* **Stimuli** 
* * The current environment
* * Past experiences

### Agent System
    An agent systems is an agent in an environment

    receives **stimuli** and caries out **actions**
  
### Dimensions of an Agent
An agent can be defined in many ways or dimensions that specifies its complexity and structure.

#### Modularity
How is the agent structured
* **Flat** Agent has one level.
* **Modules** Agent has many interlinking modules.
* **Hierarchy** Agent has a hierarchy(recursive) of modules.

#### Planning horizon
How far ahead is the agent expected to plan

* **Static** World does not change.
* **Finite Stages** The agent plans a finite number of steps.
* **Indefinite** The agent plans a finite but unknown number of steps.
* **Infinite** The agent plans continuously.

#### Representation
How is the environment represented
* **Explicit states** A state is one of the ways the world can be.
* **Features or Propositions** States can be described using features.
* **Individuals and relations** Feature of relationships between sets of individuals.
#### Computational limits
How is the agent limited by computation

* **Perfect rationality** The agent can determine the best course of action.

* **Bounded rationality** The agent must make a good decision with computation and memory limitations.

#### Learning from experience
does the agent learn form experience
* **Knowledge is given** at creation.
* **Knowledge is learnt** from past experiences.

#### Sensing uncertainty
How well does the agent know its environment
* **Fully observable** The agent knows its entire environment.
* **Partially observable** There is a limited number of states, the observation is nto true to reality.

#### Effect uncertainty
Cant the result of an effect be known
* **Deterministic** The resulting state can be known form the previous state and action.
* **Stochastic** There us uncertainty about the environment after the action.

#### Preference
What is the agents desire
* **Achievement goal** The agent must reach a goal which could be the result of a complex formulae.
* **Complex preferences** The agent has a range of complex preferences that interact with one another.
* * **Ordinal** Only the order of the preferences matters.
* * **Cardinal** The value of the preferences matters.

#### Number of Agents
* **Single Agent** All other agents are part of the environment.
* **Multiple Agent** Agents will reason about the actions of other.agents

#### Interaction
How does the agent interact with the environment
* **Reason offline** reason before taking action.
* **Reason online** reason while taking action.

### Representation
To compute a problem the problem must be in a computable representation before an output can be provided

#### Requirements
An representation should be 
* Rich enough to express the knowledge needed
* As close to the problem as possible
* Amenable to efficient computation
* Able to be acquired

### Solution
#### Quality of a solution
* **Optimal Solution** The best solution possible
* **Satisfactory solution** A solution that is good enough
* **Approximate solution** A solution that is close to an optimal solution
* **Probable solution** A solution that is likely to be correct

### Decisions and Outcomes
Good decisions can have bad outcomes and Bad decisions can have good outcomes

Information can lead to better decisions.

Computation time can provide a better solution. 

An **Any time algorithm** an produce a solution at any time but given more computation time the solution gets better

A worse solution now maybe be better than an optimal solution later.

### Physical symbol Hypothesis

A symbol is a physical pattern that can be represented.

A symbol-system has the means to manipulate symbols.

**hypothesis** a Physical symbol system has the means for general intelligent action

### Knowledge and symbol levels
**Knowledge level** This is about the external world
**Symbol level** This is what the agent uses to implement the knowledge level

### Abstraction
**Low level** Easier for machines to understand
**High level** Easier for humans to understand




