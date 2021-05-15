---
layout: CS126
part: true
math: true
title: "Analysis of algorithms"
---

<br/>

# Running time

To assess how good an algorithm is, we often use the metric of running time compared with the size of the input to the algorithm.

There are three types of running times which can be assessed:
- Worst case - which we focus on here, since it is both easy to analyse and useful
- Average case - which is often more difficult to assess
- Best case - often not sufficiently representative of the algorithm

## Calculation approaches

We can try to assess the running times in two main ways:

### Experimental trials

Experimental trials involve writing a program implementing the algorithm, then running for inputs of different sizes. We can then fit curves to a plot of the results to try to classify the algorithm. This has various drawbacks, including:

- Need to implement the algorithm, which might be difficult, or the reason for the analysis is to decide which one to implement
- Not all inputs can be covered, so not necessarily representative
- Dependent on machine hardware and software environments, so difficult to equate between different tests, since same specs are needed

### Theoretical analysis

Theoretical analysis is given a high-level description of the algorithm (not a full implementation), expressing the running time as a function of the input size $$n$$

- Pseudocode is used for this high-level description, which lies between English prose and program code. It has no formal syntax, and allows omission of some aspects of the implementation to make analysis easier 

This has the benefits of:

- Allowing all possible inputs to be covered
- Being independent of machine hardware and software environments, so easier to equate between different tests

## Common functions of running time

![Complexity chart](https://miro.medium.com/max/2928/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg)

[Image source](https://towardsdatascience.com/understanding-time-complexity-with-python-examples-2bda6e8158a7)





# Random Access Machine (RAM) model

To analyse programs, we use a simplified model of how computers work to help think about the time an high level operation takes to run by expressing it as fundamental operations which are equivocal to real computers

In the RAM model, we consider a computer with:
- A single CPU executing a single program
- An arbitrarily large indexable array of memory
- A set of registers memory can be copied into
- Basic arithmetic and memory allocation operations

Generally, we tend to abstract beyond this model to just consider a set of "primitive operations" which take constant time irrespective of input size in the RAM model. These tend to roughly equate to single lines of pseudocode. We can then analyse performance by counting the number of operations needed, as their number is proportional to running time

This allows us to express the running time of the program as being between the best and worst cases of number of operations needed, multiplied their running time
- Let $$T(n)$$ denote the running time, $b(n)$ the best case number of operations, $$w(n)$$ the worst case, and $$t$$ the time taken for one primitive operation
- Then, the running time is bounded as $$t \cdot b(n) \leq T(n) \leq t \cdot w(n)$$
- This metric of running time $$T(n)$$ is **not** dependent on machine hardware or software environment, instead is an intrinsic property of the algorithm



# Big-O notation

**Big-O** is a way of quantifying the running time of an algorithm, allowing easy comparison

## Definition

Big-O is formally defined as

> Given functions $$f(n)$$ and $$g(n)$$, we say that $$f(n)$$ is $$O(g(n))$$ if:
>
> $$f(n) \leq c \cdot g(n)$$ for all  $$n \geq n_0$$, with some positive constants $$c$$ and $$n_0$$



Informally, this means that means that $$f(n)$$ will be "overtaken" by $g(n)$ for all values above some threshold $$n_0$$, allowing scaling by a linear factor $$c$$. This can be phrased as "$$f(n)$$ is $$O(g(n))$$ if $$g(n)$$ grows as fast or faster than $$f(n)$$ in the limit of $$n \rightarrow \infty$$" ([source](https://math.stackexchange.com/a/620150)).

Big-O notation gives an upper bound on the growth rate of a function as its input size $$n$$ tends to infinity. Hence, $$f(n)$$ is $$O(g(n))$$ means that the growth rate of $$f(n)$$ is no greater than that of the growth rate of $$g(n)$$



Informally, the Big-O of a function is the term within a function which grows fastest. This is because that term will come to "dominate" for very large $$n$$, and we then just pick $$n_0$$ where that term is dominating, and use $$c$$ to shift the function to fit. Hence If $$f(n)$$ is a polynomial of degree $$d$$, then $$f(n)$$ is $$O(n^d)$$, as we can drop all but the fastest growing term, as it comes to dominate for large $$n$$

When writing Big-O, we:

- Try to use the smallest possible class of functions which fulfills the criteria, e.g. $$O(n)$$ not $$O(n^2)$$, whilst both technically are Big-O of linear functions
- Use the simplest expression of the class, e.g. $$O(n)$$, not $$O(5n)$$

Asymptotic algorithm analysis is a way we can take pseudocode and use it to find the Big-O of an algorithm

- We first consider the worst-case number of primitive operations that the algorithm could require to run as a function of its input size
- We then express this derived function in Big-O notation

## Example

To prove something is $$O(f(n))$$, we need to show that we can pick a $$c$$ and an $$n_0$$ which satisfy the condition. To prove something is not $$O(f(n))$$, we show that there is no $$c$$ for any arbitrarily large $$ n_0$$ which satisfies the condition.

An example of this being formally calculated, taken from *Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser, is shown below:

>  Consider the function $$2n+10$$, to show that it is $$O(n)$$, we take:
>
> ​	$2n+10 \leq c \cdot n$
>
> ​	$$(c-2) \cdot n \geq 10$$
>
> ​	$$n \geq 10/(c-2)$$
>
> Hence, picking $$c=3$$ and $$n_0 = 10$$, so the condition is satisfied

![bigOh](./images/bigOh.png)
Image source: *Data Structures and Algorithms in Java*, Goodrich, Tamassia, Goldwasser




## Relatives of Big-O

There are other "relatives" of Big-O notation

- Big-O gives the upper bound
  - $$f(n) \leq g(n)$$ in the limit of $$n \rightarrow \infty$$
- Big-$$\Omega$$ gives the lower bound
  - $$f(n) \geq g(n)$$ in the limit of $$n \rightarrow \infty$$
- Big-$$\Theta$$ gives "asymptotically tight" $$\approx$$ average
  - $$f(n) = g(n)$$ in the limit of $$n \rightarrow \infty$$



[Additional notes](https://courses.cs.washington.edu/courses/cse326/06au/lectures/lect03.pdf)
