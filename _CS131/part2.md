---
layout: CS131
part: true
math: true
title: "Vectors"
---

## Basics

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note4.pdf)

Vectors in 2 and 3D are members of the sets $$\mathbb{R}^2$$ and
$$\mathbb{R^3}$$ respectively. *(Note, thus ordered pairs)*

Can be treated as coordinate points.

Denoted either with arrow ($$\vec{x}$$), underline ($$\underline{x}$$), or
bold ($$\mathbf{x}$$). I\'ll be using the arrow.

### Addition and scalar multiplication

Addition and scalar multiplication are done element-wise. For
$$\vec{x} = (x_1, x_2, ..., x_n)$$ and $$\vec{y} = (y_1, y_2, ..., y_n)$$

- $$\lambda \vec{x} = (\lambda x_1, \lambda x_2, ..., \lambda x_n)$$
- $$\vec{x}\vec{y} = (y_1 + x_1, y_2 + x_2, ...,y_3 + x_n)$$

$$\vec{x} - \vec{y}$$ and $$-\vec{x}$$ are also defined accordingly from
these.

In $$\mathbb{R}^2$$ if $$\vec{p} = (p_1, p_2)$$ then this is the directed
line segment $$\overrightarrow{OP}$$ starting at origin $$O$$ and ending at
point P $$(p_1, p_2)$$. $$\vec{p}$$ is then the **position vector** of P.

### Position, unit and zero vectors, and vector length

Two line segments are equivalent if they have the same length and
direction.

For points $$A, B$$ with vectors $$\vec{a}, \vec{b}$$ then
$$\overrightarrow{AB} = \vec{b} - \vec{a}$$, for $$\vec{a} = (a_1, a_2) \in \mathbb{R}^2$$

The **length of $$\vec{a}$$** is written as $$\|\vec{a}\| = \sqrt{a_{1}^{2} + a_{2}^{2}}$$;
similarly in 3D.

A **unit vector** has length 1. The **distance** between
$$\vec{a}, \vec{b} = \|\vec{b} - \vec{a}\|$$.

The **zero vector**, $$\vec{0}$$ has all zeros in it.

### The scalar/dot product

The **scalar (dot) product**, $$\vec{a} \cdot \vec{b}$$ is the real number
$$a_1 b_1 + a_2 b_2 + ... + a_n b_n$$.

The angle between two position vectors, $$\theta$$ between vectors
$$\vec{a}, \vec{b}$$ is given by
$$\cos \theta = \frac{\vec{a} \cdot \vec{b} }{|\vec{a}||\vec{b}|}.$$ Two
vectors are **orthogonal** (perpendicular) if dot product is 0.

All definitions (if not already) can be extended to $$n$$ dimensions.



## Linear Combinations and Subspaces

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note5.pdf)

### Linear Combinations

If $$\vec{u}_1, \vec{u}_2, ..., \vec{u}_m \in \mathbb{R}^n$$ and
$$a_1, a_2, ..., a_m \in \mathbb{R}$$, then any vector of the form
$$a_1 \vec{u}_1 + a_2 \vec{u}_2 + ... + a_m \vec{u}_m$$ is a **linear
combination** of $$\vec{u}_1, \vec{u}_2, ..., \vec{u}_m$$.

A linear combination of a single vector is defined as a multiple of that
vector.

In $$\mathbb{R}^3$$ if $$\vec{u}, \vec{v}$$ are not parallel, then
$$\alpha \vec{u} + \beta \vec{v}$$ represents the vertex of a
parallelogram having $$\alpha \vec{u}, \beta \vec{v}$$ as sides - a vector
in the **plane** containing $$\vec{u}, \vec{v}, \vec{0}$$.

### Spans

If $$U = \{\vec{u}_1, \vec{u}_2, ..., \vec{u}_m\}$$ is a
finite set of vectors in $$\mathbb{R}^n$$, then the **span** of U is the
set of all linear combinations of vectors in U and is denoted
$$\textrm{span } U$$;
$$\textrm{span } U = \{a_1 \vec{u}_1 + a_2 \vec{u}_2 + ... + a_m \vec{u}_m : a_1, a_2, ..., a_n \in \mathbb{R}\}.$$

-   If $$U = \{\vec{u}\}$$ then the span is the set of all multiples of
    $$\vec{u}$$.
-   Note that for *basis* spans, 1 vector is a line, 2 vectors is a
    plane, and onwards to hyperplanes. (Basis is covered in next
    section)
-   Elementary spans of $$\mathbb{R}^2, \mathbb{R}^3$$ are
    $$\{(1, 0), (0, 1)\}$$ and $$\{(1, 0, 0), (0,1,0), (0,0,1)\}$$
    respectively.

### Subspaces

A **subspace** of $$\mathbb{R}^n$$ is a non-empty subset
$$S \subseteq \mathbb{R}^n$$ such that: 

$$\begin{align} (1)  & \vec{u},
\vec{v} \in S \implies \vec{u} + \vec{v} \in S;\\ (2)  & \vec{u}
\in S, \lambda \in \mathbb{R} \implies \lambda \vec{u} \in S.
\end{align}$$

 i.e. closed on addition and multiplication.

Means if a set of vectors is in a subspace, any linear combinations of
those vectors is also in.

Two elementary subspaces of $$\mathbb{R}^n$$ are $$\{\vec{0}\}$$ (just
empty) and $$\mathbb{R}^n$$ itself.

#### Properties of Subspaces

1.  Every subspace contains $$\vec{0}$$.
2.  If $$U$$ is a nonempty finite subset of $$\mathbb{R}^n$$ then
    $$\textrm{span } U$$ is a subspace, the subspace **spanned or
    generated** by U.

### Exercise

Determine if $$S$$ is a subspace of $$\mathbb{R}^n$$:

1.  $$S = \{(x, y, 0) : x, y \in \mathbb{R}\} \in \mathbb{R}^3$$
2.  $$S = \{(1, 1)\} \in \mathbb{R}^2$$
3.  $$S = \{(x, y) : x^2 + y^2 \leq 1\} \in \mathbb{R}^2$$

***Solutions.***

1\. We need to show closure on addition and scaling. Let
$$\vec{u}, \vec{v} \in S : \vec{u} = (a, b, 0), \vec{v} = (c, d, 0)$$ for
some $$a, b, c, d \in \mathbb{R}$$.
$$\vec{u} + \vec{v} = (a, b, 0) + (c, d, 0) = (a+c, b+d, 0) \in S.$$ For
any $$\lambda \in \mathbb{R}$$
$$\lambda \vec{u} = \lambda (a, b, 0) = (\lambda a, \lambda b, 0) \in S.$$

2\. Nope, since $$2(1,1) \not \in S$$, so no scaling closure.

3\. Nope. Let $$\vec{u} = (1, 0), \vec{v} = (0, 1)$$, both of which
$$\in S$$, however $$\vec{u} + \vec{v} = (1, 1)$$.
$$1^2 + 1^2 = 2 \not \leq 1$$, so not closed under addition.



## Linear Independence

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note5.pdf)

A set of vectors
$$\{\vec{u}_1, \vec{u}_2, ..., \vec{u}_m\} \in\mathbb{R}^n$$ are
**linearly *dependent*** IF there are real numbers $$a_1, a_2, ..., a_n$$
which are NOT ALL ZERO such that
$$a_1 \vec{u}_1 + a_2 \vec{u}_2 + ... + a_m \vec{u}_m = \vec{0}.$$

Thus a **linearly *independent*** set is where IF
$$a_1 \vec{u}_1 + a_2 \vec{u}_2 + ... + a_m \vec{u}_m = \vec{0}.$$ THEN
ALL $$a_i$$ are **0**.

i.e. if you can\'t find a nonzero linear combination that makes zero
vector, then the set is linearly independent.

-   If a set contains one nonzero vector, it is linear independence
-   If it contains the zero vector, it is linear dependence

In a set of three vectors, you can fairly easily solve three simultaneous
equations all with the sum of zero. Then, you either find that your
three coefficients $$\alpha, \beta, \gamma$$ has to be 0 (indep) or there
is some non-zero relationship between at least two of them (dep)

***Theorem.*** A set $$\{\vec{u}_1, \vec{u}_2, ..., \vec{u}_m\}$$ of
nonzero vectors is linearly *depending* **iff** some / any vector
$$\vec{u}_r$$ is a linear combination of its predecessors \$${\vec{u}\_1,
\vec{u}\_2, \..., \vec{u}\_m{r-1}\}$$

*(proof omitted)*

## Basis and Dimension

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note7.pdf)

### Basis

Let $$S$$ be a subspace of $$\mathbb{R}^n$$. A set of vectors is a **basis** of S if it is a *linearly independent* set which spans S.

e.g. The set $$\{(1,0,0), (0,1,0), (0,0,1)\}$$ is a basis for
$$\mathbb{R}^3$$. In fact, it is the **standard basis**.

***Theorem.*** Let $$S$$ be subspace of $$\mathbb{R}^n$$. If a set
$$\vec{v}_1, \vec{v}_2, ..., \vec{v}_m$$ spans S, then any *linearly
independence* subset of S has *at most* $$m$$ vectors.

*(proof omitted)*

This leads to the fact that any two bases for a subpace S have the
**same** number of elems.

### Dimension

The **dimension** of a subspace of $$\mathbb{R}^n$$ is
the number of vectors in the basis.

#### Exercises

**1\.** Show that the set $$S = \{(x, y, z) : x + 2y - z = 0\}$$ is
a subspace of $$\mathbb{R}^3$$, and find a basis and dimension of $$S$$.

***Solution.*** We can rewrite S as: 

$$\begin{align} S  & = \{(x, y, x+2y =
0) : x, y \in \mathbb{R}\} \\  & = \{x(1, 0, 1) + y(0, 1, 2) : x, y
\in \mathbb{R}\} \\  & = \textrm{ span } \{(1, 0, 1), (0, 1, 2)\}.
\end{align}$$

 Whih shows that S is a subspace, since the span of any
nonempty finite set is a subspace (known property).

By inspection we can see that the two vectors in the set are
independent, thus it is a basis. Thus the dimension of S is 2.

(Supposedly) we can use the theorem from [linear independence](#vec-3)
to construct a basis from as panning set.

Let $$\{\vec{v}_1, \vec{v}_2, ..., \vec{v}_m\}$$ be a basis of a subspace
S of $$\mathbb{R}^n$$. Then removing each $$\vec{v}_i$$ which is a linear
combination of its \"predecessors\" will leave a basis for S.



**2\.** Find a basis for and dimension of a subspace S (of
$$\mathbb{R}^4$$) spanned by
$$\{(2,1,0,-3), (-1,0,-1,2), (1,2,-3,0), (0,0,0,1), (0,1,-2,0)\}.$$

***Solution.*** Let\'s look at (1, 2, -3, 0) and see if it is a linear comb.
of predecessors. $$(1, 2, -3, 0) = \alpha(2,1,0,-3) + \beta(-1,0,-1,2)$$


$$\begin{align}  & \implies \begin{cases} 2\alpha - \beta  & = 1 \\
\alpha  & = 2 \\ -\beta  & = -3 \\ -3\alpha + 2\beta  & = 0
\end{cases}  & \implies \begin{cases} \alpha  & = 2 \\ \beta  & = 3.
\end{cases} \end{align}$$

 We can see it is a linear combination, so we
remove, giving $$\{(2,1,0,-3), (-1,0,-1,2), (0,0,0,1), (0,1,-2,0)\}.$$

Now we next check $$(0,0,0,1)$$.
$$(0,0,0,1) = \alpha(2,1,0,-3) + \beta(-1,0,-1,2)$$ 

$$\begin{align}
 & \implies \begin{cases} 2\alpha - \beta  & = 0 \\ \alpha  & = 0 \\
-\beta  & = 0 \\ -3\alpha + 2\beta  & = 1 \end{cases}  & \implies
\begin{cases} \alpha  & = 0 \\ \beta  & = 0 \\ -3\alpha + 2\beta  & = 1 \end{cases} \end{align}$$

 Which have no solution of $$\alpha, \beta$$
and thus (0, 0, 0, 1) is not a linear combination of priors. Thus
$$\{(0,0,0,1),(2,1,0,-3),(-1,0,-1,2)\}$$ is a linear independence set.

Check the last one against all others,
$$(0,1,-2,0) = \alpha(2,1,0,-3) + \beta(-1,0,-1,2) + \gamma(1, 2, -3, 0)$$

$$\begin{align}  & \implies \begin{cases} 2\alpha - \beta  & = 0 \\
\alpha  & = 1 \\ \beta  & = 2 \\ -3\alpha + 2\beta + \gamma  & = 0
\end{cases}  & \implies \begin{cases} \alpha  & = 1 \\ \beta  & = 2
\\ \gamma  & = -1. \end{cases} \end{align}$$

 So we remove that, thus
finally the remaining set $$\{(0,0,0,1),(2,1,0,-3),(-1,0,-1,2)\}$$ is the
final basis of $$S$$, which gives $$S$$ a dimension of 3.

### Properties of bases

Let S be an $$m$$-dimensional subspace of $$\mathbb{R}^n$$ then

1.  Any subset of S with more than $$m$$ vectors is linearly *dependent*;
2.  A subset of S is a basis *if and only if* it is a linearly
    independent set containing $$m$$ vectors.

It then follows that any subset of $$\mathbb{R}^n$$ is linearly
*dependent*, and a subset of $$\mathbb{R}^n$$ *iff* it is a linearly
independent set containing $$n$$ vectors.

$$\mathbb{R}^2, \mathbb{R}^3$$ properties\...

Subspaces of $$\mathbb{R}^2$$:

1.  There is one 0 dim subspace $$\{\vec{0}\}$$
2.  A 1D subspace is spanned by a single non-zero vector: straight lines
    through origin.
3.  The only 2D subspace is $$\mathbb{R}^2$$

Subspaces of $$\mathbb{R}^3$$:

1.  There is one 0 dim subspace $$\{\vec{0}\}$$
2.  A 1D subspace is spanned by a single non-zero vector: straight lines
    through origin.
3.  A 2D subspace is spanned by 2 linear independence vectors: plains containing
    the origin
4.  The only 3D subspace is $$\mathbb{R}^3$$

