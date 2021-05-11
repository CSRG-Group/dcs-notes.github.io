---
layout: CS139
title: Web Browsers, servers and state
math: true
part: true
pre: Theory4
nex: Theory6
---

# Web browsers
Web browsers interprets data into one in a recognized form

converting HTML page and rendering as a readable web page

Each browser behaved differently and __loosely__ conform to standards

Each page makes multiple requests

Local caching can reduce load times

Most offer additional features, Search engine auto complete etc...

# Web servers

Typically powerful computer to respond to HTTP requests.

Often running NGINX or Apache

Also contains
* Operating System (Linux, Windows....)
* Database Software (MySQL , MongoDB)
* Scripting Language (PHP, python..)

# State
HTTP is a state-less protocol , in a local process the computer only knowns about current memory and instructions

The Server treats every request as a completely new request

Many servers can be responding to many users making it hard to store data.

Rest is used to transfer the current state of the communication between the client and the server. Most common operations are GET and POST

## Solutions
there are 3 solutions to store state across requests

### Query Strings
limited to 2048 on a get Request
A simple store of variables and names

Typically used for requesting Data from a server

Can alow for more dynamic URLS by having a more unique query string that can 
be more easily interpreted

### Cookies

Data unique to the client is created by the server

The cookie is sent to the client when the first request is made

The client includes the cookie in subsequent requests

Cookies can expire - Server sets this

### Sessions

Store state like cookies but just for the time the user is active with the site





