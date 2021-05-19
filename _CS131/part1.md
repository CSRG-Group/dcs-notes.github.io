---
layout: CS131
part: true
title: Number systems
---

# Number systems

## [Integers](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note1.pdf)

### Base conversion algorithms

To convert between two arbitrary bases, with the target base being $$b > 1, b \in \mathbb{Z}$$, and the number to convert $$x$$

> Repeatedly divide $$x$$ by $$b$$, converting the remainders $$r_1, r_2, ..., r_n$$ to digits in base $$b$$
>
> The base $$b$$ representation is then $$r_n\ r_{n-1}\ ...\ r_2\ r_1$$

### The division algorithm

> If $$a, b \in \mathbb{Z}$$ with $$b \neq 0$$, then there are unique numbers $$q, r \in \mathbb{Z}$$ such that:
>
> ​		$$a = qb + r$$, and $$0 \leq r\leq |b|$$
>
> Where $$q$$ is called the quotient, and $$r$$ the remainder

### The Euclidean algorithm

The **Euclidean algorithm** makes use of repeated division to calculate the greatest common divisor of two integers:

We can write it in a number of mathematical ways. Let $$r_0$$ and $$r_1$$ be integers, with $$0 < r_1 < r_0$$:

1. >  For each $$i$$
   >
   > Let $$r_{i+1}$$ be the remainder of $$r_{i-1}$$ when divided by $$r_i$$
   >
   > If $$r_{i+1}$$ is zero, then $$r_i$$ is the greatest common divisor of $$r_0$$ and $$r_1$$

2. >  We can write the relation $$r_{i-1} = q_i \cdot r_i + r_{i+1}, (1 \leq i \leq N)$$ to write the last non-zero remainder, which is the greatest common factor, in terms of $$r_0$$ and $$r_1$$
   >
   > $$gcd(r_1, r_0) = x \cdot r_1 + y \cdot r_0$$ for some integers $$x$$ and $$y$$

Or as pseudocode:

```
Let a <- the larger number to find the gcd of (r_0 above)
Let b <- the smaller number to find the gcd of (r_1 above)
Repeat
	Let r <- the remainder of a divided by b
	Let a <- b
	Let b <- r
Until r = 0
Report the new value of b as the greatest common divisor
```

[Additional source](https://sites.math.rutgers.edu/~greenfie/gs2004/euclid.html)

#### Bézout's identity

> Let $$a$$ and $$b$$ be numbers with a greatest common divisor $$d$$
>
> There exist two integers $$x$$ and $$y$$ such that $$a \cdot x + b \cdot y = d$$
>
> More generally, the integers of the form $$a \cdot x + b \cdot y$$ are exactly multiples of $$d$$

### Modular arithmetic

Let $$n$$ be an integer greater than $$1$$. We say that two integers $$a$$ and $$b$$ are congruent modulo $$n$$ and write $$a\equiv b\ mod\ n$$ or $$a \cdot n≡b$$, if $$a−b$$ is an integer multiple of $$n$$, i.e. $$a=b+kn$$ where $$k$$ is an integer.

*Add properties of modular arithmetic - possibly copy from 140*

## [Real numbers](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note2.pdf)

### Axioms of the real number system

| Property                                            | Definition                                                   |
| --------------------------------------------------- | ------------------------------------------------------------ |
| Commutativity                                       | $$x+y=y+x$$ and $$x \cdot y = y \cdot x$$                    |
| Associativity                                       | $$x+(y+z) = (x+y)+z$$ and $$x+(y+z) = (x \cdot y) \cdot z$$  |
| Distributivity of $\cdot$ over $$+$$                | $$x \cdot (y+z) = x \cdot y + x \cdot z$$                    |
| Existence of the additive identity                  | $$\exists 0 \in \mathbb{R}, x + 0 = x$$                      |
| Existence of the multiplicative identity            | $$\exists 1 \in \mathbb{R}, x \cdot 1 = x$$                  |
| Additive and multiplicative identities are distinct | $$1 \neq 0$$                                                 |
| Every element has an additive inverse               | $$\exists (-x) \in \mathbb{R}, x + (-x) = 0$$                |
| Every non-zero element has a multiplicative inverse | If $$x \neq 0$$, then $$\exists x^{-1} \in \mathbb{R}, x \cdot x^{-1} = 1$$ |
| Transitivity of ordering                            | If $$x<y$$ and $$y<z$$, then $$x<z$$                         |
| The trichotomy law                                  | Exactly one of the following is true: $x<y$, $x=y$, $x>y$    |
| Preservation of ordering under addition             | If $$x<y$$, then $$x+z < y+z$$                               |
| Preservation of ordering under multiplication       | If $$z > 0$$ and $$x<y$$, then $x \cdot z < y \cdot z$       |
| Completeness                                        | Every non-empty subset of $$\mathbb{R}$$ that is bounded above has a least upper bound |

### Intervals meaning

- '' $$[$$ '' means that the number it is adjacent to is included in the interval
- " $$)$$ " means that the number it is adjacent to is excluded from the interval

For example, $$[a,b) = \{x\ |\ a < x < b\}$$

### Roots

Definition and properties

- $$x^2 = a \Longleftrightarrow \pm \sqrt{a}$$
  - $$x^{2n} = a \Longleftrightarrow \pm \sqrt[2n]{a}$$
  - $$x^{2n+1} = a \Longleftrightarrow \sqrt[2n+1]{a}$$

- $$a < b \Longleftrightarrow a^{\frac{1}{n}} < b^{\frac{1}{n}}$$

### Modulus

If $$x \geq 0$$, then $$\|x\| = x$$, else $$\|x\| = -x$$

- Hence, $$\|x\| \geq 0, \forall x$$

Properties

### Upper/lower bounds, infimum, supremum

Let $$S$$ be a set of real numbers

- A real number $$u$$ is called an *upper bound* of $$S$$ if $$x \leq u, \forall x \in S$$
- A real number $$l$$ is called a *lower bound* of $$S$$ if $$l \leq x, \forall x \in S$$
- A real number $$U$$ is called the *least upper bound (supremum)* of $$S$$ if it is an upper bound of $$S$$, and $$U \leq u$$ for every upper bound $$u$$ of $$S$$
- A real number $$L$$ is called the *greatest lower bound (infimum)* of $$S$$ if it is an upper bound of $$S$$, and $$l \leq L$$ for every lower bound $$l$$ of $$S$$

### Completeness axiom

The *infimum* and *supremum* do not necessarily exist, however, the completeness axiom states:

> Every non-empty set of real numbers which has an upper bound has a least upper bound.
>
> From this we can show also that every non-empty set of real numbers which has a lower bound has a greatest lower bound

This has the consequences:

- **The Archimedean property of $$\mathbb{R}$$**:
  If $$\epsilon > 0 \in \mathbb{R}$$ , then $$\exists n>0 \in \mathbb{R}$$ with $n \cdot \epsilon > 1$
- Between two distinct real numbers, there are always both rational and irrational numbers
- Every real number can be expressed as a (possibly infinite) decimal expansion

## [Complex numbers](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note3.pdf)

- Complex conjugation
- Modulus (length) properties
- De Moivre's
- Fundamental theorem of algebra
- Discrimants
