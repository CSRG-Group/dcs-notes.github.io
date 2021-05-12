---
layout: CS139
title: Security
math: true
part: true
pre: Theory5
---
# Hashing algorithms

* md5 - easily calculated but clashes have been found
* sha1 - (160 bits) easily calculated
* Bcrypt - current best recommendation

Passwords are still susceptible to dictionary attacks

Passwords should be unique when stored

## Salt
a salt is a random value for each user and is included when checking the password. Can be stored alongside the password in the database.

* 11:11:23 + "Password" => asdfkjh67fasf69d8f6aadf4w8.....
* 22:21:23 + "Password" => flkafj948rj9fjsd9cnyrur94jrf....

harder to crack many passwords
only needed for SHA1 php `password_hash` adds salt automatically

# Redirect
When submitting a from the page should redirect to a confirmation page to prevent re entry , and prevent re-submit through refreshing the page. causing a double submit.

# Query Stings
Query stings can be modified by the user
query strings should be checked for validity nothing should be assumed 

known as sanitizing / validating input

# HTTPS

Https is a protocol for secure communication over a network, built on the SSL/TLS protocol.

the HTTP is encrypted but is not changed.

HTTPS should be used for all sensitive data.

Now all services opt for HTTPS and HTTP is rarely used.

## Operation

1. The client sends a list specifications to the server
    * what SSL/TLS version it is running
    * What ciphersuits it wants to use
    * What compression methods it wants to use
2. The server selects the highest SSL/TLS version and agrees on ciphersuits and compression
3. The server sends a certificate to the client which must
    * be trusted by the client explicitly
    * be signed by a party the client trusts
4. The server has also sends an asymmetric key continued with the certificate
5. The client and server setup symmetric key encryption
6. All communication is then encrypted
7. The server then verifies the MAC
### Public Key 
These are the keys that are used to encrypt data asymmetrically.
They are distributed with a certificate signed by a certificate authority.
### Certificate authority
These are 3rd parties and the public keys are installed with OS/ browser establishing trust and sign certificates to verify identity.

Signatures can be compared with the public key to ensure identity.

Issuing a certificate is done when a domain registrant can prove they own the domain

## drawbacks
Encryption algorithms can be computationally intensive

Dedicated and faster hardware generally now makes this negligible

## Man in the middle
a machine sits in the middle and read the messages

even if keys are transmitted fake keys can be made can can be decrypted in the middle

By signing certificated fake keys cannot be made

# SQL injection
Transmitting SQL strings to modify the database request

consider the defaut request
`"SELECT * FROM users WHERE name ='"+UserName+"';"`

by adding ``or '1'=1` to a username entry box
the query becomes 

`"SELECT * FROM users WHERE name = '' or '1'=1;"`

this would return all users from the database

Other issues could be destroying databases or modifying entries.

## Prevention
The use of parameterized statements that has placeholder values where the data can be added later 

``` php
$stmt= $db->prepare("Select bar FORM foo WHERE id=;id");
$stmt->bindValue(";id",1,SQLITE3_INTEGER);
$result = $stmt-> execute();
```
this treats all data as data and never as instructions.

alternatively `addslashes()` can be used to escape any characters but is not a preferred method

Other additional ensures can be database access management such as limits on deletion

# Session Sniffing
An attacker observers communication between a server and a victim , Cookies and session data could be reconstructed which could then be used to impersonate the victim.

# Session Fixation 
An attacker obtains a session ID form the server
The attacker then forces the session id of the victim to be identical to theirs
The victim logs on, the attacker can then use their session id

# XSS
Cross Site scripting, Injects client script into webpages

Accounts for 84% of all security Vulnerabilities documents by Symantec in 2007

Non-Persistent data is provided by a client and is used by a server without proper sanitization. The content is uploaded back to the page could be provided by clicking in a link like a GET request

consider 
```php
$name =$_GET['name'];
echo "Hi $name!";
```
the user gould be given a link with HTTP / javascript as name the javascript would then be run by the browser.

this should be avoided by filtering

`$name= filter_input(INPUT_GET,'name',FILTER_SANITIZE_STRING);`

and output should be escaped

```PHP
$name= filter_input(INPUT_GET,'name',FILTER_SANITIZE_STRING);
echo 'Hi '.htmlspecialchars($name,ENT_COMPAT,'UTF-8')
```

recommendation is to store the data in as raw form as possible and only convert when it is time to output it.

## Persistent-XSS
When data is stored to a database then redisplayed later for a user, e.g a comment.

All data should be escaped.

# Directory traversal

A user many insert a path outside the web

Restrict access to only some directories (whitelisting)

Convert paths to absolute and ensure they are in the correct directory

# PHP-CGI vulnerabilites

PHP-CGI  had the option to server the php source 

another option allows the setting of variables this could allow variable and variable manipulation this should be disable d in sever settings

## other configuration advice
`allow_url_fopen` - indicates wether remote files can be downloaded
                    should be off
`allow_url_include` - indicated wether scripts can include/ require remote files
turn off if not needed