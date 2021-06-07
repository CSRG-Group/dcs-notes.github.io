---
layout: CS140
title: Public Key Cryptography
part: true
math: true
---

## Congruence

Two numbers $$a$$ and $$b$$ are called **congruent** if they have the same remainder when divided by an arbitrary third number $$n$$. We write this as
$$
a \equiv b\ MOD\ n
$$
Congruence mod $$n$$ forms $$n$$ equivalence classes of values $$[0; n-1]$$ on the integer numbers, with each class having infinitely many elements, of the form $$\{c + kn\ \|\ \forall k \in \mathbb{Z}\}$$, with $$c \in [0; n-1]$$

## Modular arithmetic identities

The following are equivalent to each other:

$$
\begin{matrix}
(a + b)\ MOD\ n    &\equiv &((a\ MOD\ n) + b)\ MOD\ n     &\equiv &((a\ MOD\ n) + (b\ MOD\ n))\ MOD\ n \\\\
(a \cdot b)\ MOD\ n &\equiv &((a\ MOD\ n) \cdot b)\ MOD\ n &\equiv &((a\ MOD\ n) \cdot (b\ MOD\ n))\ MOD\ n \\\\
x^{ab}\ MOD\ n     &\equiv &(x^a\ MOD\ n)^b\ MOD\ n       &\equiv &(x^b\ MOD\ n)^a\ MOD\ n
\end{matrix}
$$

## One Way Function

> A o**ne-way function** is a function is easy to compute in one direction, but **computationally infeasible** to calculate in reverse. 
>
> In other words, given some inputs, it is easy to get the output, but given an output it is difficult to reverse the function to find the original input(s). 

**Example of 1 way functions.**

1. Modular exponentiation function ($$k = y^x \!\!\mod p$$)
2. Prime factorisation ($$p\cdot q = n$$, where $$p$$ and $$q$$ are large prime numbers). 

## The Primitive Root

> The function below is an example of a one-way function if 
>
> - $$y$$ is the **primitive root mod $$p$$**
> - $$p$$ is an enormous number (e.g. 512-bits).
>
> $$
> k = y^x \!\!\!\mod p
> $$
> 
> This is because if we try a value of $$x$$ for a given $$k$$, the probability that $$x$$ is **correct** is $$\frac1{p-1}$$ as the value of  $$k$$ is equally likely to be any number in $$[1, p - 1]$$. 

**Conditions** for $$y$$ to be the "primitive root mod $$p$$"

1. Successive powers of $$y$$ that takes $$\text{mod } p$$ will generate results that loop from 1 to $$p - 1$$. 
2. The generated numbers $$k$$ are distributed uniformly in the range of $$[1, p - 1]$$.

## Public Key Encryption

> The problem with secret key encryption is that it takes a lot of **effort** to transfer the key safely. There are a few ways:
>
> - Physical Transfer
> - Key Distribution Centre
> - Online transfer by breaking the key up to ensure security.

However, public key encryption provides a more **elegant** solution using a **one-way function** like the one [above](#the-primitive-root).

The idea is that each communication party generates a pair of keys, one private and one public – KP<sub>a</sub> and KU<sub>a</sub> respectively where *a* represents one specific party/individual.

- Sender of a message uses receiver’s public key to encrypt
- Receiver uses their own private key to decrypt.

### RSA Encryption

<p align="center"><i>RSA is one of the oldest types of public key encryption schemes.</i></p>

Here we cover
 1. How the public key is generated
 2. How a message is encrypted
 3. How a private key is generated
 4. How to decrypt a message

#### How to generate public key

**Firstly,** choose 2 **large secret prime numbers**, $$p$$ and $$q$$, and calculate their product $$n = p \times q$$. $$n$$ is the **public key**.

**Next,** select another value $$e$$, that is 

- relatively prime (coprime) to $$p-1$$, $$q-1$$, and $$(p-1) \times (q-1)$$. 
- and $$1 \lt e \lt (p-1)(q-1)$$

#### Message Encryption

**To encrypt a message**, we use this formula 
$$
C = M^e\!\!\!\mod n
$$
where $$C$$ is the ciphertext and $$M$$ is the message.

> If an eavesdropper gets $$C$$, it is **computationally infeasible** to calculate $$M$$.

#### How to generate the private key

We find a number $$d$$ such that

$$
e \times d = 1 \!\!\!\mod ((p - 1)\cdot(q - 1))
$$

Here, $$d$$ is the private key owned by Alice and is called the multiplicative inverse of $$e \!\!\!\mod (p-1)(q-1)$$.

##### How do we find *d*?

There is a formal method of finding the [private key](https://people.csail.mit.edu/rivest/Rsapaper.pdf) (it’s a 15 page paper).

Another way is by iteration. The goal is to find a multiple of $$e$$, which is 1 greater than some multiple of $$(p–1)(q–1)$$. So iterate through the multiples of $$(p–1)(q–1)$$ and add 1, if that value is a multiple of $$e$$ you have found a $$d$$, otherwise continue to the next multiple.

#### Ciphertext Decryption

**To decrypt the ciphertext**, we use the formula,
$$
M= C^d\!\!\!\mod n
$$
As you can see, it is very easy to decrypt the ciphertext given the private key. All that the receiver has to do is to keep the private key **safe.**

#### Example of RSA

Let us take the two starting prime numbers as:
$$
p=11, q=3
$$
We can then find the public key $$n$$ as their product:
$$
n = pq = 11 \times 3 = 33
$$
We can now select a value $$e$$ which fulfils the properties of being relatively prime to $$10$$, $$2$$, and $$20$$, and in the range $$1 < e < 20$$, for example
$$
e = 7
$$
Then, we calculate the private key $$d$$ from the equation:
$$
e \cdot d = 1\ MOD\ (p-1)(q-1)
$$
For which $$d=3$$ is a valid solution, as $$7 \times 3 = 21 = 1\ MOD\ 20$$. The easiest way to do this is just by trial and error



Then, suppose we want to encrypt a message $$M=7$$ using the public key, we can find the ciphertext $$C$$ as:
$$
C = M^e\ MOD\ n
= 7^7\ MOD\ 33 = 28
$$
This can then be decrypted using the secret key as:
$$
M = C^d\ MOD\ n = 28^3\ MOD\ 33 = 7
$$


### Why is RSA secure?

To break RSA an attacker must

- Either reverse the **one-way function** which is computationally difficult
- Or know ***d***, which means to know ***p and q*** which means to know ***n*** – but n = p &times; q is also a **one-way function**.
- The only way is **brute force** – but a **large enough key size** will make this **infeasible**.

> To match the security of a 256-bit secret key, the RSA key needs 15460-bits. RSA started with 512-bit public key, but now it is 2048-bits and will need to increase again to 3072-bits from 2030 onwards.

Another implication of a longer key length, k, is encryption and decryption time increases as well

- Encryption time = O(k<sup>2</sup>)
- Decryption time = O(k<sup>3</sup>)

## Public key vs Secret key Encryption

> DES is between 1000 and 10000 times faster than RSA (encryption & decryption)

| Secret                                                       | Public                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Uses XOR, substitution, permutation – **fast**               | Uses a one-way function – **slower**                         |
| Key is secret – attacker knows less information and hence requires shorter key for **same** level of security<br />It is **faster** to perform operations on a shorter key. | Only relies on the length of public key to prevent the crack with brute force<br />The longer the key the **slower **the operation. |
| Key distribution is **complicated**                          | Key distribution is **easy**                                 |

