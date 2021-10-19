---
layout: notes
title: "Creating notes"
--- 

There are many supported formats for notes the common supported formats are:
* In depth typed
* External Site
* Single webpage
* Single document pdf
* Multi-document pdf 
the instructions for each of these are shown below. other formats can typically be derived form these for more information see the docs.



## In depth typed

these notes have many typed pages and the pages can be structured into a logical ordering. They have the following structure
```
Notes
┣ Assets
┃ ┣  image1.png
┃ ┣  image2.png
┃ ┋
┣ Index.md
┣ onePage.md
┣ page1.md
┣ page2.md
┋
```
To create this set of notes:
1. In `/modules/<code>/` create a folder with a descriptive name for your notes (use _ instead of spaces)
2. In the new folder create a new file called `index.md`
3. add this to the top:
```
---
layout: noteshome
title: <code>
description: <name>
---
```
4. Alter accordingly replacing `<code>` (all caps e.g. `CS133`) and `<name>`
5. In the folder create a new file called `onePage.html`
6. Add this to the top:
```
---
layout: onePage
title: <code> One Page Notes
--- 
```
7. replace `<code>` accordingly
8. Create an `assets` folder 
8. Add any number of markdown pages named after topic in the module
9. Add the following to the top of each of them
```
---
layout: notes
title: <section name>
---
```
10. fill in the pages see [here]() for a markdown tutorial and [here]() for our formatting guidelines
11. Add a contents section linking to each of the pages (`[page1](page1.html)`) to the `index.md` file and a link to the `onePage.html` page
> To ensure that the prev and next buttons and onePage is working correctly the order of the  pages needs defining this is done with YMAL a brief tutorial can be found [here](https://en.wikipedia.org/wiki/YAML#Basic_components)
12. Go to `_data/<code>.yml` add the text below to `Notes:` add a new `Notes:` array if it does not exist
```
        Notes:
          - name: <folder name>
            description <brief description>
            authors:
              - <your name>
            order:
              - <file1>.html
              - <file2>.html
              - <file3>.html
              ....
```
13. Replace the relevant details 
    * name should match your folder name exactly 
    * authors is optional you may remove the whole segment if you do not want credit
    * for information of setting up the authors page see [here](contributors.html)
14. The pages should now function correctly test on a local site and submit a pull request

## External Site
We would appreciate the hosting of content on warwick.guide for community error checking and correcting as-well as a redundant location for hosing however we appreciate not everyone can put in the time tor wants to re-host their content. If using the option of re-hosting the link to the external site should be placed on the index page

linking to an external site:
1. Go to `_data/<code>.yml` add the text below to `Notes:` add a new `Notes:` array if it does not exist
```
        Notes: 
          - name: <name>
            link: <Link to site>
            description: <Desc>
            authors:
              - <your name>
```
2. Replace the relevant details 
    * authors is optional you may remove the whole segment if you do not want credit
    * for information of setting up the authors page see [here](contributors.html)
3. The pages should now function correctly test on a local site and submit a pull request

## Single webpage
Occasionally a note may be placed on a single markdown file or html site.

1. In `/modules/<code>/` create a folder with a descriptive name for your notes (use _ instead of spaces)
2. In the new folder create a new file called `index.html` (for other options see below)
3. add this to the top:
```
---
layout: noteshome
title: <code>
description: <name>
---
```
4. Alter accordingly replacing `<code>` (all caps e.g. `CS133`) and `<name>`
5. Create an `assets` folder 
6. Fill in the page or copy your note over
7. Go to `_data/<code>.yml` add the text below to `Notes:` add a new `Notes:` array if it does not exist
```
        - name: <name>
          description: <Desc>
          authors:
            - <your name>
```
8. Replace the relevant details 
    * name should match your folder name exactly 
    * authors is optional you may remove the whole segment if you do not want credit
    * for information of setting up the authors page see [here](contributors.html)

### not using index
If you are not using a file name `index.html` or `index.md` then please follow the same instructions for single page pdf and replace the link accordingly.


## Single file pdf
> we are reviewing our stance on allowing pdf notes
> while they can be useful they are harder to index or search 
> and typed noted would be preferred.

1. In `/modules/<code>/` create a folder with a descriptive name for your notes (use _ instead of spaces)
2. Add your file to the folder
3. Go to `_data/<code>.yml` add the text below to `Notes:` add a new `Notes:` array if it does not exist
```
        - name: <name>
          link: <Link to content>
          description: <Desc>
          authors:
            - <your name>
```
4. Replace the relevant details
  * `<Link to content>` should be a relative link form the module page e.g `<Your foldername>/myNotes.pdf`
  * authors is optional you may remove the whole segment if you do not want credit
  * for information of setting up the authors page see [here](contributors.html)

## Multi-file pdf 
> we are reviewing our stance on allowing pdf notes
> while they can be useful they are harder to index or search 
> and typed noted would be preferred.

The strategy for multiple pdf files is to use a html or markdown index page that forms a contents page for the pdfs.

1. In `/modules/<code>/` create a folder with a descriptive name for your notes (use _ instead of spaces)
2. Add your files to the folder
3. In the new folder create a new file called `index.md`
4. add this to the top:
```
---
layout: noteshome
title: <code>
description: <name>
---
```
5. Alter accordingly replacing `<code>` (all caps e.g. `CS133`) and `<name>`
6. Add a contents section linking to each of the pages (`[page1](page1.pdf)`) to the `index.md`
7. Go to `_data/<code>.yml` add the text below to `Notes:` add a new `Notes:` array if it does not exist
``` YAML
        - name: <name>
          description: <Desc>
          authors:
            - <your name>
```
8. Replace the relevant details 
    * name should match your folder name exactly 
    * authors is optional you may remove the whole segment if you do not want credit
    * for information of setting up the authors page see [here](contributors.html)