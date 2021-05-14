---
layout: CS139
title: Web Protocols
math: true
part: true
---

# Protocols
A communication Standard so that computers can transfer data and instructions accurately.


# Network Layers
There are 4 (in this course) Network layers each have different protocols and are responsible for parts of data transmission.
## Application Layer

Many protocols
* __HTTP__ Hypertext Transfer Protocol used for web communication
* __FTP__  File Transfer Protocol used for transferring files
* __POP/IMAP/SMTP__ Email protocols for transferring and storing email
* __DNS__ Domain name service for resolving domain names to IP addresses

### HTTP
An Application Protocol for hypermedia information

standard response request

Development by Internet Engineering Task Force (IETF) and World Wide Web Consortium (W3C)

## Transport Layer
Ensures Transmissions arrive in order an without error
* TCP
* UDP


## Internet Layer
Establishes connection, routing and addressing
* IPV4
* IPV6
An IP address is needed by every computer on the internet

### IPV4

uses 4x8-bit numbers so 4,294,967,296 addresses
they are now gone.

> Reserved Addresses
> * 127.0.0.1 - LocalHost (the computer itself)
> * 192.168.\*.\* - Private Networks
> * 10.0.\*.\* - Private Networks
>
> There are other reserved addresses

#### NAT Network address Translation
Used in part to overcome the shortage of IPV4 addresses

* A device connects to a router
* The router opens a port and 
* The router connects to the external resource
* Data is passed through the router to the device

The port number is added to the end of an Ip address
e.g `213.31.218.101:5001` is port `5001` at address `213.31.218.101`

A single IP address is need for the router all of the internal computers use 
one of the reserved addresses for private networks

### IPV6

Uses 8x16-bit numbers 340 undecillion numbers (a lot)
## Link Layer
Responsible for transmission of raw bits
*MAC


# Domain Name 
DNS Domain Name system acts an a contact list for servers

Translates Human readable Name to IP addresses

Hierarchical distributed naming system

The Domain Name is Linked to an IP address, e.g `www.google.com` would be given an ip address that can be used to communicate with the servers

can be broken down 

* Server1.  Fourth level
* www.      Third-Level
* FunCode.  Second Level
* com       Top-Level Domain (TLD)

`Server1.www.FunCode.com`

A tree of domain Names are created.

Root Zone (TLD) is controlled by the Internet Assigned Numbers Authority (IANA)

Different registrars assign domain names beneath this

Registrars check with interNIC for the names

domain names are case insensitive

## Resolving A Domain Name
Default Base

When connecting to a network the computer is given a DNS server (root)

When Resolving a domain name
* The computer asks the root server
* The root server provides the top level domain
* The top level domain which provides a sub domain server
* repeat until the address is found

### Caching
The previous steps are extensive so DNS caching is used.
* The computer points to a caching server
* The caching server checks if it has the address in memory
    * if it does return the memory
    * if not perform the other steps
* any requests are saved to memory for next time.

DNS records have a TTL (time to live) which dictates how ling they are valid for

# URL

Made form several steps
Name | Example
--|--
Protocol| http
Domain| www.FunCode.com
Path | index.php
Query String | page=17
Fragment | article

`http://www.FunCode.com/index.php?page=17#article`


`ftp://example.com/abc.txt` -> sends an FTP request on port 21
`http://example.com/abc.txt` -> sends an HTTP request on port 80

No guarantee of a response 

## Path 
    A request requests a file the path specifies the file

    / is the root folder for the webserver

    if a file is not specified one is usually selected usually index.html

    path is case sensitive

## query string : 
[SEE GET](Theory3.html)

## Fragment

Requests a portion of a page.

Browser will usually jump to the location in the page


