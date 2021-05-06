---
layout: 130/CS130
math: true
title: "Proof approaches - Edmund Goodman"
---

<br\>

* TOC
{:toc}

# Direct proof

To prove a claim $$P \implies Q$$:

>**Proposition**	If $$P$$, then $$Q$$.
>
>*Proof*:
>
>​		Suppose $$P$$
>
>​			...
>
>​		Therefore $$Q$$

Approaches for common questions:

- Proving about odd/even, substitute in $$x = 2y$$ or $$x = 2y+1$$
- Proving about divisibility, use the definition of divisibility, e.g. $$5|a \implies a=5b, \exists b\in \Z$$

# Cases

To prove a claim $$P \implies Q$$, split the range of $$P$$ into a number of cases (which fully cover it in combination), then prove each case is true individually to show that it is true in all possible scenarios:

>**Proposition**	If $$P$$, then $$Q$$.
>
>*Proof*:
>
>​		In case $$A$$, $$P \implies Q$$
>
>​		In case $$B$$, $$P \implies Q$$
>
>​		In case $$C$$, $$P \implies Q$$
>
>​		$$A$$, $$B$$, and $$C$$ cover all scenarios, therefore $$P \implies Q$$

Sometimes, we can write "without loss of generality" (WLOG) to prove a number of cases at once, if they are all very similar, for example, if the only change were variables being flipped.

Good cases to pick are often zero and non-zero, or positive, negative, and zero

# Contrapositive proof

To prove a claim $$P \implies Q$$, we directly prove the inverse, $$\neg Q \implies \neg P$$:

>**Proposition**	If $$\neg Q$$, then $$\neg P$$.
>
>*Proof*:
>
>​		Suppose $$\neg Q$$
>
>​			...
>
>​		Therefore $$\neg P$$

# Proof by contradiction

## Conditional

To prove a claim $$P \implies Q$$, we assume the opposite, $$P \implies \neg Q$$, then show this results in a contradiction:

>**Proposition**	If $$P$$, then $$Q$$.
>
>*Proof*:
>
>​		Suppose $$P \and \neg Q$$
>
>​			...
>
>​		Therefore contradiction ($$C \and \neg C$$), hence $$P \implies Q$$

## Non-conditional

To prove a claim $$P$$, we assume the opposite, $$\neg P$$, then show this results in a contradiction:

>**Proposition**	$$P$$.
>
>*Proof*:
>
>​		Suppose $$\neg P$$
>
>​			...
>
>​		Therefore contradiction ($$C \and \neg C$$), hence $$P$$

It is often easier to use direct or contrapositive proofs, especially since proofs by contradiction can often be simplified down into contrapositive proofs.

# Proof by induction

## Weak induction

Proving a statement is true for all values of a number

> **Proposition**	The statements $$S_1,S_2,S_3,...$$ are all true
>
> *Proof*:
>
> ​		1) Prove that $$S_1$$ (the base case) is true
>
> ​		2) Given any integer $$k \geq 1$$, prove that the statement $$S_k \implies S_{k+1}$$ is true.
>
> ​		Hence, $$S_n$$ is true for all values of $$n$$

The assumption that $$S_k$$ is true is called the inductive hypothesis

## Strong induction

**Proposition**	The statements $$S_1,S_2,S_3,...$$ are all true

*Proof*:

​		1) Prove that $$S_1$$ (the base case) is true

​		2) Given any integer $$k \geq 1$$, prove that ($$S_1 \and S_2 \and S_3 ... \and S_k \implies S_{k+1}$$)

​		Hence, $$S_n$$ is true for all values of $$n$$

This is often helpful if we need more information to prove the inductive hypothesis than just one case

## Proof by smallest counterexample

> **Proposition**	The statements $$S_1,S_2,S_3,...$$ are all true
>
> *Proof*:
>
> ​		1) Prove that $$S_1$$ is true
>
> ​		2) For the sake of contradiction, suppose that $$S_n$$ is true.
>
> ​		3) Let $$k>1$$ be the smallest integer for which $$S_k$$ is false
>
> ​		4) Then $$S_{k-1}$$ is true and $$S_k$$ is false. Use this to find a contradiction

## Multi-dimensional proof by induction

If we need to prove something holds for all cases of two variables, we can simplify the induction process

We need only prove normal induction for one variable with the other being arbitrary but fixed, and then prove induction on the other for a fixed value of the base case of the first.

# Disproof

## Non-conditional counterexamples

> **Proposition**	$$\forall x \in S, P(x)$$
>
> *Disproof*:
>
> ​		Produce an example $$x \in S$$ such that $$P(x)$$ is false

## Conditional counterexamples

> **Proposition**	$$P(x) \implies Q(x)$$
>
> *Disproof*:
>
> ​		Produce an example of $$x$$ such that $$P(x)$$ is true, and $$Q(x)$$ is false

## Disproving existence

> **Proposition**	$$\exists x \in S, P(x)$$
>
> *Disproof*:
>
> ​		Show that $$\forall x \in S, \neg P(x)$$

# Constructive and non-constructive proofs

Constructive proofs are when we "Display an explicit example that proves the theorem", whereas non-constructive proofs "Prove an example without explicitly giving it".

# The pigeonhole principle

"If $$n$$ items are put $$m$$ containers, with $$n>m$$, then at least one container must contain more than one item"

This seems simple, but can be applied to various proofs, such as proving things cannot exist because there are "collisions"

# Additional points

## Types of statements

- Theorems and propositions are statements known to be true
- Conjectures are statements whose truth value is unknown
- Lemmas are statements which are known to be true, but not "large enough" to be considered theorems, which can be used to construct other theorems
- Corollaries are statements which are known to be true, but are not "large enough" to be considered theorems, and are derived from another previous theorem

## Mathematical writing

- Start sentences with words, not mathematical symbols, and end sentences with full stops
- Separate expressions with words, so they don't merge together
- Don't use symbols in place of words in sentences
- Don't introduce unnecessary symbols, and explain clearly what new symbols mean when they are introduced
- Use first person plural (i.e. "we" and "us"), and the active voice
- Avoid using the word "it", as it can be ambiguous what is being referred to
