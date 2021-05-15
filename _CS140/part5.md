---
layout: CS140
title: Public Key Cryptography
part: true
---

## Modular Arithmetic

1. (A+B) mod n = ((A mod n) + B) mod n
2. (A+B) mod n = ((A mod n) + (B mod n)) mod n
3. (A*B) mod n = ((A mod n) * B) mod n
4. (A*B) mod n = ((A mod n) * (B mod n)) mod n
5. x<sup>A*B</sup> mod n = (x<sup>A</sup> mod n)<sup>B</sup> mod n
6. (x<sup>A</sup> mod n)<sup>B</sup> mod n = (x<sup>B</sup> mod n)<sup>A</sup> mod n

## The Primitive Root

*k = y <sup>x</sup>* mod p

*y* is the **primitive root mod p** if

1. Successive powers of *y* that takes mod p will generate results of 1 to p &minus; 1. 
2. The generated numbers (*k*) are distributed uniformly in the range of [1, p &minus; 1].

> If we pick a value of ***x***, the value of ***k*** is equally likely to be any number in [1, p &minus; 1]. 

The above function is an example of a one-way function if 

- *y* is the **primitive root mod p**
- *p* is an enormous number (e.g. 512-bits).

This is because if we try a value of *x* for a given *k*, the probability that *x* is **correct** is ***1/(p-1)***.

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

*RSA is a type of public key encryption scheme. One of the oldest.*

**To generate a public key.**

- Choose 2 large secret prime numbers, p and q, and calculate ***n*** = p &times; q. ***n*** will be the **public key**.
- Select another value ***e***, that is 
  - relatively prime to ***p–1***, ***q–1***, and ***(p–1) &times; (q-1)***. 
  - ***1 < e < (p–1)(q–1)***

**To encrypt a message.** ***C = M<sup>e</sup>* mod n**, where ***C*** is the ciphertext, ***M*** is the message.

> If an eavesdropper gets ***C***, it is **computationally infeasible** to calculate ***M***.

**To generate a private key.**

- We find a number ***d*** such that, ***e &times; d = 1 mod ((p – 1)(q – 1))***
- ***d*** is the private key owned by Alice and is called the multiplicative inverse of ***e mod (p–1)(q–1)***.

**To decrypt the ciphertext.** ***M = C<sup>d</sup>* mod n**. Very easy to decrypt given the private key.

All receivers have to do is to keep the private key **safe.**

#### Finding the private key

There is a formal method of finding the [private key](https://people.csail.mit.edu/rivest/Rsapaper.pdf) (it’s a 15 page paper).

Another way is by iteration. The goal is to find a multiple of ***e***, which is 1 greater than some multiple of ***(p–1)(q–1)***. So iterate through the multiples of ***(p–1)(q–1)*** and add 1, if that value is a multiple of ***e*** you have found a ***d***, otherwise continue to the next multiple.

### Why is RSA secure?

To break RSA an attacker must

- Either reverse the one-way function which is computationally difficult
- Or know ***d***, which means to know ***p and q*** which means to know ***n*** – but n = p &times; q is also a one-way function.
- The only way is brute force – but a large enough key size will make this infeasible.

> To match the security of a 256-bit secret key, the RSA key needs 15460-bits. RSA started with 512-bit public key, but now it is 2048-bits and will need to increase again to 3072-bits from 2030 onwards.

Another implication of a longer key length, k, is encryption and decryption time increases as well

- Encryption time = O(k<sup>2</sup>)
- Decryption time = O(k<sup>3</sup>)

## Public key vs Secret key Encryption

> DES is between 1000 and 10000 times faster than RSA (encryption & decryption)

| Secret                                                       | Public                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Uses XOR, substitution, permutation – **fast**               | Uses a one-way function – **slower**                         |
| Key is secret – requires shorter key for **same** level of security<br />Also means its, again, **faster**. | Only relies on the length of public key to prevent the crack with brute force<br />Long key – **slower** |
| Key distribution is **complicated**                          | Key distribution is **easy**                                 |

