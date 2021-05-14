---
layout: CS131
part: true
title: Number systems
---

# Number systems

## Integers

[Notes #1](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note1.pdf)

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

The **Euclidean algorithm** makes use of repeated division to calculate the greatest common divisor of two integers. It can be expressed in two ways

Let $$r_0$$ and $$r_1$$ be integers, with $$0 < r_1 < r_0$$

1. > For each $$i$$
   >
   > ​		Let $$r_{i+1}$$ be the remainder of $$r_{i-1}$$ when divided by $$r_i$$
   >
   > ​		If $$r_{i+1}$$ is zero, then $$r_i$$ is the greatest common divisor of $$r_0$$ and $$r_1$$

2. > We can write the relation $$r_{i-1} = q_i \cdot r_i + r_{i+1}, (1 \leq i \leq N)$$ to write the last non-zero remainder, which is the greatest common factor, in terms of $$r_0$$ and $$r_1$$
   >
   > ​		$$gcd(r_1, r_0) = x \cdot r_1 + y \cdot r_0$$ for some integers $$x$$ and $$y$$

### Modular arithmetic

Let $$n$$ be an integer greater than $$1$$. We say that two integers $$a$$ and $$b$$ are congruent modulo $$n$$ and write $$a\equiv b\ mod\ n$$ or $$a \cdot n≡b$$, if $$a−b$$ is an integer multiple of $$n$$, i.e. $$a=b+kn$$ where $$k$$ is an integer.

*Add properties of modular arithmetic - possibly copy from 140*

## Real numbers

[Notes #2](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note2.pdf)

- Axioms of the real number system
- Intervals meaning
- Modulus
- Upper/lower bounds, infimum, supremum
- Completeness axiom

## Complex numbers

[Notes #3](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note3.pdf)

- Complex conjugation
- Modulus (length) properties
- De Moivre's
- Fundamental theorem of algebra
- Discrimants

