---
layout: notes
part: true
math: true
title: "Number Systems"
---

## Integers

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note1.pdf)

Integers, denoted $$\mathbb{Z}$$. We use a denary/decimal (base-10) system
with 10 digits, but there is also binary, which uses 2 digits.

Subscripts are used to denote base;
$$10011_{\textrm{two}} = 19_{\textrm{ten}}$$ or $$10011_{2} = 19_{10}$$.

### Decimal to Binary Conversion Algorithm

Divide decimal number repeatedly
by 2 to get remainders $$r_0, r_1, r_2,...r_n$$. The binary representation
is $$r_{n}r_{n-1}...r_{1}r_0$$ (note the switched order).

#### Problems

1. Convert $$244_{10}$$ to binary.
2. The *hexadecimal* system is base 16, with digits
   0123456789ABCDEF. Convert $$21BAD_{16}$$ to decimal.

### Generic Base Conversion Algorithm

Let us have an integer $$b$$. To
convert a base 10 integer to a base $$b$$ integer, divide repeatedly by
$$b$$ to get remainders $$r_0, r_1,...,r_n$$, thus the base $$b$$
representation would be $$r_{n},r_{n-1},...,r_{1},r_0$$ (note the switched
order).

### Division Algorithm

If $$a, b \in \mathbb{Z}$$ with $$b \neq 0$$, then
there exist unique $$q, r \in \mathbb{Z}$$ with 

$$\begin{align}  & a = qb +
r,  & 0 \leq r < \|b\| \end{align}$$

 Where $$q$$ is the **quotient** and
$$r$$ the **remainder**.

If $$0 < b < a$$ then an algorithm to compute $$q, r$$ would be to
iteratively compute $$a - b, a - 2b, ..., a-nb, a - (n-1)b$$ where
$$a - (n-1)b < 0$$ is the first strictly negative number. Then
$$q = n, r = a-nb$$.

If $$a = qb$$ (all integers) then $$b$$ *divides* $$a$$. The greatest common
denominator is denoted $$\gcd(a, b)$$.

$$\gcd(0, n) = n \; \forall n \in \mathbb{Z}^+$$

### Euclidean algorithm

Let $$r_1, r_0$$ be integers s.t.
$$0 < r_1 < r_0$$.

1.  For each $$i$$, define $$r_{i+1}$$ as the remainder of
    $$\frac{r_{i-1}}{r_i}$$.\
    The **last** non-zero remainder $$r_N = \gcd(r_1, r_0)$$.
2.  $$r_{i-1} = q_i r_i + r_{i+1} \; (1 \leq 1 \leq N$$ can be used to
    write this last nonzero remainder, thus
    $$\gcd(r_1, r_0) = xr_1 + yr_0 \textrm{ for some integers } x, y.$$

A python implementation of this algorithm is as follows, and can be downloaded [here](./gcd.py):

```python
#!/usr/bin/python3

from math import log10, ceil

def printTableRow(a,b,r):
    print("| {} | {} | {} |".format(
        str(a).ljust(strPad),
        str(b).ljust(strPad),
        str(r).ljust(strPad)
    ))

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))
strPad = ceil(max(log10(a), log10(b)))

if a < b:
    a,b = b,a
r = -1

while r != 0:
    r = a % b
    printTableRow(a,b,r)
    a,b = b,r

print("GCD = {}".format(a))

```

#### Problems

1. Find the greatest common divisor of 16579 and 30031, and
   determine integers $$x$$ and $$y$$ such that
   $$\gcd(16579, 30031) = x16579 + y30031$$.

### Modular Arithmetic

Two integers $$a, b$$ are congruent modulo $$n$$
(another integer) if $$a-b = kn \; k \in \mathbb{Z}$$, i.e. $$a = b + kn$$.
Written $$a \equiv b \mod n$$ or $$a \stackrel{\mod{}}{\equiv} b$$.

Two congruencies with the same mod $$n$$ can be added, subtracted,
multiplied just like normal equations.

### Two's complement

In a computer, for negative integers we use two\'s complement, see
[here](../cs132/index.html#datarep).

We are also working with a system modulo $$2^N$$ where $$N$$ is the number
of bits. Thus the 32 bit limit of $$[2^{31}, 2^{31} - 1]$$ which is
$$2^{32}$$ integers.

## Reals

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note2.pdf)

Reals are denoted $$\mathbb{R}$$, and have a subset $$\mathbb{Q}$$ which are
numbers definable as $$\frac{m}{n}, \; m, n \in \mathbb{Z}, \; n \neq 0$$.
We can always pick rationals such that $$n \geq 1$$ and $$\gcd(m, n) = 1$$.
Every nonzero rational has an inverse.

Reals which are the solutions of polynomial equations are called
**algebraic**, an example would be $$\sqrt{2}$$ (being the solution of
$$x^2 = 2$$).

Those which are not are called **transcendental**, such as $$\pi, e$$.

A real number can be thought of as a sequence of rational numbers, which
converges to said real. e.g. $$\pi$$ is the limit of
$$3, 3.1, 3.14, 3.141, 3.1415...$$

### Properties of real numbers

All properties of real numbers come from **13 axioms**, of which 1-8 are
**algebraic** properties, and 9-12 are **order properties**.

For all $$x, y, z \in \mathbb{R}$$:

1.  **Commutativity**: $$x + y = y + x, \; xy = yx$$
2.  **Associativity**: $$x + (y + z) = (x + y) + z$$ (same with
    multiplication)
3.  Multiply **distributes** over add: $$x(y + z) = xy + xz$$
4.  **Additive Identity**: $$\exists 0 \in \mathbb{R }: x + 0 = x$$
5.  **Multiplicative identity**:
    $$\exists 1 \in \mathbb{R} : x \cdot 1 = x$$
6.  Multiplicative and additive identites are **distinct**: $$1 \neq 0$$
7.  Every element has an **additive inverse**:
    $$\exists (-x) \in \mathbb{R}: x + (-x) = 0$$
8.  Every $$\neq 0$$ element has a **mul. inverse**:
    $$x \neq 0 \implies \exists x^{-1} \in \mathbb{R} : x \cdot x^{-1} = 1$$
9.  **Transitivity** of ordering: $$x < y \land y < z \implies x < z$$
10.  **Trichotomy Law**: only **one** of $$x < y,\; x > y,\; x = y$$
11.  **Order preserved** under add: $$x < y \implies x + z < y + z$$
12.  **Order preserved** under mul: $$0 < z \land x < y \implies xz < yz$$
13.  **Completeness**: *Every non-empty subset of $$\mathbb{R}$$ that is
     bounded above has a least upper bound*

#### Exercises

**1\.** Show that $$0 < 1$$.

We first need a lemma.

***Lemma 1.*** $$\forall x ,\; x^2 \geq 0$$.

***Proof of Lemma 1.*** Consider the cases where $$x < 0$$ and $$x \geq 0$$.

When $$x \geq 0$$, 

$$\begin{align} x \geq 0  & \implies x^2 \geq 0 \cdot
0 \textrm{ by ax. 12}\\  & \implies \geq 0. \end{align}$$



When $$x < 0$$, $$-x \geq 0$$, so: 

$$\begin{align} x^2 = x \cdot x  & =
(-x)(-x) \\  & \geq 0 \cdot 0 \textrm{ by prev case}\\  & \geq 0.
 & \triangleright \end{align}$$



Then, we can prove.
***Proof.*** 

$$\begin{align} 1^2  & \geq 0 \textrm{ by lemma}\\
\implies 1  & \geq 0\\ 1  & \neq 0 \textrm{ by ax. 6 } \therefore 1 > 0.
 & \triangleright \end{align}$$



**2\.** Show that $$a > 0 \implies \frac{1}{a} > 0$$.

***Proof.*** Let $$a > 0$$ 

$$\begin{align} \textrm{If } \frac{1}{a}  & = 0
\\ \implies 1  & = a(\frac{1}{a}) = a \cdot 0 = 0 \\
 & \textrm{which is a contradiction to ax. 6.} \end{align}$$




$$\begin{align} \textrm{If } \frac{1}{a}  & < 0 \\ \implies a
(\frac{1}{a})  & < a \cdot 0 \textrm{ by ax. 12} \\ \implies 1  & = 0
\textrm{ which is a contradiction.} \end{align}$$

 By axiom 10 we get
that $$\frac{1}{a} > 0. \quad \triangleright$$

#### Problems

1. Show if $$a, b > 0$$ then $$a < b \Longleftrightarrow a^2 < b^2$$.
   *Note: you have to prove both ways.*

2. Show if $$a < b \land c < 0 \implies ac > bc$$.

### Intervals

**Intervals** are ranges represented by brackets. $$(a, b)$$ ranges are
called **open**, $$[a, b), \; (a, b]$$ are called **semi-open** or
**semi-closed** and $$[a, b]$$ ranges are called **closed**. $$\infty$$ is
not a real number and cannot appear in closed ranges.

### Nth roots

Let $$n \in \mathbb{Z}^+$$. For any
$$a \in \mathbb{R}_{\geq 0}, \; \exists! x \geq 0$$ with $$x^n = a$$. This
$$x$$ is the **$$n^{th}$$ root** of $$a$$, $$a^{\frac{1}{n}}$$. For any positive
real $$a, b$$ and $$n \in \mathbb{Z}^+$$ we have
$$a < b \Longleftrightarrow a^{\frac{1}{n}} < b^{\frac{1}{n}}$$ There\'s
also of course $$a^\frac{1}{2} \equiv \sqrt{a}$$ and all that comes with
it.

### Modulus or absolute function

The **Modulus or Absolute** of $$x$$, $$|x|$$ is basically $$x$$ but without
negatives. $$\|x\| = \sqrt{x^2}, \quad \forall x \in \mathbb{R}$$.

There are 4 properties of modulus:

1.  $$-\|x\| \leq x \leq \|x\|$$
2.  $$\|xy\| = \|x\|\|y\|$$
3.  $$\|x + y\| \leq \|x\|+\|y\|$$
4.  $$\|\|x\| - \|y\|\| \leq \|x - y\|$$

### Bounds

For a set of real numbers $$S$$

-   $$u$$ is an **upper bound** of S if $$u \geq x \forall x \in S$$
-   $$U$$ is the **least upper bound (supremum)** of S if $$U$$ is an UB of
    S and $$U \leq u \forall u$$
-   $$l$$ is a **lower bound** of S if $$l \leq x \forall x \in S$$
-   $$L$$ is the **greatest lower bound (infimum)** of S if $$L$$ is a LB of
    S and $$L \geq l \forall l$$

![boundsDiagram](./images/bounds.svg)

#### Completeness axiom

The *completeness axiom* suggests that for every set which has a lower
bound has a greatest lower bound.

**Important consequences of the completeness axiom:**

-   **The ARCHIMEDIAN PROPERTY** of $$\mathbb{R}$$:\
    if $$\epsilon \in \mathbb{R}; \epsilon > 0$$ then
    $$\exists n \in \mathbb{Z}^+ : n\epsilon > 1$$.
-   Between any two real numbers there are both rational and irrational
    numbers.
-   Every real number can be represented by a (possibly infinite)
    decimal expansion.

## Complex Numbers

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part1/note3.pdf)

In the set $$\mathbb{C}$$, of the form $$a + ib$$ where $$i^2 = -1$$.
Often denoted $$z$$.

Representable by an ordered pair $$z = (a, b)$$ where $$Re_z = a$$ and
$$Im_z = b$$. Also representable as a point on a 2d plane, the *complex
plane* or *argand diagram*.

For $$a, b \in \mathbb{R}$$ the **complex conjugate** of $$z = a + ib$$ is
$$\overline{z} = a - ib$$ (overline). Effectively reflecting along x axis.

### Complex conjugates

**Properties of complex conjugates ($$\forall z, w \in \mathbb{C}$$):**

-   $$\overline{z + w} = \overline{z} + \overline{w}$$
-   $$\overline{zw} = \overline{z}\overline{w}$$
-   $$\overline{(\frac{z}{w})} = \frac{\overline{z}}{\overline{w}}$$
-   $$\overline{\overline{z}} = z$$

-   $$z \in \mathbb{R} \Longleftrightarrow \overline{z} = z$$
-   $$Re_z = \frac{z + \overline{z}}{2}$$
-   $$Im_z = \frac{z - \overline{z}}{2i}$$

### Polar coordinates

If $$x, y \in \mathbb{R}$$ and $$x + iy \neq 0$$ we can express $$x$$ and $$y$$
in polar coordinates, 

$$\begin{align}  & x = r \cos(\theta)  & y = r
\sin(\theta) \end{align}$$


$$\therefore x + iy = r(\cos(\theta) + i\sin(\theta).$$ 

$$\begin{align}  & r
= \sqrt{x^2 + y^2}  & \theta \textrm{ satisfies } \tan(\theta) =
\frac{y}{x}. \end{align}$$

 $$\theta$$ is the **argument**, with the
**principal argument** being a $$\theta \in (-\pi, \pi]$$.


You can multiply two complex numbers in polar form,
$$r_{1} (\cos(\theta) + i\sin(\theta)) \cdot r_{2} (\cos(\phi) + i\sin(\phi)) = r_{1}r_{2}(\cos(\theta + \phi) + i\sin(\theta + \phi))$$.


### Complex modulus

$$r$$ is the **modulus**, often denoted $$\|x + iy\|$$.

**Properties of modulus**, for all $$z, w \in \mathbb{C}$$:

-   $$\|z\| = \|\overline{z}\|$$
-   $$\|z\| = \sqrt{z\overline{z}}$$
-   $$z\overline{z} = \|z\|^2$$

-   $$\|zw\| = \|z\|\|w\|$$
-   $$\|z + w\| \leq \|z\| + \|w\|$$, *(triangle inequality)*
-   $$\|\|z\| - \|w\|\| \leq \|z - w\|$$



Proof of the triangle inequality is omitted.

### De Moivre\'s Theorem

$$\forall n \in \mathbb{Z}$$:
$$(r(\cos{\theta} + i\sin \theta))^n = r^{n}(\cos{n\theta} + i\sin{n\theta}).$$

***Q.*** Find all complex numbers $$z : z^3 = 1$$.

### Fundamental Theorem of Algebra
(Gauss) states that an $$n$$
degree polynomial must have $$n$$ roots.

### Other Notation

The conjugate $$\overline{z}$$ can also be written $$z*$$.

Sometimes (often in engineering) $$i$$ is instead written as $$j$$, as $$i$$ often refers to current.
