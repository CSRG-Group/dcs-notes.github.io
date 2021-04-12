# Types of proof

[toc]

## Constructive and non-constructive proofs

Constructive proofs are when we "Display an explicit example that proves the theorem", whereas non-constructive proofs "Prove an example without explicitly giving it".

## Proving equivalence (If and only if)

> **Proposition**	$P \iff Q$
>
> *Proof*:
>
> ​		1) Prove that $P \implies Q$
>
> ​		2) Prove that $Q \implies P$

## Proofs on sets

### Proving an item is an element of a set

> **Proposition**	$a \in \{x \in S : P(x)\}$
>
> 	1. Verify that $x \in S$
> 	2. Verify that $P(a)$ is true

This is a helpful definition, as we can express the main set operations in set builder notation as follows:

- $A \times B = \{(x,y) : x \in A, y \in B\}$
- $A \cap B = \{x : x \in A \and x \in B\}$
- $A \cup B = \{x : x \in A \or x \in B\}$
- $A \setminus B = \{x : x \in A \and x \notin B\}$

And then apply the approach to the set builder notation

### Proving a set is a subset of another set

We want to prove that $a \in A \implies a \in B$ for an arbitrary $a$

> **Proposition**	$A \subseteq B$
>
> *Proof*:
>
> ​		Suppose $a \in A$, for an arbitrary $a$
>
> ​			...
>
> ​		Therefore $a \in B$
>
> ​		Hence, every element in $A$ is also in $B$, so $A$ is a subset of $B$

We can use the above strategy to prove that items are elements of sets

This can also be proved by contrapositive, by showing that every element that isn't in $B$ also isn't in $A$

### Proving two sets are equal

> **Proposition**	$A = B$
>
> *Proof*:
>
> ​		Prove that $A \subseteq B$
>
> ​		Prove that $B \subseteq A$
>
> ​		Therefore, since they are subsets of each other, $A=B$

We can use the above strategies to prove that sets are subsets of each other, which requires four separate phases, but they may be mergeable without loss of generality

### General tricks

- It is often convenient to just write out the whole expression in set builder notation, then use predicate logic from there
- We can use similar laws on sets to those for predicates and boolean algebra, including distributivity, annihilation etc, and if there is a universal set to define the not operation with, De Morgan's law etc.

## Proofs on graphs

### Proving/disproving isomorphism

- Disproof ("litmus tests" - quick things to check which indicate two graphs are not isomorphic)
  - The unordered list of the number of edges of the nodes in each graph must be equal
  - The unordered list of the shortest path lengths between all leaf nodes in each graph must be equal

- Proof
  - Bijective function between node labels which mean they can be "drawn" the same (the number of edges connecting the nodes in the domain is equal to the number of edges connecting the nodes in the range)
  - https://homepages.warwick.ac.uk/~masgar/Teach/2005_428/2005_09_08lecture_isomorphism.pdf



## Proofs on functions

### Proving whether a relation is a function

A relation is a function if every value in the domain maps to a exactly one value in the range. A relation $R_{\sim} : A \leftrightarrow B$ is a function if and only if $\forall x \in A, \exists! y \in B \quad x \sim y$.

- For small domains and ranges, we can just enumerate all the mappings
- Plotting a graph and looking for discontinuities can be a quick way to see any obvious issues
- To disprove, the easiest approach is a counterexample

### Proving function properties

https://home.cs.colorado.edu/~yuvo9296/courses/csci2824/sect19-functions-examples.html

#### Injectivity

Defined for a function $f : A \mapsto B$ as $\forall x,y \in A \quad f(x) = f(y) \implies x = y$ (When every value in the range is mapped to by exactly one value in the domain)

To prove injectivity, we take any arbitrary $x$ and $y$, assume $f(x) = f(y)$, then prove that $x=y$

> **Proposition**	$\forall x,y \in A \quad f(x) = f(y) \implies x = y$
>
> *Proof*:
>
> ​		Suppose $\exists x,y \quad f(x) = f(y)$
>
> ​			...
>
> ​		Therefore $x = y$, so $f$ is injective

Disproving injectivity is most easily proved by counterexample, finding two different values which result in the same output $\exists x,y \quad x \neq y \and f(x) = f(y)$, immediately showing $f$ is not injective.

#### Surjectivity

Defined for a function $f : A \mapsto B$ as $\forall y \in B, \exists x \in A \quad y = f(x)$ (When every value in the co-domain is mapped to by the domain, i.e. the co-domain is equal to the range)

To prove surjectivity, we fix an arbitrary output value $y$, try to find an inverse to the function $f^{-1}(y) = x$, then show that the range of the inverse is $A$, and use the function to show that $f(x) = y$$

> **Proposition**	$\forall x,y \in A \quad f(x) = f(y) \implies x = y$
>
> *Proof*:
>
> ​		Suppose $\exists x,y \quad f(x) = f(y)$
>
> ​			...
>
> ​		Therefore $x = y$, so $f$ is injective

To disprove surjectivity, we show that some element in the output set $B$ cannot be mapped to by any input to the function $f$

### Finding inverses

- Only bijective functions have inverses
- Generally, take the function definition $y = f(x)$, and manipulate it to express $x$ in terms of $y$, leaving $x = f^{-1}(y)$
- You can verify the inverse is correct by checking that $f \circ f^{-1} (x) = x$
