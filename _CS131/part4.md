---
layout: CS131
part: true
math: true
title: "Sequences and Series"
---

Sequences
---------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note15.pdf)

A sequence $$(a_n)$$ is an infinite list of numbers $$(a_0, a_1,...)$$. We
can define sequences through *nth term* rules or *recursively*.

***Convergent Sequence.*** A sequence $$a_n$$ is said to **converge** to a
**limit** $$l \in \mathbb{R}$$ if for every small $$\epsilon > 0$$ there is
a related integer $$N$$ such that $$|a_n - l| < \epsilon \; \forall n > N$$.
This is denoted as 

$$\begin{align}  & \lim\_{n \rightarrow \infty} a\_n
= l;  & a\_n \rightarrow l. \end{align}$$



In layman\'s terms, if a sequence converges, then for every
(increasingly small) positive number, the difference between the
sequence\'s terms and the limit will be eventually smaller.

$$N$$ here is like a *threshold indicator*, where every term of the
sequence after $$N$$ will be within the $$\epsilon$$ difference.

We generally worth with $$n \in \mathbb{N}$$.

***Example.*** The sequence $$a_n = \frac{1}{n}$$ converges to 0. We can
prove this by going to the definition - let us have a small
$$\epsilon > 0$$.

Then $$\exists N : a_N - 0 < \epsilon$$, or $$\frac{1}{N} < \epsilon$$. We
can choose any integer $$N > \frac{1}{e}$$, to demonstrate that this is
possible for any $$\epsilon$$. For any $$n > N$$:
$$|\frac{1}{n} - 0| = \frac{1}{n} < \frac{1}{N} < \epsilon,$$ to write it
out as an equation.

If possible, try break a large sequence down into simpler components.
They can be combined using the following:

***Combination Rules for Convergent Sequences.*** For convergent
sequences
$$a_n \rightarrow \alpha, b+n \rightarrow \beta, c_n \rightarrow \gamma$$:

1.  **Sum** rule: $$a_n + b_n \rightarrow \alpha + \beta$$
2.  **Scalar multiple** rule:
    $$\lambda a_n \rightarrow \lambda\alpha, \; \lambda \in \mathbb{R}$$
3.  **Product** rule: $$a_n b_n \rightarrow \alpha\beta$$
4.  **Reciprocal** rule: $$\frac{1}{a_n} \rightarrow \frac{1}{\alpha}$$
5.  **Quotient** rule:
    $$\frac{b_n}{a_n} \rightarrow \frac{\beta}{\alpha}$$
6.  ***Hybrid*** rule:
    $$\frac{b_n c_n}{a_n} \rightarrow \frac{\beta\gamma}{\alpha}$$

Problem\...

***Problem.*** Show that the following sequence converges, find its
limit: $$a_n = \frac{(n+2)(2n-1)}{3n^2 + 1}$$

Answer\...

The components do not converge themselves, a technique here is *dividing
by the fastest increasing term*. Dividing by $$n^2$$,
$$a_n = \frac{\frac{(n+2)}{n}\frac{(2n-1)}{n}}{\frac{3n^2 +1}{n^2}} = \frac{(1 + \frac{2}{n})(2 - \frac{1}{n})}{3 + \frac{1}{n^2}}.$$

Now the components $$\frac{1}{n}$$ and $$\frac{1}{n^2}$$ converge to 0, so
applying combination rules we can get
$$a_n \rightarrow \frac{(1+0)(2-0)}{3+0} = \frac{2}{3}.$$

A sequence $$a_n$$ is **bounded above** if there is a number
$$U : a_n \leq U \forall n$$. $$a_n$$ is **bounded below** if there is a
number $$L : L \leq a_n \forall n$$. A sequence is **bounded** if it is
bounded both above and below.

A **subsequence** of a sequence is obtained from the original sequence
by deleting some terms. We can say $$a_{2n}, a_{2n+1}$$ are the even and
odd subsequences respectively of $$a_n$$.

A sequence $$a_n$$ is an **increasing** sequence if
$$a_{n+1} \geq a_n \;\forall n$$. It is a **decreasing** sequence if
$$a_{n+1} \leq a_n \;\forall n$$.

***Basic Properties of Convergent Sequences.***

1.  A convergent sequence has a *unique* limit.
2.  If $$a_n \rightarrow l$$ then *every subsequence* of $$a_n$$ also
    converges to $$l$$.
3.  If $$a_n \rightarrow l$$ then $$|a_n| \rightarrow |l|$$.
4.  **The squeeze rule.** If
    $$a_n \rightarrow l, b_n \rightarrow l; a_n < c_n < b_n \; \forall n$$
    then $$c_n \rightarrow l$$.^1^
5.  A convergent sequence is always bounded.^2^
6.  An increasing sequence which is bounded above converges. A
    decreasing sequence which is bounded below converges.

^1^The sequence $$c_n$$ is \"squeezed\" between two sequences which both
converge to the same limit, so naturally it will too.\
^2^$$\exists B > 0 : - B \leq a_n \leq B, \; \forall n$$.

You can demonstrate an alternating sequence (e.g. $$(-1)^n$$) doesn\'t
converge by looking at *subsequences*.

Reminder: the binomial theorem is
$$(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + ... + \frac{n!}{k!(n-k)!}x^k$$

Problem\...

***Problem.*** Show that for $$x \geq 0, n > 0$$, this:
$$(1+x)^{\frac{1}{n}} \leq 1 + \frac{x}{n}$$.

Hence deduce/show that if $$c > 0$$ then $$c^\frac{1}{n} \rightarrow 1$$.

Answer\...

***Answer.*** Firstly, we can rearrange and use the binomial theorem.


$$\begin{align} 1 + x  & \leq (1 + \frac{x}{n})^n. \\ (1 +
\frac{x}{n})^n  & = 1 + n\frac{x}{n} + \textrm{ (other positive terms)
via binomial exp, so} \\ 1 + x  & \leq 1 + x + \textrm{ (other
positive terms)} \\ \end{align}$$

 Thus if we take $$n^\textrm{th}$$ roots
of each side we will demonstrate that
$$(1+x)^\frac{1}{n} \leq 1 + \frac{x}{n}.$$

For the second part, we need to consider separately the cases $$c \geq 1$$
and $$c < 1$$.

If $$c \geq 1$$ then $$c^\frac{1}{n} \geq 1$$. If we use the inequality we
demonstrated in the first part, letting $$x = c-1 \geq 0$$ we get
$$1 \leq c^\frac{1}{n} \leq 1 + \frac{c-1}{n}.$$

By the squeeze rule, we can (in an ideal world) see that
$$c^\frac{1}{n} \rightarrow 1$$.

Finally if $$c < 1$$ then $$\frac{1}{c} > 1$$ and by the reciprocal rule
$$\frac{1}{c^\frac{1}{n}} \rightarrow 1$$.

Did you get that? Me neither.

***Divergent Sequence.*** A sequence $$a_n$$ is said to **diverge to
infinity** if
$$\forall K \in \mathbb{R}\; \exists N : n > N \implies a_n > K$$.

In plain english, there is a point in $$a_n$$ where the terms are greater
than any real number one picks.

We denote this as $$a_n \rightarrow \infty$$. $$a_n$$ diverges to $$-\infty$$
if $$-a_n \rightarrow \infty$$.

A divergent sequence that doesn\'t go off to infinity is said to
**oscillate**.

***Basic convergent sequences.*** 

$$\begin{align}  &  \lim\_{n
\rightarrow \infty} \frac{1}{n^p} = 0  &  \forall p > 0 \\  & 
\lim\_{n \rightarrow \infty} c^n = 0  &  \forall c : \|c\| < 1 \\
 &  \lim\_{n \rightarrow \infty} c^\frac{1}{n} = 1  &  \forall c > 0
\\  &  \lim\_{n \rightarrow \infty} n^p c^n = 0  &  \forall p > 0
\land \|c\| < 1 \\  &  \lim\_{n \rightarrow \infty}
\frac{c^n}{n!} = 0  &  \forall c \in \mathbb{R} \\  &  \lim\_{n
\rightarrow \infty} (1 + \frac{c}{n})^n = e^c  &  \forall c \in
\mathbb{R} \end{align}$$



Series
------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note17.pdf)

Addendum: Partial Fractions

Partial fractions can be important in series.

Where a rational function is decomposed into a sum of simpler fractions,
such as $$\frac{cx+d}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}.$$

When there is no repeated factor, simply substituting $$x = a, x=b$$ can
eliminate a term and make it easy to find the unknowns $$A, B$$. When
there is however, we need to just pick values of $$x$$ and solve from
there.

If there is a repeated factor $$(x-a)^n$$, the partial sum will have all
the fractions with denominations $$(x-a), (x-a)^2,...$$ up to $$(x-a)^n$$

If the degree of the numerator is higher than the denominator, then we
have to divide out the numerator (polynomial long division) to get a
valid separable fraction,
$$\frac{x^3 + 3x}{(x+1)(x-3)} = x+2 + \frac{10x+6}{(x+1)(x-3)}.$$

A series $$\sum a_n$$ is a pair of sequences:

1.  A sequence $$a_n$$ called the **sequence of terms**
2.  A sequence $$s_n$$ called the **sequence of partial sums** defined as
    $$s_n = \sum_{k=0}^{n} a_k.$$

If the sequence of partial sums converges to $$s$$, then the series
converges to the sum $$s$$; $$\sum_{n=0}^{\infty} a_n = s.$$ Divergent if
not.

A standard one is the geometric series, $$\sum r^n$$ which will always
converge to $$\frac{1}{1-r}$$ when $$|r| < 1$$. You can prove this by
working out $$rs_n - s_n$$. 

$$\begin{align} s\_n - rs\_n = 1 - r^{n+1}
 & \Longleftrightarrow s\_n(1-r) = 1 - r^{n+1}\\  & \Longleftrightarrow
s\_n = \frac{1 - r^{n+1}}{1-r}. \end{align}$$

 And $$|r| < 1$$ means that
$$r$$-power will converge to 0.

A standard divergent series is the harmonic series, $$\sum \frac{1}{n}$$.
You can prove this by estimating partial sums
$$s_2, s_4, s_8, s_{16}, ...$$ and see that it will forever build to
$$1 + 0.5 + 0.5 + 0.5 + ...$$. $$s_{2^n} > 1 + \frac{n}{2}.$$ Though any
series $$\sum \frac{1}{n^k}$$ where $$k > 1$$ will always converge.

***Basic Properties of Convergent Series.***

1.  **Sum rule**, $$\sum a_n$$ converges to $$s,\; \sum b_n$$ converges to
    $$t \implies \sum (a_n + b_n)$$ converges to $$s + t$$.
2.  **Multiple rule**, $$\sum a_n$$ converges to
    $$s, \; \lambda \in \mathbb{R} \implies \sum \lambda a_n$$ converges
    to $$\lambda s$$.
3.  $$\sum a_n$$ converges $$\implies a_n \rightarrow 0$$.
4.  $$\sum |a_n|$$ converges $$\implies \sum a_n$$ also converges.

No. 4 is only useful really when you have an \"oscillating\" series,
like $$\sum \frac{(-1)^n}{2^n}$$.

***The Comparison Test.*** Suppose that $$0 \leq a_n \leq b_n$$ for all
$$n$$,

1.  If $$\sum b_n$$ converges then so does $$\sum a_n$$
2.  If $$\sum a_n$$ diverges then so does $$\sum b_n$$.

Usually with comparison test questions you just pull out equations from
thin air, but (especially with rational functions) there\'s usually a
technique for doing so based on the largest power of $$n$$, and slowly
chipping away a piece at a time until we get a very simple expression.

Problem\...

***Problem.*** Determine whether the following series converges or
diverges: 

$$\begin{align}  &  (1)\; \sum \frac{n+2}{n^3 - n^2 + 1}  & 
(2) \;\sum \frac{n^2 + 4}{2n^3 - n + 1} \end{align}$$



Answer\...

***Answer 1.*** Take a look at the fraction $$\frac{n+2}{n^3 - n^2 + 1}$$.
If we want to find a smaller fraction, we want a smaller numerator and a
larger denominator than our current fraction. 

$$\begin{align}  &  n+2 \geq
n  &  n^3 - n^2 + 1 \geq n^3 \end{align}$$

 So we get the fraction
$$\frac{n}{n^3}$$ or $$\frac{1}{n^2}$$ which we know will converge as a
series. No help there.

For a larger fraction, we want a bigger numerator and a smaller
denominator; 

$$\begin{align} n+2  & \leq n + 2n \textrm{ or } 3n \\n^3 - n^2 + 1 \geq n^3 - n^2 \textrm{ or } n^2 (n -1)  & \geq \frac{n^3}{2}. \end{align}$$

 Admittedly, at the end we were pulling
expressions out of thin air a bit but hopefully you can see that it\'s
all valid. Thus $$\frac{n+2}{n^3 - n^2 + 1} \leq \frac{6}{n^2}$$ and since
we know $$\sum \frac{6}{n^2}$$ converges ($$6 \sum \frac{1}{n^2}$$) the
original one must too.

***Answer 2.*** We\'re gonna be cheat-y and say that this sequence does
diverge. To show this, let\'s find a smaller fraction which diverges.


$$\begin{align} n^2 + 4  & \geq n^2 \\ 2n^3 -n + 1  & \leq 2n^3
\end{align}$$

 (the $$-n$$ more than cancels out the $$+1$$) and we can see
that this gives us $$\frac{1}{2n} \leq \frac{n^2 + 4}{2n^3 -n+1}$$ And oh
no, $$\sum \frac{1}{2n}$$ diverges (multiple rule) so the original one
must too.

***The Ratio Test.*** If $$|\frac{a_{n+1}}{a_n}| \rightarrow L$$ then

1.  $$0 \leq L < 1 \implies \sum a_n$$ converges.
2.  $$L > 1$$ or $$L \textrm{ is } \infty \implies \sum a_n$$ diverges.
3.  $$L = 1 \implies$$ the test is inconclusive.

Useful in dealing with factorials.

***Basic Convergent Series.***

-   $$\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}$$ for all $$r : |r| < 1$$
-   $$\sum \frac{1}{n^k}$$ converges for all $$k > 1$$
-   $$\sum n^k r^n$$ converges for $$k > 0 \land |r| < 1$$
-   $$\sum_{n=0}^{\infty} \frac{c^n}{n!} = e^c$$ for all
    $$c \in \mathbb{R}$$

***Basic Divergent Series.***

-   $$\sum \frac{1}{n^k}$$ diverges for all $$k < 1$$.

A **power series** is one of the form $$\sum a_n x^n$$. Usually we start
at $$n = 0$$, such that the sequence goes $$a_0, a_1x, a_2x^2, ...$$

***Lemma.*** If $$\sum a_n R^n$$ converges for some $$R \geq 0$$, then
$$\sum a_n x^n$$ converges $$\forall x : |x| < R$$. *(proof in notes)*

$$R \geq 0$$ is the **radius of convergence** of a power series
$$\sum a_n x^n$$ if it converges according to the above, and diverges if
$$|x| > R$$. If a series converges $$\forall x$$ then the radius is
infinity.

If the series $$\sum a_n x^n$$ has a conv. rad $$R$$ then it defines a
function 

$$\begin{align}  & f(x) = \sum\_{n=0}^{\infty} a\_nx^n
 & \forall x \in (-R, R) \end{align}$$



You can find the [radius of convergence using ratio
test](https://www.youtube.com/watch?v=4L9dSZN5Nvg), essentially
evaluate $$\lim_{n \rightarrow \infty} |\frac{a_{n+1}}{a_n}| < 1.$$ and
you will get an $$|x| < ...$$ where that something is your radius.

***Basic Properties of Power Series.*** Let 

$$\begin{align} f(x)  & =
\sum\_{n=0}^{\infty} a\_nx^n  &  x \in (-R\_1, R\_1) \\ g(x)  & =
\sum\_{n=0}^{\infty} b\_nx^n  &  x \in (-R\_2, R\_2) \end{align}$$

 For
positive $$R_1, R_2$$, and let $$R = \min(R_1, R_2)$$. Then for all
$$x \in (-R , R)$$,

1.  If $$f(x) = g(x)$$ then $$a_n = b_n$$ for all $$n$$
2.  **Sum rule,** $$f(x) + g(x) = \sum_{n=0}^{\infty} (a_n + b_n) x^n$$
3.  **Multiple rule,**
    $$\lambda f(x) = \sum_{n=0}^{\infty} \lambda a_nx^n \; \forall \lambda \in \mathbb{R}$$
4.  **Product rule,**
    $$f(x)g(x) = \sum_{n=0}^{\infty} (a_0b_n + a_1b_{n-1} + ... + a_{n-1}b_1 + a_nb_0)x^n$$.

This also gives the general binomial theorem, which for any
$$q \in \mathbb{Q}, x \in (-1, 1)$$ 

$$\begin{align} (1+x)^q  & =
\sum\_{n=0}^{\infty} {q \choose n} x^n \\ {q \choose n}  & =
\frac{q!}{n!(q-n)!} \end{align}$$



Recurrences
-----------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note16.pdf)

*Like the differential equations of sequences.*

A recurrence is a sequence defined, funnily enough, recursively.

For example, the Fibonacci sequence $$F_n$$ is defined as
$$F_n = F_{n-1} + F_{n-2}$$ $$F_0 = 0, F_1 = 1.$$

The *Towers of Hanoi* game\'s number of steps taken was computed to be
the recurrence $$T_n = 2T_{n-1} + 1.$$ For $$T_0 = 0$$ this gives
$$0, 1, 3, 7, 15, ...$$ which we can see is $$T_n = 2^n - 1$$. This latter
form is the **closed form** of $$T_n$$ and allows for immediate
computation.

We are looking at solving linear recurrences with constant coefficients,
of the form $$x_n + a_1x_{n-1} + ... a_kx_{n-k} = f(n)$$ where $$f$$ is a
given function. (If the terms from 1 to k are given, then this describes
a unique sequence.)

More importantly, we will look at **homogenous** ($$f(n) = 0$$)
recurrences with $$k = 2$$. Thus, we want the general solution of
$$x_n + ax_{n-1} + bx_{n-2} =0.$$

In the general case, we want to look for solutions of the form
$$A\lambda^n$$ where $$\lambda, A$$ are constants. A bit of deriving later,
we can get the auxiliary equation in lambda.

The **auxiliary equation** of the recurrence
$$x_n + ax_{n-1} + bx_{n-2} = 0$$ is $$\lambda^2 + a\lambda + b = 0.$$

***General Solution.*** of the recurrence
$$x_n + ax_{n-1} + bx_{n-2} = 0$$,

Let $$\lambda_1, \lambda_2$$ be the roots of the  auxiliary equation.

-   $$\lambda_1 \neq \lambda 2 \implies x_n = A\lambda_1^n + B\lambda_2^n$$
-   $$\lambda_1 = \lambda_2 \implies x_n = A\lambda_1^n + Bn\lambda_2^n$$

For constants $$A, B$$, which can be found if the first two terms of the
sequence are known.

Problem\...

***Problem.*** Find a closed form for the Fibonacci sequence.

Answer\...

***Answer.*** We have $$F_n = F_{n-1} + F_{n-2}$$ so
$$F_n - F_{n-1} - F_{n-2} = 0$$. The auxiliary equation is
$$\lambda^2 - \lambda - 1 = 0$$ Which has roots
$$\lambda = \frac{1 \pm \sqrt{5}}{2}$$ Or $$\phi$$ and $$-(\frac{1}{\phi})$$
(the golden ratio phi). Hence
$$F_n = A(\frac{1 + \sqrt{5}}{2}) + B(\frac{1 - \sqrt{5}}{2}).$$ We know
$$F_0 = 0, F_1 = 1$$ so if we substitute these values in, we get that
$$A = \frac{1}{\sqrt{5}}, B = -\frac{1}{\sqrt{5}}$$. 

$$\begin{align} F\_n
 & = \frac{1}{\sqrt{5}}(\frac{1 + \sqrt{5}}{2})
-\frac{1}{\sqrt{5}}(\frac{1 - \sqrt{5}}{2}). \\  & =
\frac{1}{\sqrt{5}}(\phi^n + \phi^{-n}). \end{align}$$



Actually by some magic we can further simplify down to
$$F_n = \left \lfloor{\frac{\phi^n}{\sqrt{5}}}\right \rfloor$$

Non-homogenous recurrences have the $$f(n)$$ bit not 0.

***Finding solutions to non-homogenous recurrences.*** of form
$$x_n + ax_{n-1} + bx_{n-2} = f(n)$$

1.  Find the general solution $$x_n = h_n$$ of the homogenous recurrence:
    $$x_n + ax_{n-1} + bx_{n-2} = 0.$$ (will have 2 arbitrary constants)
2.  Find *any* particular solution $$x_n = p_n$$ of the original
    recurrence.
3.  The general solution will be $$x_n = h_n + p_n$$.

Finding the particular solution $$p_n$$ is not straight forward, but the
technique is to try solutions that are *similar in form* to $$f(n)$$.
Substitute these into the original recurrence (as they are solutions!)
and try solve.

If $$f(n)$$ is a constant, try find a constant $$k$$.

If $$f(n)$$ is a polynomial, try find a *same degree* polynomial.
(substitute in a general polynomial)

Etc. just like diff. equations.

Decimal Representation of Reals
-------------------------------

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part3/note16.pdf)

Rational numbers can be represented by expansions, so can repeating
decimals.

Repeating decimals can be expressed as a fraction by summing an
appropriate geometric series.

For example, $$0.4\overline{9}$$ can be expanded as follows;

$$\begin{align} 0.4\overline{9}  & = \frac{4}{10} + \frac{0}{10^2} +
\frac{9}{10^3} + ... \\  & = \frac{4}{10} + \frac{9}{10}(1 +
\frac{1}{10} + \frac{1}{10^2} + ...) \\  & = \frac{4}{10} +
\frac{9}{100}(\frac{1}{1-0.1}) = \frac{4}{10} + \frac{9}{90} =
\frac{4}{10} + \frac{1}{10} = \frac{1}{2}. \end{align}$$



The decimal expansion of any arbitrary real can be computed by
squeezing between two converging sequences.

Expand if you really want to see\...

If that real $$x$$ is not an integer, it is between one integer and the
next consecutive one. Now divide the integer gap into 10 fractions - if
$$x$$ is not on a fraction then it is between two consecutive division
points, $$a_0 + \frac{a_1}{10} < x < a_0 + \frac{a_1 + 1}{10}$$ Where
$$a_1 \in \{0..9\}$$. We can then repeat to get
$$a_0 + \frac{a_1}{10} + \frac{a_2}{10^2} < x < a_0 + \frac{a_1}{10} + \frac{a_2 + 1}{10^2}$$
etc etc.

Every rational has a terminating or repeating decimal, there\'s some
formal *rigorous* waffle and then you compute it via long division
really.

Not sure why this is here save the fact that yes decimals are related to
series.