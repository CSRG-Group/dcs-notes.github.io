---
layout: CS140
title: Secure Email
part: true
---

***Some terminology.***

- **Email domain:** Warwick domain, cambridge domain, google domain. e.g. “@warwick.ac.uk”
- **Email client**: Thunderbird, Outlook etc.
- **Email Servers:** 
  - SMTP – responsible for sending email to their 	destinations
  - IMAP or PoP3 servers – responsible for retrieving emails sent by the sender.

## How email is delivered

1. User begins by using the **email client**, which connects to the SMTP server and sends the server the email address of the recipient, the name of the sender, and the body of the message.
   - SMTP breaks down the recipient’s email into 2 parts: the name (before the @) and the domain (after the @)
2. If the domain of recipient and sender are **identical**, the SMTP server hands the message to the PoPe or IMAP server for that particular domain.
3. Otherwise, SMTP communicates with the Domain Name Server (DNS) for the IP address of the SMTP server in the other domain.
4. The SMTP server at the senders side sends the email message to the SMTP server at the recipient’s end, which then hands the message to the PoP3 server for the recipient’s domain.

> If SMTP server cannot connect to the other SMTP server, the message goes into a **sendmail queue**.
>
> - The server will periodically try to resend messages in the queue. 
> - After several failures, the server will give up and return the mail undelivered.

The PoP3 server for each domain maintains a list of email accounts and a text file for each account. 

- When the server receives an email addressed to someone, it formats the email and appends the formatted email to the account’s text file.
- When the recipient checks their email with the email client, the email client
  - queries the PoP3 server to send a copy of their text file and tells the server to erase and reset the text file.
  - This copy is saved on their local message and the text file is parsed into the separate messages.

## General Security Issues in Emails

1. Email is free (encourages spam, DoS attacks)
2. Email can carry payloads (viruses)
3. Email is easy to spoof (if there is no authentication)

### Email servers

Email servers contain email information of **all** email accounts – these will be known to the attacker if the server is compromised.

Additionally, there is no **guarantee for delivery** if SMTP cannot connect to SMTP at receiver’s end. (Access in CIA)

People have **poor passwords**. 

Emails can also be **intercepted** on insecure networks (packet sniffers)

- Poor key-generation (if email is not correctly encrypted) – this compromises email confidentiality.

<img src=".\secure-email.assets\emailServers.png" alt="emailServers" style="zoom:67%;" />

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

> A **faster solution** is to use a shared secret key to encrypt the message. This is done with a session key.
>
> - Session key is used to encrypt the email message.
> - Public key (RSA) is used to encrypt only the session key – hence faster.
> - The encrypted key and the email message is sent to the recipient as an encrypted message.
> - Recipient’s private key is used to decrypt the secret key which is then used to decrypt the message.

**Products that provide this solution.**

- PGP (Pretty Good Privacy) – paid
- GnuPG (Gnu Privacy Guard) – open source implementation of OpenPGP
- Windows version Gpg4Win

![pgpEncryption](.\secure-email.assets\pgpEncryption.png)
