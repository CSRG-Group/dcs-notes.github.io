
## Divide and Conquer
In algorithms divide and conquer follows the following strategy:
* Divide the problem up into sub problems (of the same kind)
* Solve each subproblem recursively
* Combine the solutions into an Overall Solution

A common solution is to divide the problem of size $$n$$ into two problems of size $$n/2$$

As a consequent it is common for a brute force strategy of $$\Theta(n^2)$$ to be solved in $$O(n \log n)$$

## Merge Sort

Problem: given a list of $$n$$ elements from a totally ordered set rearrange them into ascending order.

Merge sort follows the divide and conquer strategy

* Split the list into two $$(a,b)$$
* Sort the left half  ($$a'$$=sort($$a$$))
* Sort the right half  ($$b'$$=sort($$b$$))
* Merge the results (return merge($$a',b'$$))

### Merging two sorted lists
To sorted lists can be merged by comparing the value at the "front" of the list and add the smallest value to the end of the sorted list and remove it form the original list.

The front of the list can be defined using a pointer.

```java
INPUT A <- list 1
INPUT B <- list 2
a = 0 <- a pointer
b = 0 <- b pointer
out = [] <-Output list

while (A.length > a OR B.length > b ){
    if (A.length > a  AND (B.length <= b OR A[a] < B[b]) ){
        out.add(A[a])
        a+=1
    }else{
        out.add(B[b])
        b+=1
    }
}
```

In every iteration of the loop exactly one element is added to the output array, the loop occurs $$n$$ times where n is the length of the output array ro the sum of the two input arrays. Merging os $$O(n)$$

### Algorithm

```java
function mergeSort(list){       // running time T(n)
    if (list.length ==1){      
        return list
    }
    else{
        mid= floor(list.length/2)  
        listA = list[O to mid]
        listB = list[mid to list.length]
        A = mergeSort(listA)     // running time T(n/2)
        B = mergeSort(listB)     // running time T(n/2)

        return merge(A,B)        // running time O(n)
    }
}
```

running time is $$O(n\log n)$$

### Running Time

Calculate the running time of the merge sort algorithm

let $$T(n)$$ be the running time where:

$$
T(n) \leq
\left\{
\begin{array}{ll}
      0 & n=1 \\
      T(\lceil{n/2}\rceil ) + T(\lfloor{n/2}\rfloor ) +n & n \gt 1 \\
\end{array} 
\right.
$$

#### Proof 1
Assume n is a power of two.

As this is the case the ceil and floor functions are not needed as repeated halving of a power of two remains an integer.

$$
T(n) \leq
\left\{
\begin{array}{ll}
      0 & n=1 \\
      2T({n/2}) +n & n \gt 1 \\
\end{array} 
\right.
$$

Each stage fo the recursion can be thought of as a level, at level 0 there is a single list. To progress to the next level the number of lists is doubled. this can be generalized to:

$$
\text{Number of Lists} = 2^\text{level}
$$

when every list has only a single element the equations: $$2^\text{level} = n$$ holds
$$\text{level} = \log_2(n)$$

The max level is $$\log_2(n)$$

ignoring the recursive element of the definition then the number of merges at each level is $$2^\text{level}$$, each merge is of size $$\frac{n}{2^\text{level}}$$

$$
2^\text{level} * \frac{n}{2^\text{level}} = n
$$
number of operations at each level is $$O(n)$$, over $$log(n)$$ levels the running time is $$O(n \log(n))$$

#### Proof 2

Assume n is a power of two.

$$
T(n) \leq
\left\{
\begin{array}{ll}
      0 & n=1 \\
      2T({n/2}) +n & n \gt 1 \\
\end{array} 
\right.
$$

Proof by induction:

Base Case:
$$
n=1
$$

$$
T(1)=0
$$

$$
=n log_2(n)
$$

Inductive step assuming $$T(n)=n\log_2(n)$$:

$$
T(2n) = 2T(n) + 2n
$$

$$
T(2n) = 2(n\log_2(n)) + 2n
$$

$$
T(2n) = 2(n\log_2(2n)-1) + 2n
$$

$$
T(2n) = 2n\log_2(2n)
$$

#### Proof 3
Proof for a more general case

let $$T(n)$$ be the running time where:

$$
T(n) \leq
\left\{
\begin{array}{ll}
      0 & n=1 \\
      T(\lceil{n/2}\rceil ) + T(\lfloor{n/2}\rfloor ) +n & n \gt 1 \\
\end{array} 
\right.
$$


let $$n_1 = \lfloor n/2 \rfloor$$

let $$n_2 = \lceil n/2 \rceil$$

note $$n_1 + n_2 =n$$

Proof by induction:

Base Case:
$$
n=1
$$

$$
T(1)=0
$$

$$
=n log_2(n)
$$

Inductive step assuming $$T(n)=n\log_2(n)$$:

$$
T(n) \leq T(n_1)+ T(n_2) +n
$$

$$
\leq n_1 \lceil log_2n_1\rceil+ n_2\lceil log_2n_2\rceil +n
$$

$$
\leq n_1 \lceil log_2n_2\rceil+ n_2\lceil log_2n_2\rceil +n
$$

$$
\leq n \lceil log_2n_2\rceil +n
$$

logical step:
$$
n_2 = \lceil n/2 \rceil
$$

$$
\leq \lceil 2^{\log_2n} /2 \rceil
$$

$$
\text{As n is an integer the ceil is not needed}
$$

$$
\leq 2^{\log_2n} /2
$$

$$
log_2n_2 \leq  \lceil \log_2n \rceil -1
$$
return

$$
\leq n (\lceil \log_2n \rceil -1) +n
$$

$$
\leq n \lceil \log_2n \rceil
$$

proven by induction $$T(n)$$ is $$O(n\log n)$$

It has been further proven that in general for divide an conquer problems when calculating the running time then the ceil and floor functions do not need to be taken into account.