---
layout: default
title: Contributing
description: A Tutorial on modifying and adding contributors to the site
---

# Introduction

Contributing is a key part of the function of warwick.guide credit so a systems to credit contributes has been created not just on the front page but for individual pages and question submissions.

Contributors can now add contact details so other students who are having difficulty or have found an error can contact those who have a good knowledge of the content. Declaring yourself as a contributor and adding contact details is optional however teaching others is good revision and it is useful to be able to contact the person who wrote the question.

# New Contributors
Contributors now have a page with the name and contact information and example can be seen [here]( {{ site.baseurl }}/contributors/index.html?name=Joseph%20Evans)

To add a contributor a new contributor needs to be addded to the `_contributors/contributors.json` file an example is shown below
``` json
  {
      "name":"Joseph Evans",
      "image":"https://avatars.githubusercontent.com/u/72259471?v=4",
      * "github":"LoudShadow",
      * "nick":"Joseph",
      * "discord":"sharpshot2566#2529",
      * "info" : "more info"
  }
```
items shown with a * are optional

## Additional info
More details can be added by adding a new key and value to the json object they will be displayed in plain text in the table

### Key link pairs
You may wish additional details to be added with a link for example to your website this can be done with a value link object in the vale 
```
"website":{"value": "my Site","link": "http://www.mysite.com/"}
```
## Special keys
Some of the keys have additional formatting to improve usability and their use may differ from standard

### name 
This will be displayed at the page header and is used to reference the page across the site

### nick
If this is set it will replace instances of the name on your page
### Image 
This should be a url that points to your profile image a url can be obtained from your github profile by right clicking on your picture and selecting `copy image address`

### Github 
This should be your github name and will add a link you your github profile
### Discord
this must be your full discord username and will create a link to your profile


# Using contributors

## Note Pages
contributors can be credited in the notes by using the contributors value in the YAML font matter at the top of the page. THis name should be the same as the supplied name

credit will then be added to the page footer

this should work with any page that has a layout deriving from `notes.html`
```
contributors:
  - Person1
  - Person2
```

## module index pages
Credit can be given to the notes pages on tht index page by adding your name to the authors or contributors on the module yml page in `_data`

## Quiz questions
The use of contributors in the question see the Quiz tutorial will add a small link under the question linking to your page.

## Direct link
A direct link to your page is found at `https://warwick.guide/contributors/index.html?name=<Your%20Name>`

