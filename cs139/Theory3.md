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

This is also found in the url boz in browsers
`https://www.bbc.co.uk/search?q=cs139&page=1`

this has the values in the query string of 
* `q=cs1391`
* `page=1`

# POST
This requests is typically longer and is encoded within the header for the request the query string can can't be seen within the URL browser