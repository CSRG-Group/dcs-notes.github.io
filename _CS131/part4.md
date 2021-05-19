---
layout: CS131
part: true
title: Calculus
---

# Calculus

## [Limits and continuity](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note19.pdf)

### Definition

Limits do not depend on the value evaluated at the point - the point can not be well-defined, but the limit may still be, e.g. $$\lim_{x \to 0} \frac{sin\ x}{x} = 1$$, but $$\frac{sin\ 0}{0}$$ is not well defined

*Pull request if you want to complete this*

### Left and right limits

*Pull request if you want to complete this*

### Floor and ceiling functions

*Pull request if you want to complete this*

### Combination rules for limits and continuous functions

Essentially act as you expect - same operations on inside as outside

### Squeeze rule for limits

### Continuity

Essentially act as you expect - same operations on inside as outside

### Intermediate value theorem

A continuous function must cut the $$x$$-axis as it passes from a positive to a negative value





## Differentiation

### [Introduction](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note20.pdf)

#### Definition/differentiability

The derivate of a function $$f$$ at a point $$a$$ is defined as the following limit:
$$
\lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$
If the limit is not well-defined, it is not differentiable at that point. This is likely because it is not continuous

#### Chain rule

Consider $$y = g(f(x))$$ and let $$u = f(x)$$. Then, we can say:
$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$


#### Combination rules

| Name          | Definition                                               |
| ------------- | -------------------------------------------------------- |
| Sum rule      | $$(f+g)' = f' + g'$$                                     |
| Multiple rule | $$(\lambda \cdot f)' = \lambda \cdot f'$$                |
| Product rule  | $$(f \cdot g)' = f \cdot g' + g \cdot f'$$               |
| Quotient rule | $$(\frac{f}{g})' = \frac{f \cdot g' - g \cdot f'}{g^2}$$ |

### [Properties of differentiable functions](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note21.pdf)

#### Turning point theorem

If a differentiable function $$f$$ has a turning point $$a$$, then $$f'(a) = 0$$

#### Stationary points and points of inflection

*Pull request if you want to complete this*

#### Rolle's theorem

If $$f$$ is continuous on $$[a,b]$$, differentiable on $$(a,b)$$, and $$f(a) = f(b)$$, then there is a $$c \in (a,b)$$ with $$f'(c) = 0$$

#### Mean value theorem

If $$f$$ is continuous on $$[a,b]$$ and differentiable on $$(a,b)$$, then there is a $$c \in (a,b)$$ with
$$
f'(c) = \frac{f(b) - f(a)}{b-a}
$$

##### Consequences

### [Implicit differentiation](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note22.pdf)











### [Differentiation of inverses](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note23.pdf)

Differentiation as normal, but range may need to be restricted to make the function bijective

*Pull request if you want to complete this*

### [Partial differentiation (optional)](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note20.pdf)

Essentially, fix all other variables and treat them as constants, then differentiate as normal

*Pull request if you want to complete this*

## L'Hopital's rule ([Notes #1](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note22.pdf), [Notes #2](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note23.pdf))

### Definition

If $f$ and $$g$$ are differentiable functions, with $$f(a) = 0$$, $$g(a) = 0$$, and $$g'(a) \neq 0$$, then:
$$
lim_{x \to a} \frac{f(x)}{g(x)} = lim_{x \to a} \frac{f'(x)}{g'(x)}
$$
Helpful for avoiding limits when the denominator would be zero, since we can just use the derivative instead, which might not be

[Additional resource](https://brilliant.org/wiki/lhopitals-rule/)

## [Integration](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note24.pdf)

### Definition

Essentially the area under a curve, so we can think of it as drawing rectangles of a fixed width beneath it to cover as much as possible, then in the limit of the width becoming zero, the sum of the areas of the rectangles is exactly the area under the curve.

Formally, this can be written as:
$$
A = \int_{a}^{b} f(x)\ dx = \lim_{n \to \infin} \sum_{r=1}^{n} f(x_r)(x_r - x_{r-1})
$$
With $$x_r$$ being the $$x$$ positions of the edges of the rectangles

### Integrable functions

### Fundamental theorems of calculus

## [Logarithms and exponential functions](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note25.pdf)

### Definitions

Logarithms are defined as:
$$
ln\ x = \int_{1}^{x} \frac{1}{t}\ dt
$$
And hence exponentials as:
$$
y = exp(x) \Longleftrightarrow x = ln\ y
$$


### Properties

*Pull request if you want to complete this*

## [Taylor's theorem](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note26.pdf)

### Definition

$$
f(x) = \sum^{\infin}_{n=0} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

Where $$f$$ is a function which can be differentiated $$n+1$$ times, on an open interval containing points $$a$$ and $$x$$



When approximating the value, we can select whatever values of $$a$$ and $$x$$ we want, but we usually pick for the following criteria

1. Pick $$a$$ as a value which makes $$f(a)$$ easy to compute
2. Pick $$x$$ to make $$f(x)$$ the number to approximate

[Additional resource](https://brilliant.org/wiki/taylor-series-approximation/)

### Error term:

$$
R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}
$$

For some $$c$$ in between $$a$$ and $$x$$

- We want $$f^{(n+1)}(c)$$ to be the upper bound of the derivative in that range - so it is normally $$z=a$$ or $$z=x$$

If $$\lim_{n \to \infin} R_n(x) = 0$$, the approximation gets better for larger $$n$$, eventually becoming the exact value of the function

[Additional resource](https://brilliant.org/wiki/taylor-series-error-bounds/)

### Maclaurin series

Maclaurin series are Taylor series at evaluated at $$a=0$$

- (*and $$\lim_{n \to \infin} R_n(x) = 0$$?*)



#### Common Maclaurin series

*Pull request if you want to complete this*

### Test for stationary points

*Pull request if you want to complete this*

## Ordinary differential equations

Equations which are expressed in terms of the derivatives of only one variable

### [First order](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note27.pdf)

#### Separable equations

Equations of the form:
$$
\frac{dy}{dx} = f(x)g(y)
$$
We can conceptually treat $$dy$$ and $$dx$$ as distinct variables, rearranging to:
$$
\frac{dy}{dx} \cdot \frac{1}{g(y)} = f(x)
$$

$$
\int \frac{1}{g(y)}\ dy = \int f(x)\ dx
$$

Then, integrating both sides (remembering the $$+c$$) to get the general solution:
$$
y = h(x) + c
$$

#### Homogeneous equations

Equations of the form:
$$
\frac{dy}{dx} = f(y/x)
$$
We let a variable $$u = \frac{y}{x}$$, so we can write:
$$
\frac{dv}{dx} = \frac{f(v) - v}{v}
$$
Which is now separable, so we can write:
$$
\int \frac{1}{x}\ dx = \int \frac{1}{f(v) - v}\ dv
$$
Giving:
$$
ln\ x = \int \frac{1}{f(v) - v}\ dv
$$

#### Linear equations

Equations of the form:
$$
\frac{dy}{dx} + P(x) \cdot y = Q(x)
$$
We then use an integrating factor to find the solution. There are two cases, one simplified

##### Case #1 - Q(x) is 0

The solution is just:
$$
y = e^{-\int P(x)\ dx}
$$

##### Case #1 - Q(x) is not 0

We explicitly calculate the integrating factor:
$$
I(x) = e^{\int P(x)\ dx}
$$
Then use it to get the solution:
$$
y \cdot I(x) = \int Q(x) \cdot I(x)\ dx
$$

#### Finding particular solutions

We can find particular solutions by substituting in values for $$y$$ and $$x$$, to evaluate the constant of integration $$c$$

### [Second order](https://warwick.ac.uk/fac/sci/dcs/teaching/material/cs131/part4/note28.pdf)

Of the form:
$$
a \cdot y'' + b \cdot y' + c \cdot y = f(x)
$$

#### Homogeneous equations

The case where $$f(x) = 0$$

We use an auxiliary quadratic equation to solve them

*Pull request if you want to complete this*

#### Non-homogeneous equations

We solve the equivalent homogeneous solution, then the particular solution, then sum them

*Pull request if you want to complete this*
