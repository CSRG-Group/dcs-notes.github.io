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

### Simple operations

#### Addition

Matrices are added elementwise - with each cell being added to the corresponding one at the same row and column. Hence, the two matrices must have the same dimensions

#### Scalar multiplication

All elements in the matrix are multiplied by a scalar factor

#### Matrix multiplication

Each element (i,j) in the resultant matrix is the sum of the products of the ith row and the jth column in the first and second matrices respectively

The number of columns in the first matrix must equal the number of rows in the second matrix

![](https://www.geeksforgeeks.org/wp-content/uploads/strassen_new.png)

[Image source](https://www.geeksforgeeks.org/strassens-matrix-multiplication/)

Matrix multiplication is **not commutative**

#### Matrix transpose

Reflection in the leading diagonal



### Types of matrix

#### Zero

A zero matrix is one containing only zeros, for example the following 2x2 matrix:
$$
0_{m \times n} = 
\begin{bmatrix}
	0 & 0 \\
	0 & 0
\end{bmatrix}
$$

#### Diagonal

Matrices containing only values on their leading diagonals, for example the following 2x2 matrix:
$$
diag[a_{11}, a_{22}] = 
\begin{bmatrix}
	a_{11} & 0 \\
	0 & a_{22}
\end{bmatrix}
$$

##### Identity

A special case of diagonal matrices, where all non-zero values are one, for example the following 2x2 matrix:
$$
I_{m \times n} = 
\begin{bmatrix}
	1 & 0 \\
	0 & 1
\end{bmatrix}
$$
Matrix multiplication by the identity matrix gives the initial matrix

## [Linear equations](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note9.pdf)

### Expressing linear equations as matrices

We can write linear equations as matrices:
$$
a_{11}x_1 + a_{12}x_2 = b_1
$$

$$
a_{21}x_1 + a_{22}x_2 = b_2
$$

is equivalent to
$$
\begin{bmatrix}
	a_{11} & a_{12} \\
	a_{21} & a_{22}
\end{bmatrix}

\begin{bmatrix}
	x_1 \\
	x_2
\end{bmatrix}

=

\begin{bmatrix}
	b_1 \\
	b_2
\end{bmatrix}
$$
Which we often write as:
$$
A \underline{x} = \underline{b}
$$


As we can see the matrix multiplication of the LHS will give a 1x2 matrix of the LHS of the linear equations, and then each row equates to one equation.

Hence, by finding the matrix inverse of  $$A$$, we can pre-multiply it with $$\underline{b}$$, to get a matrix with each of the values of $$\underline{x}$$, which is what we are solving for



### Elementary row operations to solve linear equations

#### Augmented matrices

Taking the first example of linear equations, we can re-write it as an "augmented matrix", to simplify row operations we will apply to it:


$$
a_{11}x_1 + a_{12}x_2 = b_1
$$

$$
a_{21}x_1 + a_{22}x_2 = b_2
$$

Can be written as the augmented matrix
$$
\begin{bmatrix}
	a_{11} & a_{12} & |\  b_1 \\
	a_{21} & a_{22} & |\ b_2
\end{bmatrix}
$$

### Elementary row operations

There are three elementary row operations:

1. Interchange rows
2. Multiply a row by a non-zero scalar factor
3. Add a multiple of one row to another

### Row equivalence

Two matrices are row equivalent when they can be transformed into each other using elementary row operations

### Row echelon form

A matrix is in row echelon form if the first non-zero entry in each row is further to the right than that in the previous row

### Calculation of inverses

If a sequence of elementary row operations transforms a square matrix $$A$$ into $$I$$, then $$A$$ is invertible and the same sequence transforms $$I$$ into $$A^{−1}$$

## Determinants ([Notes #1](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note10.pdf), [Notes #2](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note11.pdf))

### Definition

*Pull request if you want to complete this*

### Elementary row operations effect on determinants

*Pull request if you want to complete this*



## [Matrix inverses](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note8.pdf)

A matrix $$B$$ is the inverse of a matrix $$A$$ if $$AB = I = BA$$. Hence, they must both be square matrices of the same dimension

### Requirements for invertibility

The matrix must have a non-zero determinant to be invertible

- [Adjoint/adjugant matrices](https://www.wikiwand.com/en/Adjugate_matrix)
- Matrix inverse only well-defined if determinant is non-zero
- Inverse from determinant and adjugant
- Linear independence from matrix determinant



## Linear transformations  ([Notes #1](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note12.pdf), [Notes #2](https://warwickac.uk/fac/sci/dcs/teaching/material/cs131/part2/note13.pdf))

A function $$T : \mathbb{R}^m \rightarrow \mathbb{R}^n$$ is called a linear transformation if, for all $$\underline{u}, \underline{v} \in  \mathbb{R}^m$$ and all $$\lambda \in \mathbb{R}$$, we have:

- Preservation of addition - $$T(\underline{u}) + \underline{v}) = T(\underline{u}) + T(\underline{v})$$
- Preservation of multiplication - $$T(\lambda \underline{u}) = \lambda T(\underline{u})$$

Hence, all linear transformations map $$T(\underline{0})$$ to $\underline{0}$

### Matrix definitions of linear transformations

Every matrix defines a linear transformation

### Change of basis

## [Eigenvalues and eigenvectors](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note14.pdf)

- Definitions
- Complex values
- Diagonalising matrices
