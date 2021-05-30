---
layout: CS131
part: true
math: true
title: "Matrices"
---

Introduction
------------

1.  [Matrix Algebra](#mat-1)
2.  [Matrix Inverse, Linear Equations](#mat-2)
3.  [Matrix Inverse, Determinants](#mat-3)
4.  [Linear Transformations](#mat-4)
5.  [Matrices and Linear Transformations](#mat-5)

Matrix Algebra
--------------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note8.pdf)

Matrices are rectangular arrays of elements. It\'s order is its
$$\textrm{row } \times \textrm{ column}$$. Note that an $$m \times 1$$
matrix is called a **column matrix/vector**, and $$1 \times n$$ matrices
are similarly named as rows. Elements are referred to with subscript row
column: $$a_{ij}$$.

Sum of two matrices is only defined if they have the same order, and is
*elementwise* addition. Scalar multiplication is also done elementwise.

The Zero matrix, denoted $$O_{m \times n}$$ is a matrix of all zeros.

***Properties of addition and scalar multiplication.***
$$\forall m \times n$$ matrices $$A, B, C$$,
$$\forall \lambda, \mu \in \mathbb{R}$$:

1.  $$A + (B+C) = (A+B)+C$$ (associativity of addition)
2.  $$A + O = A = O + A$$
3.  $$A + (-A) = O = (-A) + A$$
4.  $$A+B=B+A$$ (commutativity of addition)
5.  $$(\lambda + \mu)A = \lambda A + \mu A$$
6.  $$\lambda (A+B) = \lambda A + \lambda B$$
7.  $$\lambda(\mu A) = (\lambda \mu ) A$$

Matrix multiplication can only happen between an
$$A_{m \times \mathbfit{n}}$$ and a $$B_{\mathbfit{n} \times p}$$ (note the
highlighted dimensions) and will produce a matrix $$C_{m \times p}$$.

Matrix multiplication is hard to explain in text, so [see this
video](https://www.youtube.com/watch?v=as8C8w-Nz94) if you\'re not sure
(by blackpenredpen).

A square matrix $$A_{n \times n}$$ is said to be of *order $$n$$*

**Diagonal matrices** only have elements on the leading diagonal;
$$a_{ii}$$ for some $$i : [1..n]$$.

The **identity matrix** $$I$$ (or $$I_n$$) is the $$n \times n$$ diagonal
matrix whose diagonal elements are all 1.

For a square matrix $$A$$, $$A, AA, AAA, ...$$ are defined as
$$A, A^2, A^3,...$$ respectively. $$A^0 = I$$. Functions
$$\exp(A), \cos(A), \sin(A)$$ can also be defined *(hint: taylor series)*.

***Properties of matrix multiplication.*** whenever the products exist:

1.  $$(AB)C = A(BC)$$ (associativity)
2.  $$A(B+C) = AB + AC$$, $$(A+B)C = AC + BC$$
3.  $$IA = A = AI$$
4.  $$OA = O = AO$$
5.  $$A^p A^q = A^{p+q} = A^q A^p$$, $$(A^p)^q = A^{pq}$$

Note that matrix multiplication is **not commutative**: $$AB \neq BA$$
(for all but specific circumstances).

The **transpose** $$A^T$$ of a matrix is obtained by swapping rows and
columns (i.e. reflecting on leading diagonal).

***Properties of transposition.***

1.  $$(A^T)^T=A$$
2.  $$(A+B)^T = A^T + B^T$$ if $$A+B$$ exists
3.  $$(\lambda A)^T = \lambda A^T$$ for any $$\lambda \in \mathbb{R}$$
4.  $$(AB)^T = B^T A^T$$ if $$AB$$ exists.

For same order square matrices $$A, B$$, $$B$$ is the inverse of $$A$$ if and
only if $$AB = I = BA$$. The inverse (should it exist) is **unique** and
denoted $$A^{-1}$$.

The **determinant** of a $$2 \times 2$$ matrix
$$A = \begin{bmatrix} a  &  b \\ c  &  d \end{bmatrix}$$ is $$ad-bc$$ and
denoted $$|A|, \det(A)$$.

If a $$2 \times 2$$ matrix is invertible, then
$$\det(A)det(A^{-1}) = \det(AA^{-1}) = \det(I) = 1$$. Thus
$$\det(A) \neq 0$$ and in that case,

The inverse of $$A = \begin{bmatrix} a  &  b \\ c  &  d \end{bmatrix}$$ is
$$A^{-1} = \frac{1}{\det A} \begin{bmatrix} d  &  -b \\ -c  &  a \end{bmatrix}$$
(a particular case of a general result)

Matrix Inverse, Linear Equations
--------------------------------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note9.pdf)

A system of linear equations can be written in matrix form.


$$\begin{align} ax\_1 + bx\_2  & = y\_1 \\ cx\_1 + dx\_2  & = y\_2
\end{align}$$


$$\equiv \begin{bmatrix} a  &  b \ c  &  d \end{bmatrix} \begin{bmatrix} x_1 \ x_2 \end{bmatrix} = \begin{bmatrix} y_1 \ y_2 \end{bmatrix}.$$
Which can be extrapolated to general form.

The following operations can be performed to solve a system (**Gaussian
Elimination**):

-   Swap two rows (equations)
-   Multiply a row (both sides of an equation) by a nonzero number
-   Add a multiple of one row (equation) to another

Which can be done over the *augmented matrix*, which is gotten by
combining $$\begin{bmatrix} a  &  b \\ c  &  d \end{bmatrix}$$ and
$$\begin{bmatrix} y_1 \ y_2 \end{bmatrix}$$ (the coefficients and the
result).
$$\left[\begin{array}{cc|c} a  &  b  &  y_1 \\ c  &  d  &  y_2 \end{array}\right]$$

Two matrices $$A, B$$ are **row equivalent** if we can use row operations
to get from A to B. Denoted $$A \sim B$$.

A matrix is in **row echelon form** if the first nonzero entry in each
row is further to the right of said entry in the previous row. By
reducing to row echelon form we can solve a system of linear equations.

See the pdf for sample problems. *Note: there also exists **reduced row
echelon form**, where each leading entry is a 1, and each column with a
1 in has 0s for all other entries.*

Elementary row ops can be done by multiplying by so-called *elementary
matrices*. These are defined for (\E\_{n \times n}\):

-   $$E_{ij}$$ obtained from $$I$$ by exchanging rows $$i, j$$
-   For $$\lambda \neq 0, \; E_i(\lambda)$$ obtained from $$I$$ by
    multiplying row $$i$$ by $$\lambda$$
-   $$E_{ij}(\mu)$$ obtained from $$I$$ by adding $$\mu \cdot$$ row $$j$$ to row
    $$i$$

Every elementary matrix is invertible.

If a sequence of row operations transforms a square matrix $$A$$ into $$I$$.
then $$A^{-1}$$ exists and the same sequence transforms $$I$$ into $$A$$.

This is best done with an augmented matrix, like
$$\left[\begin{array}{cc|cc} a  &  b  &  1  &  0 \\ c  &  d  &  0  &  1 \end{array}\right]$$

Matrix Inverse, Determinants
----------------------------

[Link to first
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note10.pdf)\
[Link to second
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note11.pdf)

The determinant of a $$3 \times 3$$ matrix is denoted the same way, and is
defined 

$$\begin{vmatrix} a\_{11}  &  a\_{12}  &  a\_{13} \\ a\_{21}  & 
a\_{22}  &  a\_{23} \\ a\_{31}  &  a\_{32}  &  a\_{33} \end{vmatrix} =
a\_{11} \begin{vmatrix} a\_{22}  &  a\_{23} \\ a\_{32}  & 
a\_{33}\end{vmatrix} - a\_{12} \begin{vmatrix}a\_{21}  &  a\_{23} \\
a\_{31}  &  a\_{33}\end{vmatrix} + a\_{32} \begin{vmatrix}a\_{21}  & 
a\_{22} \\ a\_{31}  &  a\_{32}\end{vmatrix}$$

 i.e. all elements on
the first row multiplied (respecting +/- grid) with the determinant of
the minor matrix (the cofactor) - the matrix gotten by deleting the row
and column with said element.

$$\begin{bmatrix}+ & - & + \\ - & + & - \\ + & - & +\end{bmatrix}$$

This can be done with any row or column.

On elementary row operations and determinants ($$B$$ obtained from $$A$$):

1.  Multiplying a row in A by a $$\lambda$$: $$|B| = \lambda|A|$$
2.  Swapping 2 rows of A: $$|B| = -|A|$$
3.  Adding a multiple of one row to another: $$|B| = |A|$$

A square matrix is inversible *iff* its determinant is not 0. If $$A$$ is
invertible, $$A^{-1} = \frac{1}{|A|} \textrm{adj}(A)$$ where
$$\textrm{adj}(A)$$ is the **transposed matrix of cofactors**.

You can also use matrix inverses to calculate equations: 

$$\begin{align}
\textrm{if }  & A\vec{x} = \vec{y}\\ \textrm{then }  & A^{-1} A
\vec{x} = A^{-1} \vec{y} \implies \vec{x} = A^{-1}\vec{y}
\end{align}$$

 Where the column vector x are the variables, and column
vector y are the values of the equations.

***Linear independence via determinants.*** A set of $$n$$ vectors in
$$\mathbb{R}^n$$ is linearly independent *if and only if* it is the set of
column vectors of a matrix with nonzero determinant.

Basically, bang $$n$$ $$\mathbb{R}^n$$ vectors into a square matrix, compute
the determinant, and if it is 0, then those vectors are linearly
dependent.

Linear Transformations
----------------------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note12.pdf)

A function $$T : \textrm{R}^m \longrightarrow \mathbb{R}^n$$ is a **linear
transformation** if,
$$\forall \vec{u}, \vec{v} \in \mathbb{R}^n, \lambda \in \mathbb{R}$$, we
have: $$T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v}),$$
$$T(\lambda \vec{u}) = \lambda T(\vec{u}).$$ Which are preservation of
addition and scaling respectively. Also,

$$T(\vec{0}) = \vec{0}.$$

For simple problems, verifying that the transformation fits the two
rules of addition and scaling is sufficient.

***Example.*** Let $$\vec{u}$$ be a nonzero 2D vector. If
$$\vec{x} \in \mathbb{R}^2$$ then we define the **projection** of
$$\vec{x}$$ onto $$\vec{u}$$ to be a vector $$P_{\vec{u}}(\vec{x})$$ such that

1.  $$P_{\vec{u}}(\vec{x})$$ is a multiple of $$\vec{u}$$
2.  $$\vec{x} - P_{\vec{u}}(\vec{x})$$ is perpendicular to $$\vec{u}$$.

We have by (1) that $$P_{\vec{u}}(\vec{x}) = \alpha \vec{u}$$ for some
$$\alpha \in \mathbb{R}$$, so by (2)
$$0 = (\vec{x} - P_{\vec{u}}(\vec{x})) \cdot \vec{u} = (\vec{x} - \alpha \vec{u}) \cdot \vec{u} = \vec{x} \cdot \vec{u} - \alpha |\vec{u}|^2,$$
$$\implies \alpha = \frac{\vec{x}\cdot\vec{u}}{|\vec{u}|^2}.$$

The projection can then be regarded as a function
$$P_\vec{u} : \mathbb{R}^2 \longrightarrow \mathbb{R}^2$$ defined
$$\forall \vec{x} \in \mathbb{R}^2$$:
$$P_{\vec{u}}(\vec{x}) = (\frac{\vec{x}\cdot\vec{u}}{|\vec{u}|^2})\vec{u}.$$
This function can be verified to be a linear transformation.

***Example.*** For $$\theta \in [0, 2\pi)$$ define
$$R_\theta : \mathbb{R}^2 \longrightarrow \mathbb{R^2}$$ to be a function
describing rotation about angle $$\theta$$ through origin. After a bit of
derivation, we get
$$R_\theta (x, y) = (x\cos\theta - y\sin\theta, x\sin\theta - y\cos\theta).$$
Or alternatively in matrix form (let $$(x', y')$$ be $$R_\theta (x, y)$$) as
$$\begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix}\ \cos\theta  &  -\sin\theta \\ \sin\theta  &  \cos\theta \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}.$$

Linear Transformations and Matrices
-----------------------------------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note13.pdf)

Referring back to the last example in the last section, it is further
true that **every** $$M_{m \times n}$$ matrix can act as a linear
transformation ($$T(\vec{x}) = M\vec{x}$$). Vectors are column vectors.

For a basis $$V = \{\vec{v}_1, \vec{v}_2, ... \vec{v}_n\}$$ of
$$\mathbb{R}^n$$, every $$\vec{x} \in \mathbb{R}^n$$ has a linear expansion
$$\vec{x} = a_1 \vec{v}_1 + a_2 \vec{v}_2 + ... + a_n \vec{v}_n$$.

These coefficients $$a_1 ... a_n$$ are the **coordinates of $$x$$ with
respect to basis $$V$$**.

Let $$T : \mathbb{R}^m \longrightarrow \mathbb{R}^n$$ be a linear
transformation, V be a basis in $$\mathbb{R}^m$$ and W a basis in
$$\mathbb{R}^n$$.

For each vector $$\vec{v}$$ in V $$T(\vec{v})$$ has an expansion in W. The
**Matrix of a linear transformation** T with respect to V and W is the
$$m \times n$$ matrix where each column $$i$$ contains the coefficients of
the expansion of $$T(\vec{v}_i)$$ for each $$\vec{v}_i \in V$$.

When $$m = n, \; W = V$$ then it is referred to as the **matrix of T with
respect to basis V**.

***Matrix of a linear transformation.*** For a linear transformation T
(as above), M the matrix of T with respect to bases V, W (as above); the
columns of M contain the coordinates of the *images* of the basis
vectors in V w/ respect to W.

If $$\vec{x} \in \mathbb{R}^m$$ has coordinates $$[x_1,...,x_n]$$ with
respect to V then the coordinates with respect to W, $$[y_1, ... , y_n]$$
are
$$\begin{bmatrix} y_1 \ \vdots \ y_n \end{bmatrix} = M \begin{bmatrix} x_1 \ \vdots \ x_n \end{bmatrix}.$$

A matrix that changes between two different bases in $$\mathbb{R}^n$$ is
called a **transition matrix**.

The definition on the notes is uh, just do the same thing as above but
the matrix will be square.

Eigenvalues and Eigenvectors
----------------------------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part2/note14.pdf)

Relating to matrices multiplying vectors, and especially where the
vectors don\'t change direction.

For a matrix A and a vector $$\vec{r}$$, if
$$A\vec{r} = \lambda \vec{r}, \; \lambda \in \mathbb{R}$$, then $$\vec{r}$$
is the **eigenvector** and $$\lambda$$ is the **eigenvalue**.

A number $$\lambda$$ is an eigenvalue of A if and only if it satisfies the
**characteristic equation** $$|A - \lambda I| = 0.$$

For an order $$n$$ matrix there are $$n$$ (not necessarily unique)
eigenvalues. Eigenvalues can also be $$\in \mathbb{C}$$.

Recall that diagonal matrices are written
$$\textrm{diag}[a_{11}, a_{22}, ..., a_{nn}]$$.

***Diagonalisation of Matrices.*** For an order $$n$$ matrix A:
$$A = UDU^{-1}$$ Where
$$D = \textrm{diag}[\lambda_1, \lambda_2, ..., \lambda_n]$$ (the eigen
values), and $$U = [\vec{v}_1, \vec{v}_2, \dots, \vec{v}_n]$$ are the
*corresponding* eigenvectors of said eigenvalues.

Note that if you have repeated eigenvalues, you have to find multiple
*distinct* (linear independence) eigenvectors for that eigenvalue.