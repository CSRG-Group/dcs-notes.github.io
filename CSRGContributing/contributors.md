---
layout: default
title: Contributing
description: A Tutorial on modifying and adding contributors to the site
---
# Introduction

Contributing is a key part of the function of warwick.guide credit so a systems to credit contributes has been created not just on the front page but for individual pages and question submissions.

Contributors can now add contact details so other students who are having difficulty or have found an error can contact those who have a good knowledge of the content. Declaring yourself as a contributor and adding contact details is optional however teaching others is good revision and it is useful to be able to contact someone with a good understanding of the module information.

# New Contributors
Contributors now have a page with the name and contact information and example can be seen [here]( {{ site.baseurl }}/contributors/index.html?name=LoudShadow)

To add a contributor a new contributor needs to be addded to the `_contributors/contributors.json` file an example is shown below
``` json
{
    "github":"LoudShadow",
    "nick":"Joseph",
    *"image":"https://avatars.githubusercontent.com/u/72259471?v=4",
    *"discord":"sharpshot2566#2529"
}
```
items shown with a * are optional

## additional info
More details can be added by adding a new key and value to the json object they will be displayed in plain text in the table

## special keys
Some of the keys have additional formatting to improve usability and their use may differ from standard

### github 
this must be your github username this is used as an identifier throughout the site to indicate all contributions you have made

This will add a link you your github profile

### image 
This should be a url that points to your profile image az url can be obtained from your github profile by right clicking on your picture and selecting `open image in new tab`

### discord
this must be your full discord username and will create a link to your profile

# Using contributors
## note Pages
contributors can be credited in hte notes by using the contributors value in the YAML font matter at the top of the page. THis name should be the same as your github username

credit will then be added to the page footer

```
contributors:
  - Person1
  - Person2
```

## Quiz questions
The use of contributors in the question see the Quiz tutorial will add a small link under the question linking to the page, Your github username should be used for this

## Direct link
A direct link to your page is found at `https://warwick.guide/contributors/index.html?name=<GitGubUsername>`