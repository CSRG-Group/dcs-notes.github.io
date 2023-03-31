A universal solution for solving common divide and conquer recurrences where

$$
T(n) = a T \left(\frac{n}{b}\right) + f(n)
$$


* &nbsp; $$a \geq 1$$ = the number of recursive calls or subproblem
* &nbsp; $$b \geq 2$$ = the factor by which n decreases
* &nbsp; $$f(n) \geq 0$$ = the work to divide and combine the sub-problems

## Recursion tree
The process of divide an conquer recursion can be though of as a tree where each node generates two or more children.

Assuming that $$n$$ is a power of $$b$$

* &nbsp; $$a$$ = branching factor
* &nbsp; $$a^i$$ = number os sub problems at level i
* &nbsp; $$1 + \log_bn$$ levels
* &nbsp; $$b/b^i =$$ size of subproblem at level $$i$$

Suppose $$T(n)$$ satisfies $$T(n) = a T(n/b) + n^c$$ with $$T(1)$$ where $$n$$ is a power of $$b$$ and $$c$$ is some arbitrary constant

The calculation at each level of the tree for splitting and merging is the number of sub problems at each level $$a^i$$ times the complexity of each sub problem $$\left(\frac{n}{b^i}\right)^c$$ 

let $$r$$ = $$a/b^c$$


then the sum of all the expressions of the calculation is

$$
T(n)=n^c\sum_{i=0}^{log_bn}{r^i}
$$


Based on the value of $$r$$ we can determine properties about the complexity.

Using the geometric series 
* if $$0 < r< 1$$ then $$1 + r + r^2 + r^3 + ... + r^k \leq 1/(1-r)$$
  
As $$r$$ is constant for any input $$n$$
then the result is $$n^cK$$ for some constant $$K$$ or $$\Theta(n^c)$$

* if $$r = 1$$ then $$1 + r + r^2 + r^3 + ... + r^k = k +1$$
  
As for any input $$n$$ $$K=\log_bn$$ the result is $$n^c \log_bn$$ or $$\Theta(n^c\log n)$$

* if $$r > 1$$ then $$1 + r + r^2 + r^3 + ... + r^k = (r^{k+1}-1)/(r-1)$$

then:
$$
\frac{r^{k+1}-1}{r-1} = O(r^k) \text{ because } r=O(1)
$$

$$
T(n) =  n^c * O(r^{\log_bn})
$$


$$
T(n) =  n^c * O \left(\frac{a}{b^c}^{\log_bn}\right)
$$

$$
T(n) =  n^c * O \left(\frac{n^{\log_ba}}{n^c}\right)
$$

$$
T(n) =  O \left(n^{\log_ba}\right)
$$

Organizing in a table:

$$
T(n)=n^c\sum_{i=0}^{log_bn}{r^i}=
\left\{
\begin{array}{ll}
      \Theta(n^c) & \text{if } r<1 &  c>log_ba \\
      \Theta(n^c\log n) & \text{if } r=1 &  c>=og_ba \\
      \Theta(n^{\log_ba}) & \text{if } r>1 &  c<log_ba \\
\end{array} 
\right.
$$

## The master Theorem

### Theorem

Let $$a \geq 1$$ , $$b \geq2$$ and $$c \gt 0$$ and suppose that $$T(n)$$ is a function on the non-negative integers that satisfies the recurrence

$$
T(n) = aT\left(\frac{n}{b}\right) + \Theta (n^c)
$$

with $$T(0) =0 $$ and $$T(1)=\Theta(1)$$, where $$n/b$$ mean either $$\lceil a/b\rceil $$ or $$\lfloor n/b \rfloor$$ then 

* Case 1 : if $$c<\log_ba$$ then $$T(n) = \Theta(n^{\log_ba})$$
* Case 2 : if $$c=\log_ba$$ then $$T(n) = \Theta(n^c\log n)$$
* Case 3 : if $$c>\log_ba$$ then $$T(n) = \Theta(n^c)$$

### Proof Strategy

The exact proof is beyond the scope of the module however a strategy is

* Prove when b is an integer and n is an exact power fo b
* Extend domain of recurrences to reals
* Deal with floors and ceilings

### Extensions
* can replace $$\Theta$$ with $$O$$ everywhere
* can replace $$\Theta$$ with $$\Omega$$ everywhere
* can replace initial conditions it $$T(n)= \Theta(1)$$ for all $$n \leq n_0$$ and require reoccurrences to hold only for all $$n>n_0$$


### Gaps in the Master Theorem

the Mater Theorem does not hold for all cases some of the gaps are:
* Number of sub-problems is not constant.
* Number os sub-problems is less then 1.
* Work to divide and combine sub-problems is not $$\Theta(n^c)$$