---
layout: notes
title: "Style guide"
--- 
We will appreciate if contributors abide by these formatting guidelines, as it ensures that the layout of the website is perfect. That said, nothing will break if you don't do so, just certain things (table of contents) won't be as user friendly as it should be.


## Structure
Modules are split into separate topics, and we have also included a one page (ctrl-f) version for modules that are arranged this way. To ensure that the table of contents in the one page versions are displayed correctly there are a few things we would like contributors to note:


## Folder naming
Folders should be descriptive of the content they contain and words should be separated by underscores e.g `2021_Full_Notes`

## File naming
Files should be descriptive of the content they contain or match the page title. Words should be separated by underscores e.g `Data_Representation.md`

Every none asset Folder should contain an `index.html` or `index.md` file
## Headlines

There should be no document title headline this is added automatically by the site

Do not use a `h1` or `#`. Start a page on `h2` or `##` 

```markdown
Firstly don't skip heading levels - Don't do this
## Heading 1
#### Heading 2

Make sure sections follow an appropriate hierarchy - skipping from h4 to h2 is alright, h1 to h3 is not.
## Heading 1
### Heading 1.1
#### Heading 1.1.1
## Heading 2
```
---

## Images
images and other assets should be contained within an `Assets` folder 

## Internal Links
Internal site links should be relative links rather than absolute links if a absoule link must be used it should be defined as so:
`{{ "{{ site.baseurl " }}}}/path/to/file`  
e.g. `{{ "{{ site.baseurl " }}}}/CSRGContributing/styleguide.md` 



