---
layout: CS131
part: true
math: true
title: "Calculus"
---


## Limits and Continuity

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note19.pdf)

*(Definitions)* let a function $$f: I \longrightarrow \mathbb{R}$$ be
defined on an interval $$I$$. We\'re interested in a point $$a$$ in that
interval, where $$f$$ may or may not be defined.

When $$f(x)$$ tends to a value $$l$$ as $$x$$ tends towards $$a$$ from the left
(negative side), we write the limit $$\lim_{x \rightarrow a-} f(x) = l$$
Conversely, if $$f(x)$$ tends to $$l$$ as $$x$$ to $$a$$ from the other side we
write $$\lim_{x \rightarrow a+} f(x) = l$$ If
$$\lim_{x \rightarrow a-} f(x) = l$$ and
$$\lim_{x \rightarrow a+} f(x) = l$$ then
$$\lim_{x \rightarrow a} f(x) = l.$$ What this says that if every sequence
$$x_n$$ in $$I$$ which converges to $$a$$, $$x_n \neq a$$, then $$\forall n$$ the
sequence $$f(x_n)$$ converges to $$l$$.

### Floor and Ceiling functions

The $$\left \lfloor{\textrm{floor}}\right \rfloor$$ and
$$\left \lceil{\textrm{ceiling}}\right \rceil$$ functions always round
down and up respectively to the nearest integer.

$$\forall k \in \mathbb{Z}$$: 

$$\begin{align}  &  \lim\_{x \rightarrow k-}
\left \lfloor{x}\right \rfloor = k-1,  &  \lim\_{x \rightarrow k+}
\left \lfloor{x}\right \rfloor = k; \end{align}$$

 

$$\begin{align}  & 
\lim\_{x \rightarrow k-} \left \lceil{x}\right \rceil = k,  & 
\lim\_{x \rightarrow k+} \left \lceil{x}\right \rceil = k+1.
\end{align}$$

#### Exercise

***Example.*** Prove that $$\lim_x \rightarrow 0 \frac{1}{x}$$ does not
exist.

***Proof.*** We need to find a sequence $$x_n \rightarrow 0$$ where
$$f(x_n)$$ does not converge. We can magic the sequence
$$x_n = \frac{1}{n}$$ which does converge to 0, but $$f(x_n) = n$$ is an
unbounded sequence which does not converge. Hence, the limit does not
exist.

### Combination rules for limits

If $$\lim_{x \rightarrow a} f(x) = l$$

and $$\lim_{x \rightarrow a} g(x) = m$$ then

-   **Sum** rule: $$\lim_{x \rightarrow a} (f(x) + g(x)) = l + m$$
-   **Multiple** rule:
    $$\lim_{x \rightarrow a} \lambda f(x) = \lambda l$$,
    $$\lambda \in \mathbb{R}$$
-   **Product** rule: $$\lim_{x \rightarrow a} f(x)g(x) = lm$$
-   **Quotient** rule:
    $$\lim_{x \rightarrow a} \frac{f(x)}{g(x)} = \frac{l}{m}$$ provided
    $$m \neq 0$$

### Squeeze rule for limits

If $$f(x) \leq g(x) \leq h(x)$$ for all
$$x \neq a$$,

$$\lim_{x \rightarrow a} f(x) = l \land \lim_{x \rightarrow a} h(x) = l \implies \lim_{x \rightarrow a} g(x) = l.$$

### Continuous functions

A continuous function is one with no \"jumps\" -

A function $$f : D \longrightarrow \mathbb{R}$$ ($$D \subseteq \mathbb{R}$$)
is **continuous at a point $$a$$** if $$\lim{x \rightarrow a} f(x)$$ exists
and equals $$f(a)$$. $$f$$ is continuous if it is continuous at every point in
the interval.

#### Combination rules for continuous functions

If $$f, g$$ are
continuous at $$a$$, then so are

-   The sum $$f+g$$
-   The scalar multiple $$\lambda f$$ ($$\lambda \in \mathbb{R}$$)
-   The product $$fg$$
-   The quotient $$\frac{f}{g}$$ provided $$g(a) \neq 0$$

If $$f$$ is continuous at $$a$$ and $$g$$ is continuous at $$f(a)$$, then the
composite $$g \circ f$$ is also continuous at $$a$$.

*$$g \circ f \equiv g(f(x))$$.*

#### Basic continuous functions

-   polynomials and rational functions\*
-   The modulus/absolute function
-   The square root function, and nth root function where
    $$n \in \mathbb{Z}^+$$
-   Trig functions
-   Exponential functions
-   Functions defined by power series

\*The domain of rational functions exclude the divide by zero bit and so
is continuous.

### Intermediate Value Theorem

If
$$f : [a, b] \longrightarrow \mathbb{R}$$ is continuous, $$f(a), f(b)$$ have
opposite signs, then there is a point $$c$$ between $$: f(c) = 0$$.

#### Problem

***Problem.*** Show that there is a number
$$x : x^{179} + \frac{163}{1 + x^2} = 119$$.

***Answer.*** Rearrange, let
$$f(x) = x^{179} + \frac{163}{1 + x^2} - 119$$.

$$f(0) > 0,\; f(1) < 0$$ thus by intermediate value theorem
$$\exists x \in [1, 0] : f(x) = 0$$.

*(You do have to conjure numbers to do this question)*

### Extreme Value Theorem

If $$f : [a, b] \longrightarrow \mathbb{R}$$
is continuous, then $$\exists m, M \in [a, b]:$$ 

$$\begin{align}  & f(m)
\leq f(x) \leq f(M)  & \forall x \in [a, b] \end{align}$$



Basically, there\'s a maximum and minimum value of a function in a
bound.

## Differentiation

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note20.pdf)

If the limit of a real function $$f(x)$$ at point $$a$$
$$lim_{h \rightarrow 0} \frac{f(a + h) - f(a)}{h}$$ exists, then $$f(x)$$ is
differentiable at $$a$$, we get $$f'(a)$$.

The $$\frac{d}{dx}$$ thing is called Leibniz notation.

***Theorem.*** If $$f$$ is differentiable at $$a$$, $$f$$ is also continuous
at $$a$$. However, $$f$$ may be continuous but *not* differentiable.

For example, the function $$f(x) = |x|$$ is continuous at 0 but not
differentiable, because at 0 the relevant limit does not exist (there\'s
a crinkle).

Also though the notes is very from principles *\"\"RIGOUR\"\"*
$$\frac{d(x^n)}{dx} = nx^{n-1}$$ - in case you didn\'t know.

### Combination Rules for Derivatives

If $$f, g$$ are differentiable, the
following are also differentiable and follow these rules:

-   **Sum** rule ($$f + g$$): $$(f +g)' = f' + g'$$
-   **Multiple** rule ($$lambda f:\lambda \in \mathbb{R}$$):
    $$(\lambda f)' = \lambda f'$$
-   **Product** rule ($$fg$$): $$(fg)' = fg' + gf'$$
-   **Quotient** rule ($$f/g$$):
        $$(\frac{f}{g})' = \frac{gf' - fg'}{g^2}$$

### Trig derivatives

$$\begin{array}{ccc}  &  \frac{d(\sin x)}{dx} = \cos x  &  \frac{d(\cos
x)}{dx} = -\sin x  & \frac{d(\tan x)}{dx} = \frac{1}{\cos ^2 x} =
\sec ^2 x. \end{array}$$

### The Chain Rule

Providing the functions $$y = f(z), \; z = g(x)$$ are differentiable



$$\begin{align} \frac{dy}{dx}  & = \frac{dy}{dz} \times \frac{dz}{dx}
\\ \textrm{or } (f \circ g)'(x)  & = g'(x) f'(g(x)) \end{align}$$



### Differentiation of functions def\' by power series

If $$\sum(a_nx^n$$ is a
power series with radius of convergence R, and $$f$$ is defined
$$f(x) = \sum_{n=0}^\infty a_nx^n : x \in (-R, R)$$ then it is differentiable
and $$f'(x) = \sum_{n=1}^\infty na_nx^{n-1}$$

*Pay attention: $$n=0$$ changes to $$n=1$$*

The exponential function $$\exp(x)$$ or $$e^x$$ can be defined as a power
series (its Maclaurin series) and thus differentiable to get\... $$e^x$$.

#### Problem

***Problem.*** Find $$\sum_{n=1}^\infty \frac{n}{2^n}$$.

***Answer.*** You\'ve got to bear with me on this one, because the given
solution is clearly written by someone who knew the answer already and
have left out a lot of the logic leaps.

We start with a standard definition, for $$|x| = 1$$
$$\sum_{n=0}^\infty x^n = \frac{1}{1-x}$$ We differentiate the left to get
$$\sum_{n=1}^\infty nx^{n-1} = \frac{d}{dx} (\frac{1}{1-x}).$$ And the
right resolves into $$(1-x)^{-2}$$.

This derivative form of the power set is very similar to the sum we want
to find, so much so that if we take $$x = \frac{1}{2}$$,
$$\sum_{n=1}^\infty n(\frac{1}{2})^{n-1} = \sum_{n=1}^\infty \frac{n}{2^{n-1}}$$
Which resolves down into $$4$$ since we can just sub in $$x$$ to the other
side. Note that if we want to get to $$\frac{n}{2^n}$$ from
$$\frac{n}{2^n-1}$$ we have to multiply by $$\frac{1}{2}$$, so we multiply
both sides by a half to get $$\sum_{n=1}^\infty \frac{n}{2^n} = 2.$$

## Properties of Differentiable Functions

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note21.pdf)

*(Things to be aware of)* Turning points, of which are local *maxima*
and *minima*.

### Turning Point Theorem

If a differentiable function $$f$$ has a turning
point at $$a$$, $$f'(a) = 0$$.

All points $$a$$ where $$f(a) = 0$$ are called **stationary points**, which
aren\'t necessarily turning points. A stationary point which is neither
a local maximum nor minimum is a **point of inflection**

To locate maxima and minima of a continuous function in a range $$[a, b]$$, we
need only consider values at

-   The stationary points of $$f$$ in $$[a, b]$$
-   The end points $$a, b$$

### Rolle\'s Theorem

If $$f : [a, b] \longrightarrow \mathbb{R}$$ is
continuous, is differentiable on $$a, b$$ and $$f(a) = f(b)$$ then there is a
point $$c \in a, b : f'(c) = 0$$

You have two end points with the same $$y$$ value, so in the middle there
must be *some* value which is a stationary point. (on horizontal lines,
all the points work.)

### Mean Value Theorem

If $$f$$ is continuous and differentiable over
$$[a, b]$$ then $$\exists c \in [a,b] :$$ $$f'(c) = \frac{f(b) - f(a)}{b-a}.$$

Which is just Rolle\'s theorem but on a angled graph.

#### Consequences of the MVT

Suppose $$f$$ is continuous on $$[a,b]$$ and
differentiable on $$(a,b)$$,

1.  -   $$f'(x) = 0 \forall x \in (a, b) \implies f$$ is constant on
        $$[a, b]$$
    -   $$f'(x) > 0 \forall x \in (a, b) \implies f$$ is *strictly*
        increasing
    -   $$f'(x) < 0 \forall x \in (a, b) \implies f$$ is *strictly*
        decreasing

2.  **Second Derivative Test.** Suppose $$f'(c) = 0$$.
    $$f''(c) > 0 \implies f$$ has local *mini*mum; $$f''(c) < 0 \implies f$$
    has local *maxi*mum.

For curve sketching:

-   Find stationary points, their co-ordinates, and their nature
    (max/min/inflection)
-   Find where $$f(x) = 0$$, i.e. intersects $$x$$ axis
-   Find $$f$$ where $$x = 0$$, i.e. y-intercept
-   Determine what happens to $$f(x)$$ as $$x \rightarrow \pm\infty$$
    (asymptotes?)
-   Investigate near where (if) $$f(x) \rightarrow \infty$$, where a
    divide by zero is found or some other asymptote.

## L\'Hopital\'s Rule and Implicit Differentiation

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note22.pdf)

### L\'Hopital\'s Rule

Suppose that $$f(a) = 0, g(a) = 0$$. If

$$\lim_{x \rightarrow a} \frac{f'(x)}{g'(x)}$$ exists then so does
$$\lim_{x \rightarrow a} \frac{f(x)}{g(X)}$$ also exists,
$$\lim_{x\rightarrow a} \frac{f(x)}{g(x)} = \lim_{x \rightarrow a} \frac{f'(x)}{g'(x)}.$$

You can repeat this and keep on differentiating if you keep getting
$$\frac{0}{0}$$, however there is no guarantee that you will get anywhere.

### Implicit differentiation

Implicit differentiation deals with functions not of the form
$$y = f(x)$$, such as $$x^2 + y^2 = 1$$.

Two methods (that work the same):

-   Either consider a $$y$$ term as a function of $$x$$, thus because of
    chain rule append a $$\frac{dy}{dx}$$ to the end of each $$y$$ term,
    differentiate $$x$$ terms as normal. 

$$\begin{align} \therefore
    d(x^2 + y^2 = 0)/dx  & \implies 2x + 2y\frac{dy}{dx} = 0 \\
     & \implies \frac{dy}{dx} = -\frac{2x}{2y} = -\frac{x}{y}.
    \end{align}$$


-   Or, consider both as functions and append a $$dx$$ or $$dy$$.

$$\begin{align} \therefore d(x^2 + y^2 = 0)/dx  & \implies 2xdx +
    2ydy = 0\\  & \implies 2ydy = -2xdx\\  & \implies \frac{dy}{dx} =
    -\frac{2x}{2y} = -\frac{x}{y}. \end{align}$$



#### Problem

***Problem.*** Find $$\frac{dy}{dx}$$ of $$y \sin x + \tan^{-1} y = 0$$ in
terms of $$y, x$$.

***Answer.*** First, differentiate $$y \sin x$$. By product rule,

$$d(y \sin x) = \sin(x)dy + y\cos(x)dx$$ Then $$\tan^{-1} y$$ is a standard
derivative, $$d(\tan^{-1} y) = \frac{1}{1+y^2} dy$$ Thus we get
$$\sin(x)dy + y\cos(x)dx + \frac{1}{1+y^2}dy = 0$$ Collecting terms,
$$(\sin(x) + \frac{1}{1+y^2})dy = (-y\cos(x))dx$$ Dividing through,
$$\frac{dy}{dx} = \frac{-y \cos x}{\sin x + \frac{1}{1+ y^2}}$$ Which one
can simplify if they wish.

## Differentiating Inverse Functions

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note23.pdf)

Recall from 130 [Injection, Bijection, and
Surjection](../cs130/index.html#func-2). Recall also the range of
a function $$f : A \longrightarrow B$$ is
$$\{y \in B : f(x) = y, x \in A \}$$.

Let
$$f : [a, b] \longrightarrow \mathbb{R}$$ be a continuous function. If $$f$$
differentiable on $$(a, b)$$ and
$$f'(x) > 0 \lor f'(x) < 0 \; \forall x \in (a, b)$$, then $$f$$ has an
inverse function $$f^{-1}$$ which is differentiable. Let $$y = f(x);$$



$$\begin{align}  &  (f^{-1})'(y) = \frac{1}{f'(x)} \equiv  & 
\frac{dx}{dy} = \frac{1}{\frac{dy}{dx}} \end{align}$$



### Example

To find the derivative of $$f$$ given
$$f(x) = x^\frac{1}{n}$$ for some fixed $$n > 0$$. The inverse function is
gotten by writing $$y = x^\frac{1}{n}$$, such that $$x = y^n$$, thus
$$f^{-1}(x) = y^n$$. So



$$\begin{align}  & \frac{dx}{dy} = ny^{n-1}  &  \frac{dy}{dx} =
\frac{1}{ny^{n-1}}. \end{align}$$



$$y = x^\frac{1}{n}$$ so $$\frac{dy}{dx} = y^{n-1} = x^\frac{n-1}{n}$$, thus



$$\begin{align} f\'(x)  & = \frac{dy}{dx} = \frac{1}{nx^\frac{n-1}{n}}
\\  & = \frac{1}{n} x^\frac{1}{n-1}. \end{align}$$



We can differentiate any rational power of $$x$$ by the following:
$$\frac{d}{dx}x^\frac{p}{q} = ... = \frac{p}{q} x^{\frac{p}{q}-1}.$$ same
way for regular differentiation.

### Trigonometric Inverse Derivatives

-   $$\mathbf{sin}^{-1}$$. The inverse for the function
    $$\sin : [\frac{-\pi}{2}, \frac{\pi}{2}] \longrightarrow [-1, 1]$$;

$$\begin{align}  & \frac{d}{dx}\sin^{-1}(x) = \frac{1}{\sqrt{1 -
    x^2}}  & (-1<x<1) \end{align}$$


-   $$\mathbf{cos}^{-1}$$. The inverse for the function
    $$\cos : [0, \pi] \longrightarrow [-1, 1]$$; 

$$\begin{align}
     & \frac{d}{dx}\cos^{-1}(x) = \frac{-1}{\sqrt{1-x^2}}  & (-1 < x
    < 1) \end{align}$$


-   $$\mathbf{tan}^{-1}$$. The inverse for the function
    $$(\frac{-\pi}{2}, \frac{\pi}{2}) \longrightarrow \mathbb{R}$$;

$$\begin{align}  & \frac{d}{dx}\tan^{-1}(x) = \frac{1}{1+x^2}  &  (x
    \in \mathbb{R}) \end{align}$$



## Integration

[Link to the
PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note24.pdf)

### Definition of integration

Let $$f:[a, b] \longrightarrow\mathbb{R}$$ be a bounded function. A
**partition** of $$[a,b]$$ is a set $$P = \{x_0, x_1, x_2,...,x_n\} :$$
$$a = x_0 < x_1 < x_2 < ... < x_{n-1} < x_n = b.$$ For such a partition P
let

-   $$m_r$$ as the greatest lower bound
    $$\{f(x): x_{r-1} \leq x \leq x_r\}$$
-   $$M_r$$ as the least upper bound $$\{f(x): x_{r-1} \leq x \leq x_r\}$$

Also let the lower sum $$L(f, P$$ and the upper sum $$U(f, P)$$


$$\begin{align} L(f, P)  & = \sum\_{r=1}^{n} (x\_r - x\_{r-1})m\_r, \\
U(f, P)  & = \sum\_{r=1}^{n} (x\_r - x\_{r-1})M\_r. \end{align}$$

 These
are the lower and upper estimates of the area under the graph of $$f$$.
For more points in the partition, we get a better estimate of an area.

If there is a unique number A: $$L(f,P) \leq A \leq U(f,P)$$ for every
partition P of $$[a, b]$$ then we say that $$f$$ is **integrable** over
$$[a, b]$$. A is the **definite integral** of $$f$$ between $$a, b$$.
$$\vartriangleright$$



$$\begin{align}  & \int\_{a}^{a} f(x)dx = 0  & \int\_{a}^{b} f(x)dx = -
\int\_{b}^{a} f(x)dx. \end{align}$$



Some basic integrable functions (referring to the range $$[a, b]$$):

1.  Any continuous function.
2.  Any function which is increasing.
3.  Any function which is decreasing.

After this section are basic rules for integrals. However, I\'m going to
put collapsible sections in here for more integration techniques one can
use.

### Integration by Substitution

Like reverse-engineering a chain
rule, this methods relies on the integrand being able to be written in
the following form: $$\int f(g(x))g'(x)dx$$ Where the function $$g(x)$$ is
contained within a bigger function, and its derivative is outside as a
separate factor.

We replace $$g(x)$$ with a new variable, such as $$u$$ and $$g'(x)dx$$ with
$$du$$, and integrate over just the function of $$u$$, $$\int f(u) du$$,
replacing in what $$u$$ is meant to be afterwards.

Why it works\...

Let $$u = g(x)$$. If we differentiate $$g(x)$$ we get
$$\frac{du}{dx} = g'(x)$$ Now, look at the integral,
$$\int f(g(x))g'(x)dx$$. Replace every $$g$$ instance with the equivalent
$$u$$ form to get 

$$\begin{align} \int f(g(x))g\'(x)dx  & = \int f(u)
\frac{du}{dx} dx \\  & = \int f(u) du. \end{align}$$



Try working out $$\int 2x\cos(x^2) dx$$ this way, and
$$\int \frac{9x^2 + 2}{3x^3+2x+7} dx$$.

Answers\...

1.  $$-\sin(x^2)$$
2.  $$\ln(3x^3 + 2x + 7)$$

Tangentially related is the **reverse chain rule** itself. Say we have
an integral, $$\int \cos(3x^2+2x) dx$$, we can note that
$$\sin (3x^2 + 2x)$$ differentiates into $$(6x+2) \cos(3x^2+2x) dx$$ by
chain rule, so integrating the original integrand back we divide by this
extra factor, to get $$\frac{\sin(3x^2+2x)}{6x + 2}$$.

In certain cases (i.e. like $$\int \frac{1}{1 + x^2} dx$$) we would have
to substitute trig functions - in this case $$x = \tan \theta$$.
($$dx = \sec^2 (\theta)d\theta$$.) Then when we substitute, using said
example we get $$\int \frac{1}{\sec^2 \theta} \sec^2 \theta \: d\theta$$.
This is just $$\int 1 d\theta$$ and is $$\theta + c$$, or $$\tan^{-1} x + c$$.

### Integration by Parts

Integration by parts is just a formula:

$$\begin{align}  &  \int f(x)g(x)dx = f(x) \int g(x)dx - \int f'(x)
[\int g(x) dx] dx, \\ \textrm{or }  &  \int uv\: dx = u \int v\:
dx - \int u' [\int v \: dx]\: dx. \end{align}$$

 It can
alternatively be written $$\int u \: dv = uv + \int v \: du$$

Try work out $$\int x \cos (x )dx$$.

Answer\...



$$\begin{align} \int x \cos (x )dx  & = x \sin(x) - \int 1 \sin(x) dx
\\  & = x \sin x + \cos x + c. \end{align}$$



### Properties of definite intervals

1.  **Sum rule:** $$f, g$$ are integrable then so is $$f+g$$, and
    $$\int_{a}^{b} (f(x) + g(x))dx = \int_{a}^{b} f(x)dx + \int_{a}^{b} g(x)dx.$$
2.  **Multiple (scalar) rule:** $$f$$ integrable,
    $$\lambda \in \mathbb{R}$$, then $$\lambda f$$ integrable, and
    $$\int_a^b \lambda f(x)dx = \lambda \int_a^b f(x)dx.$$
3.  $$f$$ integrable over $$[a,c]$$ and $$[c,b]$$, then $$f$$ also integrable
    over $$[a,b]$$, and
    $$\int_a^b f(x)dx = \int_a^c f(x)dx + \int_c^b f(x)dx.$$
4.  If $$f(x) \leq g(x) \; \forall x \in [a, b]$$ then provided both
    integrals exist, $$\int_a^b f(x)dx \leq \int_a^b g(x)dx.$$

### Fundamental theorems of calculus

#### First Fundamental Theorem of Calculus

Let
$$f : [a,b] \longrightarrow \mathbb{R}$$ be integrable, and define
$$F : [a,b] \longrightarrow \mathbb{R}$$ as $$F(x) = \int_a^x f(t)dt.$$ If
$$f$$ continuous at $$c \in (a, b)$$ then $$F$$ is differentiable at $$c$$, and
$$F'(c) = f(c).$$

#### Second Fundamental Theorem of Calculus

Let
$$f : [a,b] \longrightarrow \mathbb{R}$$ be continuous and suppose $$F$$ is
a differentiable function : $$F' = f$$, then $$\int_a^b f(x)dx = [F(x)]^b_a$$
Where $$[F(x)]^b_a$$ denotes $$F(b) - F(a)$$

Alternatively, $$\frac{d}{dx}F(x) = f(x) \; \forall x$$, and $$f$$
continuous, then $$\int f(x)dx = F(x) + c$$ for some c.

## Logs and Exponentials

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note25.pdf)

In the notes $$\log x$$ means the *natural* log of $$x$$, but here I will
use $$\ln x$$. It is always useful to specify.

For each $$x > 0$$; $$\ln x = \int_1^x \frac{1}{t}dt.$$

### Properties of Logarithms

1.  $$\ln(1) = 0.$$
2.  log is a strictly increasing function.
3.  log is a differentiable function, $$\frac{d(\ln x)}{dx}$$
4.  $$\ln(xy) = \ln x + \ln y$$
5.  $$\ln(\frac{x}{y}) = \ln x - \ln y$$
6.  $$\ln : (0, \infty) \longrightarrow \mathbb{R}$$ is bijective

Since $$\ln : (0, \infty) \longrightarrow \mathbb{R}$$ is bijective, it
has an inverse function $$\exp : \mathbb{R} \longrightarrow (0, \infty)$$.
$$e = \exp(1); e^x = \exp(x)$$.

### Properties of Exponentials

For any $$x, y \in \mathbb{R}$$,

1.  $$\exp(x+y) = \exp(x)\exp(y)$$ but likewise $$e^{x+y} = e^xe^y$$
2.  $$\frac{d(\exp(x))}{dx} = \exp(x)$$, $$\exp(0) = 1$$
3.  $$\exp(x) = \lim_{n \rightarrow \infty} (1 + (\frac{x}{n})^n$$
4.  $$\exp(x) = \sum_{n=0}^{\infty} \frac{x^n}{n!}$$

For $$a > 0, x \in \mathbb{R}$$, any exponential can be defined by
$$a^x = e^{x \ln a}$$ Then for $$a, b > 0; x, y \in \mathbb{R}$$ the
following properties hold: 

$$\begin{align}  & \ln (a^x) = x \ln a
 & (ab)^x = a^xb^x \\  & a^xa^y = a^{x+y}  & (a^x)^y = a^{xy} =
(a^y)^x. \end{align}$$



We can change bases of logarithms (provided $$b \neq 1$$);
$$\log_b x = \frac{\ln x}{\ln b}$$

## Taylor\'s Theorem

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note26.pdf)

### Taylor\'s Theorem

Let $$f$$ be an $$n+1$$ times differentiable function
on an open interval containing some points $$a, x$$. Then
$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + ... + \frac{f^{(n)}(a)}{n!}(x-a)^n + R_n(x)$$
Where $$R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$ For some number
$$c$$ between $$a, x$$.

The resulting polynomial from evaluating some $$n$$ terms is called the
**Taylor polynomial of degree $$n$$ of $$f$$ at $$a$$**. This is however an
*approximation*, and so the end term $$R_n(x)$$ is the error in the
approximation.

### Taylor series

If we can show $$R_n (x) \rightarrow 0$$ as $$n \rightarrow \infty$$ then we
get a sequence of better and better approximations until we get the
**Taylor series**,
$$f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!}(x-a)^n$$ This will only
converge for values of $$x$$ within the radius of convergence of the power
series. They can be used to approximate functions.

When $$n = 0$$, Taylor\'s reduces down to the mean value theorem. *(Proof
of Taylor\'s is omitted)*

### Nth derivative test for the nature of stationary points

Suppose
a function $$f$$ has a stationary point at $$a$$ however
$$f'(a) = f''(a) = ... = f^{(n-1)} = 0$$, while $$f^{n}(a) \neq 0$$. If
$$f^{n}(a)$$ is continuous,

1.  $$n$$ even, $$f^{(n)}(a) > 0$$; $$f$$ has a local maximum
2.  $$n$$ even, $$f^{(n)}(a) < 0$$; $$f$$ has a local minimum
3.  $$n$$ odd; $$f$$ has a point of inflection at $$a$$

### Maclaurin Series

When $$a = 0$$, we get the Maclaurin\'s series, which is a special case of
Taylor\'s series $$f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n$$

#### Important Maclaurin Series

$$\begin{align} e^x  & = 1 + x + \frac{x^2}{2!} + ... +
\frac{x^n}{n!}  & (x \in \mathbb{R}) \\ \sin x  & = x -
\frac{x^3}{3!} + \frac{x^5}{5!} - ... +
\frac{(-1)^nx^{2n}}{(2n)!}  & (x \in \mathbb{R}) \\ \cos x  & = 1 -
\frac{x^2}{2!} + \frac{x^4}{4!} - ... +
\frac{(-1)^nx^{2n}}{(2n)!}  & (x \in \mathbb{R}) \\ (1+x)^a  & = 1 +
ax + \frac{a(a-1)x^2}{2!} + ... + {a \choose n}x^n  &  (x \in
\mathbb{R}) \\ \ln (1 + x)  & = x - \frac{x^2}{2} + \frac{x^3}{3}- ... + \frac{(-1)^{n+1}x^n}{n}  & (\|x\| < 1) \\ -\ln (1-x)  & = x \frac{x^2}{2} + \frac{x^3}{3} + ... + \frac{x^n}{n}  & (\|x\| <
1) \end{align}$$

These are all expressible as sums using the nth term, though bear in
mind the last two start from $$n=1$$.

## First Order ODEs

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note27.pdf)

ODEs, Ordinary Differential Equations, are equations including
derivatives, such as $$y' = 4x$$ or $$y'' + 4y = x$$, etc.

The **order** of a DE represents the *highest derivative* contained
within it. This section looks at 1st orders.

First order equations of the form $$y' = f(x)$$ can be easily solved via
integration. This will give us a *general solution* with the $$+ c$$,
representing a *family* of curves. If we are given constraints, we can
get a *particular solution*.

### Separable Equations

**A \[1st order\] ODE is called a **separable**
equation if it can be written in the form $$\frac{dy}{dx} = f(x)g(y)$$
Since this can be rewritten as
$$\frac{1}{g(y)} \frac{dy}{dx} = f(x) \textrm{ or } \frac{1}{g(y)}dy = f(x)dx$$
Which can be directly integrated,
$$\int \frac{1}{g(y)} dy = \int f(x)dx.$$

An example of a separable equation is $$\frac{dy}{dx} + xy = 0$$.

### Homogenous Equations

An ODE is called **homogenous** if it can be
written in the form $$\frac{dy}{dx} = f(\frac{y}{x})$$ We let some
variable $$v = \frac{y}{x} : y = xv$$, thus
$$\frac{d(xv)}{dx} = f(v) \Longleftrightarrow x\frac{dv}{dx} + v = f(v) \Longleftrightarrow \frac{dv}{dx} = \frac{f(v) -v}{x}$$
This brings it into a separable form, into 

$$\begin{align}
\frac{1}{f(v)-v}dv = \frac{1}{x}dx  & \implies \int \frac{1}{x} dx =
\int \frac{1}{f(v)-v} dv \\  & \implies \ln x = \int
\frac{1}{f(v)-v} dv. \end{align}$$

 And replace $$v$$ by $$\frac{y}{x}$$ to
get the original general equation.

The following problem *may* help.

#### Problem

***Problem.*** Solve $$2xy \frac{dy}{dx} = y^2 - x^2.$$

***Answer.*** We can rearrange;
$$\implies \frac{dy}{dx} = \frac{y^2-x^2}{2xy} = \frac{1}{2}(\frac{y^2}{xy} - \frac{x^2}{xy}) = \frac{1}{2}(\frac{y}{x}-\frac{x}{y}).$$
This is homogenous, so we apply the above principle to this equation;

$$\begin{align} \implies \frac{d(vx)}{dx} = \frac{1}{2}(v -
\frac{1}{v})  & \implies x\frac{dv}{dx} + v = \frac{1}{2}(v -
\frac{1}{v}) \\  & \implies \frac{dv}{dx} =
-\frac{1}{x}(\frac{1+v^2}{2v}) \end{align}$$

 Which is now in separable
form. Now, skipping straight to $$\ln x = \dots$$ form, 

$$\begin{align}
\implies \ln x = \int \frac{-2v}{1 + v^2}dv  &  \implies \ln x =
-\ln (1 + v^2) + c \\  & \implies x(1+v^2) = e^c. \end{align}$$

 Let
the constant $$k = e^c$$ and replacing $$v$$ by $$\frac{y}{x}$$. Thus
$$x(1 + \frac{y^2}{x^2}) = k \Longleftrightarrow x^2 + y^2 = kx.$$

### Linear Equations

An ODE is called **linear** if it has the form
$$\frac{dy}{dx} + P(x)y = Q(x).$$

Related to this is the **integrating factor**,
$$I(x) = e^{\int P(x) dx}$$. This can be derived if $$Q(x) = 0$$.

We multiply both sides of the equation by $$I(x)$$, to get
$$\frac{dy}{dx}I(x) + yI(x)P(x) = Q(x)I(x)$$ Note the LHS is the result of
the implicit differentiation of $$yI(x)$$, thus 

$$\begin{align}
\frac{d}{dx}(yI(x))  & = Q(x)I(x) \\ yI(x)  & = \int Q(x)I(x) dx.
\end{align}$$



#### Problem

***Problem.*** Find the general solution to
$$(1+x^2)\frac{dy}{dx} + xy = x\sqrt{1+x^2},$$ and the particular solution
which satisfies $$y = \frac{1}{2}, x=0$$.

***Answer.*** We can rearrange the equation to
$$\frac{dy}{dx} + \frac{xy}{1+x^2} = \frac{x}{\sqrt{1+x^2}}$$ The
integrating factor is thus
$$e^{\int \frac{x}{1+x^2}dx} = e^{\frac{1}{2} \ln (1+x^2)} = (1 + x^2)^{\frac{1}{2}}.$$
Multiplying by this integrating factor, 

$$\begin{align} \sqrt{1+x^2}
\frac{dy}{dx} + \frac{xy}{\sqrt{1+x^2}}  & = x \\
\frac{d}{dx}(\sqrt{1+x^2} y)  & = x \end{align}$$

 Hence the general
solution is $$\sqrt{1+x^2}y = x^2 / 2 + c.$$ The particular solution is
when you substitute the values for $$y, x$$ into the equation to find c,
and $$c = \frac{1}{2}$$. That gives you the final specific curve.

## Second Order ODEs

[Link to the PDF.](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note28.pdf)

These are where there is a $$y''$$ term, and are dealt with very similarly
to recurrences. They take the form $$ay'' + by' + cy = f(x)$$

If $$f(x) = 0$$, then the equation is **homogenous**. To find the general
solution, find the *general solution* of $$ay'' + by' + cy = 0$$ find the
*particular solution* of $$ay'' + by' + cy = f(x)$$ and add them together.

### Solving homogenous equations

For the homogenous equation
$$ay'' + by' + cy = 0$$

There\'s a lot of waffle, but we have an *auxiliary equation* that is
relevant, which is $$a\lambda^2 + b\lambda + c = 0$$

The roots of this equation determine the form of the general solution.

-   *Roots are real and distinct.* The general solution is
    $$y = Ae^{\lambda_1 x} + Be^{\lambda_2 x}$$.
-   *Roots are equal.* The general solution is
    $$y = Ae^{\lambda x} + Bxe^{\lambda x} = (A + Bx) e^{\lambda x}$$.
-   *Complex Roots.* Let $$\lambda_1 = \alpha + i\beta$$ and
    $$\lambda_2 = \alpha - i\beta$$. Then, the general equation is
    $$y = e^{\alpha x} (A \cos \beta x + B \sin \beta x)$$.



### Finding particular solutions

For the equation
$$ay'' + by' + cy = f(x)$$ Like in recurrences, we want *like* functions.

| Form of $$f(x)$$                      | Form for a particular solution                               |
| ------------------------------------- | ------------------------------------------------------------ |
| $$e^{\alpha x}$$                      | -   $$y = Ae^{\alpha x}$$ if $$\alpha$$ is not a root of the auxiliary equation<br/> -   $$y = Axe^{\alpha x}$$ if $$\alpha$$ is one root<br/> -   $$y = Ax^2 e^{\alpha x}$$ if $$\alpha$$ is the repeated roots |
| Polynomial of degree $$n$$            | -   Polynomial of degree $$n$$ if 0 is not a root<br />-   Polynomial of degree $$n+1$$ if 0 is a non-repeated root<br />-   Polynomial of degree $$n+2$$ if 0 is a repeated root |
| $$A \cos \alpha x + B \sin \alpha x$$ | -   $$y = C \cos \alpha x + D \sin\alpha x$$ if $$\alpha i$$ is not a root of the auxiliary equation<br />-   $$y = x(C \cos \alpha x + D \sin \alpha x)$$ otherwise |

 

