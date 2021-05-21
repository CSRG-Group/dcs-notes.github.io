---
layout: CS131
part: true
title: Linear algebra and Matrices
---



# Linear algebra

## [Vectors](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note4.pdf)

*Pull request if you want to complete this*

### Modulus

The "modulus" of a vector denotes its length, and is calculated as follows:
$$
\| \underline{x} \| = \sqrt{(x_1)^2 + (x_2)^2 + ... + (x_n)^2}
$$
A vector is called a unit vector of its modulus is $$1$$

### Dot product

The dot product of two vectors is defined as:
$$
\underline{a} . \underline{b} = a_1 b_1 + a_2 b_2 + ... + a_n b_n
$$
It has the additional property:
$$
\underline{a} . \underline{b} = \|\underline{a}\| \|\underline{b}\| cos \theta
$$
Which can be used to find the angle between to vectors.

Hence, if the dot product is zero, then the vectors are orthogonal

## [Linear combinations and subspaces](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note5.pdf)

### Linear combination definition

Given the vectors $$\underline{u_1}, \underline{u_2}, ..., \underline{u_m} \in \mathbb{R}^n$$ and $$\alpha_1, \alpha_2, ..., \alpha_m \in \mathbb{R}$$, a vector of the form $$\alpha_1 \underline{u_1} + \alpha_2 \underline{u_2} + ... + \alpha_m \underline{u_m}$$ is called a linear combination of the vectors

### Span definition

Give the set of vectors $$U = \{\underline{u_1}, \underline{u_2}, ..., \underline{u_m}\}$$, with each $$\underline{u_k} \in \mathbb{R}^n, \forall k$$, then the span of $$U$$ is the set of all linear combinations of the vectors in $$U$$. This can be written as:
$$
span(U) = \{
	\alpha_1 \underline{u_1} + \alpha_2 \underline{u_2} + ... + \alpha_m \underline{u_m}
	\ \|\ 
	\alpha_1, \alpha_2, ..., \alpha_m \in \mathbb{R}
\}
$$

### Subspace definition

A subspace of $$\mathbb{R}^n$$ is a non-empty subset $$S$$ of $$\mathbb{R}^n$$ with the two properties:

1. **Closure under addition:** $$\underline{u}, \underline{v} \in S \implies \underline{u} + \underline{v} \in S$$
2. **Closure under scalar multiplication:** $$\underline{u} \in S, \lambda \in \mathbb{R} \implies \lambda \underline{u} \in S$$



They then follow the properties:

1. Every subspace in $$\mathbb{R}^n$$ contains the zero vector
2. If $$U$$ is a non-empty finite subset of $$\mathbb{R}^n$$ then the span of $$U$$ is a subspace of $$\mathbb{R}^n$$ and is called a subspace "spanned" by $$U$$

## [Linear independence](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note6.pdf)

### Linear independence definition

A set of vectors is linearly independent if they cannot be expressed as a linear combination equally zero, unless all of the factors are zero
$$
\alpha_1 \underline{u_1} + \alpha_2 \underline{u_2} + ... + \alpha_m \underline{u_m} = \underline{0} \implies \alpha_i = 0, \forall i \in {1, 2, ..., m}
$$

### Linear dependence definition

Linear dependence is not linear independence, i.e. the zero vector can be expressed as a linear combination of the vectors

### Checking for linear independence

Two ways:

1. Form a system of equations, with the nth equation having the nth value in each vector
2. A set of non-zero vectors is linearly dependent iff some $$\underline{u_r}$$ is a linear combination of its predecessors $$\underline{u_1}, ..., \underline{u_{r-1}}$$, so showing this shows linear dependence

## [Basis and dimension](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note7.pdf)

### Basis definition

Given a subspace $$S$$ of $$\mathbb{R}^n$$, a set of vectors is called a bases of $$S$$ if it is a linearly independent set which spans $$S$$.

The number of items in $$S$$ cannot exceed $$n$$ if it is a basis, as it must then be linearly dependent

#### Standard basis

The standard basis is vectors with a one each column, and zeroes in the rest, for example for $$\mathbb{R}^3$$:

- $$v_1 = \{1,0,0\}$$
- $$v_2 = \{0,1,0\}$$
- $$v_3 = \{0,0,1\}$$

### Constructing bases

Let $$\{\underline{v_1}, \underline{v_2}, ..., \underline{v_m}\}$$ be a set of nonzero vectors that spans a subspace $$S$$ of $$\mathbb{R}^n$$. Then, removing each $$\underline{v_i}$$ which is a linear combination of its predecessors will leave a bases for $$S$$

### Dimension definition

The dimension of a subspace is the minimum number of vectors needed for a basis of the subspace



# Matrices

## [Matrix algebra](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note8.pdf)

- Properties of scalar multiplication and addition
- Matrix multiplication
  - Properties
- Types of matrix
  - Diagonal
  - Identity
- Matrix transposes

## [Matrix inverses](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note8.pdf)

- Definition

## [Linear equations](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note9.pdf)

- Expressing sets of linear equations as matrices
- Elementary row operations
  - Use to find inverses

## Determinants ([Notes #1](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note10.pdf), [Notes #2]ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note11.pdf))

- Definition
- Elementary row operations effect on determinants
- [Adjoint/adjugant matrices](https://www.wikiwand.com/en/Adjugate_matrix)
- Matrix inverse only well-defined if determinant is non-zero
- Inverse from determinant and adjugant
- Linear independence from matrix determinant

## Linear transformations  ([Notes #1](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note12.pdf), [Notes #2]ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note13.pdf))

- Definition
  - Properties
- Matrix define linear transformations
- Change of basis
- 

## [Eigenvalues and eigenvectors](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note14.pdf)

- Definitions
- Complex values
- Diagonalising matrices
