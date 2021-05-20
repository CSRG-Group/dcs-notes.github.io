---
layout: CS131
part: true
title: Sequences and Series

---



# Sequences and Series

## [Sequences](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note15.pdf)

A sequence $$a_n$$ is an infinite list of numbers $$a_0, a_1, ...$$

Types of sequences:

- Bounded: $$L < a_n < U, \forall n$$ (where $$L$$ and $$U$$ are the upper and lower limits respectively)
- Increasing: $$a_n < a_{n+1}, \forall n$$
- Decreasing: $$a_n > a_{n+1}, \forall n$$

### Limits

A sequence $$a_n$$ is said to converge to a limit $$l \in \mathbb{R}$$ if for every $$\epsilon > 0$$ there is an integer $$N$$ (dependent on $$\epsilon$$) with $$\|a_n - l\| < \epsilon$$ for all $$n > N$$

- Intuitively, this means that it converges to a value if every item after the current one is "closer" to that value than the current one

### Convergent sequences

The combination rules of limits of convergent sequences are as expected, summing, multiplying etc. as with normal numbers

#### Properties

1. Every convergent sequence has a unique (single) limit
2. If $$a_n$$ converges to $$l$$, then so does every subsequence of it
3. If $$a_n$$ converges to $$l$$, the $$\|a_n\|$$ converges to $$\|l\|$$
4. The **squeeze rule**
   If $$a_n$$ converges to $$l$$, $$b_n$$ converges to $$l$$, and $$a_n \leq c_n \leq b_n, \forall n$$, then $$c_n$$ converges to $$l$$
5. A convergent sequence is bounded, if $$B>0$$ with $$-B \leq a_n \leq B, \forall n$$
6. Any increasing bounded above sequence converges
7. Any decreasing bounded below sequence converges

### Divergent sequences

Don't converge to a value

### Big-O

See the [CS126 notes on this topic](../CS126/part2) for a more comprehensive guide

## [Recurrences](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note16.pdf)

Recurrences are sequences expressed in terms of their previous terms

### Linear recurrences

#### Homogeneous recurrences

Consider the recurrence
$$
x_n + a x_{n-1} + b x_{n-2} = 0
$$
We then form an auxiliary equation from this
$$
\lambda^2 + a \lambda + b
$$
And solve for the roots $$\lambda_1$$ and $$\lambda_1$$. Then:

- If $$\lambda_1 \neq \lambda_2$$, the general solution is $$A (\lambda_1)^n + B (\lambda_1)^n$$
- If $$\lambda_1 = \lambda_2$$, the general solution is $$A (\lambda_1)^n + Bn (\lambda_1)^n$$

With $$A$$ and $$B$$ being unknown constants

#### Non-homogeneous recurrences

Consider the recurrence:
$$
x_n + a x_{n-1} + b x_{n-2} = f(n)
$$
First, we let $$f(n)=0$$, and solve the recurrence using the technique for homogeneous recurrences shown above. Let this general solution be denoted as $$h_n$$

Then, we also need to find *any* particular solution for the original recurrence. This will normally be a polynomial - and if one substitution doesn't work, we can try one of a higher order

- For example, try substituting $$x_n = Cn + D$$ (and hence $$x_{n-1} = C(n-1) + D$$ and so on), which we call $$p_n$$, and solve for $$C$$ and $$D$$

Then, the general solution to the recurrence is $$x_n = h_n + p_n$$

## Series  ([Notes #1](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note17_part1.pdf), [Notes #2](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note17_part2.pdf))

A series $$\sum a_n$$ is a pair of sequences, composed from

1. A sequence of terms, $$a_n$$

2. A sequence of partial sums $$s_n$$ defined as:
   $$
   s_n = a_0 + a_1 + ... + a_n
   $$

If the sequence $$s_n$$ converges, we say that  $$\sum a_n$$ converges to the sum $$s$$, and can write:
$$
\sum_{n=0}^{\infin} a_n = s
$$

### Geometric series

A series of the form $$\sum r^n$$

It converges for:
$$
\sum_{n=0}^{\infin} r^n = \frac{1}{1-r}, \quad \|r\| < 1
$$
And diverges for $$\|r\| \geq 1$$

#### The harmonic series

The harmonic series $$\sum_{n=1}^{\infin} \frac{1}{n}$$ diverges

### Properties of Convergent series

1. **Sum rule**: $$\sum a_n + \sum b_n = \sum (a_n + b_n)$$
2. **Multiple rule**: $$\sum \lambda a_n = \lambda \cdot \sum a_n$$
3. If the series $$\sum a_n$$ converges, then the sequence $$a_n$$ also converges to $$0$$
4. If the series $$\sum \|a_n\|$$ converges, then the   series $$\sum a_n$$ also converges

### The comparison test

Suppose that $$0 \leq a_n \leq b_n, \forall n$$

1. If $$\sum b_n$$ converges, then so does $$\sum a_n$$
2. If $$\sum a_n$$ diverges, then so does $$\sum b_n$$

### The ratio test

If $$\|\frac{a_{n+1}}{a_n}\| \rightarrow L$$ then

1. If $$0 \leq L < 1$$ then the series $$\sum a_n$$ converges
2. If $$L > 1$$ then the series $$\sum a_n$$ diverges
3. If $$L=1$$, the test is inconclusive

### Examples of series

*Pull request if you want to complete this*

### Radius of convergence

Intuitively the range of values for which the sequence converges

### Properties of power series

*Pull request if you want to complete this*

### Binomial theorem

*Pull request if you want to complete this*



### [Decimal numbers as a geometric series](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note18.pdf)

*Pull request if you want to complete this*

### Partial fractions (optional)

*Pull request if you want to complete this*
