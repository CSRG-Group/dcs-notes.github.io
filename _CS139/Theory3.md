---
layout: CS139
title: GET and POST
math: true
part: true
pre: Theory2
nex: Theory4
---
# GET
A get request is a more simple request with a combination of variables and values

`GET /process.php?title=Central+Park&where=United+States http/1.1`

this has the values in the query string of 
* `title=Central Park`
* `where=United States`

is from 
`<form action="get" action = "process.php">`

This is also found in the url box in browsers
`https://www.bbc.co.uk/search?q=cs139&page=1`

this has the values in the query string of 
* `q=cs1391`
* `page=1`

The query sting is limited to 2048 characters

Typically used to request specific data from the server
## Response
Responds with 3 sections
* Header - status fo the request
* Body - (optional) response to the request

Response codes

* 2## codes for successful response
* 3## redirection response
* 4## codes for client errors e.g bad request
* 5## codes for server errors

Common codes

* 200 Ok
* 301 Moved Permanently
* 304 Not Modified
* 307 Temporary redirect
* 400 Bad request
* 401 Unauthorized
* 404 Not5 found
* 414 Request URI too long
* 500 InternalServer Error

# POST
This request is encoded within the header for the request the query string can can't be seen within the URL browser

Has a longer Data alowance

Typically used to send data to the server forms etc.