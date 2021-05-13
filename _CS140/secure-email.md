---
layout: CS140
title: Secure Email
part: true
---

## How email is delivered

**Email domain:** Warwick domain, cambridge domain, google domain. e.g. “@warwick.ac.uk”

**Email client**: Thunderbird, Outlook etc.

**Email Servers:** 

- SMTP – responsible for sending email to their destinations
- IMAP or PoP3 servers – responsible for retrieving emails sent by the sender.

## General Security Issues in Emails

1. Email is free (encourages spam, DoS attacks)
2. Email can carry payloads (viruses)
3. Email is easy to spoof (if there is no authentication)

## Email servers

Email servers contain email information of all email accounts – these will be known to the attacker if the server is compromised.

Additionally, there is no **guarantee for delivery** if SMTP cannot connect to SMTP at receivers domain, the message will be placed in a queue.

- If it still fails after several tries, the email will be returned to the sender.

People have **poor passwords**. 

Emails can also be **intercepted** on insecure networks (packet sniffers)

- Poor key-generation (if email is not correctly encrypted) – this compromises email confidentiality.

## Solutions to problems

### Spam

Spams can be handled with a spam filter (SpamAssassin). Spam filters can define a large set of rules

- The format of sender’s email account
- Whether the body of the email contains a certain pattern of words. 

These rules are matched against the email and the email is tested for each rule – giving a score. If this score **exceeds a threshold**, the email will be classified as a spam.

### Payloads

Can be tackled with anti-virus software.

Spam filters can also help with this, e.g. if the email has suspicious attachments it can be classified as spam. 

Be careful when opening emails is the best way to prevent this.

### Spoofing

Originator and apparent originators of an email are different.

- An originator, e.g. some student can pose as a module organiser (apparent originator).

Spam filters may help with spoofing , as this will examine the header of mails to check if the originator and apparent originator matches.

Otherwise, we mainly use Digital Signatures to tackle spoofing.

### Interception

A straightforward solution

- To send email, encrypt with the recipient’s public key
- Recipient can then decrypt using their private key. 

However we do not use this method because it is slow to encrypt the whole email using public key encryption.

> A **faster solution** is to use a shared secret key to encrypt the message. This is done with a server that issues a session key.
>
> - Session key is used to encrypt the email message.
> - Public key is used to encrypt only the session key – hence faster.

