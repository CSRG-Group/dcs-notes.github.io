---
layout: notes
title: Font Matter
---

The font matter is the contents at the top of each page and describe the layout

layouts

# default

| name | Type | optional | Description |
|--|--|--|--|
| title | String | No | title of the page |
| description | String | No | description for the page |
| math | Bool | Yes | if to include the MathJax javascript|
| jquery | Bool | Yes | if to include the JQuery javascript|
| script | String | Yes | Link to any other javascript |

# modhome

Inherits from default

| name | Type | optional | Description |
|--|--|--|--|
| module | String | No | module code uppercase |

# noteshome

Inherits from default

# onePage 

Inherits from default

# QUIZ

Inherits from default

# notes 

| name | Type | optional | Description |
|--|--|--|--|
| title | String | No | title of the page |
| description | String | No | description for the page |
| math | Bool | Yes | if to include the MathJax javascript|
| jquery | Bool | Yes | if to include the JQuery javascript|
| script | String | Yes | Link to any other javascript |
| part | Bool | Yes | if tue is part of a structured order of notes defined in `_data` |
| mod | String | Yes | the module for the page |
| authors | Array of Strings | Yes | the author/s for the page|
| contributors | String | Yes | Contributors other than the authors |