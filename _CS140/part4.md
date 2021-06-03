---
layout: CS140
part: true
math: true
title: Cryptography
---

## Terminology 

- Plaintext, the original message
- Ciphertext , the result of encrypting the message
- Encryption/decryption , the process of transforming plaintext to ciphertext (or reverse)

## Different types of encryption

**Secret key**: 

- The key is a secret, only known to the communicating parties
- The same key is used for encryption and decryption

**Public key:**

- Use a key to encrypt the message
- This encryption key can be publicly  known
- User another key to decrypt the message
- The decryption key is kept private
- Clever maths are used

## Encryption Technique Properties

Good encryption techniques should have 4 properties

1. Confusion

   - If we change a bit/a letter of they **key**, multiple parts of the ciphertext will change
   - hide the relationship between ciphertext and key

2. Diffusion

   - If we change a bit/a letter of the **plaintext**, then half of bits of the ciphertext should change
   - Spread the statistical structure of plaintext over multiple parts of the ciphertext
   - hide the relation between plaintext and ciphertext

3. Cipher text is hard to break even with the most generous assumptions

   - Know the encryption process - so no "security through obscurity"
   - know the initial settings (e.g. key length, block length)
   - as long as the key is secret the ciphertext is still secure

4. Management of the encryption scheme must be feasible and cost-effective

   - Long key may be very secure - but how can it be manged?

## Secret key encryption

Also known as symmetric key, shared key, single key encryption.

Modern “standard algorithm”:

- First was the Data Encryption Standard (DES)
- then the Advanced Encryption Standard (AES)

**How it works.**

1.  A secret key is shared by sender and receiver. 
2.  This secret key is used together with a known pubic algorithm (like AES)
3.  The ciphertext is transmitted 
4.  The receivers decrypt the ciphertext with the known algorithm and the secret key to get plaintext.

## Techniques of Encryption

There are many different encryption techniques, some better than others.

### Steganography

> Steganography is a means of hiding an encrypted message. 
>
> - Often when an encrypted message is sent, it is suspicious because it is unreadable.
> - Steganography is used to hide the encrypted message in something unsuspicious. 

**Steganographic Process**

*(cover medium) + (hidden data) + (stegano key) = stegano medium*

- **cover medium**: the file in which we will hide the hidden_data
- **hidden data**: may be encrypted using stegano key or another key
- **stegano medium**: is the file we send.

The **cover medium** (and thus **stegano medium**) are typically image or audio files. 

#### Hiding data in an image

Images typically used either 8-bit or 24-bit colour

Lets take 24-bit colour as an example:

- Each pixel is represented by three bytes
- Each of the three bytes representing the intensity of the three primary colours red, green, blue (RGB)

Using Least Significant Bit (LSB) insertion - we can hide data in the image.

##### LSB Insertion

Uses binary representation of the *hidden_data* to overwrite the LSB of each byte in the *cover_image*

If we are using 24-bit colour, the amount of change will be minimal and indiscernible to the human eye.

**Example.**

Given three pixels:

1. 10010101 00001101 11001001
2. 10010110 00001111 11001010
3. 1001111 00010000 11001011

We can hide the 9 bits of data in the above three pixels:

1. 1001010**1** 0000110**0** 1100100**1**
2. 1001011**1** 0000111**0** 1100101**1**
3. 1001111**1** 0001000**0** 1100101**1**

Hidden message is: **101101101**

### Code Words

Define code for each vocabulary in a code book which is like a dictionary. You lookup the dictionary to decipher the code word.

### Transposition/Permutation Cipher

***Confusion***

Re-arrange plaintext into columns/rows of a fixed length and then send the message read the other way

```yaml
Plaintext:  HISECRETMESSAGE
Rearrange:  H E E E A
            I C T S G
            S R M S E
Ciphertext: HEEEAICTSGSRMSE
```

Letters are the same, but in a different order. The **shared secret** is knowing what permutation is carried out. This rearrangement can be done any number of times.

A more **confusing** version of this is double transposition, where your rearranged plaintext uses a code word and a number to decide how the text should be rearranged further. In the example below, we have rearrange the grid of letters from the first round according to the numbers specified (if there are not enough letters in the column to fill the row, you just continue with the next column).

```YAML
Codeword: C A K E S         C A K E S
Number:   2 5 1 4 3         2 5 1 4 3
          H E E E A ------> E T M H I
          I C T S G         S A G E E
          S R M S E         S S E C R
```

### Monoalphabetic Substitution Cipher

***Confusion***

If you are familiar with the caesar cipher – this is it. Basically have a ciphertext alphabet, where each symbol maps to the normal alphabet. 

> **Not the best** technique because there is a **linear relation** between the letters/symbols and attackers can easily figure out the encryption key.

*Supposed A … Z = 0 … 25, then y = x + a mod 26 (a is the encryption key)*

**Another way** is to use a keyword e.g. “zebras”

```yaml
Plaintext alphabet:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
Ciphertext alphabet: ZEBRASCDFGHIJKLMNOPQTUVWXY
```

> **Disadvantage.** There is no “linear relation” but a long ciphertext can be easily cracked by **frequency analysis**.

**Frequency analysis** relies on the fact that some letters are used more than others. By counting the letter frequency of a certain symbol in the ciphertext, someone can make an intelligent guess on which letter in the alphabet it represents. 

To prevent this, multiple ciphertext alphabets are used…

### Polyalphabetic Substitution Cipher

***Confusion***

A key is used to decide which ciphertext alphabet is applied in each substitution. An example is the Vigenere cipher. Here is table that works together with the vignere cipher.

|       | A    | B    | …    | Y    | Z    |
| ----- | ---- | ---- | ---- | ---- | ---- |
| **A** | A    | B    | …    | Y    | Z    |
| **B** | B    | C    | …    | Z    | A    |
| **…** | …    | …    | …    | …    | …    |
| **Y** | Y    | Z    | …    | W    | X    |
| **Z** | Z    | A    | …    | X    | Y    |

Using this table, and a secret key: **abattis** – we check the cell that corresponds to the pair (Plaintext_letter)(Key_symbol) = Ciphertext Symbol

```yaml
Plaintext:  EXAMPLE
Keystream:  abattis
Ciphertext: EYAFITW
```

> **Disadvantage.** Still has the same statistical flaw for the letters that use the same key alphabet. This can be mitigated by using a longer keyword and is the most secure (in theory) if the key is the same length as the plaintext.

### One time pad

This is where each letter in the message is encrypted with a different alphabet set. This is as secure as you can get but the **problem** lies with how the key is **shared** as both parties have to know the key which is as long as the plaintext.

> **Disadvantage.** As a result, one time pad is not a practical solution because of key generation, key distribution, key protection.

### Combining message and key

In a computer, **plaintext** and the **key** are an arrangement of bits. The best way to combine them is to use bitwise **XOR**. 

- Bitwise operations are not as computationally expensive as addition operations. (If you study 132, 1 just needs a logic gate, the other needs an entire adder/subtractor).
- **AND** and **OR** are not good as they do not produce unique encryption – so they are not good for decryption.

**XOR** on the other hand produces a unique encryption - using XOR, ciphertext can be decrypted by performing XOR over ciphertext and key. So it is very easy to encrypt and to decrypt, you just need the **key**. 

## Data Encryption Standard (DES)

*The first standardised encryption method. Is based on the Feistal approach.*

- Uses block cipher: 64-bit plaintext block size. 
- Uses a 56-bit secret key (technically 64-bit, but the 8th bit of each 8-bits are parity bits which are dropped after the permutated choice 1)
- Goes through 16 rounds of encryption operations per block
- Uses substitution (confusion)
- Uses permutation (diffusion)
- Encryption operations are all public - but it is still hard to crack because the **secret key** is safe.

> **Block Cipher.** Encrypts blocks of data one a time (DES)
>
> **Stream Cipher.** Encrypts each input element (bit or byte etc.) one at a time, producing the machine output element as the process goes along.

### Fiestal Approach Overview

<figure align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Feistel_cipher_diagram_en.svg" style="width:328px;height:480px;" class="center">
        <figcaption style="text-align:center;">Fiestal Cipher Diagram, <a href="https://commons.wikimedia.org/wiki/File:Feistel_cipher_diagram_en.svg">Wikimedia Commons</a></figcaption>
</figure>

1. Plaintext block is split into two equal parts (L<sub>0</sub> and R<sub>0</sub>), each of 32 bits.
2. Run one side of  (i.e R<sub>0</sub>) through a "feistal" function that is fed a key, K<sub>0</sub>.
3. The output of the function, R<sub>0</sub>K<sub>0</sub>, is **XORed** with the other half (L<sub>0</sub>).
4. The output of this **XOR** is used as the input for the round function of the **next round**, while the initial R<sub>0</sub> will be **XORed** with this 2nd round function output.
5. This continues for a total of 16 rounds, where the final blocks are the ciphertext.

> A characteristic of all **Feistal ciphers** is that the process for **decryption** follows the exact same steps as encryption – **only thing** is that the round keys need to be used in the reverse order.

Each round this is computed:
$$
L_{i+1} = R_i, \; R_{i+1} = L_i \oplus F(R_i,K_i)
$$

### The Round Function

There are 4 operations in the function

1. **Expansion**
   - 32 bits half-block is expanded to 48 bits by duplicating half of the bits
     - 32 bits organised into 8 pieces each with 4 bits
     - Duplicate the first and fourth bit in each piece
2. **Key Combination**
   - The output of the expansion is **XORed** with the current round key, K<sub>i</sub>
3. **Substitution**
   - The result of the **XOR** is broken into 8 6-bit pieces and each is passed through a unique substitution box or S-Box
   - This uses the vectorial boolean function to convert 6-bit input to a 4-bit output
     - There is a lookup table to store the mapping from 6-bit input to 4-bit output
     - E.g. **1**0110**0**. The bits in bold is the row name and the bits in between is the column. The cells in the lookup table specify the final substitution value that becomes the output. Refer to the table below.
4. **Permutation**
   - The result of that is passed through a permutation function P (diffusion)

In each row, the lookup table cell values will are unique – meaning row-wise the values are from 0-16 (because 2<sup>4</sup> bits) but is not in order. 

|        | -0000- | …    | -1111- |
| ------ | ------ | ---- | ------ |
| 0xxxx0 | 14     | …    | 7      |
| 0xxxx1 | 0      | …    | 8      |
| 1xxxx0 | 4      | …    | 0      |
| 1xxxx1 | 15     | …    | 13     |

### Subkey Generation (Key Schedule)

We said that the DES takes 1 64-bit key, but from the [Feistal Diagram](#fiestal-approach-overview) above we see that each round function takes a different key – this is because subkeys are generated with permutation functions.

<figure align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/DES-key-schedule.png" class="center">
        <figcaption style="text-align:center;">DES key schedule, <a href="https://commons.wikimedia.org/wiki/File:DES-key-schedule.png">Wikimedia Commons</a></figcaption>
</figure>

#### Permuted Choice 1

This function has 2 purposes:

1. To drop the 8th bit of each of the eight 8-bit blocks, as they are the parity bits
2. Permute the remaining bits (56)

After PC1 is done, the generation of the DES round keys (keys for each round function): In each round

1. The key is split into two 28-bit halves.
2. Each half is shifted left by a set amount that may vary per round but will always be the same for encryption or decryption.
3. The shifted halves are permuted with PC2 – shuffle and select 48-bits from 56-bits (28 &times; 2)
4. The shifted halves are also transferred to the next round where they are shifted again (the shifts are cumulative).

#### Permuted Choice 2

As mentioned above, the algorithm takes a 56-bit subkey as input and produces a 48-bit round key for each round function. 

<blockquote class="extra">
    <b>FYI.</b> Each bit of the initial 56-bit key is used in an average of 14 of 16 round keys.
</blockquote>

## Advanced Encryption Standard (AES)

The DES is now considered to be insecure due to the short key – it has been broken by brute-force methods.

The **AES** is chosen as the new standard. Compared to DES it has a longer block size (128-bits), longer key (variable: 128, 192, or 256 bits) and faster implementation (only uses 1 S-box, while DES uses 8 distinct ones)

Similar block cipher features but uses a substitution-permutation network (SPN) – **mainly operations over matrices** which is designed for more **inherent parallelism** and hence **faster**.

### Sub-Operations

Encryption in AES uses 4 main operations. In the main rounds (not every round but most rounds) of encryption they are applied in the following order:

```
input -> SubBytes -> ShiftRows -> MixColumns -> AddRoundKey -> ouput
```

There are additional details, like the key scheduler for AES, which are not covered in the lectures and further reading can be done [here](https://www.commonlounge.com/discussion/e32fdd267aaa4240a4464723bc74d0a5). [Wikipedia](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard#The_SubBytes_step) is a good resource too.

#### SubBytes

This involved splitting the input into bytes and passing each through a Substitution Box (S-box). Unlike the DES, the AES uses the same S-box for all bytes. 

Each byte from the input is replaced by a SubByte using an 8-bit substitution box (essentially a lookup table). Because we are dealing with a 128-bit block size, so each cell in the table is a byte (128/16 = 8).

<figure align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/AES-SubBytes.svg" class="center">
        <figcaption style="text-align:center;">AES sub bytes, <a href="https://commons.wikimedia.org/wiki/File:AES-SubBytes.svg">Wikimedia Commons</a></figcaption>
</figure>

#### ShiftRows

Here, each row of the 128-bit internal state (input of `ShiftRows` which is output of `SubBytes`) of the cipher is shifted by a certain offset. In AES the top row is not shifted at all, the next row is shifted by 1 and 2 then 3 for the next two rows. This results in each column of the output state composed of bytes from each column of the input state. 

> This is important to avoid the columns being encrypted independently, because that would make AES into 4 independent block ciphers.

<figure align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/AES-ShiftRows.svg" class="center">
        <figcaption style="text-align:center;">AES shift rows, <a href="https://commons.wikimedia.org/wiki/File:AES-ShiftRows.svg">Wikimedia Commons</a></figcaption>
</figure>

#### MixColumns

Here the output matrix of the `ShiftRows` step is pre-multiplied with a fixed matrix – this helps with diffusion because if you change a<sub>0,1</sub> (even by 1-bit) the entire output column will change (as you know from matrix multiplication).

<figure align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/AES-MixColumns.svg" class="center">
        <figcaption style="text-align:center;">AES mix columns, <a href="https://commons.wikimedia.org/wiki/File:AES-MixColumns.svg">Wikimedia Commons</a></figcaption>
</figure>

#### AddRoundKey

The only operation in AES that directly operates on the AES round key. In this operation, the input to the round is **XORed** with the round key.

<figure align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/AES-AddRoundKey.svg" class="center">
        <figcaption style="text-align:center;">AES add round key, <a href="https://commons.wikimedia.org/wiki/File:AES-AddRoundKey.svg">Wikimedia Commons</a></figcaption>
</figure>

### Is AES secure?

A computer that can break DES in 8 seconds will take 1.3 &times; 10<sup>15</sup> years to break AES-128. 

AES-256 can also provides post-quantum computing assurance.

