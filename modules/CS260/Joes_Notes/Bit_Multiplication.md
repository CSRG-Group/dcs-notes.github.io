The problem: given tow Integer numbers expressed in their binary representation using bit operations multiply them.

## Arithmetic operations

&nbsp; $$a+b$$ can be run in $$O(n)$$ this is optimal as to read the whole input takes $$O(n)$$ 

Similarly $$a-b$$ can be run in $$O(n)$$ time 

## Simple multiplication

Simple multiplication (long multiplication) creates $$n$$ numbers of $$a$$ multiplied by $$b_i$$ then adds them together.

This is performed in $$O(n^2)$$ and in the 1950's was widely considered to be the optimal solution

## Karatsuba's Algorithm

Through a manipulation of arithmetic operations Karatsuba developed an algorithm that improves on this, recursively calling itself 3 times.

To Multiply two n-bit integers $$x$$ and $$y$$;

* &nbsp; $$m = \lceil n/2 \rceil$$
* &nbsp; $$a = \lfloor x/2^m \rfloor$$ (left half of x)
* &nbsp; $$b = x \mod 2^m \text{}$$  (right half of x)
* &nbsp; $$c = \lfloor y/2^m \rfloor$$ (left half of y)
* &nbsp; $$d = y \mod 2^m \text{}$$  (right half of y)

then 

$$
xy = ((2^ma)+b)((2^mc)+d)
$$

$$
xy = 2^{2m}ac + 2^m(bc + ad) + bd
$$

$$
xy = 2^{2m}ac + 2^m(ac + bd-(a-b)(c-d)) + bd
$$

This algorithmic operation involves just 3 sub operations each of $$n/2$$ showing an improvement over the previous operations

## PseudoCode

```
KMultiply(x,y,n)
IF (n==1)
    RETURN x*y
ELSE
    m = ceil ( n/2 )

    a = floor( x / 2^m )
    b = x mod 2^m
    c = floor( y / 2^m )
    d = y mod 2^m

    e = KMultiply(a,c,m)
    f = KMultiply(b,d,m)
    g = KMultiply((a-b),(c-d),m)

    flip sign g if needed

    RETURN 2^(2m)e + 2^m(e+f-g)+f
```

$$
T(n)=
\left\{
\begin{array}{ll}
      \Theta(1) & \text{if } n=1 \\
      3T(\lceil n/2 \rceil) + \Theta(n) & \text{if } n>1
\end{array} 
\right.
$$

by the Master theorem

$$
T(n) = \Theta(n^{\log_23})
$$

$$
T(n) \approx \Theta(n^{1.585})
$$

## Real world

In practice in the real world multiplication is implemented on the hardware level allowing 64 bits to be multiplied in $$\Theta(1)$$ However we have seen from the Master theorem that it also holds for any $$n>n_0$$ in this case $$n_0 =64$$ so Karatsuba's algorithm can still be used for big num operations.

There is also more overhead than the traditional multiplication so for smaller values it may be slower to execute. Many bigNum libraries will chose the algorithm based on the size of the input to choose the most optimal.

Finally the record has been beaten the latest in 2019 with $$O(n \log^2n)$$