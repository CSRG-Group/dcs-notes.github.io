---
layout: CS140
title: "CS140 Revision Lecture: Summary Notes"
--- 

## Format of examinations this year
The rubric will be similar to previous years but it will contain online AEP information. It is confirmed that the exam will have more application types of questions compared to simple bookwork. Do not use bullet points for answers- Ligang is expecting prose answers to confirm that we actually understand the content.

## Important knowledge points
- Revision slides contain the main points- use this to revise
- Biometric authentication is key content
- You don't need to memorise the technique for DES or AES. Just understand the basic operations performed by both. (DES E.G. XOR or shift in the key, and then the shuffle. These are bitwise and very fast. AES is very similar).
- There is no need to remember proofs for the modular arithmetic, but it is important to be able to solve questions regarding this.
- Remember the modular exponent function (?) which is the one way function.
- Remember to give **full detail** when comparing secret key to public key (mention both substitution etc. as well as key length being shorter for secret key encryption).
- There is no need to understand the Needham-Schroeder process.
My main question:
- Do we need to know the email server part in detail? Or just the main features?

## Notes on the lecture slides themselves:
- There is no Web Server content required for the exam (as it is not in the revision slides).
Public key encryption- RSA encryption- these slides are missing from the combined slides.

## Going through the 2019 paper

(I zoned out at first by mistake, I'll write the answers to 1-6 when the recording goes up)

7. A one-way function is a function that is easy to get an output from the input, but very computationally difficult to get an input from an output. Prime factorisation is a one-way function and so is modular exponentiation, but a hash function is not a valid answer. This is because we use a one way function as a hash function.
8. You need to go through the four steps and work out what the secret key becomes.
9. Give examples of the operations that takes place in secret key algorithms whilst discussing the difference in length of the key.
10. You need to define digital signatures, and explain how they are created. (Creating a hash, then using a key to sign a hash etc.) Explain how a digital signature is used when decrypting a message- if you refer to a hypothetical message this will explain how integrity is ensured.
11. 
  - Part (a) is mainly recalling the differences between all the methods- you can build up your answer by describing how each method leads to the next. 
  - Part (b) The problem is chain collision; the consequence of this is that different entries in the table contain the same part of the hash chain which wastes storage space. A collision is casued when different inputs of the reduction function leads to the same input. A rainbow table uses different reduction functions in the hash chain which leads to less collisions. 
  - Part (c) requires you to give very specific answers. Define a salt and explained when they are used, and explain how they improve defence from a lookup table (each entry for the same password requires another entry for every possible salt value). You can explain that if the salt is very big then there are 2^k possible entries for a single password, where k is the length in bits of the salt. The table will become too big for a LUT table attack to be worthwhile. A reverse LUT is also not very feasible as the attacker will need to create many different hash chains for the same password. 
12. 
  - Part (a) was not covered this year. One alternate strategy is to simply accept that there is a risk- no system is 100% safe. We can also disallow any activity that will lead to a risk (risk avoidance). E.g. if there is a risk that visitors from one country will attack the website, we can block all requests from that country. However, this is a VERY heavy handed approach as not all visitors will be malicious. Risk transferrance is insurance for our system- we get an insurance company to pay for damages. 
  - Part (b) Describe the CA approach as well as the Web of Trust approaches. This is in the lecture content. 
  - Part (c) This is also in the revision slides.
13. Similar to the previous question with Bob and Alice, follow the steps in the lecture notes for RSA. You need to make use of the properties in the modular arithmetic sections to handle numbers of any size.
14. 
  - Part (a) requires one to explain the features of a virtual machine (incl. easy creation, restoring state) and explain why each of them has a negative security impact. Compare this to the capabilities of a physical machine.
  - Part (b) was not on the content for 2020-2021 so do not worry about it.
