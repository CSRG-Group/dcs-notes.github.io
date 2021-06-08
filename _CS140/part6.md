---
layout: CS140
title: Digital Signature & Certificates
part: true
---

## Integrity, Authentication & Non-repudiation

> **Symmetry of Public Key Encryption.** We can encrypt and decrypt starting with the public key then the private key, or the other way around! This works according to the property 6 of modular arithmetic stated above.

We encrypt with private keys for anyone and everyone to be able to decrypt because it provides

- **Integrity.** We don’t care about the privacy of the message, but we want to be sure that no one tampers with it
- **Authentication.** I want my receiver to know that the message definitely came from me.
- **Non-repudiation.** If someone sends a malicious message, the system will be able to identify who the owner of the public key is.

To provide **integrity**, we send an encrypted message along with a plaintext message (remember we don’t care if people see the message, we just don’t want them to tamper with it.)

> When our receiver decrypts the message, and **compares the 2 messages** (plaintext, and decrypted), if they are the same – **integrity is guaranteed**. 
>
> - This is because if someone tampers with our message, they **don’t have the private key** to encrypt the message they changed, so we will know if someone has tampered with the message. 
> - They also have a **low probability** of being able to **reverse the one-way function** to re-encrypt the tampered message such that the tampered plaintext and tampered ciphertext is the same.

As a result if a ciphertext can be decrypted by my public key, it must mean that the message was encrypted by my private key and hence came from me. This ensures **integrity** and **non-repudiation**. This does not necessarily grant authentication and we will see why in the authentication protocols chapter.

## Digital Signatures (DS)

**One problem however,** encrypting an entire message may be **costly** (time-wise), for the purpose of integrity **we don’t actually need to encrypt the entire message**.

> What we do is
>
> 1. Calculate the hash of the message (also called digest)
> 2. Encrypt the hash using the private key. This will be our **digital signature**.
>
> Digital signatures are **attached to plain text message**, and are used to **verify integrity**. 
>
> The final message is: **e + [hash(e)]<sub>ku</sub>**

On the receiver’s end, to **verify integrity**..

- Use the sender’s public key to decrypt the digital signature to recover the hash.
- Generate a hash of the received plaintext using the same hash algorithm used by the sender.
- Compare the two hashes.

<blockquote class='extra'>We often denote with square brackets, <b>[hash(e)]<sub>ku</sub></b>, that something is encrypted and the subscript states whether it is a private (u) or public (p) key.</blockquote>

### Differences between Encryption and DS

| Encryption Scheme         | Digital Signature                                            |
| ------------------------- | ------------------------------------------------------------ |
| Maintains confidentiality | Provide integrity check, authentication, and non-repudiation |
| Can recover plaintext     | Cannot recover plaintext                                     |

## Message Authentication Code (MAC)

Another way of providing integrity 

> The hash of an input file is computed and encrypted using a shared secret key. 

This can **guarantee integrity** but **cannot provide non-repudiation**

- because MAC is created with the secret key
- Secret key is **shared** by more than one party

### Why MAC?

MAC is used because it is much faster than DS as it uses secret key encryption instead of public.

- **Recall** secret key uses XOR, shift etc.
- Public key encryption uses modular exponentiation which takes more time to compute.

## Digital Certificates (CA)

Digital certificates are provided by a trusted 3rd party called the **Certificate Authority**. These certify that a public key indeed belongs to somebody.

> X.509 cert format is used to compose certificates which includes 
>
> - Subject: **distinguished name** of the user
> - Subject’s public key
> - Certificate Authority’s subject
> - Digital signature of CA

The format of the distinguished name is 

```
O=University of Warwick, 
OU=Department of Computer Science, 
CN=Ligang He 
```

(O: organisation, OU: Organisation Unit, CN: Common Name)

### Authentication through certificates

1. A asks for B’s certificate, and B sends it over.
2. A uses the CA’s public key to verify B’s certificate.
3. If B’s certificate is genuine, B’s public key contained in B’s certificate is genuine. 

This is one way authentication, where A **can authenticate** B’s identity.

![authenticationWithCertificates](.\part6.assets\authenticationWithCertificates.png)

### Strong Authentication with Certificate

1. A’s cert proves that public key belongs to A
2. Use A’s public key to verify the message is really signed by A’s private key
3. If so, the message must come from A

![strongAuthenticationWithCertificates](.\part6.assets\strongAuthenticationWithCertificates.png)

### Authentication Chain

> In addition to issuing certs to users, CA can also set up a sub-CA e.g. CA sets up CA1
>
> - CA1 can also issue certs to users
> - The certs issued by CA1 are signed by CA1
> - CA1 also issues a root cert to itself

![authenticationChains](.\part6.assets\authenticationChains.png)

**Using the authentication chain**

1. A sends A’s DC and CA1’s DC to B
2. B uses CA’s public key to verify CA1’s DC
3. B uses CA1’s public key to verify A’s DC
4. B uses A’s public key to verify the integrity of the signed message

## Web of Trust

There is **no centralised certificate authority** (CA). Each user establishes their personal web of trust

- Each user **creates a cert** and **can sign** other users’ cert

There are 2 attributes about a user. **Validity** and **Trust.**

> **Validity** indicates the **confidence** others have that a certain user’s public key **actually** belongs to them.
>
> **Trust** indicates the **confidence** others have that a certain user is **careful** when signing other users’ certificates.

Users can rate validity and trust of another user as **unknown**, **marginal**, **full**, or **ultimate**.

### How is validity determined?

Validity between a user A and C is determined by 4 main factors

- Threshold distance
- Validity and Trust score
- Number of users trusted
- Number of valid users

**Example**

```haskell
A -> B(V: full, T: full) -> C(V: full, T: full) = 
A -> C(V: full, T: full) ✅
-- VS --
A -> B(V: full, T: marginal) -> C(V: full, T: full) = 
A -> C(V: marginal, T: marginal) ❌
-- VS --                 
A -> B1(V: full, T: marginal) -
  -> B2(V: full, T: marginal) --> C(V: full, T: full) ✅
  -> B3(V: full, T: marginal) -
--                            ^ This indicates that all B1, B2, B3 point to C
```

User C’s key is considered valid by user A if the key has been signed

- by at least one user with “full” trust set by A
- by at least ***n*** users with “marginal” trust set by A, where ***n*** is predefined in the web of trust scheme.

**Further example**

```haskell
A -> B1(V: full, T: full) -> B2(V: full, T: full) -> B3(V: full, T: full) 
-> C(V: full, T: full) =
A -> C(V: marginal, T: full) ❌
-- VS --
A -> B1(V: full, T: ultimate) -> B2(V: full, T: ultimate) 
-> B3(V: full, T: ultimate) -> C(V: full, T: ultimate) =
A -> C(V: full, T: ultimate) ✅
```

In the first example even if all users are of full trust on the chain from A to C, C’s key is not considered valid by A if the distance (number of arrows/links) between the 2 users is bigger than a pre-set threshold (i.e 4).

> **However**, if the trust level is ultimate throughout, it breaks the restriction of threshold distance.

![webOfTrust](.\part6.assets\webOfTrust.png)

## Summary – CA vs WoT

*Certificate Authority vs Web of Trust*

CA is a centralised third party that issues **digital certificates** to users or other CAs. These CAs are assumed to be reputable and trustworthy. If an authentication chain can be established from a CA to a particular certificate, then the trustworthiness of the certificate is assumed.

Contrastingly, the Web of Trust requires a chain of signatures to be established from each user to the certificate in question, each user acting his own Authority. Users can rate the **validity** and **trustworthiness** of other users, and this along with other parameters like the authentication chain length, number of separate chains affect the final score of a particular certificate. This final score determines if it should be trusted or not. This usually relies on personal knowledge of other users, and it should be people they know personally or otherwise have verified the identity of offline.

> **Disclaimer.** Some information here were not directly sourced from the notes and if anything seems “wrong” then please submit a pull request to fix it! [Main source](https://andrewgdotcom.wordpress.com/2014/11/13/wot-ca/#:~:text=An%20Authority%20is%20a%20person,both%20well%2Dknown%20and%20trustworthy.&text=By%20contrast%2C%20a%20Web%20of,acting%20as%20his%20own%20Authority.) I referred to. (yes it’s a wordpress blog, idk how reliable it is but seems to match whatever is covered in the lectures.)

|                             CAs                              |                             WoT                              |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| More convenient for the end user because CA are assumed to be trustworthy. | Less convenient for end users as they have to continually assess the reliability of certificates. |
| If one CA certificate is compromised, the attacker can impersonate any site on the internet as all CAs have the authority to sign any certificate. | Integrity of the WoT depends on how well-maintained it is by its users. |
| Usually one authentication chain for any certificate, so every chain has a single point of failure. | Usually has multiple signature chains for one certificate. With more chains, a particular certificate is more trustworthy. |

