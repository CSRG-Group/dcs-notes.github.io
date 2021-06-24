---
layout: CS139
title: GET and POST
math: true
part: true
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
* __Header__ - status fo the request
* __Body__ - (optional) response to the request

Response codes

* __2##__ codes for successful response
* __3##__ redirection response
* __4##__ codes for client errors e.g bad request
* __5##__ codes for server errors

Common codes

* __200__ Ok
* __301__ Moved Permanently
* __304__ Not Modified
* __307__ Temporary redirect
* __400__ Bad request
* __401__ Unauthorized
* __404__ Not found
* __414__ Request URI too long
* __500__ InternalServer Error

# POST
This request is encoded within the header for the request the query string can can't be seen within the URL browser

Has a longer Data allowance

Typically used to send data to the server forms etc.