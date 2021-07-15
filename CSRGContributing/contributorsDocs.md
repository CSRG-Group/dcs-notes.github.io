---
layout: notes
title: Contributors Docs
authors :
    - Person1
    - Person2
contributors :
    - person3
    - person4
---

made from an array fo the following json object


| name | Type | optional | Description |
|--|--|--|--|
| name | String | No | Contributor name musty be unique |
| image| String | No | url to image resource |
| github | String | Yes | your github username |
| nick | String | Yes | replacement for name |
| discord | String | Yes | discord name + numbers |

additional key value pairs can be added ac will be displayed

additionally adding a link to the value can be done by adding
```
"website":{"value": "my Site","link": "http://www.mysite.com/"}
```